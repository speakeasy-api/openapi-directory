# Resources

## Overview

The file and folder management APIs allow you to work with the core of your account. You can upload or download files and create, move and delete files & folders, to name a few options.

### Available Operations

* [AddFolder](#addfolder) - Create a folder
* [CompressFiles](#compressfiles) - Compress resources
* [CopyResources](#copyresources) - Copy resources
* [DeleteResourceByID](#deleteresourcebyid) - Delete a Resource
* [DeleteResources](#deleteresources) - Delete Resources
* [Download](#download) - Download a file
* [ExtractFiles](#extractfiles) - Extract resources
* [GetPreviewImage](#getpreviewimage) - Preview a file
* [GetResourceInfo](#getresourceinfo) - Get Resource Properties
* [GetResourceInfoByID](#getresourceinfobyid) - Get resource metadata
* [ListResourceContents](#listresourcecontents) - List contents of folder
* [ListResources](#listresources) - Get a list of all resources
* [MoveResources](#moveresources) - Move resources
* [UpdateResourceByID](#updateresourcebyid) - Rename a resource.
* [UploadFile](#uploadfile) - Upload a file

## AddFolder

Create a new empty folder at the specified path. New files can be uploaded via the [/resources/upload](#operation/uploadFile) endpoint.

**Notes:**
- Authenticated user should have modify permission.


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
    res, err := s.Resources.AddFolder(ctx, operations.AddFolderRequest{
        RequestBody: &operations.AddFolderAddFolderRequestBody{
            Name: sdk.String("Vernon Abshire"),
            ParentResource: sdk.String("excepturi"),
            Path: sdk.String("tempora"),
        },
        EvAccessToken: "facilis",
        EvAPIKey: "tempore",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ResourceResponse != nil {
        // handle response
    }
}
```

## CompressFiles

Create a zip archive containing the files from given set of paths. Note that this can be a very slow operation if you have indicated many files should be included in the archive.

**Notes:**
- Authenticated user should have modify permission.


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
    res, err := s.Resources.CompressFiles(ctx, operations.CompressFilesRequest{
        RequestBody: &operations.CompressFilesCompressFilesRequestBody{
            ArchiveName: sdk.String("labore"),
            ParentResource: sdk.String("delectus"),
            Resources: []string{
                "non",
                "eligendi",
            },
        },
        EvAccessToken: "sint",
        EvAPIKey: "aliquid",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ResourceResponse != nil {
        // handle response
    }
}
```

## CopyResources

Copies a set of exisiting files/folders (provided by an array `resources`) to the requested `parentResource` in your account.
In the `resources` array, you may specify paths pointing files/folders throughout the account, but everything will be copied to the 
root of the `parentResource`.

**Notes:**
- Authenticated user should have modify permission.


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
    res, err := s.Resources.CopyResources(ctx, operations.CopyResourcesRequest{
        RequestBody: &operations.CopyResourcesCopyResourcesRequestBody{
            ParentResource: "provident",
            Resources: []string{
                "sint",
                "officia",
                "dolor",
                "debitis",
            },
        },
        EvAccessToken: "a",
        EvAPIKey: "dolorum",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ResourceCopyMove != nil {
        // handle response
    }
}
```

## DeleteResourceByID

Delete a single file or folder resource. Deleting a folder will also delete all of the contents.

**Notes:**
- Authenticated user should have [delete permission](/docs/account/04-users/00-introduction#managing-user-roles-and-permissions).
- There is no way to un-delete a deleted resource.


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
    res, err := s.Resources.DeleteResourceByID(ctx, operations.DeleteResourceByIDRequest{
        EvAccessToken: "in",
        EvAPIKey: "in",
        ID: 846409,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.EmptyResponse != nil {
        // handle response
    }
}
```

## DeleteResources

Delete multiple file or folder resourcess. Deleting a folder resource will also delete any resources in that folder.

**Notes:**
- Authenticated user should have [delete permission](/docs/account/04-users/00-introduction#managing-user-roles-and-permissions).
- It is not possible to un-delete a deleted resource.


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
    res, err := s.Resources.DeleteResources(ctx, operations.DeleteResourcesRequest{
        RequestBody: &operations.DeleteResourcesDeleteResourcesRequestBody{
            Resources: []string{
                "rerum",
                "dicta",
                "magnam",
                "cumque",
            },
        },
        EvAccessToken: "19853ef63a0bc348024a9e4cfd4a92520d2dfd04e88d8679fb1ed6bc551593d1",
        EvAPIKey: "exampleaccount-zwSuWUZ8S38h33qPS8v0s",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.EmptyResponse != nil {
        // handle response
    }
}
```

## Download

Downloads a file from the server. Whenever more than one file is being downloaded, the file are first zipped into  a single file before the download starts, and the resulting zip file is named to match the `downloadArchiveName` parameter.

**NOTE**: Downloading many files at once  may result in a long delay before the API will return a response. You may need to override default timeout values in your API client, or download files individually.

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
    res, err := s.Resources.Download(ctx, operations.DownloadRequest{
        DownloadArchiveName: sdk.String("facere"),
        EvAccessToken: "ea",
        EvAPIKey: "aliquid",
        Resources: []string{
            "accusamus",
            "non",
            "occaecati",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Download200ApplicationOctetStreamBinaryString != nil {
        // handle response
    }
}
```

## ExtractFiles

Extract the contents of a zip archive to a specified directory. Note that this can be a very slow operation.

**Notes:**
- You must have  [modify permission](/docs/account/04-users/00-introduction#managing-user-roles-and-permissions) to do this.


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
    res, err := s.Resources.ExtractFiles(ctx, operations.ExtractFilesRequest{
        RequestBody: &operations.ExtractFilesExtractFilesRequestBody{
            ParentResource: "enim",
            Resource: "accusamus",
        },
        EvAccessToken: "delectus",
        EvAPIKey: "quidem",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ResourceCollectionResponse != nil {
        // handle response
    }
}
```

## GetPreviewImage

Returns a resized image of the specified document for supported file types.

Image data returned is encoded in base64 format and can be viewed using the `<img>` element. 

```<img src='data:image/jpeg;base64' + meta.image/>```

**Notes:**
- Supported files types are `'jpg'`, `'jpeg'`, `'gif'`, `'png'`, `'bmp'`, `'pdf'`, `'psd'`, `'doc'`


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
    res, err := s.Resources.GetPreviewImage(ctx, operations.GetPreviewImageRequest{
        EvAccessToken: "19853ef63a0bc348024a9e4cfd4a92520d2dfd04e88d8679fb1ed6bc551593d1",
        EvAPIKey: "exampleaccount-zwSuWUZ8S38h33qPS8v0s",
        Height: sdk.Int(588465),
        Page: sdk.Int(725255),
        Resource: "id",
        Size: operations.GetPreviewImageSizeEnumMedium,
        Width: sdk.Int(533206),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.PreviewFileResponse != nil {
        // handle response
    }
}
```

## GetResourceInfo

Returns details for specified file/folder id or hash, including upload date, size and type. For the full list of returned properties, see the response syntax, below.

**Notes:**
- Authenticated user should have list permission.


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
    res, err := s.Resources.GetResourceInfo(ctx, operations.GetResourceInfoRequest{
        EvAccessToken: "sapiente",
        EvAPIKey: "amet",
        Include: sdk.String("deserunt"),
        Resource: "nisi",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ResourceResponse != nil {
        // handle response
    }
}
```

## GetResourceInfoByID

Returns metadata for specified file/folder path, including upload date, size and type. For the full list of returned properties, see the response syntax, below.

**Notes:**
- Authenticated user should have list permission.


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
    res, err := s.Resources.GetResourceInfoByID(ctx, operations.GetResourceInfoByIDRequest{
        EvAccessToken: "vel",
        EvAPIKey: "natus",
        ID: 606393,
        Include: sdk.String("molestiae"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ResourceResponse != nil {
        // handle response
    }
}
```

## ListResourceContents

Returns a list of files/folders for the parent resource ID. 

You can use this API call to get information about all files and folders at a specified path. By default, the API returns basic metadata on each file/folder. An optional `include` parameter forces the return of additional metadata. As with all API calls, the path should be the full path relative to the user's home directory (e.g. **/myfiles/some_folder**).

**Notes:**
- Authenticated user should have list permission.


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
    res, err := s.Resources.ListResourceContents(ctx, operations.ListResourceContentsRequest{
        EvAccessToken: "perferendis",
        EvAPIKey: "nihil",
        ID: 301575,
        Include: sdk.String("distinctio"),
        Limit: sdk.Int(660174),
        Offset: sdk.Int(287991),
        Sort: sdk.String("name"),
        Type: sdk.String("labore"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ResourceCollectionResponse != nil {
        // handle response
    }
}
```

## ListResources

Returns a list of files and folders in the account. Use the `resource` query parameter to indicate the folder you wish to search in (which can be /). 

**Searching for Files and Folders**

Using the `name` parameter triggers search mode, which will search the entire directory structure under the provided `resource` for files or folders with names matching the provided `name`. This supports wildcard matching such as:

- \*Report\* would find any files or folders with "Report" in the name.
- Data\_202?-09-30.xlsx would match items such as "Data\_2020-09-30.xlsx", "DATA\_2021-09-30.xlsx", "data\_2022-09-30.xlsx" etc.
- sales\* would find any files or folders starting with the word "Sales"
- \*.csv would locate any files ending in ".csv"
- \* matches everything within the directory tree starting at your given `resource`

The search is not case-sensitive. Searching for Clients\* or clients\* or CLIENTS\*, etc. will provide identical results

If you are using the `name` parameter to run a search, the `type` parameter will be ignored by the server.

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
    res, err := s.Resources.ListResources(ctx, operations.ListResourcesRequest{
        EvAccessToken: "suscipit",
        EvAPIKey: "natus",
        Include: sdk.String("nobis"),
        Limit: sdk.Int(428769),
        Name: sdk.String("Brandon Brakus V"),
        Offset: sdk.Int(354047),
        Resource: "provident",
        Sort: sdk.String("name"),
        Type: sdk.String("quos"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ResourceCollectionResponse != nil {
        // handle response
    }
}
```

## MoveResources

Moves a set of exisiting files/folders (provided by an array `resources`) to the requested `parentResource` in your account.
In the `resources` array, you may specify paths pointing files/folders throughout the account, but everything will be moved to the root of the `parentResource`.

**Notes:**
- Authenticated user should have modify permission.


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
    res, err := s.Resources.MoveResources(ctx, operations.MoveResourcesRequest{
        RequestBody: &operations.MoveResourcesMoveResourcesRequestBody{
            ParentResource: "/copyhere",
            Resources: []string{
                "accusantium",
                "mollitia",
                "reiciendis",
            },
        },
        EvAccessToken: "mollitia",
        EvAPIKey: "ad",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ResourceCopyMove != nil {
        // handle response
    }
}
```

## UpdateResourceByID

Update the specified file or folder resource record's "name" parameter. The resource is identified by the numeric resource ID that is passed in as the last segment of the URI.


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
    res, err := s.Resources.UpdateResourceByID(ctx, operations.UpdateResourceByIDRequest{
        RequestBody: &operations.UpdateResourceByIDUpdateResourceByIDRequestBody{
            Name: sdk.String("my-renamed-file.txt"),
        },
        EvAccessToken: "eum",
        EvAPIKey: "dolor",
        ID: 896547,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ResourceResponse != nil {
        // handle response
    }
}
```

## UploadFile

Uploads a file to a specified path, with optional support for resuming a partially uploaded existing file.


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
    res, err := s.Resources.UploadFile(ctx, operations.UploadFileRequest{
        RequestBody: &operations.UploadFileRequestBody{
            File: &operations.UploadFileRequestBodyFile{
                Content: []byte("odit"),
                File: "nemo",
            },
        },
        AllowOverwrite: sdk.Bool(false),
        EvAccessToken: "quasi",
        EvAPIKey: "iure",
        FileSize: 984043,
        OffsetBytes: sdk.Int64(891924),
        Path: "eius",
        Resume: sdk.Bool(false),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ResourceResponse != nil {
        // handle response
    }
}
```
