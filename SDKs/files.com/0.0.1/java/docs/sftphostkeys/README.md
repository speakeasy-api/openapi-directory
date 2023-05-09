# sftpHostKeys

## Overview

Operations about sftp_host_keys

### Available Operations

* [deleteSftpHostKeysId](#deletesftphostkeysid) - Delete Sftp Host Key
* [getSftpHostKeys](#getsftphostkeys) - List Sftp Host Keys
* [getSftpHostKeysId](#getsftphostkeysid) - Show Sftp Host Key
* [patchSftpHostKeysId](#patchsftphostkeysid) - Update Sftp Host Key
* [postSftpHostKeys](#postsftphostkeys) - Create Sftp Host Key

## deleteSftpHostKeysId

Delete Sftp Host Key

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteSftpHostKeysIdRequest;
import org.openapis.openapi.models.operations.DeleteSftpHostKeysIdResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DeleteSftpHostKeysIdRequest req = new DeleteSftpHostKeysIdRequest(293144);            

            DeleteSftpHostKeysIdResponse res = sdk.sftpHostKeys.deleteSftpHostKeysId(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getSftpHostKeys

List Sftp Host Keys

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetSftpHostKeysRequest;
import org.openapis.openapi.models.operations.GetSftpHostKeysResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetSftpHostKeysRequest req = new GetSftpHostKeysRequest() {{
                cursor = "dolorum";
                perPage = 200364;
            }};            

            GetSftpHostKeysResponse res = sdk.sftpHostKeys.getSftpHostKeys(req);

            if (res.sftpHostKeyEntities != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getSftpHostKeysId

Show Sftp Host Key

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetSftpHostKeysIdRequest;
import org.openapis.openapi.models.operations.GetSftpHostKeysIdResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetSftpHostKeysIdRequest req = new GetSftpHostKeysIdRequest(63207);            

            GetSftpHostKeysIdResponse res = sdk.sftpHostKeys.getSftpHostKeysId(req);

            if (res.sftpHostKeyEntity != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## patchSftpHostKeysId

Update Sftp Host Key

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PatchSftpHostKeysIdRequest;
import org.openapis.openapi.models.operations.PatchSftpHostKeysIdRequestBody;
import org.openapis.openapi.models.operations.PatchSftpHostKeysIdResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            PatchSftpHostKeysIdRequest req = new PatchSftpHostKeysIdRequest(925703) {{
                requestBody = new PatchSftpHostKeysIdRequestBody() {{
                    name = "Calvin Kreiger";
                    privateKey = "culpa";
                }};;
            }};            

            PatchSftpHostKeysIdResponse res = sdk.sftpHostKeys.patchSftpHostKeysId(req);

            if (res.sftpHostKeyEntity != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postSftpHostKeys

Create Sftp Host Key

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PostSftpHostKeysRequestBody;
import org.openapis.openapi.models.operations.PostSftpHostKeysResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            PostSftpHostKeysRequestBody req = new PostSftpHostKeysRequestBody() {{
                name = "Raquel Larkin";
                privateKey = "recusandae";
            }};            

            PostSftpHostKeysResponse res = sdk.sftpHostKeys.postSftpHostKeys(req);

            if (res.sftpHostKeyEntity != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
