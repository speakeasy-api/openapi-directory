# omInvoiceAPIGeneration

### Available Operations

* [generateBatchOrderInvoice](#generatebatchorderinvoice) - Generate an Order Invoice batch
* [generateOrderInvoice](#generateorderinvoice) - Generate an Order Invoice
* [getOrderInvoicePdf](#getorderinvoicepdf) - Returns the PDF version of the invoice
* [getOrderInvoicePreview](#getorderinvoicepreview) - View a preview an Order Invoice

## generateBatchOrderInvoice

Generate an Order Invoice batch

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GenerateBatchOrderInvoiceRequest;
import org.openapis.openapi.models.operations.GenerateBatchOrderInvoiceResponse;
import org.openapis.openapi.models.shared.GenerateBatchOrderInvoiceRequestItem;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GenerateBatchOrderInvoiceRequest req = new GenerateBatchOrderInvoiceRequest(                new org.openapis.openapi.models.shared.GenerateBatchOrderInvoiceRequestItem[]{{
                                add(new GenerateBatchOrderInvoiceRequestItem(50L, "ducimus", 879L, "CDISCOUNT") {{
                                    accountId = 50L;
                                    beezUPOrderUUID = "aspernatur";
                                    invoiceSequenceNumber = 879L;
                                    marketplaceTechnicalCode = "CDISCOUNT";
                                }}),
                                add(new GenerateBatchOrderInvoiceRequestItem(50L, "fuga", 879L, "CDISCOUNT") {{
                                    accountId = 50L;
                                    beezUPOrderUUID = "nesciunt";
                                    invoiceSequenceNumber = 879L;
                                    marketplaceTechnicalCode = "CDISCOUNT";
                                }}),
                            }}, "laudantium");            

            GenerateBatchOrderInvoiceResponse res = sdk.omInvoiceAPIGeneration.generateBatchOrderInvoice(req);

            if (res.generateBatchOrderInvoiceResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## generateOrderInvoice

Generate an Order Invoice

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GenerateOrderInvoiceRequest;
import org.openapis.openapi.models.operations.GenerateOrderInvoiceResponse;
import org.openapis.openapi.models.shared.GenerateOrderInvoiceRequest;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GenerateOrderInvoiceRequest req = new GenerateOrderInvoiceRequest("incidunt", "quasi",                 new GenerateOrderInvoiceRequest() {{
                                invoiceSequenceNumber = 879L;
                            }};, "rem", "fugiat");            

            GenerateOrderInvoiceResponse res = sdk.omInvoiceAPIGeneration.generateOrderInvoice(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getOrderInvoicePdf

Returns the PDF version of the invoice

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetOrderInvoicePdfResponse;
import org.openapis.openapi.models.shared.GetOrderInvoicePdfFromHtmlInvoiceUrlRequest;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            org.openapis.openapi.models.shared.GetOrderInvoicePdfFromHtmlInvoiceUrlRequest req = new GetOrderInvoicePdfFromHtmlInvoiceUrlRequest("http://www.mydomain.com");            

            GetOrderInvoicePdfResponse res = sdk.omInvoiceAPIGeneration.getOrderInvoicePdf(req);

            if (res.getOrderInvoicePdf200ApplicationPdfBinaryString != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getOrderInvoicePreview

View a preview an Order Invoice

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetOrderInvoicePreviewRequest;
import org.openapis.openapi.models.operations.GetOrderInvoicePreviewResponse;
import org.openapis.openapi.models.shared.PreviewOrderInvoiceRequest;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetOrderInvoicePreviewRequest req = new GetOrderInvoicePreviewRequest("dicta", "nisi", "consequuntur", "consectetur",                 new PreviewOrderInvoiceRequest() {{
                                invoiceSequenceNumber = 879L;
                            }};);            

            GetOrderInvoicePreviewResponse res = sdk.omInvoiceAPIGeneration.getOrderInvoicePreview(req);

            if (res.previewOrderInvoiceResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
