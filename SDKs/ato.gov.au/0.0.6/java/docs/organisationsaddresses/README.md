# organisationsAddresses

## Overview

The registry maintains information about an organisation's contact details for administrative purposes.

  Including:
  - an address for the service of documents
  - a principal place of business address


### Available Operations

* [deleteOrganisationsPartyIdAddressesAddressId](#deleteorganisationspartyidaddressesaddressid) - Delete an address
* [getOrganisationsPartyIdAddresses](#getorganisationspartyidaddresses) - Retrieve a list of addresses
* [getOrganisationsPartyIdAddressesAddressId](#getorganisationspartyidaddressesaddressid) - Retrieve an address
* [postOrganisationsPartyIdAddresses](#postorganisationspartyidaddresses) - Create an address
* [putOrganisationsPartyIdAddressesAddressId](#putorganisationspartyidaddressesaddressid) - Update an address

## deleteOrganisationsPartyIdAddressesAddressId

Delete an address


### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteOrganisationsPartyIdAddressesAddressIdRequest;
import org.openapis.openapi.models.operations.DeleteOrganisationsPartyIdAddressesAddressIdResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DeleteOrganisationsPartyIdAddressesAddressIdRequest req = new DeleteOrganisationsPartyIdAddressesAddressIdRequest("magnam", "et", "excepturi");            

            DeleteOrganisationsPartyIdAddressesAddressIdResponse res = sdk.organisationsAddresses.deleteOrganisationsPartyIdAddressesAddressId(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getOrganisationsPartyIdAddresses

Retrieve a list of addresses

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetOrganisationsPartyIdAddressesRequest;
import org.openapis.openapi.models.operations.GetOrganisationsPartyIdAddressesResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetOrganisationsPartyIdAddressesRequest req = new GetOrganisationsPartyIdAddressesRequest("ullam", "provident");            

            GetOrganisationsPartyIdAddressesResponse res = sdk.organisationsAddresses.getOrganisationsPartyIdAddresses(req);

            if (res.addresses != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getOrganisationsPartyIdAddressesAddressId

Retrieve an address


### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetOrganisationsPartyIdAddressesAddressIdRequest;
import org.openapis.openapi.models.operations.GetOrganisationsPartyIdAddressesAddressIdResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetOrganisationsPartyIdAddressesAddressIdRequest req = new GetOrganisationsPartyIdAddressesAddressIdRequest("quos", "sint", "accusantium");            

            GetOrganisationsPartyIdAddressesAddressIdResponse res = sdk.organisationsAddresses.getOrganisationsPartyIdAddressesAddressId(req);

            if (res.address != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postOrganisationsPartyIdAddresses

Create an address


### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PostOrganisationsPartyIdAddressesRequest;
import org.openapis.openapi.models.operations.PostOrganisationsPartyIdAddressesResponse;
import org.openapis.openapi.models.shared.AddressInput;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            PostOrganisationsPartyIdAddressesRequest req = new PostOrganisationsPartyIdAddressesRequest(                new AddressInput() {{
                                city = "Canberra";
                                country = "Australia";
                                line1 = "Level 7";
                                line2 = "21 Genge Street";
                                line3 = "mollitia";
                                name = "Kembery Building";
                                postalCode = "2601";
                                suburb = "Civic";
                            }};, "reiciendis", "mollitia");            

            PostOrganisationsPartyIdAddressesResponse res = sdk.organisationsAddresses.postOrganisationsPartyIdAddresses(req);

            if (res.address != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## putOrganisationsPartyIdAddressesAddressId

Update an address


### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PutOrganisationsPartyIdAddressesAddressIdRequest;
import org.openapis.openapi.models.operations.PutOrganisationsPartyIdAddressesAddressIdResponse;
import org.openapis.openapi.models.shared.AddressInput;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            PutOrganisationsPartyIdAddressesAddressIdRequest req = new PutOrganisationsPartyIdAddressesAddressIdRequest("ad",                 new AddressInput() {{
                                city = "Canberra";
                                country = "Australia";
                                line1 = "Level 7";
                                line2 = "21 Genge Street";
                                line3 = "eum";
                                name = "Kembery Building";
                                postalCode = "2601";
                                suburb = "Civic";
                            }};, "dolor", "necessitatibus");            

            PutOrganisationsPartyIdAddressesAddressIdResponse res = sdk.organisationsAddresses.putOrganisationsPartyIdAddressesAddressId(req);

            if (res.address != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
