# client

### Available Operations

* [clientApiAll](#clientapiall) - Return all clients for the account
* [clientApiCanDelete](#clientapicandelete) - Check if the provided client can be deleted
* [clientApiDeleteForm](#clientapideleteform) - Delete an existing client
* [clientApiDeleteJson](#clientapideletejson) - Delete an existing client
* [clientApiDeleteRaw](#clientapideleteraw) - Delete an existing client
* [clientApiDetails](#clientapidetails) - Return client details. Activities and invoices included.
* [clientApiNewForm](#clientapinewform) - Create a client
* [clientApiNewJson](#clientapinewjson) - Create a client
* [clientApiNewRaw](#clientapinewraw) - Create a client
* [clientApiUpdateForm](#clientapiupdateform) - Update an existing client
* [clientApiUpdateJson](#clientapiupdatejson) - Update an existing client
* [clientApiUpdateRaw](#clientapiupdateraw) - Update an existing client

## clientApiAll

Return all clients for the account

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ClientApiAllRequest;
import org.openapis.openapi.models.operations.ClientApiAllResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ClientApiAllRequest req = new ClientApiAllRequest("distinctio", "quibusdam");            

            ClientApiAllResponse res = sdk.client.clientApiAll(req);

            if (res.clientDetailsApiModels != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## clientApiCanDelete

Check if the provided client can be deleted

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ClientApiCanDeleteRequest;
import org.openapis.openapi.models.operations.ClientApiCanDeleteResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ClientApiCanDeleteRequest req = new ClientApiCanDeleteRequest(602763, "nulla", "corrupti");            

            ClientApiCanDeleteResponse res = sdk.client.clientApiCanDelete(req);

            if (res.clientApiCanDelete200ApplicationJSONBoolean != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## clientApiDeleteForm

Delete an existing client

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ClientApiDeleteFormRequest;
import org.openapis.openapi.models.operations.ClientApiDeleteFormResponse;
import org.openapis.openapi.models.shared.ClientDeleteApiModel;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ClientApiDeleteFormRequest req = new ClientApiDeleteFormRequest(                new ClientDeleteApiModel() {{
                                id = 847252;
                            }};, "vel", "error");            

            ClientApiDeleteFormResponse res = sdk.client.clientApiDeleteForm(req);

            if (res.clientApiDeleteForm200ApplicationJSONInt32Integer != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## clientApiDeleteJson

Delete an existing client

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ClientApiDeleteJsonRequest;
import org.openapis.openapi.models.operations.ClientApiDeleteJsonResponse;
import org.openapis.openapi.models.shared.ClientDeleteApiModel;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ClientApiDeleteJsonRequest req = new ClientApiDeleteJsonRequest(                new ClientDeleteApiModel() {{
                                id = 645894;
                            }};, "suscipit", "iure");            

            ClientApiDeleteJsonResponse res = sdk.client.clientApiDeleteJson(req);

            if (res.clientApiDeleteJSON200ApplicationJSONInt32Integer != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## clientApiDeleteRaw

Delete an existing client

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ClientApiDeleteRawRequest;
import org.openapis.openapi.models.operations.ClientApiDeleteRawResponse;
import org.openapis.openapi.models.shared.ClientDeleteApiModel;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ClientApiDeleteRawRequest req = new ClientApiDeleteRawRequest("magnam".getBytes(), "debitis", "ipsa");            

            ClientApiDeleteRawResponse res = sdk.client.clientApiDeleteRaw(req);

            if (res.clientApiDeleteRaw200ApplicationJSONInt32Integer != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## clientApiDetails

Return client details. Activities and invoices included.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ClientApiDetailsRequest;
import org.openapis.openapi.models.operations.ClientApiDetailsResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ClientApiDetailsRequest req = new ClientApiDetailsRequest(963663, "tempora", "suscipit");            

            ClientApiDetailsResponse res = sdk.client.clientApiDetails(req);

            if (res.clientDetailsApiModel != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## clientApiNewForm

Create a client

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ClientApiNewFormRequest;
import org.openapis.openapi.models.operations.ClientApiNewFormResponse;
import org.openapis.openapi.models.shared.AdditionalClientEmailApiModel;
import org.openapis.openapi.models.shared.ClientCreateApiModel;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ClientApiNewFormRequest req = new ClientApiNewFormRequest(                new ClientCreateApiModel() {{
                                additionalEmails = new org.openapis.openapi.models.shared.AdditionalClientEmailApiModel[]{{
                                    add(new AdditionalClientEmailApiModel() {{
                                        email = "Randy_Lehner@hotmail.com";
                                    }}),
                                    add(new AdditionalClientEmailApiModel() {{
                                        email = "Tianna33@yahoo.com";
                                    }}),
                                }};
                                address = "60389 Connelly Trace";
                                clientCountryId = 870088;
                                clientCurrencyId = 978619;
                                companyRegistrationNumber = "molestiae";
                                defaultDueDateInDays = 799159;
                                email = "Jakayla_Lebsack11@hotmail.com";
                                name = "Luke McCullough";
                                phoneNumber = "hic";
                                uiLanguageId = 758616;
                                vat = "totam";
                            }};, "beatae", "commodi");            

            ClientApiNewFormResponse res = sdk.client.clientApiNewForm(req);

            if (res.clientApiNewForm200ApplicationJSONInt32Integer != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## clientApiNewJson

Create a client

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ClientApiNewJsonRequest;
import org.openapis.openapi.models.operations.ClientApiNewJsonResponse;
import org.openapis.openapi.models.shared.AdditionalClientEmailApiModel;
import org.openapis.openapi.models.shared.ClientCreateApiModel;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ClientApiNewJsonRequest req = new ClientApiNewJsonRequest(                new ClientCreateApiModel() {{
                                additionalEmails = new org.openapis.openapi.models.shared.AdditionalClientEmailApiModel[]{{
                                    add(new AdditionalClientEmailApiModel() {{
                                        email = "Christy.Ryan21@gmail.com";
                                    }}),
                                    add(new AdditionalClientEmailApiModel() {{
                                        email = "Brianne61@yahoo.com";
                                    }}),
                                }};
                                address = "62639 Parker Lake";
                                clientCountryId = 359508;
                                clientCurrencyId = 613064;
                                companyRegistrationNumber = "iure";
                                defaultDueDateInDays = 902349;
                                email = "Baby_Beier65@hotmail.com";
                                name = "Ernest Ebert";
                                phoneNumber = "nobis";
                                uiLanguageId = 315428;
                                vat = "omnis";
                            }};, "nemo", "minima");            

            ClientApiNewJsonResponse res = sdk.client.clientApiNewJson(req);

            if (res.clientApiNewJSON200ApplicationJSONInt32Integer != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## clientApiNewRaw

Create a client

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ClientApiNewRawRequest;
import org.openapis.openapi.models.operations.ClientApiNewRawResponse;
import org.openapis.openapi.models.shared.AdditionalClientEmailApiModel;
import org.openapis.openapi.models.shared.ClientCreateApiModel;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ClientApiNewRawRequest req = new ClientApiNewRawRequest("excepturi".getBytes(), "accusantium", "iure");            

            ClientApiNewRawResponse res = sdk.client.clientApiNewRaw(req);

            if (res.clientApiNewRaw200ApplicationJSONInt32Integer != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## clientApiUpdateForm

Update an existing client

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ClientApiUpdateFormRequest;
import org.openapis.openapi.models.operations.ClientApiUpdateFormResponse;
import org.openapis.openapi.models.shared.AdditionalClientEmailApiModel;
import org.openapis.openapi.models.shared.ClientUpdateApiModel;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ClientApiUpdateFormRequest req = new ClientApiUpdateFormRequest(                new ClientUpdateApiModel() {{
                                additionalEmails = new org.openapis.openapi.models.shared.AdditionalClientEmailApiModel[]{{
                                    add(new AdditionalClientEmailApiModel() {{
                                        email = "Veronica.Brakus@hotmail.com";
                                    }}),
                                    add(new AdditionalClientEmailApiModel() {{
                                        email = "Caroline_Ziemann@yahoo.com";
                                    }}),
                                    add(new AdditionalClientEmailApiModel() {{
                                        email = "Harvey.Konopelski@gmail.com";
                                    }}),
                                }};
                                address = "1316 Hamill Cove";
                                clientCountryId = 778346;
                                clientCurrencyId = 196582;
                                companyRegistrationNumber = "tenetur";
                                defaultDueDateInDays = 368725;
                                email = "Reid62@yahoo.com";
                                id = 837945;
                                name = "Ryan Witting";
                                phoneNumber = "nihil";
                                uiLanguageId = 509624;
                                vat = "voluptatibus";
                            }};, "ipsa", "omnis");            

            ClientApiUpdateFormResponse res = sdk.client.clientApiUpdateForm(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## clientApiUpdateJson

Update an existing client

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ClientApiUpdateJsonRequest;
import org.openapis.openapi.models.operations.ClientApiUpdateJsonResponse;
import org.openapis.openapi.models.shared.AdditionalClientEmailApiModel;
import org.openapis.openapi.models.shared.ClientUpdateApiModel;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ClientApiUpdateJsonRequest req = new ClientApiUpdateJsonRequest(                new ClientUpdateApiModel() {{
                                additionalEmails = new org.openapis.openapi.models.shared.AdditionalClientEmailApiModel[]{{
                                    add(new AdditionalClientEmailApiModel() {{
                                        email = "Aiyana.Batz@hotmail.com";
                                    }}),
                                    add(new AdditionalClientEmailApiModel() {{
                                        email = "Blanche48@hotmail.com";
                                    }}),
                                }};
                                address = "63849 Curt Radial";
                                clientCountryId = 565189;
                                clientCurrencyId = 566602;
                                companyRegistrationNumber = "pariatur";
                                defaultDueDateInDays = 265389;
                                email = "Judah92@yahoo.com";
                                id = 575947;
                                name = "Patti Gottlieb MD";
                                phoneNumber = "quibusdam";
                                uiLanguageId = 131797;
                                vat = "deserunt";
                            }};, "distinctio", "quibusdam");            

            ClientApiUpdateJsonResponse res = sdk.client.clientApiUpdateJson(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## clientApiUpdateRaw

Update an existing client

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ClientApiUpdateRawRequest;
import org.openapis.openapi.models.operations.ClientApiUpdateRawResponse;
import org.openapis.openapi.models.shared.AdditionalClientEmailApiModel;
import org.openapis.openapi.models.shared.ClientUpdateApiModel;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ClientApiUpdateRawRequest req = new ClientApiUpdateRawRequest("labore".getBytes(), "modi", "qui");            

            ClientApiUpdateRawResponse res = sdk.client.clientApiUpdateRaw(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
