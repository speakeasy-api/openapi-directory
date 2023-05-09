# api

## Overview

Manage your API Applications and Webhooks

### Available Operations

* [createApiApplication](#createapiapplication) - Create a new API Application

## createApiApplication

Create a new API Application with specified permissions

### Example Usage

```java
package hello.world;

import java.time.OffsetDateTime;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateApiApplicationNewApiApplication;
import org.openapis.openapi.models.operations.CreateApiApplicationResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("corrupti") {{
                    bearerAuth = "Bearer YOUR_BEARER_TOKEN_HERE";
                }})
                .build();

            CreateApiApplicationNewApiApplication req = new CreateApiApplicationNewApiApplication() {{
                applicationName = "Batch Processing API";
                enabled = true;
                expiry = OffsetDateTime.parse("2019-08-22T07:48:56.460Z");
                ican = 847252L;
                numberOfPayeeApprovalsRequired = 1L;
                numberOfPaymentApprovalsRequired = 1L;
                permissions = new String[]{{
                    add("error"),
                    add("deserunt"),
                }};
            }};            

            CreateApiApplicationResponse res = sdk.api.createApiApplication(req);

            if (res.apiApplication != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
