# Uploads

## Overview

File upload without authentication headers

### Available Operations

* [CancelFileUploadByToken](#cancelfileuploadbytoken) - Cancel file upload
* [CompleteFileUploadByToken](#completefileuploadbytoken) - Complete file upload
* [UploadFileByTokenAsMultipart1](#uploadfilebytokenasmultipart1) - Upload file

## CancelFileUploadByToken

### Description:
Cancel file upload.

### Precondition:
Valid upload token.

### Postcondition:
Upload canceled, token invalidated and all already transfered chunks removed.

### Further Information:
It is recommended to notify the API about cancelled uploads if possible.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.Uploads.CancelFileUploadByToken(ctx, operations.CancelFileUploadByTokenRequest{
        Token: "earum",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## CompleteFileUploadByToken

### Description:
Finish uploading a file.

### Precondition:
Valid upload token.

### Postcondition:
File created.

### Further Information:
The provided file name might be changed in accordance with the resolution strategy:

* **autorename**: changes the file name and adds a number to avoid conflicts.
* **overwrite**: deletes any old file with the same file name.
* **fail**: returns an error; in this case, another `PUT` request with a different file name may be sent.

Please ensure that all chunks have been transferred correctly before finishing the upload.

Download share id (if exists) gets changed if:
- node with the same name exists in the target container
- `resolutionStrategy` is `overwrite`
- `keepShareLinks` is `true`

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.Uploads.CompleteFileUploadByToken(ctx, operations.CompleteFileUploadByTokenRequest{
        CompleteUploadRequest: &shared.CompleteUploadRequest{
            FileKey: &shared.FileKey{
                Iv: "dicta",
                Key: "impedit",
                Tag: "voluptatibus",
                Version: "iste",
            },
            FileName: sdk.String("itaque"),
            KeepShareLinks: sdk.Bool(false),
            ResolutionStrategy: shared.CompleteUploadRequestResolutionStrategyEnumAutorename.ToPointer(),
            UserFileKeyList: &shared.UserFileKeyList{
                Items: []shared.UserFileKey{
                    shared.UserFileKey{
                        FileKey: shared.FileKey{
                            Iv: "itaque",
                            Key: "velit",
                            Tag: "laborum",
                            Version: "non",
                        },
                        UserID: 224467,
                    },
                    shared.UserFileKey{
                        FileKey: shared.FileKey{
                            Iv: "iusto",
                            Key: "sit",
                            Tag: "doloremque",
                            Version: "consequatur",
                        },
                        UserID: 639705,
                    },
                },
            },
        },
        XSdsDateFormat: operations.CompleteFileUploadByTokenXSdsDateFormatEnumLeet.ToPointer(),
        Token: "ea",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Node != nil {
        // handle response
    }
}
```

## UploadFileByTokenAsMultipart1

### Description:  
Upload a (chunk of a) file.

### Precondition:
Valid upload token.

### Postcondition:
Chunk uploaded.

### Further Information:
Range requests are supported.  

Following `Content-Types` are supported by this API:
* `multipart/form-data`
* provided `Content-Type`

For both file upload types set the correct `Content-Type` header and body.  

### Examples:  

* `multipart/form-data`
```
POST /api/v4/uploads/{token} HTTP/1.1

Header:
...
Content-Type: multipart/form-data; boundary=----WebKitFormBoundary7MA4YWxkTrZu0gW
...

Body:
------WebKitFormBoundary7MA4YWxkTrZu0gW
Content-Disposition: form-data; name="file"; filename="file.txt"
Content-Type: text/plain

Content of file.txt
------WebKitFormBoundary7MA4YWxkTrZu0gW--
```

* any other `Content-Type` 
```
POST /api/v4/uploads/{token} HTTP/1.1

Header:
...
Content-Type: { ... }
...

Body:
raw content
```


Range Requests
<https://tools.ietf.org/html/rfc7233>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.Uploads.UploadFileByTokenAsMultipart1(ctx, operations.UploadFileByTokenAsMultipart1Request{
        ContentRange: sdk.String("quidem"),
        RequestBody: &operations.UploadFileByTokenAsMultipart1RequestBody{
            File: operations.UploadFileByTokenAsMultipart1RequestBodyFile{
                Content: []byte("voluptas"),
                File: "facilis",
            },
        },
        Token: "placeat",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ChunkUploadResponse != nil {
        // handle response
    }
}
```
