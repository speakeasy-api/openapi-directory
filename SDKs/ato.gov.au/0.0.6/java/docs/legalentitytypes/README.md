# legalEntityTypes

## Overview

A classification scheme for parties (individuals and organisations).


### Available Operations

* [getClassificationsLegalEntityTypes](#getclassificationslegalentitytypes) - Retrieve a list of legal entity types

## getClassificationsLegalEntityTypes

Retrieve a list of legal entity types

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetClassificationsLegalEntityTypesRequest;
import org.openapis.openapi.models.operations.GetClassificationsLegalEntityTypesResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetClassificationsLegalEntityTypesRequest req = new GetClassificationsLegalEntityTypesRequest("consequatur");            

            GetClassificationsLegalEntityTypesResponse res = sdk.legalEntityTypes.getClassificationsLegalEntityTypes(req);

            if (res.legalEntityTypes != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
