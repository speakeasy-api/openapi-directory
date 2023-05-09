# fileMigrations

## Overview

Operations about file_migrations

### Available Operations

* [getFileMigrationsId](#getfilemigrationsid) - Show File Migration

## getFileMigrationsId

Show File Migration

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetFileMigrationsIdRequest;
import org.openapis.openapi.models.operations.GetFileMigrationsIdResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetFileMigrationsIdRequest req = new GetFileMigrationsIdRequest(952871);            

            GetFileMigrationsIdResponse res = sdk.fileMigrations.getFileMigrationsId(req);

            if (res.fileMigrationEntity != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
