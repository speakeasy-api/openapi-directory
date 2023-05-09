# individualsAddresses

## Overview

The registry maintains information about an individual's contact details for administrative purposes.

  Including:
  - an address for the service of documents
  - a principal place of business address


### Available Operations

* [deleteIndividualsPartyIdAddressesAddressId](#deleteindividualspartyidaddressesaddressid) - Delete an address
* [getIndividualsPartyIdAddresses](#getindividualspartyidaddresses) - Retrieve a list of addresses
* [getIndividualsPartyIdAddressesAddressId](#getindividualspartyidaddressesaddressid) - Retrieve an address
* [postIndividualsPartyIdAddresses](#postindividualspartyidaddresses) - Create an address
* [putIndividualsPartyIdAddressesAddressId](#putindividualspartyidaddressesaddressid) - Update an address

## deleteIndividualsPartyIdAddressesAddressId

Delete an address


### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteIndividualsPartyIdAddressesAddressIdRequest;
import org.openapis.openapi.models.operations.DeleteIndividualsPartyIdAddressesAddressIdResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DeleteIndividualsPartyIdAddressesAddressIdRequest req = new DeleteIndividualsPartyIdAddressesAddressIdRequest("architecto", "ipsa", "reiciendis");            

            DeleteIndividualsPartyIdAddressesAddressIdResponse res = sdk.individualsAddresses.deleteIndividualsPartyIdAddressesAddressId(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getIndividualsPartyIdAddresses

Retrieve a list of addresses

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetIndividualsPartyIdAddressesRequest;
import org.openapis.openapi.models.operations.GetIndividualsPartyIdAddressesResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetIndividualsPartyIdAddressesRequest req = new GetIndividualsPartyIdAddressesRequest("est", "mollitia");            

            GetIndividualsPartyIdAddressesResponse res = sdk.individualsAddresses.getIndividualsPartyIdAddresses(req);

            if (res.addresses != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getIndividualsPartyIdAddressesAddressId

Retrieve an address


### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetIndividualsPartyIdAddressesAddressIdRequest;
import org.openapis.openapi.models.operations.GetIndividualsPartyIdAddressesAddressIdResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetIndividualsPartyIdAddressesAddressIdRequest req = new GetIndividualsPartyIdAddressesAddressIdRequest("laborum", "dolores", "dolorem");            

            GetIndividualsPartyIdAddressesAddressIdResponse res = sdk.individualsAddresses.getIndividualsPartyIdAddressesAddressId(req);

            if (res.address != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postIndividualsPartyIdAddresses

Create an address


### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PostIndividualsPartyIdAddressesRequest;
import org.openapis.openapi.models.operations.PostIndividualsPartyIdAddressesResponse;
import org.openapis.openapi.models.shared.AddressInput;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            PostIndividualsPartyIdAddressesRequest req = new PostIndividualsPartyIdAddressesRequest(                new AddressInput() {{
                                city = "Canberra";
                                country = "Australia";
                                line1 = "Level 7";
                                line2 = "21 Genge Street";
                                line3 = "corporis";
                                name = "Kembery Building";
                                postalCode = "2601";
                                suburb = "Civic";
                            }};, "explicabo", "nobis");            

            PostIndividualsPartyIdAddressesResponse res = sdk.individualsAddresses.postIndividualsPartyIdAddresses(req);

            if (res.address != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## putIndividualsPartyIdAddressesAddressId

Update an address


### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PutIndividualsPartyIdAddressesAddressIdRequest;
import org.openapis.openapi.models.operations.PutIndividualsPartyIdAddressesAddressIdResponse;
import org.openapis.openapi.models.shared.AddressInput;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            PutIndividualsPartyIdAddressesAddressIdRequest req = new PutIndividualsPartyIdAddressesAddressIdRequest("enim",                 new AddressInput() {{
                                city = "Canberra";
                                country = "Australia";
                                line1 = "Level 7";
                                line2 = "21 Genge Street";
                                line3 = "omnis";
                                name = "Kembery Building";
                                postalCode = "2601";
                                suburb = "Civic";
                            }};, "nemo", "minima");            

            PutIndividualsPartyIdAddressesAddressIdResponse res = sdk.individualsAddresses.putIndividualsPartyIdAddressesAddressId(req);

            if (res.address != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
