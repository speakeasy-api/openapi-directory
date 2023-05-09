# Media

### Available Operations

* [CreateMedia](#createmedia) - Create media
* [FindMedia](#findmedia) - Find media
* [GetMedia](#getmedia) - Get a specific media
* [GetMediaData](#getmediadata) - Download media by extension
* [GetMediaDataBinary](#getmediadatabinary) - Download a MP3 media
* [GetMediaDataByKey](#getmediadatabykey) - Download media by extension

## CreateMedia

Uploads media file to account, acceptable media formats: bmp, gif, jpg, m4a, mp3, mp4, png, wav

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
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Media.CreateMedia(ctx, operations.CreateMediaRequestBody{
        File: operations.CreateMediaRequestBodyFile{
            Content: []byte("repellendus"),
            File: "officia",
        },
        Name: sdk.String("Cody Nikolaus"),
    }, operations.CreateMediaSecurity{
        Password: "YOUR_PASSWORD_HERE",
        Username: "YOUR_USERNAME_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ResourceID != nil {
        // handle response
    }
}
```

## FindMedia

Find media files created by user

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
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Media.FindMedia(ctx, operations.FindMediaRequest{
        Fields: sdk.String("quae"),
        Filter: sdk.String("quaerat"),
        Limit: sdk.Int(783235),
        Offset: sdk.Int(801836),
    }, operations.FindMediaSecurity{
        Password: "YOUR_PASSWORD_HERE",
        Username: "YOUR_USERNAME_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.MediaPage != nil {
        // handle response
    }
}
```

## GetMedia

Get media resource by id

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
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Media.GetMedia(ctx, operations.GetMediaRequest{
        Fields: sdk.String("labore"),
        ID: 70447,
    }, operations.GetMediaSecurity{
        Password: "YOUR_PASSWORD_HERE",
        Username: "YOUR_USERNAME_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Media != nil {
        // handle response
    }
}
```

## GetMediaData

Download a media file. Available types of files: bmp, gif, jpg, m4a, mp3, mp4, png, wav. Content type in response depends on 'extension' parameter, e.g. image/jpeg, image/png, audio/mp3, etc

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
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Media.GetMediaData(ctx, operations.GetMediaDataRequest{
        Extension: "adipisci",
        ID: 683573,
    }, operations.GetMediaDataSecurity{
        Password: "YOUR_PASSWORD_HERE",
        Username: "YOUR_USERNAME_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```

## GetMediaDataBinary

Download a MP3 media, endpoint returns application/binary content-type

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
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Media.GetMediaDataBinary(ctx, operations.GetMediaDataBinaryRequest{
        ID: 662505,
    }, operations.GetMediaDataBinarySecurity{
        Password: "YOUR_PASSWORD_HERE",
        Username: "YOUR_USERNAME_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```

## GetMediaDataByKey

Download a media file. Available types of files: bmp, gif, jpg, m4a, mp3, mp4, png, wav. Content type in response depends on 'extension' parameter, e.g. image/jpeg, image/png, audio/mp3, etc

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
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Media.GetMediaDataByKey(ctx, operations.GetMediaDataByKeyRequest{
        Extension: "suscipit",
        Key: "velit",
    }, operations.GetMediaDataByKeySecurity{
        Password: "YOUR_PASSWORD_HERE",
        Username: "YOUR_USERNAME_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```
