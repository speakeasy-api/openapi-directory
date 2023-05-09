# organisationsElectronicAddresses

## Overview

The registry maintains information about an organisation's contact details for administrative purposes.

  Including:
  - an email address
  - a mobile number


### Available Operations

* [deleteOrganisationsPartyIdElectronicAddressesAddressId](#deleteorganisationspartyidelectronicaddressesaddressid) - Delete an electronic address
* [getOrganisationsPartyIdElectronicAddresses](#getorganisationspartyidelectronicaddresses) - Retrieve a list of electronic addresses
* [getOrganisationsPartyIdElectronicAddressesAddressId](#getorganisationspartyidelectronicaddressesaddressid) - Retrieve an electronic address
* [postOrganisationsPartyIdElectronicAddresses](#postorganisationspartyidelectronicaddresses) - Create an electronic address
* [putOrganisationsPartyIdElectronicAddressesAddressId](#putorganisationspartyidelectronicaddressesaddressid) - Update an electronic address

## deleteOrganisationsPartyIdElectronicAddressesAddressId

Delete an electronic address


### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteOrganisationsPartyIdElectronicAddressesAddressIdRequest;
import org.openapis.openapi.models.operations.DeleteOrganisationsPartyIdElectronicAddressesAddressIdResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DeleteOrganisationsPartyIdElectronicAddressesAddressIdRequest req = new DeleteOrganisationsPartyIdElectronicAddressesAddressIdRequest("expedita", "nihil", "repellat");            

            DeleteOrganisationsPartyIdElectronicAddressesAddressIdResponse res = sdk.organisationsElectronicAddresses.deleteOrganisationsPartyIdElectronicAddressesAddressId(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getOrganisationsPartyIdElectronicAddresses

Retrieve a list of electronic addresses

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetOrganisationsPartyIdElectronicAddressesRequest;
import org.openapis.openapi.models.operations.GetOrganisationsPartyIdElectronicAddressesResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetOrganisationsPartyIdElectronicAddressesRequest req = new GetOrganisationsPartyIdElectronicAddressesRequest("quibusdam", "sed");            

            GetOrganisationsPartyIdElectronicAddressesResponse res = sdk.organisationsElectronicAddresses.getOrganisationsPartyIdElectronicAddresses(req);

            if (res.electronicAddresses != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getOrganisationsPartyIdElectronicAddressesAddressId

Retrieve an electronic address


### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetOrganisationsPartyIdElectronicAddressesAddressIdRequest;
import org.openapis.openapi.models.operations.GetOrganisationsPartyIdElectronicAddressesAddressIdResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetOrganisationsPartyIdElectronicAddressesAddressIdRequest req = new GetOrganisationsPartyIdElectronicAddressesAddressIdRequest("saepe", "pariatur", "accusantium");            

            GetOrganisationsPartyIdElectronicAddressesAddressIdResponse res = sdk.organisationsElectronicAddresses.getOrganisationsPartyIdElectronicAddressesAddressId(req);

            if (res.electronicAddress != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postOrganisationsPartyIdElectronicAddresses

Create an electronic address


### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PostOrganisationsPartyIdElectronicAddressesRequest;
import org.openapis.openapi.models.operations.PostOrganisationsPartyIdElectronicAddressesResponse;
import org.openapis.openapi.models.shared.ElectronicAddressElectronicAddressTypeEnum;
import org.openapis.openapi.models.shared.ElectronicAddressInput;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            PostOrganisationsPartyIdElectronicAddressesRequest req = new PostOrganisationsPartyIdElectronicAddressesRequest("consequuntur",                 new ElectronicAddressInput() {{
                                areaCode = "02";
                                countryPrefix = "61";
                                electronicAddressType = ElectronicAddressElectronicAddressTypeEnum.LANDLINE;
                                email = "Catalina_Casper86@yahoo.com";
                                extension = "maxime";
                                number = "62164453";
                                url = "ea";
                            }};, "excepturi");            

            PostOrganisationsPartyIdElectronicAddressesResponse res = sdk.organisationsElectronicAddresses.postOrganisationsPartyIdElectronicAddresses(req);

            if (res.electronicAddress != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## putOrganisationsPartyIdElectronicAddressesAddressId

Update an electronic address


### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PutOrganisationsPartyIdElectronicAddressesAddressIdRequest;
import org.openapis.openapi.models.operations.PutOrganisationsPartyIdElectronicAddressesAddressIdResponse;
import org.openapis.openapi.models.shared.ElectronicAddressElectronicAddressTypeEnum;
import org.openapis.openapi.models.shared.ElectronicAddressInput;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            PutOrganisationsPartyIdElectronicAddressesAddressIdRequest req = new PutOrganisationsPartyIdElectronicAddressesAddressIdRequest("odit", "ea",                 new ElectronicAddressInput() {{
                                areaCode = "02";
                                countryPrefix = "61";
                                electronicAddressType = ElectronicAddressElectronicAddressTypeEnum.EMAIL;
                                email = "Willow.Predovic@gmail.com";
                                extension = "autem";
                                number = "62164453";
                                url = "nam";
                            }};, "eaque");            

            PutOrganisationsPartyIdElectronicAddressesAddressIdResponse res = sdk.organisationsElectronicAddresses.putOrganisationsPartyIdElectronicAddressesAddressId(req);

            if (res.electronicAddress != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
