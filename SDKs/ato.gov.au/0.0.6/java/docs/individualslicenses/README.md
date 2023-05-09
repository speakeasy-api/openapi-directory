# individualsLicenses

## Overview

If you carry on a business you may need to hold a licence.

  For example, if you provide financial services, you are required to hold an Australian Financial
  Services (AFS) licence.


### Available Operations

* [deleteIndividualsPartyIdLicensesProductId](#deleteindividualspartyidlicensesproductid) - Delete a license
* [getIndividualsPartyIdLicenses](#getindividualspartyidlicenses) - Retrieve a list of licenses
* [getIndividualsPartyIdLicensesProductId](#getindividualspartyidlicensesproductid) - Retrieve a license
* [postIndividualsPartyIdLicenses](#postindividualspartyidlicenses) - Create a license
* [putIndividualsPartyIdLicensesProductId](#putindividualspartyidlicensesproductid) - Update a license

## deleteIndividualsPartyIdLicensesProductId

Delete a license


### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteIndividualsPartyIdLicensesProductIdRequest;
import org.openapis.openapi.models.operations.DeleteIndividualsPartyIdLicensesProductIdResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DeleteIndividualsPartyIdLicensesProductIdRequest req = new DeleteIndividualsPartyIdLicensesProductIdRequest("ipsa", "omnis", "voluptate");            

            DeleteIndividualsPartyIdLicensesProductIdResponse res = sdk.individualsLicenses.deleteIndividualsPartyIdLicensesProductId(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getIndividualsPartyIdLicenses

Retrieve a list of licenses

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetIndividualsPartyIdLicensesRequest;
import org.openapis.openapi.models.operations.GetIndividualsPartyIdLicensesResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetIndividualsPartyIdLicensesRequest req = new GetIndividualsPartyIdLicensesRequest("cum", "perferendis");            

            GetIndividualsPartyIdLicensesResponse res = sdk.individualsLicenses.getIndividualsPartyIdLicenses(req);

            if (res.licenses != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getIndividualsPartyIdLicensesProductId

Retrieve a license


### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetIndividualsPartyIdLicensesProductIdRequest;
import org.openapis.openapi.models.operations.GetIndividualsPartyIdLicensesProductIdResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetIndividualsPartyIdLicensesProductIdRequest req = new GetIndividualsPartyIdLicensesProductIdRequest("doloremque", "reprehenderit", "ut");            

            GetIndividualsPartyIdLicensesProductIdResponse res = sdk.individualsLicenses.getIndividualsPartyIdLicensesProductId(req);

            if (res.license != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postIndividualsPartyIdLicenses

Create a license


### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PostIndividualsPartyIdLicensesRequest;
import org.openapis.openapi.models.operations.PostIndividualsPartyIdLicensesResponse;
import org.openapis.openapi.models.shared.LicenseInput;
import org.openapis.openapi.models.shared.LicenseLicenseTypeEnum;
import org.openapis.openapi.models.shared.LicenseLifecycleStateEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            PostIndividualsPartyIdLicensesRequest req = new PostIndividualsPartyIdLicensesRequest("maiores",                 new LicenseInput() {{
                                licenseType = LicenseLicenseTypeEnum.AUSTRALIAN_FINANCIAL_SERVICES_LICENSE;
                                lifecycleState = LicenseLifecycleStateEnum.EXPIRED;
                            }};, "dolore");            

            PostIndividualsPartyIdLicensesResponse res = sdk.individualsLicenses.postIndividualsPartyIdLicenses(req);

            if (res.license != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## putIndividualsPartyIdLicensesProductId

Update a license


### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PutIndividualsPartyIdLicensesProductIdRequest;
import org.openapis.openapi.models.operations.PutIndividualsPartyIdLicensesProductIdResponse;
import org.openapis.openapi.models.shared.LicenseInput;
import org.openapis.openapi.models.shared.LicenseLicenseTypeEnum;
import org.openapis.openapi.models.shared.LicenseLifecycleStateEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            PutIndividualsPartyIdLicensesProductIdRequest req = new PutIndividualsPartyIdLicensesProductIdRequest("iusto",                 new LicenseInput() {{
                                licenseType = LicenseLicenseTypeEnum.AUSTRALIAN_FINANCIAL_SERVICES_LICENSE;
                                lifecycleState = LicenseLifecycleStateEnum.PENDING_APPROVAL;
                            }};, "enim", "accusamus");            

            PutIndividualsPartyIdLicensesProductIdResponse res = sdk.individualsLicenses.putIndividualsPartyIdLicensesProductId(req);

            if (res.license != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
