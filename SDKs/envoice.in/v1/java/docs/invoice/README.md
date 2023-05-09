# invoice

### Available Operations

* [invoiceApiAll](#invoiceapiall) - Return all invoices for the account
* [invoiceApiChangeStatusForm](#invoiceapichangestatusform) - Change invoice status
* [invoiceApiChangeStatusJson](#invoiceapichangestatusjson) - Change invoice status
* [invoiceApiChangeStatusRaw](#invoiceapichangestatusraw) - Change invoice status
* [invoiceApiDeleteForm](#invoiceapideleteform) - Delete an existing invoice
* [invoiceApiDeleteJson](#invoiceapideletejson) - Delete an existing invoice
* [invoiceApiDeleteRaw](#invoiceapideleteraw) - Delete an existing invoice
* [invoiceApiDetails](#invoiceapidetails) - Return invoice data
* [invoiceApiNewForm](#invoiceapinewform) - Create an invoice
* [invoiceApiNewJson](#invoiceapinewjson) - Create an invoice
* [invoiceApiNewRaw](#invoiceapinewraw) - Create an invoice
* [invoiceApiPdf](#invoiceapipdf) - Return the PDF for the invoice
* [invoiceApiSendToAccountantForm](#invoiceapisendtoaccountantform) - Send the provided invoice to the accountant
* [invoiceApiSendToAccountantJson](#invoiceapisendtoaccountantjson) - Send the provided invoice to the accountant
* [invoiceApiSendToAccountantRaw](#invoiceapisendtoaccountantraw) - Send the provided invoice to the accountant
* [invoiceApiSendToClientForm](#invoiceapisendtoclientform) - Send the provided invoice to the client
* [invoiceApiSendToClientJson](#invoiceapisendtoclientjson) - Send the provided invoice to the client
* [invoiceApiSendToClientRaw](#invoiceapisendtoclientraw) - Send the provided invoice to the client
* [invoiceApiStatus](#invoiceapistatus) - Retrieve the status of the invoice
* [invoiceApiUpdateForm](#invoiceapiupdateform) - Update an existing invoice
* [invoiceApiUpdateJson](#invoiceapiupdatejson) - Update an existing invoice
* [invoiceApiUpdateRaw](#invoiceapiupdateraw) - Update an existing invoice
* [invoiceApiUri](#invoiceapiuri) - Return the unique url to the client's invoice
* [getApiInvoiceAllcategories](#getapiinvoiceallcategories) - Return all invoice categories for the account
* [postApiInvoiceDeletecategoryForm](#postapiinvoicedeletecategoryform) - Delete an existing invoice category
* [postApiInvoiceDeletecategoryJson](#postapiinvoicedeletecategoryjson) - Delete an existing invoice category
* [postApiInvoiceDeletecategoryRaw](#postapiinvoicedeletecategoryraw) - Delete an existing invoice category
* [postApiInvoiceNewcategoryForm](#postapiinvoicenewcategoryform) - Create an invoice category
* [postApiInvoiceNewcategoryJson](#postapiinvoicenewcategoryjson) - Create an invoice category
* [postApiInvoiceNewcategoryRaw](#postapiinvoicenewcategoryraw) - Create an invoice category
* [postApiInvoiceUpdatecategoryForm](#postapiinvoiceupdatecategoryform) - Update an existing invoice category
* [postApiInvoiceUpdatecategoryJson](#postapiinvoiceupdatecategoryjson) - Update an existing invoice category
* [postApiInvoiceUpdatecategoryRaw](#postapiinvoiceupdatecategoryraw) - Update an existing invoice category

## invoiceApiAll

Return all invoices for the account

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.InvoiceApiAllRequest;
import org.openapis.openapi.models.operations.InvoiceApiAllResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            InvoiceApiAllRequest req = new InvoiceApiAllRequest("delectus", "dolorem") {{
                queryOptionsPage = 292147;
                queryOptionsPageSize = 286915;
            }};            

            InvoiceApiAllResponse res = sdk.invoice.invoiceApiAll(req);

            if (res.listResultInvoiceDetailsApiModel != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## invoiceApiChangeStatusForm

Change invoice status

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.InvoiceApiChangeStatusFormRequest;
import org.openapis.openapi.models.operations.InvoiceApiChangeStatusFormResponse;
import org.openapis.openapi.models.shared.ChangeStatusApiModel;
import org.openapis.openapi.models.shared.ChangeStatusApiModelStatusEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            InvoiceApiChangeStatusFormRequest req = new InvoiceApiChangeStatusFormRequest(                new ChangeStatusApiModel() {{
                                id = 240829;
                                status = ChangeStatusApiModelStatusEnum.OVERDUE;
                            }};, "architecto", "quae");            

            InvoiceApiChangeStatusFormResponse res = sdk.invoice.invoiceApiChangeStatusForm(req);

            if (res.invoiceApiChangeStatusForm200ApplicationJSONBoolean != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## invoiceApiChangeStatusJson

Change invoice status

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.InvoiceApiChangeStatusJsonRequest;
import org.openapis.openapi.models.operations.InvoiceApiChangeStatusJsonResponse;
import org.openapis.openapi.models.shared.ChangeStatusApiModel;
import org.openapis.openapi.models.shared.ChangeStatusApiModelStatusEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            InvoiceApiChangeStatusJsonRequest req = new InvoiceApiChangeStatusJsonRequest(                new ChangeStatusApiModel() {{
                                id = 16429;
                                status = ChangeStatusApiModelStatusEnum.UNPAID;
                            }};, "itaque", "consequatur");            

            InvoiceApiChangeStatusJsonResponse res = sdk.invoice.invoiceApiChangeStatusJson(req);

            if (res.invoiceApiChangeStatusJSON200ApplicationJSONBoolean != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## invoiceApiChangeStatusRaw

Change invoice status

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.InvoiceApiChangeStatusRawRequest;
import org.openapis.openapi.models.operations.InvoiceApiChangeStatusRawResponse;
import org.openapis.openapi.models.shared.ChangeStatusApiModel;
import org.openapis.openapi.models.shared.ChangeStatusApiModelStatusEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            InvoiceApiChangeStatusRawRequest req = new InvoiceApiChangeStatusRawRequest("est".getBytes(), "repellendus", "porro");            

            InvoiceApiChangeStatusRawResponse res = sdk.invoice.invoiceApiChangeStatusRaw(req);

            if (res.invoiceApiChangeStatusRaw200ApplicationJSONBoolean != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## invoiceApiDeleteForm

Delete an existing invoice

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.InvoiceApiDeleteFormRequest;
import org.openapis.openapi.models.operations.InvoiceApiDeleteFormResponse;
import org.openapis.openapi.models.shared.InvoiceDeleteApiModel;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            InvoiceApiDeleteFormRequest req = new InvoiceApiDeleteFormRequest(                new InvoiceDeleteApiModel() {{
                                id = 984330;
                            }};, "ut", "facilis");            

            InvoiceApiDeleteFormResponse res = sdk.invoice.invoiceApiDeleteForm(req);

            if (res.invoiceApiDeleteForm200ApplicationJSONInt32Integer != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## invoiceApiDeleteJson

Delete an existing invoice

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.InvoiceApiDeleteJsonRequest;
import org.openapis.openapi.models.operations.InvoiceApiDeleteJsonResponse;
import org.openapis.openapi.models.shared.InvoiceDeleteApiModel;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            InvoiceApiDeleteJsonRequest req = new InvoiceApiDeleteJsonRequest(                new InvoiceDeleteApiModel() {{
                                id = 586410;
                            }};, "qui", "quae");            

            InvoiceApiDeleteJsonResponse res = sdk.invoice.invoiceApiDeleteJson(req);

            if (res.invoiceApiDeleteJSON200ApplicationJSONInt32Integer != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## invoiceApiDeleteRaw

Delete an existing invoice

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.InvoiceApiDeleteRawRequest;
import org.openapis.openapi.models.operations.InvoiceApiDeleteRawResponse;
import org.openapis.openapi.models.shared.InvoiceDeleteApiModel;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            InvoiceApiDeleteRawRequest req = new InvoiceApiDeleteRawRequest("laudantium".getBytes(), "odio", "occaecati");            

            InvoiceApiDeleteRawResponse res = sdk.invoice.invoiceApiDeleteRaw(req);

            if (res.invoiceApiDeleteRaw200ApplicationJSONInt32Integer != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## invoiceApiDetails

Return invoice data

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.InvoiceApiDetailsRequest;
import org.openapis.openapi.models.operations.InvoiceApiDetailsResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            InvoiceApiDetailsRequest req = new InvoiceApiDetailsRequest(977496, "quisquam", "vero");            

            InvoiceApiDetailsResponse res = sdk.invoice.invoiceApiDetails(req);

            if (res.invoiceFullDetailsApiModel != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## invoiceApiNewForm

Create an invoice

### Example Usage

```java
package hello.world;

import java.time.OffsetDateTime;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.InvoiceApiNewFormRequest;
import org.openapis.openapi.models.operations.InvoiceApiNewFormResponse;
import org.openapis.openapi.models.shared.InvoiceCreateApiModel;
import org.openapis.openapi.models.shared.InvoiceCreateApiModelStatusEnum;
import org.openapis.openapi.models.shared.InvoiceCreateAttachmentApiModel;
import org.openapis.openapi.models.shared.InvoiceCreateAttachmentApiModelTypeEnum;
import org.openapis.openapi.models.shared.InvoiceCreateItemApiModel;
import org.openapis.openapi.models.shared.InvoiceGatewayApiModel;
import org.openapis.openapi.models.shared.InvoiceRecurringApiModel;
import org.openapis.openapi.models.shared.InvoiceRecurringApiModelDayOfWeekEnum;
import org.openapis.openapi.models.shared.InvoiceRecurringApiModelRecurrancePatternEnum;
import org.openapis.openapi.models.shared.InvoiceRecurringApiModelStatusEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            InvoiceApiNewFormRequest req = new InvoiceApiNewFormRequest(                new InvoiceCreateApiModel() {{
                                attachments = new org.openapis.openapi.models.shared.InvoiceCreateAttachmentApiModel[]{{
                                    add(new InvoiceCreateAttachmentApiModel() {{
                                        link = "quis";
                                        obfuscatedFileName = "ipsum";
                                        originalFileName = "delectus";
                                        size = 455169L;
                                        type = InvoiceCreateAttachmentApiModelTypeEnum.EXTERNAL;
                                    }}),
                                    add(new InvoiceCreateAttachmentApiModel() {{
                                        link = "vero";
                                        obfuscatedFileName = "tenetur";
                                        originalFileName = "dignissimos";
                                        size = 941378L;
                                        type = InvoiceCreateAttachmentApiModelTypeEnum.UPLOADED;
                                    }}),
                                    add(new InvoiceCreateAttachmentApiModel() {{
                                        link = "quod";
                                        obfuscatedFileName = "odio";
                                        originalFileName = "similique";
                                        size = 708548L;
                                        type = InvoiceCreateAttachmentApiModelTypeEnum.UPLOADED;
                                    }}),
                                }};
                                clientId = 498140;
                                clonedFromId = 293020;
                                currencyId = 844550;
                                duedate = OffsetDateTime.parse("2022-06-02T04:41:10.492Z");
                                invoiceCategoryId = 617877;
                                issuedOn = OffsetDateTime.parse("2022-12-17T12:08:06.467Z");
                                items = new org.openapis.openapi.models.shared.InvoiceCreateItemApiModel[]{{
                                    add(new InvoiceCreateItemApiModel() {{
                                        cost = 3472.33;
                                        description = "nulla";
                                        discountPercentage = 1481.41;
                                        quantity = 7804.27;
                                        taxId = 981830;
                                        taxPercentage = 9850.33;
                                        workTypeId = 478370;
                                    }}),
                                    add(new InvoiceCreateItemApiModel() {{
                                        cost = 7535.7;
                                        description = "ducimus";
                                        discountPercentage = 40.48;
                                        quantity = 6394.73;
                                        taxId = 269479;
                                        taxPercentage = 3685.84;
                                        workTypeId = 410492;
                                    }}),
                                    add(new InvoiceCreateItemApiModel() {{
                                        cost = 1369;
                                        description = "vel";
                                        discountPercentage = 8221.18;
                                        quantity = 2978.42;
                                        taxId = 189848;
                                        taxPercentage = 4011.32;
                                        workTypeId = 511319;
                                    }}),
                                    add(new InvoiceCreateItemApiModel() {{
                                        cost = 1206.57;
                                        description = "dolor";
                                        discountPercentage = 9807;
                                        quantity = 978.44;
                                        taxId = 406120;
                                        taxPercentage = 8621.92;
                                        workTypeId = 569211;
                                    }}),
                                }};
                                notes = "voluptatibus";
                                number = "nostrum";
                                paymentGateways = new org.openapis.openapi.models.shared.InvoiceGatewayApiModel[]{{
                                    add(new InvoiceGatewayApiModel() {{
                                        name = "Elbert Jenkins";
                                    }}),
                                    add(new InvoiceGatewayApiModel() {{
                                        name = "Jeanne Bode";
                                    }}),
                                    add(new InvoiceGatewayApiModel() {{
                                        name = "Glenn Walter";
                                    }}),
                                    add(new InvoiceGatewayApiModel() {{
                                        name = "Mr. Elsa Reinger";
                                    }}),
                                }};
                                poNumber = "impedit";
                                recurringProfile = new InvoiceRecurringApiModel() {{
                                    dayOfMonth = 304582;
                                    dayOfWeek = InvoiceRecurringApiModelDayOfWeekEnum.MONDAY;
                                    dueDateInDays = 882860;
                                    endOfRecurrance = OffsetDateTime.parse("2022-10-01T12:32:41.161Z");
                                    month = 89603;
                                    recurrancePattern = InvoiceRecurringApiModelRecurrancePatternEnum.MONTHLY;
                                    recurranceValue = 672048;
                                    startOfRecurrance = OffsetDateTime.parse("2022-04-07T07:44:57.988Z");
                                    status = InvoiceRecurringApiModelStatusEnum.ACTIVE;
                                    title = "Ms.";
                                }};;
                                recurringProfileId = 752135;
                                shouldSendReminders = false;
                                status = InvoiceCreateApiModelStatusEnum.UNPAID;
                                terms = "assumenda";
                            }};, "nulla", "voluptas");            

            InvoiceApiNewFormResponse res = sdk.invoice.invoiceApiNewForm(req);

            if (res.invoiceFullDetailsApiModel != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## invoiceApiNewJson

Create an invoice

### Example Usage

```java
package hello.world;

import java.time.OffsetDateTime;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.InvoiceApiNewJsonRequest;
import org.openapis.openapi.models.operations.InvoiceApiNewJsonResponse;
import org.openapis.openapi.models.shared.InvoiceCreateApiModel;
import org.openapis.openapi.models.shared.InvoiceCreateApiModelStatusEnum;
import org.openapis.openapi.models.shared.InvoiceCreateAttachmentApiModel;
import org.openapis.openapi.models.shared.InvoiceCreateAttachmentApiModelTypeEnum;
import org.openapis.openapi.models.shared.InvoiceCreateItemApiModel;
import org.openapis.openapi.models.shared.InvoiceGatewayApiModel;
import org.openapis.openapi.models.shared.InvoiceRecurringApiModel;
import org.openapis.openapi.models.shared.InvoiceRecurringApiModelDayOfWeekEnum;
import org.openapis.openapi.models.shared.InvoiceRecurringApiModelRecurrancePatternEnum;
import org.openapis.openapi.models.shared.InvoiceRecurringApiModelStatusEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            InvoiceApiNewJsonRequest req = new InvoiceApiNewJsonRequest(                new InvoiceCreateApiModel() {{
                                attachments = new org.openapis.openapi.models.shared.InvoiceCreateAttachmentApiModel[]{{
                                    add(new InvoiceCreateAttachmentApiModel() {{
                                        link = "quasi";
                                        obfuscatedFileName = "tempora";
                                        originalFileName = "numquam";
                                        size = 131482L;
                                        type = InvoiceCreateAttachmentApiModelTypeEnum.UPLOADED;
                                    }}),
                                    add(new InvoiceCreateAttachmentApiModel() {{
                                        link = "ipsa";
                                        obfuscatedFileName = "molestiae";
                                        originalFileName = "magnam";
                                        size = 487935L;
                                        type = InvoiceCreateAttachmentApiModelTypeEnum.EXTERNAL;
                                    }}),
                                    add(new InvoiceCreateAttachmentApiModel() {{
                                        link = "esse";
                                        obfuscatedFileName = "esse";
                                        originalFileName = "rem";
                                        size = 683282L;
                                        type = InvoiceCreateAttachmentApiModelTypeEnum.EXTERNAL;
                                    }}),
                                }};
                                clientId = 695626;
                                clonedFromId = 852635;
                                currencyId = 283519;
                                duedate = OffsetDateTime.parse("2022-08-15T07:50:23.042Z");
                                invoiceCategoryId = 826871;
                                issuedOn = OffsetDateTime.parse("2022-06-29T02:09:48.123Z");
                                items = new org.openapis.openapi.models.shared.InvoiceCreateItemApiModel[]{{
                                    add(new InvoiceCreateItemApiModel() {{
                                        cost = 863.77;
                                        description = "ipsa";
                                        discountPercentage = 6600.4;
                                        quantity = 6969.97;
                                        taxId = 206594;
                                        taxPercentage = 7786.96;
                                        workTypeId = 847276;
                                    }}),
                                    add(new InvoiceCreateItemApiModel() {{
                                        cost = 7774.08;
                                        description = "fuga";
                                        discountPercentage = 2594.22;
                                        quantity = 1783.67;
                                        taxId = 373813;
                                        taxPercentage = 698.59;
                                        workTypeId = 587600;
                                    }}),
                                    add(new InvoiceCreateItemApiModel() {{
                                        cost = 96.88;
                                        description = "tempora";
                                        discountPercentage = 8920.5;
                                        quantity = 3708.53;
                                        taxId = 133465;
                                        taxPercentage = 1970.54;
                                        workTypeId = 779192;
                                    }}),
                                    add(new InvoiceCreateItemApiModel() {{
                                        cost = 4598.56;
                                        description = "recusandae";
                                        discountPercentage = 446.12;
                                        quantity = 7151.79;
                                        taxId = 799796;
                                        taxPercentage = 4908.19;
                                        workTypeId = 76956;
                                    }}),
                                }};
                                notes = "nihil";
                                number = "totam";
                                paymentGateways = new org.openapis.openapi.models.shared.InvoiceGatewayApiModel[]{{
                                    add(new InvoiceGatewayApiModel() {{
                                        name = "Courtney Mayert";
                                    }}),
                                    add(new InvoiceGatewayApiModel() {{
                                        name = "Miss Rosie Krajcik";
                                    }}),
                                    add(new InvoiceGatewayApiModel() {{
                                        name = "Dwayne Cronin";
                                    }}),
                                    add(new InvoiceGatewayApiModel() {{
                                        name = "Hubert Gottlieb";
                                    }}),
                                }};
                                poNumber = "minima";
                                recurringProfile = new InvoiceRecurringApiModel() {{
                                    dayOfMonth = 392676;
                                    dayOfWeek = InvoiceRecurringApiModelDayOfWeekEnum.MONDAY;
                                    dueDateInDays = 956406;
                                    endOfRecurrance = OffsetDateTime.parse("2022-10-24T16:43:59.350Z");
                                    month = 129412;
                                    recurrancePattern = InvoiceRecurringApiModelRecurrancePatternEnum.YEARLY;
                                    recurranceValue = 578922;
                                    startOfRecurrance = OffsetDateTime.parse("2022-10-25T15:36:05.649Z");
                                    status = InvoiceRecurringApiModelStatusEnum.ACTIVE;
                                    title = "Dr.";
                                }};;
                                recurringProfileId = 882042;
                                shouldSendReminders = false;
                                status = InvoiceCreateApiModelStatusEnum.DRAFT;
                                terms = "esse";
                            }};, "quod", "nam");            

            InvoiceApiNewJsonResponse res = sdk.invoice.invoiceApiNewJson(req);

            if (res.invoiceFullDetailsApiModel != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## invoiceApiNewRaw

Create an invoice

### Example Usage

```java
package hello.world;

import java.time.OffsetDateTime;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.InvoiceApiNewRawRequest;
import org.openapis.openapi.models.operations.InvoiceApiNewRawResponse;
import org.openapis.openapi.models.shared.InvoiceCreateApiModel;
import org.openapis.openapi.models.shared.InvoiceCreateApiModelStatusEnum;
import org.openapis.openapi.models.shared.InvoiceCreateAttachmentApiModel;
import org.openapis.openapi.models.shared.InvoiceCreateAttachmentApiModelTypeEnum;
import org.openapis.openapi.models.shared.InvoiceCreateItemApiModel;
import org.openapis.openapi.models.shared.InvoiceGatewayApiModel;
import org.openapis.openapi.models.shared.InvoiceRecurringApiModel;
import org.openapis.openapi.models.shared.InvoiceRecurringApiModelDayOfWeekEnum;
import org.openapis.openapi.models.shared.InvoiceRecurringApiModelRecurrancePatternEnum;
import org.openapis.openapi.models.shared.InvoiceRecurringApiModelStatusEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            InvoiceApiNewRawRequest req = new InvoiceApiNewRawRequest("vero".getBytes(), "aliquid", "quasi");            

            InvoiceApiNewRawResponse res = sdk.invoice.invoiceApiNewRaw(req);

            if (res.invoiceFullDetailsApiModel != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## invoiceApiPdf

Return the PDF for the invoice

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.InvoiceApiPdfRequest;
import org.openapis.openapi.models.operations.InvoiceApiPdfResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            InvoiceApiPdfRequest req = new InvoiceApiPdfRequest(904045, "vel", "harum") {{
                signedVersion = false;
            }};            

            InvoiceApiPdfResponse res = sdk.invoice.invoiceApiPdf(req);

            if (res.invoiceUriApiModel != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## invoiceApiSendToAccountantForm

Send the provided invoice to the accountant

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.InvoiceApiSendToAccountantFormRequest;
import org.openapis.openapi.models.operations.InvoiceApiSendToAccountantFormResponse;
import org.openapis.openapi.models.shared.SendInvoiceToAccountantApiModel;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            InvoiceApiSendToAccountantFormRequest req = new InvoiceApiSendToAccountantFormRequest(                new SendInvoiceToAccountantApiModel() {{
                                id = 473221;
                            }};, "rerum", "occaecati");            

            InvoiceApiSendToAccountantFormResponse res = sdk.invoice.invoiceApiSendToAccountantForm(req);

            if (res.invoiceApiSendToAccountantForm200ApplicationJSONInt32Integer != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## invoiceApiSendToAccountantJson

Send the provided invoice to the accountant

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.InvoiceApiSendToAccountantJsonRequest;
import org.openapis.openapi.models.operations.InvoiceApiSendToAccountantJsonResponse;
import org.openapis.openapi.models.shared.SendInvoiceToAccountantApiModel;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            InvoiceApiSendToAccountantJsonRequest req = new InvoiceApiSendToAccountantJsonRequest(                new SendInvoiceToAccountantApiModel() {{
                                id = 327720;
                            }};, "distinctio", "eligendi");            

            InvoiceApiSendToAccountantJsonResponse res = sdk.invoice.invoiceApiSendToAccountantJson(req);

            if (res.invoiceApiSendToAccountantJSON200ApplicationJSONInt32Integer != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## invoiceApiSendToAccountantRaw

Send the provided invoice to the accountant

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.InvoiceApiSendToAccountantRawRequest;
import org.openapis.openapi.models.operations.InvoiceApiSendToAccountantRawResponse;
import org.openapis.openapi.models.shared.SendInvoiceToAccountantApiModel;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            InvoiceApiSendToAccountantRawRequest req = new InvoiceApiSendToAccountantRawRequest("sit".getBytes(), "culpa", "tempore");            

            InvoiceApiSendToAccountantRawResponse res = sdk.invoice.invoiceApiSendToAccountantRaw(req);

            if (res.invoiceApiSendToAccountantRaw200ApplicationJSONInt32Integer != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## invoiceApiSendToClientForm

Send the provided invoice to the client

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.InvoiceApiSendToClientFormRequest;
import org.openapis.openapi.models.operations.InvoiceApiSendToClientFormResponse;
import org.openapis.openapi.models.shared.SendInvoiceToClientApiModel;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            InvoiceApiSendToClientFormRequest req = new InvoiceApiSendToClientFormRequest(                new SendInvoiceToClientApiModel() {{
                                attachPdf = false;
                                id = 240020;
                                invoiceId = 766964;
                                message = "consequuntur";
                                sendToSelf = false;
                                subject = "consequatur";
                            }};, "minus", "quaerat");            

            InvoiceApiSendToClientFormResponse res = sdk.invoice.invoiceApiSendToClientForm(req);

            if (res.invoiceApiSendToClientForm200ApplicationJSONInt32Integer != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## invoiceApiSendToClientJson

Send the provided invoice to the client

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.InvoiceApiSendToClientJsonRequest;
import org.openapis.openapi.models.operations.InvoiceApiSendToClientJsonResponse;
import org.openapis.openapi.models.shared.SendInvoiceToClientApiModel;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            InvoiceApiSendToClientJsonRequest req = new InvoiceApiSendToClientJsonRequest(                new SendInvoiceToClientApiModel() {{
                                attachPdf = false;
                                id = 959167;
                                invoiceId = 232865;
                                message = "esse";
                                sendToSelf = false;
                                subject = "blanditiis";
                            }};, "provident", "a");            

            InvoiceApiSendToClientJsonResponse res = sdk.invoice.invoiceApiSendToClientJson(req);

            if (res.invoiceApiSendToClientJSON200ApplicationJSONInt32Integer != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## invoiceApiSendToClientRaw

Send the provided invoice to the client

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.InvoiceApiSendToClientRawRequest;
import org.openapis.openapi.models.operations.InvoiceApiSendToClientRawResponse;
import org.openapis.openapi.models.shared.SendInvoiceToClientApiModel;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            InvoiceApiSendToClientRawRequest req = new InvoiceApiSendToClientRawRequest("nulla".getBytes(), "quas", "esse");            

            InvoiceApiSendToClientRawResponse res = sdk.invoice.invoiceApiSendToClientRaw(req);

            if (res.invoiceApiSendToClientRaw200ApplicationJSONInt32Integer != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## invoiceApiStatus

Retrieve the status of the invoice

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.InvoiceApiStatusRequest;
import org.openapis.openapi.models.operations.InvoiceApiStatusResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            InvoiceApiStatusRequest req = new InvoiceApiStatusRequest(97468, "a", "error");            

            InvoiceApiStatusResponse res = sdk.invoice.invoiceApiStatus(req);

            if (res.invoiceApiStatus200ApplicationJSONStringEnum != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## invoiceApiUpdateForm

Update an existing invoice

### Example Usage

```java
package hello.world;

import java.time.OffsetDateTime;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.InvoiceApiUpdateFormRequest;
import org.openapis.openapi.models.operations.InvoiceApiUpdateFormResponse;
import org.openapis.openapi.models.shared.InvoiceGatewayApiModel;
import org.openapis.openapi.models.shared.InvoiceRecurringApiModel;
import org.openapis.openapi.models.shared.InvoiceRecurringApiModelDayOfWeekEnum;
import org.openapis.openapi.models.shared.InvoiceRecurringApiModelRecurrancePatternEnum;
import org.openapis.openapi.models.shared.InvoiceRecurringApiModelStatusEnum;
import org.openapis.openapi.models.shared.InvoiceUpdateApiModel;
import org.openapis.openapi.models.shared.InvoiceUpdateApiModelStatusEnum;
import org.openapis.openapi.models.shared.InvoiceUpdateAttachmentApiModel;
import org.openapis.openapi.models.shared.InvoiceUpdateAttachmentApiModelTypeEnum;
import org.openapis.openapi.models.shared.InvoiceUpdateItemApiModel;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            InvoiceApiUpdateFormRequest req = new InvoiceApiUpdateFormRequest(                new InvoiceUpdateApiModel() {{
                                attachments = new org.openapis.openapi.models.shared.InvoiceUpdateAttachmentApiModel[]{{
                                    add(new InvoiceUpdateAttachmentApiModel() {{
                                        id = 863023;
                                        link = "possimus";
                                        obfuscatedFileName = "quia";
                                        originalFileName = "eveniet";
                                        size = 992430L;
                                        type = InvoiceUpdateAttachmentApiModelTypeEnum.UPLOADED;
                                    }}),
                                    add(new InvoiceUpdateAttachmentApiModel() {{
                                        id = 85001;
                                        link = "consequuntur";
                                        obfuscatedFileName = "quasi";
                                        originalFileName = "similique";
                                        size = 633608L;
                                        type = InvoiceUpdateAttachmentApiModelTypeEnum.EXTERNAL;
                                    }}),
                                    add(new InvoiceUpdateAttachmentApiModel() {{
                                        id = 949298;
                                        link = "quae";
                                        obfuscatedFileName = "earum";
                                        originalFileName = "vel";
                                        size = 447378L;
                                        type = InvoiceUpdateAttachmentApiModelTypeEnum.EXTERNAL;
                                    }}),
                                }};
                                clientId = 727697;
                                clonedFromId = 849039;
                                currencyId = 742238;
                                duedate = OffsetDateTime.parse("2022-09-10T22:48:07.154Z");
                                id = 958983;
                                invoiceCategoryId = 119771;
                                issuedOn = OffsetDateTime.parse("2022-07-22T23:37:21.399Z");
                                items = new org.openapis.openapi.models.shared.InvoiceUpdateItemApiModel[]{{
                                    add(new InvoiceUpdateItemApiModel() {{
                                        cost = 3917.74;
                                        description = "aut";
                                        discountPercentage = 5318.49;
                                        id = 185232;
                                        quantity = 8453.58;
                                        taxId = 401259;
                                        taxPercentage = 5362.75;
                                        workTypeId = 929292;
                                    }}),
                                    add(new InvoiceUpdateItemApiModel() {{
                                        cost = 6802.7;
                                        description = "architecto";
                                        discountPercentage = 6091.78;
                                        id = 945302;
                                        quantity = 984.78;
                                        taxId = 869489;
                                        taxPercentage = 920.27;
                                        workTypeId = 454162;
                                    }}),
                                }};
                                notes = "ipsa";
                                number = "minima";
                                paymentGateways = new org.openapis.openapi.models.shared.InvoiceGatewayApiModel[]{{
                                    add(new InvoiceGatewayApiModel() {{
                                        name = "Sherry Morar IV";
                                    }}),
                                }};
                                poNumber = "aut";
                                recurringProfile = new InvoiceRecurringApiModel() {{
                                    dayOfMonth = 513075;
                                    dayOfWeek = InvoiceRecurringApiModelDayOfWeekEnum.WEDNESDAY;
                                    dueDateInDays = 649832;
                                    endOfRecurrance = OffsetDateTime.parse("2022-06-16T05:23:01.658Z");
                                    month = 251941;
                                    recurrancePattern = InvoiceRecurringApiModelRecurrancePatternEnum.DAILY;
                                    recurranceValue = 221161;
                                    startOfRecurrance = OffsetDateTime.parse("2022-06-30T04:05:24.454Z");
                                    status = InvoiceRecurringApiModelStatusEnum.FINISHED;
                                    title = "Mr.";
                                }};;
                                recurringProfileId = 376226;
                                shouldSendReminders = false;
                                status = InvoiceUpdateApiModelStatusEnum.DRAFT;
                                terms = "dignissimos";
                            }};, "dicta", "maiores");            

            InvoiceApiUpdateFormResponse res = sdk.invoice.invoiceApiUpdateForm(req);

            if (res.invoiceFullDetailsApiModel != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## invoiceApiUpdateJson

Update an existing invoice

### Example Usage

```java
package hello.world;

import java.time.OffsetDateTime;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.InvoiceApiUpdateJsonRequest;
import org.openapis.openapi.models.operations.InvoiceApiUpdateJsonResponse;
import org.openapis.openapi.models.shared.InvoiceGatewayApiModel;
import org.openapis.openapi.models.shared.InvoiceRecurringApiModel;
import org.openapis.openapi.models.shared.InvoiceRecurringApiModelDayOfWeekEnum;
import org.openapis.openapi.models.shared.InvoiceRecurringApiModelRecurrancePatternEnum;
import org.openapis.openapi.models.shared.InvoiceRecurringApiModelStatusEnum;
import org.openapis.openapi.models.shared.InvoiceUpdateApiModel;
import org.openapis.openapi.models.shared.InvoiceUpdateApiModelStatusEnum;
import org.openapis.openapi.models.shared.InvoiceUpdateAttachmentApiModel;
import org.openapis.openapi.models.shared.InvoiceUpdateAttachmentApiModelTypeEnum;
import org.openapis.openapi.models.shared.InvoiceUpdateItemApiModel;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            InvoiceApiUpdateJsonRequest req = new InvoiceApiUpdateJsonRequest(                new InvoiceUpdateApiModel() {{
                                attachments = new org.openapis.openapi.models.shared.InvoiceUpdateAttachmentApiModel[]{{
                                    add(new InvoiceUpdateAttachmentApiModel() {{
                                        id = 244651;
                                        link = "voluptatibus";
                                        obfuscatedFileName = "voluptas";
                                        originalFileName = "asperiores";
                                        size = 45659L;
                                        type = InvoiceUpdateAttachmentApiModelTypeEnum.EXTERNAL;
                                    }}),
                                    add(new InvoiceUpdateAttachmentApiModel() {{
                                        id = 310067;
                                        link = "consequuntur";
                                        obfuscatedFileName = "repellendus";
                                        originalFileName = "officia";
                                        size = 807023L;
                                        type = InvoiceUpdateAttachmentApiModelTypeEnum.EXTERNAL;
                                    }}),
                                    add(new InvoiceUpdateAttachmentApiModel() {{
                                        id = 640024;
                                        link = "asperiores";
                                        obfuscatedFileName = "nemo";
                                        originalFileName = "quae";
                                        size = 312753L;
                                        type = InvoiceUpdateAttachmentApiModelTypeEnum.UPLOADED;
                                    }}),
                                }};
                                clientId = 801836;
                                clonedFromId = 288398;
                                currencyId = 70447;
                                duedate = OffsetDateTime.parse("2022-04-26T11:54:02.741Z");
                                id = 662505;
                                invoiceCategoryId = 380729;
                                issuedOn = OffsetDateTime.parse("2022-05-14T14:45:53.115Z");
                                items = new org.openapis.openapi.models.shared.InvoiceUpdateItemApiModel[]{{
                                    add(new InvoiceUpdateItemApiModel() {{
                                        cost = 9268.8;
                                        description = "totam";
                                        discountPercentage = 8539.4;
                                        id = 424089;
                                        quantity = 4976.78;
                                        taxId = 554688;
                                        taxPercentage = 4278.34;
                                        workTypeId = 287051;
                                    }}),
                                    add(new InvoiceUpdateItemApiModel() {{
                                        cost = 8225.6;
                                        description = "facilis";
                                        discountPercentage = 7382.27;
                                        id = 414857;
                                        quantity = 4471.44;
                                        taxId = 360545;
                                        taxPercentage = 9689.04;
                                        workTypeId = 828657;
                                    }}),
                                    add(new InvoiceUpdateItemApiModel() {{
                                        cost = 3631.61;
                                        description = "recusandae";
                                        discountPercentage = 3975.33;
                                        id = 46007;
                                        quantity = 7386.83;
                                        taxId = 232627;
                                        taxPercentage = 4490.83;
                                        workTypeId = 348519;
                                    }}),
                                }};
                                notes = "earum";
                                number = "facere";
                                paymentGateways = new org.openapis.openapi.models.shared.InvoiceGatewayApiModel[]{{
                                    add(new InvoiceGatewayApiModel() {{
                                        name = "Ricardo Wisozk";
                                    }}),
                                    add(new InvoiceGatewayApiModel() {{
                                        name = "Clifford Cartwright";
                                    }}),
                                }};
                                poNumber = "non";
                                recurringProfile = new InvoiceRecurringApiModel() {{
                                    dayOfMonth = 228263;
                                    dayOfWeek = InvoiceRecurringApiModelDayOfWeekEnum.SUNDAY;
                                    dueDateInDays = 489509;
                                    endOfRecurrance = OffsetDateTime.parse("2020-04-29T18:47:01.945Z");
                                    month = 233420;
                                    recurrancePattern = InvoiceRecurringApiModelRecurrancePatternEnum.WEEKLY;
                                    recurranceValue = 689768;
                                    startOfRecurrance = OffsetDateTime.parse("2022-12-10T16:47:53.137Z");
                                    status = InvoiceRecurringApiModelStatusEnum.FINISHED;
                                    title = "Miss";
                                }};;
                                recurringProfileId = 113816;
                                shouldSendReminders = false;
                                status = InvoiceUpdateApiModelStatusEnum.VOID_;
                                terms = "similique";
                            }};, "tempora", "aspernatur");            

            InvoiceApiUpdateJsonResponse res = sdk.invoice.invoiceApiUpdateJson(req);

            if (res.invoiceFullDetailsApiModel != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## invoiceApiUpdateRaw

Update an existing invoice

### Example Usage

```java
package hello.world;

import java.time.OffsetDateTime;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.InvoiceApiUpdateRawRequest;
import org.openapis.openapi.models.operations.InvoiceApiUpdateRawResponse;
import org.openapis.openapi.models.shared.InvoiceGatewayApiModel;
import org.openapis.openapi.models.shared.InvoiceRecurringApiModel;
import org.openapis.openapi.models.shared.InvoiceRecurringApiModelDayOfWeekEnum;
import org.openapis.openapi.models.shared.InvoiceRecurringApiModelRecurrancePatternEnum;
import org.openapis.openapi.models.shared.InvoiceRecurringApiModelStatusEnum;
import org.openapis.openapi.models.shared.InvoiceUpdateApiModel;
import org.openapis.openapi.models.shared.InvoiceUpdateApiModelStatusEnum;
import org.openapis.openapi.models.shared.InvoiceUpdateAttachmentApiModel;
import org.openapis.openapi.models.shared.InvoiceUpdateAttachmentApiModelTypeEnum;
import org.openapis.openapi.models.shared.InvoiceUpdateItemApiModel;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            InvoiceApiUpdateRawRequest req = new InvoiceApiUpdateRawRequest("voluptas".getBytes(), "voluptas", "voluptas");            

            InvoiceApiUpdateRawResponse res = sdk.invoice.invoiceApiUpdateRaw(req);

            if (res.invoiceFullDetailsApiModel != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## invoiceApiUri

Return the unique url to the client's invoice

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.InvoiceApiUriRequest;
import org.openapis.openapi.models.operations.InvoiceApiUriResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            InvoiceApiUriRequest req = new InvoiceApiUriRequest(324405, "nobis", "dolorum");            

            InvoiceApiUriResponse res = sdk.invoice.invoiceApiUri(req);

            if (res.invoiceUriApiModel != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getApiInvoiceAllcategories

Return all invoice categories for the account

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetApiInvoiceAllcategoriesRequest;
import org.openapis.openapi.models.operations.GetApiInvoiceAllcategoriesResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetApiInvoiceAllcategoriesRequest req = new GetApiInvoiceAllcategoriesRequest("adipisci", "minus") {{
                query = "dolores";
            }};            

            GetApiInvoiceAllcategoriesResponse res = sdk.invoice.getApiInvoiceAllcategories(req);

            if (res.listResultInvoiceCategoryApiModel != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postApiInvoiceDeletecategoryForm

Delete an existing invoice category

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PostApiInvoiceDeletecategoryFormRequest;
import org.openapis.openapi.models.operations.PostApiInvoiceDeletecategoryFormResponse;
import org.openapis.openapi.models.shared.InvoiceCategoryDeleteApiModel;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            PostApiInvoiceDeletecategoryFormRequest req = new PostApiInvoiceDeletecategoryFormRequest(                new InvoiceCategoryDeleteApiModel() {{
                                id = 503934;
                            }};, "in", "dolore");            

            PostApiInvoiceDeletecategoryFormResponse res = sdk.invoice.postApiInvoiceDeletecategoryForm(req);

            if (res.postApiInvoiceDeletecategoryForm200ApplicationJSONInt32Integer != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postApiInvoiceDeletecategoryJson

Delete an existing invoice category

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PostApiInvoiceDeletecategoryJsonRequest;
import org.openapis.openapi.models.operations.PostApiInvoiceDeletecategoryJsonResponse;
import org.openapis.openapi.models.shared.InvoiceCategoryDeleteApiModel;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            PostApiInvoiceDeletecategoryJsonRequest req = new PostApiInvoiceDeletecategoryJsonRequest(                new InvoiceCategoryDeleteApiModel() {{
                                id = 304468;
                            }};, "officiis", "temporibus");            

            PostApiInvoiceDeletecategoryJsonResponse res = sdk.invoice.postApiInvoiceDeletecategoryJson(req);

            if (res.postApiInvoiceDeletecategoryJSON200ApplicationJSONInt32Integer != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postApiInvoiceDeletecategoryRaw

Delete an existing invoice category

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PostApiInvoiceDeletecategoryRawRequest;
import org.openapis.openapi.models.operations.PostApiInvoiceDeletecategoryRawResponse;
import org.openapis.openapi.models.shared.InvoiceCategoryDeleteApiModel;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            PostApiInvoiceDeletecategoryRawRequest req = new PostApiInvoiceDeletecategoryRawRequest("ullam".getBytes(), "adipisci", "cum");            

            PostApiInvoiceDeletecategoryRawResponse res = sdk.invoice.postApiInvoiceDeletecategoryRaw(req);

            if (res.postApiInvoiceDeletecategoryRaw200ApplicationJSONInt32Integer != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postApiInvoiceNewcategoryForm

Create an invoice category

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PostApiInvoiceNewcategoryFormRequest;
import org.openapis.openapi.models.operations.PostApiInvoiceNewcategoryFormResponse;
import org.openapis.openapi.models.shared.InvoiceCategoryCreateApiModel;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            PostApiInvoiceNewcategoryFormRequest req = new PostApiInvoiceNewcategoryFormRequest(                new InvoiceCategoryCreateApiModel() {{
                                name = "Morris Weissnat";
                            }};, "corrupti", "pariatur");            

            PostApiInvoiceNewcategoryFormResponse res = sdk.invoice.postApiInvoiceNewcategoryForm(req);

            if (res.invoiceCategoryApiModel != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postApiInvoiceNewcategoryJson

Create an invoice category

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PostApiInvoiceNewcategoryJsonRequest;
import org.openapis.openapi.models.operations.PostApiInvoiceNewcategoryJsonResponse;
import org.openapis.openapi.models.shared.InvoiceCategoryCreateApiModel;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            PostApiInvoiceNewcategoryJsonRequest req = new PostApiInvoiceNewcategoryJsonRequest(                new InvoiceCategoryCreateApiModel() {{
                                name = "Terrell Heidenreich MD";
                            }};, "sed", "reiciendis");            

            PostApiInvoiceNewcategoryJsonResponse res = sdk.invoice.postApiInvoiceNewcategoryJson(req);

            if (res.invoiceCategoryApiModel != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postApiInvoiceNewcategoryRaw

Create an invoice category

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PostApiInvoiceNewcategoryRawRequest;
import org.openapis.openapi.models.operations.PostApiInvoiceNewcategoryRawResponse;
import org.openapis.openapi.models.shared.InvoiceCategoryCreateApiModel;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            PostApiInvoiceNewcategoryRawRequest req = new PostApiInvoiceNewcategoryRawRequest("explicabo".getBytes(), "asperiores", "facilis");            

            PostApiInvoiceNewcategoryRawResponse res = sdk.invoice.postApiInvoiceNewcategoryRaw(req);

            if (res.invoiceCategoryApiModel != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postApiInvoiceUpdatecategoryForm

Update an existing invoice category

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PostApiInvoiceUpdatecategoryFormRequest;
import org.openapis.openapi.models.operations.PostApiInvoiceUpdatecategoryFormResponse;
import org.openapis.openapi.models.shared.InvoiceCategoryUpdateApiModel;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            PostApiInvoiceUpdatecategoryFormRequest req = new PostApiInvoiceUpdatecategoryFormRequest(                new InvoiceCategoryUpdateApiModel() {{
                                id = 451822;
                                name = "Raymond Moore";
                            }};, "sed", "in");            

            PostApiInvoiceUpdatecategoryFormResponse res = sdk.invoice.postApiInvoiceUpdatecategoryForm(req);

            if (res.invoiceCategoryApiModel != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postApiInvoiceUpdatecategoryJson

Update an existing invoice category

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PostApiInvoiceUpdatecategoryJsonRequest;
import org.openapis.openapi.models.operations.PostApiInvoiceUpdatecategoryJsonResponse;
import org.openapis.openapi.models.shared.InvoiceCategoryUpdateApiModel;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            PostApiInvoiceUpdatecategoryJsonRequest req = new PostApiInvoiceUpdatecategoryJsonRequest(                new InvoiceCategoryUpdateApiModel() {{
                                id = 417486;
                                name = "Benjamin Hodkiewicz III";
                            }};, "sapiente", "debitis");            

            PostApiInvoiceUpdatecategoryJsonResponse res = sdk.invoice.postApiInvoiceUpdatecategoryJson(req);

            if (res.invoiceCategoryApiModel != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postApiInvoiceUpdatecategoryRaw

Update an existing invoice category

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PostApiInvoiceUpdatecategoryRawRequest;
import org.openapis.openapi.models.operations.PostApiInvoiceUpdatecategoryRawResponse;
import org.openapis.openapi.models.shared.InvoiceCategoryUpdateApiModel;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            PostApiInvoiceUpdatecategoryRawRequest req = new PostApiInvoiceUpdatecategoryRawRequest("illo".getBytes(), "reiciendis", "perferendis");            

            PostApiInvoiceUpdatecategoryRawResponse res = sdk.invoice.postApiInvoiceUpdatecategoryRaw(req);

            if (res.invoiceCategoryApiModel != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
