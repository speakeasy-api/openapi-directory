# Public

## Overview

Public API (upload / download shares, software information)

### Available Operations

* [CancelFileUploadViaShare](#cancelfileuploadviashare) - Cancel file upload
* [CheckPublicDownloadSharePassword](#checkpublicdownloadsharepassword) - Check public Download Share password
* [CompleteFileUploadViaShare](#completefileuploadviashare) - Complete file upload
* [CompleteS3FileUploadViaShare](#completes3fileuploadviashare) - Complete S3 file upload
* [CreateShareUploadChannel](#createshareuploadchannel) - Create new file upload channel
* [DownloadFileViaTokenPublic](#downloadfileviatokenpublic) - Download file with token
* [DownloadFileViaTokenPublic1](#downloadfileviatokenpublic1) - Download file with token
* [GenerateDownloadURLPublic](#generatedownloadurlpublic) - Generate download URL
* [GeneratePresignedUrlsPublic](#generatepresignedurlspublic) - Generate presigned URLs for S3 file upload
* [RequestActiveDirectoryAuthInfo](#requestactivedirectoryauthinfo) - Request Active Directory authentication information
* [RequestOpenIDAuthInfo](#requestopenidauthinfo) - Request OpenID Connect provider authentication information
* [RequestPublicDownloadShareInfo](#requestpublicdownloadshareinfo) - Request public Download Share information
* [RequestPublicUploadShareInfo](#requestpublicuploadshareinfo) - Request public Upload Share information
* [RequestSoftwareVersion](#requestsoftwareversion) - Request software version information
* [RequestSystemInfo](#requestsysteminfo) - Request system information
* [RequestSystemTime](#requestsystemtime) - Request system time
* [RequestThirdPartyDependencies](#requestthirdpartydependencies) - Request third-party software dependencies
* [RequestUploadStatusPublic](#requestuploadstatuspublic) - Request status of S3 file upload
* [UploadFileAsMultipartPublic1](#uploadfileasmultipartpublic1) - Upload file

## CancelFileUploadViaShare

### Description:
Abort (chunked) upload via Upload Share.

### Precondition:
Valid Upload ID.

### Postcondition:
Aborts upload and invalidates upload ID / token.

### Further Information:
None.

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
    res, err := s.Public.CancelFileUploadViaShare(ctx, operations.CancelFileUploadViaShareRequest{
        AccessKey: "hic",
        UploadID: "nesciunt",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## CheckPublicDownloadSharePassword

<h3 style='padding: 5px; background-color: #F6F7F8; border: 1px solid #AAA; border-radius: 5px; display: table-cell;'>&#128640; Since v4.36.0</h3>

### Description:
Check password for a public Download Share

### Precondition:
None.

### Postcondition:
None.

### Further Information:
None.

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
    res, err := s.Public.CheckPublicDownloadSharePassword(ctx, operations.CheckPublicDownloadSharePasswordRequest{
        AccessKey: "culpa",
        Password: sdk.String("corrupti"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## CompleteFileUploadViaShare

### Description:
Finalize (chunked) upload via Upload Share.

### Precondition:
Valid upload ID.  
Only returns users that owns one of the following permissions: <span style='padding: 3px; background-color: #F6F7F8; border: 1px solid #000; border-radius: 5px; display: inline;'>&#128275; manage</span>, <span style='padding: 3px; background-color: #F6F7F8; border: 1px solid #000; border-radius: 5px; display: inline;'>&#128275; read</span>, <span style='padding: 3px; background-color: #F6F7F8; border: 1px solid #000; border-radius: 5px; display: inline;'>&#128275; manage download share</span>, <span style='padding: 3px; background-color: #F6F7F8; border: 1px solid #000; border-radius: 5px; display: inline;'>&#128275; manage upload share</span>

### Postcondition:
Finalizes upload.

### Further Information:
Chunked uploads (range requests) are supported.  

Please ensure that all chunks have been transferred correctly before finishing the upload.  
If file hash has been created in time a `201 Created` will be responded and hash will be part of response, otherwise it will be a `202 Accepted` without it.


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
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.Public.CompleteFileUploadViaShare(ctx, operations.CompleteFileUploadViaShareRequest{
        UserFileKeyList: &shared.UserFileKeyList{
            Items: []shared.UserFileKey{
                shared.UserFileKey{
                    FileKey: shared.FileKey{
                        Iv: "totam",
                        Key: "hic",
                        Tag: "exercitationem",
                        Version: "nobis",
                    },
                    UserID: 24619,
                },
                shared.UserFileKey{
                    FileKey: shared.FileKey{
                        Iv: "rerum",
                        Key: "sed",
                        Tag: "reiciendis",
                        Version: "explicabo",
                    },
                    UserID: 994401,
                },
                shared.UserFileKey{
                    FileKey: shared.FileKey{
                        Iv: "facilis",
                        Key: "voluptate",
                        Tag: "expedita",
                        Version: "ab",
                    },
                    UserID: 611749,
                },
                shared.UserFileKey{
                    FileKey: shared.FileKey{
                        Iv: "dolore",
                        Key: "laborum",
                        Tag: "sed",
                        Version: "in",
                    },
                    UserID: 417486,
                },
            },
        },
        XSdsDateFormat: operations.CompleteFileUploadViaShareXSdsDateFormatEnumEpoch.ToPointer(),
        AccessKey: "explicabo",
        UploadID: "voluptas",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.PublicUploadedFileData != nil {
        // handle response
    }
}
```

## CompleteS3FileUploadViaShare

<h3 style='padding: 5px; background-color: #F6F7F8; border: 1px solid #AAA; border-radius: 5px; display: table-cell;'>&#128640; Since v4.15.0</h3>

### Description:
Finishes a S3 file upload and closes the corresponding upload channel.

### Precondition:
Valid upload ID.  
Only returns users that owns one of the following permissions: <span style='padding: 3px; background-color: #F6F7F8; border: 1px solid #000; border-radius: 5px; display: inline;'>&#128275; manage</span>, <span style='padding: 3px; background-color: #F6F7F8; border: 1px solid #000; border-radius: 5px; display: inline;'>&#128275; read</span>, <span style='padding: 3px; background-color: #F6F7F8; border: 1px solid #000; border-radius: 5px; display: inline;'>&#128275; manage download share</span>, <span style='padding: 3px; background-color: #F6F7F8; border: 1px solid #000; border-radius: 5px; display: inline;'>&#128275; manage upload share</span>

### Postcondition:
Upload channel is closed. S3 multipart upload request is completed.

### Further Information:
None.


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
    res, err := s.Public.CompleteS3FileUploadViaShare(ctx, operations.CompleteS3FileUploadViaShareRequest{
        CompleteS3ShareUploadRequest: shared.CompleteS3ShareUploadRequest{
            Parts: []shared.S3FileUploadPart{
                shared.S3FileUploadPart{
                    PartEtag: "architecto",
                    PartNumber: 382808,
                },
                shared.S3FileUploadPart{
                    PartEtag: "sapiente",
                    PartNumber: 895386,
                },
                shared.S3FileUploadPart{
                    PartEtag: "illo",
                    PartNumber: 967795,
                },
            },
            UserFileKeyList: []shared.UserFileKey{
                shared.UserFileKey{
                    FileKey: shared.FileKey{
                        Iv: "corrupti",
                        Key: "maiores",
                        Tag: "incidunt",
                        Version: "sed",
                    },
                    UserID: 592231,
                },
            },
        },
        AccessKey: "eius",
        UploadID: "necessitatibus",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## CreateShareUploadChannel

### Description:  
Create a new upload channel.

### Precondition:
None.

### Postcondition:
Upload channel is created and corresponding upload URL, token & upload ID are returned.

### Further Information:
Use `uploadUrl` the upload `token` is deprecated.  

Please provide the size of the intended upload so that the quota can be checked in advanced and no data is transferred unnecessarily.

### Node naming convention:
* Node (room, folder, file) names are limited to **150** characters.
* Illegal names:  
`'CON', 'PRN', 'AUX', 'NUL', 'COM1', 'COM2', 'COM3', 'COM4', 'COM5', 'COM6', 'COM7', 'COM8', 'COM9', 'LPT1', 'LPT2', 'LPT3', 'LPT4', 'LPT5', 'LPT6', 'LPT7', 'LPT8', 'LPT9', (and any of those with an extension)`
* Illegal characters in names:  
`'\\', '<','>', ':', '\"', '|', '?', '*', '/', leading '-', trailing '.' `


### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
	"openapi/pkg/types"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.Public.CreateShareUploadChannel(ctx, operations.CreateShareUploadChannelRequest{
        CreateShareUploadChannelRequest: shared.CreateShareUploadChannelRequest{
            DirectS3Upload: sdk.Bool(false),
            Name: "Rosemary McClure",
            Password: sdk.String("tempora"),
            Size: sdk.Int64(273009),
            TimestampCreation: types.MustTimeFromString("2022-01-11T22:08:32.388Z"),
            TimestampModification: types.MustTimeFromString("2022-12-22T16:38:34.482Z"),
        },
        AccessKey: "non",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CreateShareUploadChannelResponse != nil {
        // handle response
    }
}
```

## DownloadFileViaTokenPublic

### Description:  
Download a file (or zip archive if target is a folder or room).

### Precondition:
Valid download token.

### Postcondition:
Stream is returned.

### Further Information:
Range requests are supported.  
Range requests are illegal for zip archive download.

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
    res, err := s.Public.DownloadFileViaTokenPublic(ctx, operations.DownloadFileViaTokenPublicRequest{
        Range: sdk.String("officiis"),
        AccessKey: "praesentium",
        GenericMimetype: sdk.Bool(false),
        Inline: sdk.Bool(false),
        Token: "facilis",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## DownloadFileViaTokenPublic1

### Description:  
Download a file (or zip archive if target is a folder or room).

### Precondition:
Valid download token.

### Postcondition:
Stream is returned.

### Further Information:
Range requests are supported.  
Range requests are illegal for zip archive download.

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
    res, err := s.Public.DownloadFileViaTokenPublic1(ctx, operations.DownloadFileViaTokenPublic1Request{
        Range: sdk.String("quaerat"),
        AccessKey: "incidunt",
        GenericMimetype: sdk.Bool(false),
        Inline: sdk.Bool(false),
        Token: "ipsam",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## GenerateDownloadURLPublic

### Description:
Generate a download URL to retrieve a shared file.

### Precondition:
None.

### Postcondition:
Download URL and token are generated and returned.

### Further Information:
Use `downloadUrl` the download `token` is deprecated.

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
    res, err := s.Public.GenerateDownloadURLPublic(ctx, operations.GenerateDownloadURLPublicRequest{
        PublicDownloadTokenGenerateRequest: &shared.PublicDownloadTokenGenerateRequest{
            Password: sdk.String("debitis"),
        },
        AccessKey: "rem",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.PublicDownloadTokenGenerateResponse != nil {
        // handle response
    }
}
```

## GeneratePresignedUrlsPublic

<h3 style='padding: 5px; background-color: #F6F7F8; border: 1px solid #AAA; border-radius: 5px; display: table-cell;'>&#128640; Since v4.15.0</h3>

### Description:
Generate presigned URLs for S3 file upload.

### Precondition:
Valid upload ID

### Postcondition:
List of presigned URLs is returned.

### Further Information:
The size for each part must be >= 5 MB, except for the last part.  
The part number of the first part in S3 is 1 (not 0).  
Use HTTP method `PUT` for uploading bytes via presigned URL.

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
    res, err := s.Public.GeneratePresignedUrlsPublic(ctx, operations.GeneratePresignedUrlsPublicRequest{
        GeneratePresignedUrlsRequest: shared.GeneratePresignedUrlsRequest{
            FirstPartNumber: 26522,
            LastPartNumber: 750595,
            Size: 625637,
        },
        XSdsDateFormat: operations.GeneratePresignedUrlsPublicXSdsDateFormatEnumLocal.ToPointer(),
        AccessKey: "minima",
        UploadID: "recusandae",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.PresignedURLList != nil {
        // handle response
    }
}
```

## RequestActiveDirectoryAuthInfo

### Description:  
Provides information about Active Directory authentication options.

### Precondition:
None.

### Postcondition:
Active Directory authentication options information is returned.

### Further Information:
None.

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
    res, err := s.Public.RequestActiveDirectoryAuthInfo(ctx, operations.RequestActiveDirectoryAuthInfoRequest{
        IsGlobalAvailable: sdk.Bool(false),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ActiveDirectoryAuthInfo != nil {
        // handle response
    }
}
```

## RequestOpenIDAuthInfo

### Description:  
Provides information about OpenID Connect authentication options.

### Precondition:
None.

### Postcondition:
OpenID Connect authentication options information is returned.

### Further Information:
None.

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
    res, err := s.Public.RequestOpenIDAuthInfo(ctx, operations.RequestOpenIDAuthInfoRequest{
        IsGlobalAvailable: sdk.Bool(false),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.OpenIDAuthInfo != nil {
        // handle response
    }
}
```

## RequestPublicDownloadShareInfo

### Description:  
Retrieve the public information of a Download Share.

### Precondition:
None.

### Postcondition:
Download Share information is returned.

### Further Information:
None.

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
    res, err := s.Public.RequestPublicDownloadShareInfo(ctx, operations.RequestPublicDownloadShareInfoRequest{
        XSdsDateFormat: operations.RequestPublicDownloadShareInfoXSdsDateFormatEnumLeet.ToPointer(),
        AccessKey: "nulla",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.PublicDownloadShare != nil {
        // handle response
    }
}
```

## RequestPublicUploadShareInfo

### Description:  
Provides information about the desired Upload Share.

### Precondition:
Only `userUserPublicKeyList` is returned to the users who owns one of the following permissions: <span style='padding: 3px; background-color: #F6F7F8; border: 1px solid #000; border-radius: 5px; display: inline;'>&#128275; manage</span>, <span style='padding: 3px; background-color: #F6F7F8; border: 1px solid #000; border-radius: 5px; display: inline;'>&#128275; read</span>, <span style='padding: 3px; background-color: #F6F7F8; border: 1px solid #000; border-radius: 5px; display: inline;'>&#128275; manage download share</span>, <span style='padding: 3px; background-color: #F6F7F8; border: 1px solid #000; border-radius: 5px; display: inline;'>&#128275; manage upload share</span>

### Postcondition:
None.

### Further Information:
If no password is set, the returned information is reduced to the following attributes (if available):

* `name`
* `createdAt`
* `isProtected`
* `isEncrypted`
* `showUploadedFiles`
* `userUserPublicKeyList` (if parent is end-to-end encrypted)

Only if the password is transmitted as `X-Sds-Share-Password` header, all values are returned.


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
    res, err := s.Public.RequestPublicUploadShareInfo(ctx, operations.RequestPublicUploadShareInfoRequest{
        XSdsDateFormat: operations.RequestPublicUploadShareInfoXSdsDateFormatEnumUtc.ToPointer(),
        XSdsSharePassword: sdk.String("aperiam"),
        AccessKey: "saepe",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.PublicUploadShare != nil {
        // handle response
    }
}
```

## RequestSoftwareVersion

### Description:  
Public software version information.

### Precondition:
None.

### Postcondition:
Sofware version information is returned.

### Further Information:
The version of DRACOON Server consists of two components:
* **API**
* **Core** (referred to as _"Server"_)

which are versioned individually.

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
    res, err := s.Public.RequestSoftwareVersion(ctx, operations.RequestSoftwareVersionRequest{
        XSdsDateFormat: operations.RequestSoftwareVersionXSdsDateFormatEnumLocal.ToPointer(),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.SoftwareVersionData != nil {
        // handle response
    }
}
```

## RequestSystemInfo

### Description:  
Provides information about system.

### Precondition:
None.

### Postcondition:
System information is returned.

### Further Information:
Authentication methods are sorted by **priority** attribute.  
Smaller values have higher priority.  
Authentication method with highest priority is considered as default.

### System information:
<details style="padding: 10px; background-color: #F6F7F8; border: 1px solid #AAA; border-radius: 5px;">
<summary style="cursor: pointer; outline: none"><strong>Expand</strong></summary>

| Setting | Description | Value |
| :--- | :--- | :--- |
| `languageDefault` | Defines which language should be default. | `ISO 639-1 code` |
| `hideLoginInputFields` | Defines if login fields should be hidden. | `true or false` |
| `s3Hosts` | List of available S3 hosts. | `String array` |
| `s3EnforceDirectUpload` | Determines whether S3 direct upload is enforced or not. | `true or false` |
| `useS3Storage` | Determines whether S3 Storage enabled and used. | `true or false` |

</details>

### Authentication methods:
<details style="padding: 10px; background-color: #F6F7F8; border: 1px solid #AAA; border-radius: 5px;">
<summary style="cursor: pointer; outline: none"><strong>Expand</strong></summary>

| Authentication Method | Description |
| :--- | :--- |
| `basic` | **Basic** authentication globally allowed.<br>This option **MUST** be activated to allow users to log in with their credentials stored in the database.<br>Formerly known as `sql`. |
| `active_directory` | **Active Directory** authentication globally allowed.<br>This option **MUST** be activated to allow users to log in with their Active Directory credentials. |
| `radius` | **RADIUS** authentication globally allowed.<br>This option **MUST** be activated to allow users to log in with their RADIUS username, their PIN and a token password. |
| `openid` | **OpenID Connect** authentication globally allowed.This option **MUST** be activated to allow users to log in with their OpenID Connect identity. |
| `hideLoginInputFields` | Determines whether input fields for login should be enabled | `true or false` |

</details>

Tags for Identifying Languages
<https://tools.ietf.org/html/rfc5646>

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
    res, err := s.Public.RequestSystemInfo(ctx, operations.RequestSystemInfoRequest{
        IsEnabled: sdk.Bool(false),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.SystemInfo != nil {
        // handle response
    }
}
```

## RequestSystemTime

### Description:  
Retrieve the actual server time.

### Precondition:
None.

### Postcondition:
Server time is returned.

### Further Information:
None.

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
    res, err := s.Public.RequestSystemTime(ctx, operations.RequestSystemTimeRequest{
        XSdsDateFormat: operations.RequestSystemTimeXSdsDateFormatEnumLocal.ToPointer(),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.SdsServerTime != nil {
        // handle response
    }
}
```

## RequestThirdPartyDependencies

<h3 style='padding: 5px; background-color: #F6F7F8; border: 1px solid #AAA; border-radius: 5px; display: table-cell;'>&#128640; Since v4.9.0</h3>

### Description:  
Provides information about used third-party software dependencies.

### Precondition:
None.

### Postcondition:
List of the third-party software dependencies used by **DRACOON Core** (referred to as _"Server"_) is returned.

### Further Information:
None.



### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.Public.RequestThirdPartyDependencies(ctx)
    if err != nil {
        log.Fatal(err)
    }

    if res.ThirdPartyDependenciesData != nil {
        // handle response
    }
}
```

## RequestUploadStatusPublic

<h3 style='padding: 5px; background-color: #F6F7F8; border: 1px solid #AAA; border-radius: 5px; display: table-cell;'>&#128640; Since v4.15.0</h3>

### Description:
Request status of a S3 file upload.

### Precondition:
An upload channel has been created and the user has <span style='padding: 3px; background-color: #F6F7F8; border: 1px solid #000; border-radius: 5px; display: inline;'>&#128275; create</span> permissions in the parent container (room or folder).

### Postcondition:
Status of S3 multipart upload request is returned.

### Further Information:
None.

### Possible errors:
<details style="padding: 10px; background-color: #F6F7F8; border: 1px solid #AAA; border-radius: 5px;">
<summary style="cursor: pointer; outline: none"><strong>Expand</strong></summary>

| Http Status | Error Code | Description |
| :--- | :--- | :--- |
| `400 Bad Request` | `-80000` | Mandatory fields cannot be empty |
| `400 Bad Request` | `-80001` | Invalid positive number |
| `400 Bad Request` | `-80002` | Invalid number |
| `400 Bad Request` | `-40001` | (Target) room is not encrypted |
| `400 Bad Request` | `-40755` | Bad file name |
| `400 Bad Request` | `-40763` | File key must be set for an upload into encrypted room |
| `400 Bad Request` | `-50506` | Exceeds the number of files for this Upload Share |
| `403 Forbidden` |  | Access denied |
| `404 Not Found` | `-20501` | Upload not found |
| `404 Not Found` | `-40000` | Container not found |
| `404 Not Found` | `-41000` | Node not found |
| `404 Not Found` | `-70501` | User not found |
| `409 Conflict` | `-40010` | Container cannot be overwritten |
| `409 Conflict` |  | File cannot be overwritten |
| `500 Internal Server Error` |  | System Error |
| `502 Bad Gateway` |  | S3 Error |
| `502 Insufficient Storage` | `-50504` | Exceeds the quota for this Upload Share |
| `502 Insufficient Storage` | `-40200` | Exceeds the free node quota in room |
| `502 Insufficient Storage` | `-90200` | Exceeds the free customer quota |
| `502 Insufficient Storage` | `-90201` | Exceeds the free customer physical disk space |

</details>

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
    res, err := s.Public.RequestUploadStatusPublic(ctx, operations.RequestUploadStatusPublicRequest{
        AccessKey: "in",
        UploadID: "officiis",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.S3ShareUploadStatus != nil {
        // handle response
    }
}
```

## UploadFileAsMultipartPublic1

### Description:  
Chunked upload of files via Upload Share.

### Precondition:
Valid upload ID.

### Postcondition:
Chunk of file is uploaded.

### Further Information:
Chunked uploads (range requests) are supported.

Following `Content-Types` are supported by this API:
* `multipart/form-data`
* provided `Content-Type`  

For both file upload types set the correct `Content-Type` header and body.  

### Examples:  

* `multipart/form-data`
```
POST /api/v4/public/shares/uploads/{access_key}{upload_id} HTTP/1.1

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
POST /api/v4/public/shares/uploads/{access_key}{upload_id} HTTP/1.1

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
    res, err := s.Public.UploadFileAsMultipartPublic1(ctx, operations.UploadFileAsMultipartPublic1Request{
        ContentRange: sdk.String("beatae"),
        RequestBody: &operations.UploadFileAsMultipartPublic1RequestBody{
            File: operations.UploadFileAsMultipartPublic1RequestBodyFile{
                Content: []byte("laudantium"),
                File: "exercitationem",
            },
        },
        XSdsDateFormat: operations.UploadFileAsMultipartPublic1XSdsDateFormatEnumOffset.ToPointer(),
        AccessKey: "cum",
        UploadID: "laboriosam",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ChunkUploadResponse != nil {
        // handle response
    }
}
```
