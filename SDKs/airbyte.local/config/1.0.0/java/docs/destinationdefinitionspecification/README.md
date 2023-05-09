# destinationDefinitionSpecification

## Overview

DestinationDefinitionSpecification related resources.

### Available Operations

* [getDestinationDefinitionSpecification](#getdestinationdefinitionspecification) - Get specification for a destinationDefinition

## getDestinationDefinitionSpecification

Get specification for a destinationDefinition

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetDestinationDefinitionSpecificationResponse;
import org.openapis.openapi.models.shared.DestinationDefinitionIdWithWorkspaceId;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            org.openapis.openapi.models.shared.DestinationDefinitionIdWithWorkspaceId req = new DestinationDefinitionIdWithWorkspaceId("4ec1b781-b36a-4080-88d1-00efada200ef", "0422eb21-64cf-49ab-8366-c723ffda9e06");            

            GetDestinationDefinitionSpecificationResponse res = sdk.destinationDefinitionSpecification.getDestinationDefinitionSpecification(req);

            if (res.destinationDefinitionSpecificationRead != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
