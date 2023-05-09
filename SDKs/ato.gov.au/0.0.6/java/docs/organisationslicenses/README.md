# organisationsLicenses

## Overview

If you carry on a business you may need to hold a licence.

  For example, if you provide financial services, you are required to hold an Australian Financial
  Services (AFS) licence.


### Available Operations

* [deleteOrganisationsPartyIdLicensesProductId](#deleteorganisationspartyidlicensesproductid) - Delete a license
* [getOrganisationsPartyIdLicenses](#getorganisationspartyidlicenses) - Retrieve a list of licenses
* [getOrganisationsPartyIdLicensesProductId](#getorganisationspartyidlicensesproductid) - Retrieve a license
* [postOrganisationsPartyIdLicenses](#postorganisationspartyidlicenses) - Create a license
* [putOrganisationsPartyIdLicensesProductId](#putorganisationspartyidlicensesproductid) - Update a license

## deleteOrganisationsPartyIdLicensesProductId

Delete a license


### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteOrganisationsPartyIdLicensesProductIdRequest;
import org.openapis.openapi.models.operations.DeleteOrganisationsPartyIdLicensesProductIdResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DeleteOrganisationsPartyIdLicensesProductIdRequest req = new DeleteOrganisationsPartyIdLicensesProductIdRequest("pariatur", "nemo", "voluptatibus");            

            DeleteOrganisationsPartyIdLicensesProductIdResponse res = sdk.organisationsLicenses.deleteOrganisationsPartyIdLicensesProductId(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getOrganisationsPartyIdLicenses

Retrieve a list of licenses

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetOrganisationsPartyIdLicensesRequest;
import org.openapis.openapi.models.operations.GetOrganisationsPartyIdLicensesResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetOrganisationsPartyIdLicensesRequest req = new GetOrganisationsPartyIdLicensesRequest("perferendis", "fugiat");            

            GetOrganisationsPartyIdLicensesResponse res = sdk.organisationsLicenses.getOrganisationsPartyIdLicenses(req);

            if (res.licenses != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getOrganisationsPartyIdLicensesProductId

Retrieve a license


### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetOrganisationsPartyIdLicensesProductIdRequest;
import org.openapis.openapi.models.operations.GetOrganisationsPartyIdLicensesProductIdResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetOrganisationsPartyIdLicensesProductIdRequest req = new GetOrganisationsPartyIdLicensesProductIdRequest("amet", "aut", "cumque");            

            GetOrganisationsPartyIdLicensesProductIdResponse res = sdk.organisationsLicenses.getOrganisationsPartyIdLicensesProductId(req);

            if (res.license != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postOrganisationsPartyIdLicenses

Create a license


### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PostOrganisationsPartyIdLicensesRequest;
import org.openapis.openapi.models.operations.PostOrganisationsPartyIdLicensesResponse;
import org.openapis.openapi.models.shared.LicenseInput;
import org.openapis.openapi.models.shared.LicenseLicenseTypeEnum;
import org.openapis.openapi.models.shared.LicenseLifecycleStateEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            PostOrganisationsPartyIdLicensesRequest req = new PostOrganisationsPartyIdLicensesRequest("corporis",                 new LicenseInput() {{
                                licenseType = LicenseLicenseTypeEnum.LICENSE2_B;
                                lifecycleState = LicenseLifecycleStateEnum.PENDING_APPROVAL;
                            }};, "nobis");            

            PostOrganisationsPartyIdLicensesResponse res = sdk.organisationsLicenses.postOrganisationsPartyIdLicenses(req);

            if (res.license != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## putOrganisationsPartyIdLicensesProductId

Update a license


### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PutOrganisationsPartyIdLicensesProductIdRequest;
import org.openapis.openapi.models.operations.PutOrganisationsPartyIdLicensesProductIdResponse;
import org.openapis.openapi.models.shared.LicenseInput;
import org.openapis.openapi.models.shared.LicenseLicenseTypeEnum;
import org.openapis.openapi.models.shared.LicenseLifecycleStateEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            PutOrganisationsPartyIdLicensesProductIdRequest req = new PutOrganisationsPartyIdLicensesProductIdRequest("dolores",                 new LicenseInput() {{
                                licenseType = LicenseLicenseTypeEnum.AUSTRALIAN_FINANCIAL_SERVICES_LICENSE;
                                lifecycleState = LicenseLifecycleStateEnum.ISSUED;
                            }};, "dignissimos", "eaque");            

            PutOrganisationsPartyIdLicensesProductIdResponse res = sdk.organisationsLicenses.putOrganisationsPartyIdLicensesProductId(req);

            if (res.license != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
