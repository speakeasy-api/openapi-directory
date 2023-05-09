# individualsElectronicAddresses

## Overview

The registry maintains information about an individual's contact details for administrative purposes.

  Including:
  - an email address
  - a mobile number


### Available Operations

* [deleteIndividualsPartyIdElectronicAddressesAddressId](#deleteindividualspartyidelectronicaddressesaddressid) - Delete an electronic address
* [getIndividualsPartyIdElectronicAddresses](#getindividualspartyidelectronicaddresses) - Retrieve a list of electronic addresses
* [getIndividualsPartyIdElectronicAddressesAddressId](#getindividualspartyidelectronicaddressesaddressid) - Retrieve an electronic address
* [postIndividualsPartyIdElectronicAddresses](#postindividualspartyidelectronicaddresses) - Create an electronic address
* [putIndividualsPartyIdElectronicAddressesAddressId](#putindividualspartyidelectronicaddressesaddressid) - Update an electronic address

## deleteIndividualsPartyIdElectronicAddressesAddressId

Delete an electronic address


### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteIndividualsPartyIdElectronicAddressesAddressIdRequest;
import org.openapis.openapi.models.operations.DeleteIndividualsPartyIdElectronicAddressesAddressIdResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DeleteIndividualsPartyIdElectronicAddressesAddressIdRequest req = new DeleteIndividualsPartyIdElectronicAddressesAddressIdRequest("commodi", "quam", "molestiae");            

            DeleteIndividualsPartyIdElectronicAddressesAddressIdResponse res = sdk.individualsElectronicAddresses.deleteIndividualsPartyIdElectronicAddressesAddressId(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getIndividualsPartyIdElectronicAddresses

Retrieve a list of electronic addresses

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetIndividualsPartyIdElectronicAddressesRequest;
import org.openapis.openapi.models.operations.GetIndividualsPartyIdElectronicAddressesResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetIndividualsPartyIdElectronicAddressesRequest req = new GetIndividualsPartyIdElectronicAddressesRequest("velit", "error");            

            GetIndividualsPartyIdElectronicAddressesResponse res = sdk.individualsElectronicAddresses.getIndividualsPartyIdElectronicAddresses(req);

            if (res.electronicAddresses != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getIndividualsPartyIdElectronicAddressesAddressId

Retrieve an electronic address


### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetIndividualsPartyIdElectronicAddressesAddressIdRequest;
import org.openapis.openapi.models.operations.GetIndividualsPartyIdElectronicAddressesAddressIdResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetIndividualsPartyIdElectronicAddressesAddressIdRequest req = new GetIndividualsPartyIdElectronicAddressesAddressIdRequest("quia", "quis", "vitae");            

            GetIndividualsPartyIdElectronicAddressesAddressIdResponse res = sdk.individualsElectronicAddresses.getIndividualsPartyIdElectronicAddressesAddressId(req);

            if (res.electronicAddress != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postIndividualsPartyIdElectronicAddresses

Create an electronic address


### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PostIndividualsPartyIdElectronicAddressesRequest;
import org.openapis.openapi.models.operations.PostIndividualsPartyIdElectronicAddressesResponse;
import org.openapis.openapi.models.shared.ElectronicAddressElectronicAddressTypeEnum;
import org.openapis.openapi.models.shared.ElectronicAddressInput;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            PostIndividualsPartyIdElectronicAddressesRequest req = new PostIndividualsPartyIdElectronicAddressesRequest("laborum",                 new ElectronicAddressInput() {{
                                areaCode = "02";
                                countryPrefix = "61";
                                electronicAddressType = ElectronicAddressElectronicAddressTypeEnum.MOBILE;
                                email = "Britney94@gmail.com";
                                extension = "ipsam";
                                number = "62164453";
                                url = "id";
                            }};, "possimus");            

            PostIndividualsPartyIdElectronicAddressesResponse res = sdk.individualsElectronicAddresses.postIndividualsPartyIdElectronicAddresses(req);

            if (res.electronicAddress != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## putIndividualsPartyIdElectronicAddressesAddressId

Update an electronic address


### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PutIndividualsPartyIdElectronicAddressesAddressIdRequest;
import org.openapis.openapi.models.operations.PutIndividualsPartyIdElectronicAddressesAddressIdResponse;
import org.openapis.openapi.models.shared.ElectronicAddressElectronicAddressTypeEnum;
import org.openapis.openapi.models.shared.ElectronicAddressInput;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            PutIndividualsPartyIdElectronicAddressesAddressIdRequest req = new PutIndividualsPartyIdElectronicAddressesAddressIdRequest("aut", "quasi",                 new ElectronicAddressInput() {{
                                areaCode = "02";
                                countryPrefix = "61";
                                electronicAddressType = ElectronicAddressElectronicAddressTypeEnum.MOBILE;
                                email = "Margie_Boyer87@hotmail.com";
                                extension = "nihil";
                                number = "62164453";
                                url = "praesentium";
                            }};, "voluptatibus");            

            PutIndividualsPartyIdElectronicAddressesAddressIdResponse res = sdk.individualsElectronicAddresses.putIndividualsPartyIdElectronicAddressesAddressId(req);

            if (res.electronicAddress != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
