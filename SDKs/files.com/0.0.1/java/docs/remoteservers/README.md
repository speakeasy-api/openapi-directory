# remoteServers

## Overview

Operations about remote_servers

### Available Operations

* [deleteRemoteServersId](#deleteremoteserversid) - Delete Remote Server
* [getRemoteServers](#getremoteservers) - List Remote Servers
* [getRemoteServersId](#getremoteserversid) - Show Remote Server
* [getRemoteServersIdConfigurationFile](#getremoteserversidconfigurationfile) - Download configuration file (required for some Remote Server integrations, such as the Files.com Agent)
* [patchRemoteServersId](#patchremoteserversid) - Update Remote Server
* [postRemoteServers](#postremoteservers) - Create Remote Server
* [postRemoteServersIdConfigurationFile](#postremoteserversidconfigurationfile) - Post local changes, check in, and download configuration file (used by some Remote Server integrations, such as the Files.com Agent)

## deleteRemoteServersId

Delete Remote Server

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteRemoteServersIdRequest;
import org.openapis.openapi.models.operations.DeleteRemoteServersIdResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DeleteRemoteServersIdRequest req = new DeleteRemoteServersIdRequest(502721);            

            DeleteRemoteServersIdResponse res = sdk.remoteServers.deleteRemoteServersId(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getRemoteServers

List Remote Servers

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetRemoteServersRequest;
import org.openapis.openapi.models.operations.GetRemoteServersResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetRemoteServersRequest req = new GetRemoteServersRequest() {{
                cursor = "suscipit";
                perPage = 922348;
            }};            

            GetRemoteServersResponse res = sdk.remoteServers.getRemoteServers(req);

            if (res.remoteServerEntities != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getRemoteServersId

Show Remote Server

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetRemoteServersIdRequest;
import org.openapis.openapi.models.operations.GetRemoteServersIdResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetRemoteServersIdRequest req = new GetRemoteServersIdRequest(542129);            

            GetRemoteServersIdResponse res = sdk.remoteServers.getRemoteServersId(req);

            if (res.remoteServerEntity != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getRemoteServersIdConfigurationFile

Download configuration file (required for some Remote Server integrations, such as the Files.com Agent)

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetRemoteServersIdConfigurationFileRequest;
import org.openapis.openapi.models.operations.GetRemoteServersIdConfigurationFileResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetRemoteServersIdConfigurationFileRequest req = new GetRemoteServersIdConfigurationFileRequest(541381);            

            GetRemoteServersIdConfigurationFileResponse res = sdk.remoteServers.getRemoteServersIdConfigurationFile(req);

            if (res.remoteServerConfigurationFileEntity != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## patchRemoteServersId

Update Remote Server

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PatchRemoteServersIdRequest;
import org.openapis.openapi.models.operations.PatchRemoteServersIdRequestBody;
import org.openapis.openapi.models.operations.PatchRemoteServersIdRequestBodyFilesAgentPermissionSetEnum;
import org.openapis.openapi.models.operations.PatchRemoteServersIdRequestBodyOneDriveAccountTypeEnum;
import org.openapis.openapi.models.operations.PatchRemoteServersIdRequestBodyServerCertificateEnum;
import org.openapis.openapi.models.operations.PatchRemoteServersIdRequestBodyServerTypeEnum;
import org.openapis.openapi.models.operations.PatchRemoteServersIdRequestBodySslEnum;
import org.openapis.openapi.models.operations.PatchRemoteServersIdResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            PatchRemoteServersIdRequest req = new PatchRemoteServersIdRequest(120919) {{
                requestBody = new PatchRemoteServersIdRequestBody() {{
                    awsAccessKey = "example";
                    awsSecretKey = "recusandae";
                    azureBlobStorageAccessKey = "dolorum";
                    azureBlobStorageAccount = "storage-account-name";
                    azureBlobStorageContainer = "container-name";
                    azureBlobStorageSasToken = "storage-sas-token";
                    azureFilesStorageAccessKey = "repellendus";
                    azureFilesStorageAccount = "storage-account-name";
                    azureFilesStorageSasToken = "storage-sas-token";
                    azureFilesStorageShareName = "share-name";
                    backblazeB2ApplicationKey = "labore";
                    backblazeB2Bucket = "my-bucket";
                    backblazeB2KeyId = "reiciendis";
                    backblazeB2S3Endpoint = "s3.us-west-001.backblazeb2.com";
                    enableDedicatedIps = true;
                    filebaseAccessKey = "example";
                    filebaseBucket = "my-bucket";
                    filebaseSecretKey = "doloremque";
                    filesAgentPermissionSet = PatchRemoteServersIdRequestBodyFilesAgentPermissionSetEnum.READ_WRITE;
                    filesAgentRoot = "example";
                    googleCloudStorageBucket = "my-bucket";
                    googleCloudStorageCredentialsJson = "repudiandae";
                    googleCloudStorageProjectId = "my-project";
                    hostname = "remote-server.com";
                    maxConnections = 1;
                    name = "My Remote server";
                    oneDriveAccountType = PatchRemoteServersIdRequestBodyOneDriveAccountTypeEnum.PERSONAL;
                    password = "dicta";
                    pinToSiteRegion = true;
                    port = 1;
                    privateKey = "accusantium";
                    privateKeyPassphrase = "beatae";
                    rackspaceApiKey = "dolores";
                    rackspaceContainer = "my-container";
                    rackspaceRegion = "dfw";
                    rackspaceUsername = "rackspaceuser";
                    resetAuthentication = false;
                    s3Bucket = "my-bucket";
                    s3CompatibleAccessKey = "example";
                    s3CompatibleBucket = "my-bucket";
                    s3CompatibleEndpoint = "mys3platform.com";
                    s3CompatibleRegion = "us-east-1";
                    s3CompatibleSecretKey = "enim";
                    s3Region = "us-east-1";
                    serverCertificate = PatchRemoteServersIdRequestBodyServerCertificateEnum.REQUIRE_MATCH;
                    serverHostKey = "[public key]";
                    serverType = PatchRemoteServersIdRequestBodyServerTypeEnum.S3;
                    ssl = PatchRemoteServersIdRequestBodySslEnum.IF_AVAILABLE;
                    sslCertificate = "laboriosam";
                    username = "user";
                    wasabiAccessKey = "example";
                    wasabiBucket = "my-bucket";
                    wasabiRegion = "us-west-1";
                    wasabiSecretKey = "velit";
                }};;
            }};            

            PatchRemoteServersIdResponse res = sdk.remoteServers.patchRemoteServersId(req);

            if (res.remoteServerEntity != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postRemoteServers

Create Remote Server

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PostRemoteServersRequestBody;
import org.openapis.openapi.models.operations.PostRemoteServersRequestBodyFilesAgentPermissionSetEnum;
import org.openapis.openapi.models.operations.PostRemoteServersRequestBodyOneDriveAccountTypeEnum;
import org.openapis.openapi.models.operations.PostRemoteServersRequestBodyServerCertificateEnum;
import org.openapis.openapi.models.operations.PostRemoteServersRequestBodyServerTypeEnum;
import org.openapis.openapi.models.operations.PostRemoteServersRequestBodySslEnum;
import org.openapis.openapi.models.operations.PostRemoteServersResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            PostRemoteServersRequestBody req = new PostRemoteServersRequestBody() {{
                awsAccessKey = "example";
                awsSecretKey = "a";
                azureBlobStorageAccessKey = "molestias";
                azureBlobStorageAccount = "storage-account-name";
                azureBlobStorageContainer = "container-name";
                azureBlobStorageSasToken = "storage-sas-token";
                azureFilesStorageAccessKey = "magnam";
                azureFilesStorageAccount = "storage-account-name";
                azureFilesStorageSasToken = "storage-sas-token";
                azureFilesStorageShareName = "share-name";
                backblazeB2ApplicationKey = "saepe";
                backblazeB2Bucket = "my-bucket";
                backblazeB2KeyId = "consequuntur";
                backblazeB2S3Endpoint = "s3.us-west-001.backblazeb2.com";
                enableDedicatedIps = true;
                filebaseAccessKey = "example";
                filebaseBucket = "my-bucket";
                filebaseSecretKey = "occaecati";
                filesAgentPermissionSet = PostRemoteServersRequestBodyFilesAgentPermissionSetEnum.READ_WRITE;
                filesAgentRoot = "example";
                googleCloudStorageBucket = "my-bucket";
                googleCloudStorageCredentialsJson = "officiis";
                googleCloudStorageProjectId = "my-project";
                hostname = "remote-server.com";
                maxConnections = 1;
                name = "My Remote server";
                oneDriveAccountType = PostRemoteServersRequestBodyOneDriveAccountTypeEnum.PERSONAL;
                password = "perspiciatis";
                pinToSiteRegion = true;
                port = 1;
                privateKey = "in";
                privateKeyPassphrase = "adipisci";
                rackspaceApiKey = "eveniet";
                rackspaceContainer = "my-container";
                rackspaceRegion = "dfw";
                rackspaceUsername = "rackspaceuser";
                resetAuthentication = false;
                s3Bucket = "my-bucket";
                s3CompatibleAccessKey = "example";
                s3CompatibleBucket = "my-bucket";
                s3CompatibleEndpoint = "mys3platform.com";
                s3CompatibleRegion = "us-east-1";
                s3CompatibleSecretKey = "occaecati";
                s3Region = "us-east-1";
                serverCertificate = PostRemoteServersRequestBodyServerCertificateEnum.REQUIRE_MATCH;
                serverHostKey = "[public key]";
                serverType = PostRemoteServersRequestBodyServerTypeEnum.S3;
                ssl = PostRemoteServersRequestBodySslEnum.IF_AVAILABLE;
                sslCertificate = "consequuntur";
                username = "user";
                wasabiAccessKey = "example";
                wasabiBucket = "my-bucket";
                wasabiRegion = "us-west-1";
                wasabiSecretKey = "fugit";
            }};            

            PostRemoteServersResponse res = sdk.remoteServers.postRemoteServers(req);

            if (res.remoteServerEntity != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postRemoteServersIdConfigurationFile

Post local changes, check in, and download configuration file (used by some Remote Server integrations, such as the Files.com Agent)

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PostRemoteServersIdConfigurationFileRequest;
import org.openapis.openapi.models.operations.PostRemoteServersIdConfigurationFileRequestBody;
import org.openapis.openapi.models.operations.PostRemoteServersIdConfigurationFileResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            PostRemoteServersIdConfigurationFileRequest req = new PostRemoteServersIdConfigurationFileRequest(661118) {{
                requestBody = new PostRemoteServersIdConfigurationFileRequestBody() {{
                    apiToken = "example";
                    configVersion = "example";
                    hostname = "example";
                    permissionSet = "full";
                    port = 1;
                    privateKey = "example";
                    publicKey = "example";
                    root = "example";
                    serverHostKey = "example";
                    status = "example";
                    subdomain = "example";
                }};;
            }};            

            PostRemoteServersIdConfigurationFileResponse res = sdk.remoteServers.postRemoteServersIdConfigurationFile(req);

            if (res.remoteServerConfigurationFileEntity != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
