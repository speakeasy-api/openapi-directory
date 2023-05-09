# partner

## Overview

Partner object represents your client.

### Available Operations

* [createPartner](#createpartner) - Create a partner
* [deletePartner](#deletepartner) - Delete a partner
* [getPartner](#getpartner) - Retrieve a partner
* [listPartner](#listpartner) - List all partners
* [updatePartner](#updatepartner) - Update a partner

## createPartner

Create a new partner. Returns a partner object if the create is succeded.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreatePartnerResponse;
import org.openapis.openapi.models.shared.Address;
import org.openapis.openapi.models.shared.CountryEnum;
import org.openapis.openapi.models.shared.PartnerUpsert;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("voluptatibus") {{
                    apiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            org.openapis.openapi.models.shared.PartnerUpsert req = new PartnerUpsert(                new Address("vero", "nihil", CountryEnum.LC, "voluptatibus");, "ipsa") {{
                accountNumber = "omnis";
                emails = new String[]{{
                    add("cum"),
                    add("perferendis"),
                }};
                generalLedgerNumber = "doloremque";
                iban = "reprehenderit";
                phone = "913-441-6384 x902";
                swift = "quidem";
                taxcode = "molestias";
            }};            

            CreatePartnerResponse res = sdk.partner.createPartner(req);

            if (res.partner != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## deletePartner

Delete an existing partner.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeletePartnerRequest;
import org.openapis.openapi.models.operations.DeletePartnerResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("excepturi") {{
                    apiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            DeletePartnerRequest req = new DeletePartnerRequest(865103L);            

            DeletePartnerResponse res = sdk.partner.deletePartner(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getPartner

Retrieves the details of an existing partner.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetPartnerRequest;
import org.openapis.openapi.models.operations.GetPartnerResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("modi") {{
                    apiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetPartnerRequest req = new GetPartnerRequest(508969L);            

            GetPartnerResponse res = sdk.partner.getPartner(req);

            if (res.partner != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listPartner

Returns a list of your partners. The partners are returned sorted by creation date, with the most recent partners appearing first.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListPartnerRequest;
import org.openapis.openapi.models.operations.ListPartnerResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("rem") {{
                    apiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            ListPartnerRequest req = new ListPartnerRequest() {{
                page = 916723L;
                perPage = 93940L;
            }};            

            ListPartnerResponse res = sdk.partner.listPartner(req);

            if (res.partnerList != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## updatePartner

Update an existing partner. Returns a partner object if the update is succeded.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdatePartnerRequest;
import org.openapis.openapi.models.operations.UpdatePartnerResponse;
import org.openapis.openapi.models.shared.Address;
import org.openapis.openapi.models.shared.CountryEnum;
import org.openapis.openapi.models.shared.PartnerUpsert;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("repudiandae") {{
                    apiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            UpdatePartnerRequest req = new UpdatePartnerRequest(                new PartnerUpsert(                new Address("sint", "veritatis", CountryEnum.UY, "incidunt");, "enim") {{
                                accountNumber = "consequatur";
                                emails = new String[]{{
                                    add("quibusdam"),
                                    add("explicabo"),
                                    add("deserunt"),
                                }};
                                generalLedgerNumber = "distinctio";
                                iban = "quibusdam";
                                phone = "413-650-1830 x165";
                                swift = "tempora";
                                taxcode = "facilis";
                            }};, 735194L);            

            UpdatePartnerResponse res = sdk.partner.updatePartner(req);

            if (res.partner != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
