# SystemStorageConfig

## Overview

System settings (storage)

### Available Operations

* [CreateS3Config](#creates3config) - Create S3 storage configuration
* [CreateS3Tag](#creates3tag) - Create S3 tag
* [RemoveS3Tag](#removes3tag) - Remove S3 tag
* [Request3Config](#request3config) - Request S3 storage configuration
* [RequestS3Tag](#requests3tag) - Request S3 tag
* [RequestS3TagList](#requests3taglist) - Request list of configured S3 tags
* [UpdateS3Config](#updates3config) - Update S3 storage configuration

## CreateS3Config

<h3 style='padding: 5px; background-color: #F6F7F8; border: 1px solid #AAA; border-radius: 5px; display: table-cell;'>&#128640; Since v4.3.0</h3>

### Description:  
Create new S3 configuration.

### Precondition:
Right <span style='padding: 3px; background-color: #F6F7F8; border: 1px solid #000; border-radius: 5px; display: inline;'>&#128275; change global config</span> and
role <span style='padding: 3px; background-color: #F6F7F8; border: 1px solid #000; border-radius: 5px; display: inline;'>&#128100; Config Manager</span> of the Provider Customer required.

### Postcondition:
New S3 configuration is created.

### Further Information:
Forbidden characters in bucket names: [`.`]  
`bucketName` and `endpointUrl` are deprecated, use `bucketUrl` instead.

### Virtual hosted style access

Example: https://<span style="color:red;">bucket-name</span>.s3.<span style="color:red;">region</span>.amazonaws.com/<span style="color:red;">key-name</span>


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
    res, err := s.SystemStorageConfig.CreateS3Config(ctx, operations.CreateS3ConfigRequest{
        S3ConfigCreateRequest: shared.S3ConfigCreateRequest{
            AccessKey: "vel",
            BucketName: sdk.String("magnam"),
            BucketURL: sdk.String("quibusdam"),
            EndpointURL: sdk.String("inventore"),
            Region: sdk.String("facere"),
            SecretKey: "libero",
        },
        XSdsAuthToken: sdk.String("architecto"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.S3Config != nil {
        // handle response
    }
}
```

## CreateS3Tag

<h3 style='padding: 5px; background-color: #F6F7F8; border: 1px solid #AAA; border-radius: 5px; display: table-cell;'>&#128640; Since v4.9.0</h3>

### Description:  
Create new S3 tag.

### Precondition:
Right <span style='padding: 3px; background-color: #F6F7F8; border: 1px solid #000; border-radius: 5px; display: inline;'>&#128275; change global config</span> and
role <span style='padding: 3px; background-color: #F6F7F8; border: 1px solid #000; border-radius: 5px; display: inline;'>&#128100; Config Manager</span> of the Provider Customer required.

### Postcondition:
New S3 tag is created.

### Further Information:
* Maximum key length: **128** characters.  
* Maximum value length: **256** characters.  
* Both S3 tag key and value are **case-sensitive** strings.  
* Maximum of **20 mandatory S3 tags** is allowed.

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
    res, err := s.SystemStorageConfig.CreateS3Tag(ctx, operations.CreateS3TagRequest{
        S3TagCreateRequest: shared.S3TagCreateRequest{
            IsMandatory: sdk.Bool(false),
            Key: "voluptatibus",
            Value: "quia",
        },
        XSdsAuthToken: sdk.String("porro"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.S3Tag != nil {
        // handle response
    }
}
```

## RemoveS3Tag

<h3 style='padding: 5px; background-color: #F6F7F8; border: 1px solid #AAA; border-radius: 5px; display: table-cell;'>&#128640; Since v4.9.0</h3>

### Description:  
Delete S3 tag.

### Precondition:
Right <span style='padding: 3px; background-color: #F6F7F8; border: 1px solid #000; border-radius: 5px; display: inline;'>&#128275; change global config</span> and
role <span style='padding: 3px; background-color: #F6F7F8; border: 1px solid #000; border-radius: 5px; display: inline;'>&#128100; Config Manager</span> of the Provider Customer required.

### Postcondition:
S3 tag gets deleted.

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
    res, err := s.SystemStorageConfig.RemoveS3Tag(ctx, operations.RemoveS3TagRequest{
        XSdsAuthToken: sdk.String("aliquam"),
        ID: 247045,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## Request3Config

<h3 style='padding: 5px; background-color: #F6F7F8; border: 1px solid #AAA; border-radius: 5px; display: table-cell;'>&#128640; Since v4.3.0</h3>

### Description:  
Retrieve S3 configuration.

### Precondition:
Right <span style='padding: 3px; background-color: #F6F7F8; border: 1px solid #000; border-radius: 5px; display: inline;'>&#128275; read global config</span> and
role <span style='padding: 3px; background-color: #F6F7F8; border: 1px solid #000; border-radius: 5px; display: inline;'>&#128100; Config Manager</span> of the Provider Customer required.

### Postcondition:
S3 configuration is returned.

### Further Information:
None.

### Virtual hosted style access

Example: https://<span style="color:red;">bucket-name</span>.s3.<span style="color:red;">region</span>.amazonaws.com/<span style="color:red;">key-name</span>


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
    res, err := s.SystemStorageConfig.Request3Config(ctx, operations.Request3ConfigRequest{
        XSdsAuthToken: sdk.String("illo"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.S3Config != nil {
        // handle response
    }
}
```

## RequestS3Tag

<h3 style='padding: 5px; background-color: #F6F7F8; border: 1px solid #AAA; border-radius: 5px; display: table-cell;'>&#128640; Since v4.9.0</h3>

### Description:  
Retrieve single S3 tag.

### Precondition:
Right <span style='padding: 3px; background-color: #F6F7F8; border: 1px solid #000; border-radius: 5px; display: inline;'>&#128275; read global config</span> and
role <span style='padding: 3px; background-color: #F6F7F8; border: 1px solid #000; border-radius: 5px; display: inline;'>&#128100; Config Manager</span> of the Provider Customer required.

### Postcondition:
S3 tag is returned.

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
    res, err := s.SystemStorageConfig.RequestS3Tag(ctx, operations.RequestS3TagRequest{
        XSdsAuthToken: sdk.String("accusantium"),
        ID: 424663,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.S3Tag != nil {
        // handle response
    }
}
```

## RequestS3TagList

<h3 style='padding: 5px; background-color: #F6F7F8; border: 1px solid #AAA; border-radius: 5px; display: table-cell;'>&#128640; Since v4.9.0</h3>

### Description:  
Retrieve all configured S3 tags.

### Precondition:
Right <span style='padding: 3px; background-color: #F6F7F8; border: 1px solid #000; border-radius: 5px; display: inline;'>&#128275; read global config</span> and
role <span style='padding: 3px; background-color: #F6F7F8; border: 1px solid #000; border-radius: 5px; display: inline;'>&#128100; Config Manager</span> of the Provider Customer required.

### Postcondition:
S3 tags are returned.

### Further Information:
An empty list is returned if no S3 tags are found / configured.

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
    res, err := s.SystemStorageConfig.RequestS3TagList(ctx, operations.RequestS3TagListRequest{
        XSdsAuthToken: sdk.String("ea"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.S3TagList != nil {
        // handle response
    }
}
```

## UpdateS3Config

<h3 style='padding: 5px; background-color: #F6F7F8; border: 1px solid #AAA; border-radius: 5px; display: table-cell;'>&#128640; Since v4.3.0</h3>

### Description:  
Update existing S3 configuration.

### Precondition:
Right <span style='padding: 3px; background-color: #F6F7F8; border: 1px solid #000; border-radius: 5px; display: inline;'>&#128275; change global config</span> and
role <span style='padding: 3px; background-color: #F6F7F8; border: 1px solid #000; border-radius: 5px; display: inline;'>&#128100; Config Manager</span> of the Provider Customer required.

### Postcondition:
S3 configuration is updated.

### Further Information:
Forbidden characters in bucket names: [`.`]  
`bucketName` and `endpointUrl` are deprecated, use `bucketUrl` instead.

### Virtual hosted style access

Example: https://<span style="color:red;">bucket-name</span>.s3.<span style="color:red;">region</span>.amazonaws.com/<span style="color:red;">key-name</span>


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
    res, err := s.SystemStorageConfig.UpdateS3Config(ctx, operations.UpdateS3ConfigRequest{
        S3ConfigUpdateRequest: shared.S3ConfigUpdateRequest{
            AccessKey: sdk.String("beatae"),
            BucketName: sdk.String("vero"),
            BucketURL: sdk.String("excepturi"),
            EndpointURL: sdk.String("eum"),
            Region: sdk.String("velit"),
            SecretKey: sdk.String("ut"),
        },
        XSdsAuthToken: sdk.String("perspiciatis"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.S3Config != nil {
        // handle response
    }
}
```
