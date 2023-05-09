# individualsBusinessNames

## Overview

A business name is a name or title under which a person conducts a business.


### Available Operations

* [deleteIndividualsPartyIdBusinessNamesProductId](#deleteindividualspartyidbusinessnamesproductid) - Delete a business name
* [getIndividualsPartyIdBusinessNames](#getindividualspartyidbusinessnames) - Retrieve a list of business names
* [getIndividualsPartyIdBusinessNamesProductId](#getindividualspartyidbusinessnamesproductid) - Retrieve a business name
* [postIndividualsPartyIdBusinessNames](#postindividualspartyidbusinessnames) - Create a business name
* [putIndividualsPartyIdBusinessNamesProductId](#putindividualspartyidbusinessnamesproductid) - Update a business name

## deleteIndividualsPartyIdBusinessNamesProductId

Delete a business name


### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteIndividualsPartyIdBusinessNamesProductIdRequest;
import org.openapis.openapi.models.operations.DeleteIndividualsPartyIdBusinessNamesProductIdResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DeleteIndividualsPartyIdBusinessNamesProductIdRequest req = new DeleteIndividualsPartyIdBusinessNamesProductIdRequest("excepturi", "accusantium", "iure");            

            DeleteIndividualsPartyIdBusinessNamesProductIdResponse res = sdk.individualsBusinessNames.deleteIndividualsPartyIdBusinessNamesProductId(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getIndividualsPartyIdBusinessNames

Retrieve a list of business names

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetIndividualsPartyIdBusinessNamesRequest;
import org.openapis.openapi.models.operations.GetIndividualsPartyIdBusinessNamesResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetIndividualsPartyIdBusinessNamesRequest req = new GetIndividualsPartyIdBusinessNamesRequest("culpa", "doloribus");            

            GetIndividualsPartyIdBusinessNamesResponse res = sdk.individualsBusinessNames.getIndividualsPartyIdBusinessNames(req);

            if (res.businessNames != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getIndividualsPartyIdBusinessNamesProductId

Retrieve a business name


### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetIndividualsPartyIdBusinessNamesProductIdRequest;
import org.openapis.openapi.models.operations.GetIndividualsPartyIdBusinessNamesProductIdResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetIndividualsPartyIdBusinessNamesProductIdRequest req = new GetIndividualsPartyIdBusinessNamesProductIdRequest("sapiente", "architecto", "mollitia");            

            GetIndividualsPartyIdBusinessNamesProductIdResponse res = sdk.individualsBusinessNames.getIndividualsPartyIdBusinessNamesProductId(req);

            if (res.businessName != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postIndividualsPartyIdBusinessNames

Create a business name


### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PostIndividualsPartyIdBusinessNamesRequest;
import org.openapis.openapi.models.operations.PostIndividualsPartyIdBusinessNamesResponse;
import org.openapis.openapi.models.shared.BusinessNameInput;
import org.openapis.openapi.models.shared.BusinessNameLifecycleStateEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            PostIndividualsPartyIdBusinessNamesRequest req = new PostIndividualsPartyIdBusinessNamesRequest("dolorem",                 new BusinessNameInput() {{
                                lifecycleState = BusinessNameLifecycleStateEnum.PENDING_APPROVAL;
                                name = "XYZ Technology Ventures";
                            }};, "consequuntur");            

            PostIndividualsPartyIdBusinessNamesResponse res = sdk.individualsBusinessNames.postIndividualsPartyIdBusinessNames(req);

            if (res.businessName != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## putIndividualsPartyIdBusinessNamesProductId

Update a business name


### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PutIndividualsPartyIdBusinessNamesProductIdRequest;
import org.openapis.openapi.models.operations.PutIndividualsPartyIdBusinessNamesProductIdResponse;
import org.openapis.openapi.models.shared.BusinessNameInput;
import org.openapis.openapi.models.shared.BusinessNameLifecycleStateEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            PutIndividualsPartyIdBusinessNamesProductIdRequest req = new PutIndividualsPartyIdBusinessNamesProductIdRequest("repellat",                 new BusinessNameInput() {{
                                lifecycleState = BusinessNameLifecycleStateEnum.PENDING_APPROVAL;
                                name = "XYZ Technology Ventures";
                            }};, "occaecati", "numquam");            

            PutIndividualsPartyIdBusinessNamesProductIdResponse res = sdk.individualsBusinessNames.putIndividualsPartyIdBusinessNamesProductId(req);

            if (res.businessName != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
