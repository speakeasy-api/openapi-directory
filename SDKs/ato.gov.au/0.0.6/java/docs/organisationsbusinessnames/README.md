# organisationsBusinessNames

## Overview

A business name is a name or title under which an organisation conducts a business.


### Available Operations

* [deleteOrganisationsPartyIdBusinessNamesProductId](#deleteorganisationspartyidbusinessnamesproductid) - Delete a business name
* [getOrganisationsPartyIdBusinessNames](#getorganisationspartyidbusinessnames) - Retrieve a list of business names
* [getOrganisationsPartyIdBusinessNamesProductId](#getorganisationspartyidbusinessnamesproductid) - Retrieve a business name
* [postOrganisationsPartyIdBusinessNames](#postorganisationspartyidbusinessnames) - Create a business name
* [putOrganisationsPartyIdBusinessNamesProductId](#putorganisationspartyidbusinessnamesproductid) - Update a business name

## deleteOrganisationsPartyIdBusinessNamesProductId

Delete a business name


### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteOrganisationsPartyIdBusinessNamesProductIdRequest;
import org.openapis.openapi.models.operations.DeleteOrganisationsPartyIdBusinessNamesProductIdResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DeleteOrganisationsPartyIdBusinessNamesProductIdRequest req = new DeleteOrganisationsPartyIdBusinessNamesProductIdRequest("odit", "nemo", "quasi");            

            DeleteOrganisationsPartyIdBusinessNamesProductIdResponse res = sdk.organisationsBusinessNames.deleteOrganisationsPartyIdBusinessNamesProductId(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getOrganisationsPartyIdBusinessNames

Retrieve a list of business names

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetOrganisationsPartyIdBusinessNamesRequest;
import org.openapis.openapi.models.operations.GetOrganisationsPartyIdBusinessNamesResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetOrganisationsPartyIdBusinessNamesRequest req = new GetOrganisationsPartyIdBusinessNamesRequest("iure", "doloribus");            

            GetOrganisationsPartyIdBusinessNamesResponse res = sdk.organisationsBusinessNames.getOrganisationsPartyIdBusinessNames(req);

            if (res.businessNames != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getOrganisationsPartyIdBusinessNamesProductId

Retrieve a business name


### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetOrganisationsPartyIdBusinessNamesProductIdRequest;
import org.openapis.openapi.models.operations.GetOrganisationsPartyIdBusinessNamesProductIdResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetOrganisationsPartyIdBusinessNamesProductIdRequest req = new GetOrganisationsPartyIdBusinessNamesProductIdRequest("debitis", "eius", "maxime");            

            GetOrganisationsPartyIdBusinessNamesProductIdResponse res = sdk.organisationsBusinessNames.getOrganisationsPartyIdBusinessNamesProductId(req);

            if (res.businessName != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postOrganisationsPartyIdBusinessNames

Create a business name


### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PostOrganisationsPartyIdBusinessNamesRequest;
import org.openapis.openapi.models.operations.PostOrganisationsPartyIdBusinessNamesResponse;
import org.openapis.openapi.models.shared.BusinessNameInput;
import org.openapis.openapi.models.shared.BusinessNameLifecycleStateEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            PostOrganisationsPartyIdBusinessNamesRequest req = new PostOrganisationsPartyIdBusinessNamesRequest("deleniti",                 new BusinessNameInput() {{
                                lifecycleState = BusinessNameLifecycleStateEnum.PENDING_APPROVAL;
                                name = "XYZ Technology Ventures";
                            }};, "in");            

            PostOrganisationsPartyIdBusinessNamesResponse res = sdk.organisationsBusinessNames.postOrganisationsPartyIdBusinessNames(req);

            if (res.businessName != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## putOrganisationsPartyIdBusinessNamesProductId

Update a business name


### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PutOrganisationsPartyIdBusinessNamesProductIdRequest;
import org.openapis.openapi.models.operations.PutOrganisationsPartyIdBusinessNamesProductIdResponse;
import org.openapis.openapi.models.shared.BusinessNameInput;
import org.openapis.openapi.models.shared.BusinessNameLifecycleStateEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            PutOrganisationsPartyIdBusinessNamesProductIdRequest req = new PutOrganisationsPartyIdBusinessNamesProductIdRequest("architecto",                 new BusinessNameInput() {{
                                lifecycleState = BusinessNameLifecycleStateEnum.APPROVED;
                                name = "XYZ Technology Ventures";
                            }};, "repudiandae", "ullam");            

            PutOrganisationsPartyIdBusinessNamesProductIdResponse res = sdk.organisationsBusinessNames.putOrganisationsPartyIdBusinessNamesProductId(req);

            if (res.businessName != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
