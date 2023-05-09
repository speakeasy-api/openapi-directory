# RemoteServers

## Overview

Operations about remote_servers

### Available Operations

* [DeleteRemoteServersID](#deleteremoteserversid) - Delete Remote Server
* [GetRemoteServers](#getremoteservers) - List Remote Servers
* [GetRemoteServersID](#getremoteserversid) - Show Remote Server
* [GetRemoteServersIDConfigurationFile](#getremoteserversidconfigurationfile) - Download configuration file (required for some Remote Server integrations, such as the Files.com Agent)
* [PatchRemoteServersID](#patchremoteserversid) - Update Remote Server
* [PostRemoteServers](#postremoteservers) - Create Remote Server
* [PostRemoteServersIDConfigurationFile](#postremoteserversidconfigurationfile) - Post local changes, check in, and download configuration file (used by some Remote Server integrations, such as the Files.com Agent)

## DeleteRemoteServersID

Delete Remote Server

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
    res, err := s.RemoteServers.DeleteRemoteServersID(ctx, operations.DeleteRemoteServersIDRequest{
        ID: 597303,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## GetRemoteServers

List Remote Servers

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
    res, err := s.RemoteServers.GetRemoteServers(ctx, operations.GetRemoteServersRequest{
        Cursor: sdk.String("nihil"),
        PerPage: sdk.Int(649078),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.RemoteServerEntities != nil {
        // handle response
    }
}
```

## GetRemoteServersID

Show Remote Server

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
    res, err := s.RemoteServers.GetRemoteServersID(ctx, operations.GetRemoteServersIDRequest{
        ID: 378245,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.RemoteServerEntity != nil {
        // handle response
    }
}
```

## GetRemoteServersIDConfigurationFile

Download configuration file (required for some Remote Server integrations, such as the Files.com Agent)

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
    res, err := s.RemoteServers.GetRemoteServersIDConfigurationFile(ctx, operations.GetRemoteServersIDConfigurationFileRequest{
        ID: 5189,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.RemoteServerConfigurationFileEntity != nil {
        // handle response
    }
}
```

## PatchRemoteServersID

Update Remote Server

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
    res, err := s.RemoteServers.PatchRemoteServersID(ctx, operations.PatchRemoteServersIDRequest{
        RequestBody: &operations.PatchRemoteServersIDRequestBody{
            AwsAccessKey: sdk.String("example"),
            AwsSecretKey: sdk.String("maiores"),
            AzureBlobStorageAccessKey: sdk.String("reiciendis"),
            AzureBlobStorageAccount: sdk.String("storage-account-name"),
            AzureBlobStorageContainer: sdk.String("container-name"),
            AzureBlobStorageSasToken: sdk.String("storage-sas-token"),
            AzureFilesStorageAccessKey: sdk.String("dolores"),
            AzureFilesStorageAccount: sdk.String("storage-account-name"),
            AzureFilesStorageSasToken: sdk.String("storage-sas-token"),
            AzureFilesStorageShareName: sdk.String("share-name"),
            BackblazeB2ApplicationKey: sdk.String("id"),
            BackblazeB2Bucket: sdk.String("my-bucket"),
            BackblazeB2KeyID: sdk.String("minima"),
            BackblazeB2S3Endpoint: sdk.String("s3.us-west-001.backblazeb2.com"),
            EnableDedicatedIps: sdk.Bool(true),
            FilebaseAccessKey: sdk.String("example"),
            FilebaseBucket: sdk.String("my-bucket"),
            FilebaseSecretKey: sdk.String("dolore"),
            FilesAgentPermissionSet: operations.PatchRemoteServersIDRequestBodyFilesAgentPermissionSetEnumReadWrite.ToPointer(),
            FilesAgentRoot: sdk.String("example"),
            GoogleCloudStorageBucket: sdk.String("my-bucket"),
            GoogleCloudStorageCredentialsJSON: sdk.String("dolorum"),
            GoogleCloudStorageProjectID: sdk.String("my-project"),
            Hostname: sdk.String("remote-server.com"),
            MaxConnections: sdk.Int(1),
            Name: sdk.String("My Remote server"),
            OneDriveAccountType: operations.PatchRemoteServersIDRequestBodyOneDriveAccountTypeEnumPersonal.ToPointer(),
            Password: sdk.String("nesciunt"),
            PinToSiteRegion: sdk.Bool(true),
            Port: sdk.Int(1),
            PrivateKey: sdk.String("quae"),
            PrivateKeyPassphrase: sdk.String("recusandae"),
            RackspaceAPIKey: sdk.String("omnis"),
            RackspaceContainer: sdk.String("my-container"),
            RackspaceRegion: sdk.String("dfw"),
            RackspaceUsername: sdk.String("rackspaceuser"),
            ResetAuthentication: sdk.Bool(false),
            S3Bucket: sdk.String("my-bucket"),
            S3CompatibleAccessKey: sdk.String("example"),
            S3CompatibleBucket: sdk.String("my-bucket"),
            S3CompatibleEndpoint: sdk.String("mys3platform.com"),
            S3CompatibleRegion: sdk.String("us-east-1"),
            S3CompatibleSecretKey: sdk.String("quaerat"),
            S3Region: sdk.String("us-east-1"),
            ServerCertificate: operations.PatchRemoteServersIDRequestBodyServerCertificateEnumRequireMatch.ToPointer(),
            ServerHostKey: sdk.String("[public key]"),
            ServerType: operations.PatchRemoteServersIDRequestBodyServerTypeEnumS3.ToPointer(),
            Ssl: operations.PatchRemoteServersIDRequestBodySslEnumIfAvailable.ToPointer(),
            SslCertificate: sdk.String("molestiae"),
            Username: sdk.String("user"),
            WasabiAccessKey: sdk.String("example"),
            WasabiBucket: sdk.String("my-bucket"),
            WasabiRegion: sdk.String("us-west-1"),
            WasabiSecretKey: sdk.String("ex"),
        },
        ID: 284000,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.RemoteServerEntity != nil {
        // handle response
    }
}
```

## PostRemoteServers

Create Remote Server

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
    res, err := s.RemoteServers.PostRemoteServers(ctx, operations.PostRemoteServersRequestBody{
        AwsAccessKey: sdk.String("example"),
        AwsSecretKey: sdk.String("culpa"),
        AzureBlobStorageAccessKey: sdk.String("adipisci"),
        AzureBlobStorageAccount: sdk.String("storage-account-name"),
        AzureBlobStorageContainer: sdk.String("container-name"),
        AzureBlobStorageSasToken: sdk.String("storage-sas-token"),
        AzureFilesStorageAccessKey: sdk.String("debitis"),
        AzureFilesStorageAccount: sdk.String("storage-account-name"),
        AzureFilesStorageSasToken: sdk.String("storage-sas-token"),
        AzureFilesStorageShareName: sdk.String("share-name"),
        BackblazeB2ApplicationKey: sdk.String("laudantium"),
        BackblazeB2Bucket: sdk.String("my-bucket"),
        BackblazeB2KeyID: sdk.String("eum"),
        BackblazeB2S3Endpoint: sdk.String("s3.us-west-001.backblazeb2.com"),
        EnableDedicatedIps: sdk.Bool(true),
        FilebaseAccessKey: sdk.String("example"),
        FilebaseBucket: sdk.String("my-bucket"),
        FilebaseSecretKey: sdk.String("nemo"),
        FilesAgentPermissionSet: operations.PostRemoteServersRequestBodyFilesAgentPermissionSetEnumReadWrite.ToPointer(),
        FilesAgentRoot: sdk.String("example"),
        GoogleCloudStorageBucket: sdk.String("my-bucket"),
        GoogleCloudStorageCredentialsJSON: sdk.String("recusandae"),
        GoogleCloudStorageProjectID: sdk.String("my-project"),
        Hostname: sdk.String("remote-server.com"),
        MaxConnections: sdk.Int(1),
        Name: sdk.String("My Remote server"),
        OneDriveAccountType: operations.PostRemoteServersRequestBodyOneDriveAccountTypeEnumPersonal.ToPointer(),
        Password: sdk.String("esse"),
        PinToSiteRegion: sdk.Bool(true),
        Port: sdk.Int(1),
        PrivateKey: sdk.String("provident"),
        PrivateKeyPassphrase: sdk.String("quis"),
        RackspaceAPIKey: sdk.String("eum"),
        RackspaceContainer: sdk.String("my-container"),
        RackspaceRegion: sdk.String("dfw"),
        RackspaceUsername: sdk.String("rackspaceuser"),
        ResetAuthentication: sdk.Bool(false),
        S3Bucket: sdk.String("my-bucket"),
        S3CompatibleAccessKey: sdk.String("example"),
        S3CompatibleBucket: sdk.String("my-bucket"),
        S3CompatibleEndpoint: sdk.String("mys3platform.com"),
        S3CompatibleRegion: sdk.String("us-east-1"),
        S3CompatibleSecretKey: sdk.String("reiciendis"),
        S3Region: sdk.String("us-east-1"),
        ServerCertificate: operations.PostRemoteServersRequestBodyServerCertificateEnumRequireMatch.ToPointer(),
        ServerHostKey: sdk.String("[public key]"),
        ServerType: operations.PostRemoteServersRequestBodyServerTypeEnumS3.ToPointer(),
        Ssl: operations.PostRemoteServersRequestBodySslEnumIfAvailable.ToPointer(),
        SslCertificate: sdk.String("provident"),
        Username: sdk.String("user"),
        WasabiAccessKey: sdk.String("example"),
        WasabiBucket: sdk.String("my-bucket"),
        WasabiRegion: sdk.String("us-west-1"),
        WasabiSecretKey: sdk.String("aspernatur"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.RemoteServerEntity != nil {
        // handle response
    }
}
```

## PostRemoteServersIDConfigurationFile

Post local changes, check in, and download configuration file (used by some Remote Server integrations, such as the Files.com Agent)

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
    res, err := s.RemoteServers.PostRemoteServersIDConfigurationFile(ctx, operations.PostRemoteServersIDConfigurationFileRequest{
        RequestBody: &operations.PostRemoteServersIDConfigurationFileRequestBody{
            APIToken: sdk.String("example"),
            ConfigVersion: sdk.String("example"),
            Hostname: sdk.String("example"),
            PermissionSet: sdk.String("full"),
            Port: sdk.Int(1),
            PrivateKey: sdk.String("example"),
            PublicKey: sdk.String("example"),
            Root: sdk.String("example"),
            ServerHostKey: sdk.String("example"),
            Status: sdk.String("example"),
            Subdomain: sdk.String("example"),
        },
        ID: 354506,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.RemoteServerConfigurationFileEntity != nil {
        // handle response
    }
}
```
