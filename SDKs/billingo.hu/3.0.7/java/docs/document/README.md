# document

## Overview

Document object represents your invoice.

### Available Operations

* [cancelDocument](#canceldocument) - Cancel a document
* [createDocument](#createdocument) - Create a document
* [createDocumentFromProforma](#createdocumentfromproforma) - Create a document from proforma.
* [deletePayment](#deletepayment) - Delete all payment history on document
* [downloadDocument](#downloaddocument) - Download a document in PDF format.
* [getDocument](#getdocument) - Retrieve a document
* [getOnlineSzamlaStatus](#getonlineszamlastatus) - Retrieve a document Online Számla status
* [getPayment](#getpayment) - Retrieve a payment histroy
* [getPublicUrl](#getpublicurl) - Retrieve a document download public url.
* [listDocument](#listdocument) - List all documents
* [sendDocument](#senddocument) - Send invoice to given email adresses.
* [updatePayment](#updatepayment) - Update payment history

## cancelDocument

Cancel a document. Returns a cancellation document object if the cancellation is succeded.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CancelDocumentRequest;
import org.openapis.openapi.models.operations.CancelDocumentResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("quis") {{
                    apiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            CancelDocumentRequest req = new CancelDocumentRequest(87129L);            

            CancelDocumentResponse res = sdk.document.cancelDocument(req);

            if (res.document != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## createDocument

Create a new document. Returns a document object if the create is succeded.

### Example Usage

```java
package hello.world;

import java.time.LocalDate;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateDocumentResponse;
import org.openapis.openapi.models.shared.CurrencyEnum;
import org.openapis.openapi.models.shared.DocumentInsert;
import org.openapis.openapi.models.shared.DocumentInsertTypeEnum;
import org.openapis.openapi.models.shared.DocumentItemData;
import org.openapis.openapi.models.shared.DocumentLanguageEnum;
import org.openapis.openapi.models.shared.DocumentProductData;
import org.openapis.openapi.models.shared.DocumentSettings;
import org.openapis.openapi.models.shared.OnlinePaymentEnum;
import org.openapis.openapi.models.shared.PaymentMethodEnum;
import org.openapis.openapi.models.shared.RoundEnum;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.UnitPriceTypeEnum;
import org.openapis.openapi.models.shared.VatEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("deserunt") {{
                    apiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            org.openapis.openapi.models.shared.DocumentInsert req = new DocumentInsert(20218L, CurrencyEnum.IDR, LocalDate.parse("2020-02-17"), LocalDate.parse("2022-07-31"), DocumentLanguageEnum.RO, 870088L, PaymentMethodEnum.WIRE_TRANSFER, DocumentInsertTypeEnum.DRAFT) {{
                bankAccountId = 799159L;
                comment = "quod";
                conversionRate = 4614.79;
                electronic = false;
                items = new Object[]{{
                    add(new DocumentProductData("commodi", 4736, "modi", 1863.32, UnitPriceTypeEnum.NET, VatEnum.AAM) {{
                        comment = "dolorum";
                        name = "Antoinette Nikolaus";
                        quantity = 5373.73;
                        unit = "hic";
                        unitPrice = 7586.16;
                        unitPriceType = UnitPriceTypeEnum.NET;
                        vat = VatEnum.TWELVE_PERCENT;
                    }}),
                    add(new DocumentItemData(135218L, 187.89) {{
                        productId = 216550L;
                        quantity = 5684.34;
                    }}),
                    add(new DocumentItemData(612096L, 2223.21) {{
                        productId = 617636L;
                        quantity = 1496.75;
                    }}),
                }};
                paid = false;
                settings = new DocumentSettings() {{
                    mediatedService = false;
                    onlinePayment = OnlinePaymentEnum.SIMPLE_PAY;
                    placeId = 386489L;
                    round = RoundEnum.TEN;
                    withoutFinancialFulfillment = false;
                }};;
                vendorId = "saepe";
            }};            

            CreateDocumentResponse res = sdk.document.createDocument(req);

            if (res.document != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## createDocumentFromProforma

Create a new document from proforma. Returns a document object if the create is succeded.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateDocumentFromProformaRequest;
import org.openapis.openapi.models.operations.CreateDocumentFromProformaResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("fuga") {{
                    apiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            CreateDocumentFromProformaRequest req = new CreateDocumentFromProformaRequest(449950L);            

            CreateDocumentFromProformaResponse res = sdk.document.createDocumentFromProforma(req);

            if (res.document != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## deletePayment

Delete all exist payment history on document.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeletePaymentRequest;
import org.openapis.openapi.models.operations.DeletePaymentResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("corporis") {{
                    apiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            DeletePaymentRequest req = new DeletePaymentRequest(613064L);            

            DeletePaymentResponse res = sdk.document.deletePayment(req);

            if (res.paymentHistories != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## downloadDocument

Download a document. Returns a document in PDF format.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DownloadDocumentRequest;
import org.openapis.openapi.models.operations.DownloadDocumentResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("iure") {{
                    apiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            DownloadDocumentRequest req = new DownloadDocumentRequest(902349L);            

            DownloadDocumentResponse res = sdk.document.downloadDocument(req);

            if (res.downloadDocument200ApplicationPdfBinaryString != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getDocument

Retrieves the details of an existing document.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetDocumentRequest;
import org.openapis.openapi.models.operations.GetDocumentResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("quidem") {{
                    apiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetDocumentRequest req = new GetDocumentRequest(99280L);            

            GetDocumentResponse res = sdk.document.getDocument(req);

            if (res.document != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getOnlineSzamlaStatus

Retrieves the details of an existing document status.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetOnlineSzamlaStatusRequest;
import org.openapis.openapi.models.operations.GetOnlineSzamlaStatusResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("ipsa") {{
                    apiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetOnlineSzamlaStatusRequest req = new GetOnlineSzamlaStatusRequest(969810L);            

            GetOnlineSzamlaStatusResponse res = sdk.document.getOnlineSzamlaStatus(req);

            if (res.onlineSzamlaStatus != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getPayment

Retrieves the details of payment history an existing document.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetPaymentRequest;
import org.openapis.openapi.models.operations.GetPaymentResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("est") {{
                    apiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetPaymentRequest req = new GetPaymentRequest(653140L);            

            GetPaymentResponse res = sdk.document.getPayment(req);

            if (res.paymentHistories != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getPublicUrl

Retrieves public url to download an existing document.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetPublicUrlRequest;
import org.openapis.openapi.models.operations.GetPublicUrlResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("laborum") {{
                    apiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetPublicUrlRequest req = new GetPublicUrlRequest(170909L);            

            GetPublicUrlResponse res = sdk.document.getPublicUrl(req);

            if (res.documentPublicUrl != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listDocument

Returns a list of your documents. The documents are returned sorted by creation date, with the most recent documents appearing first.

### Example Usage

```java
package hello.world;

import java.time.LocalDate;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListDocumentRequest;
import org.openapis.openapi.models.operations.ListDocumentResponse;
import org.openapis.openapi.models.shared.PaymentMethodEnum;
import org.openapis.openapi.models.shared.PaymentStatusEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("dolorem") {{
                    apiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            ListDocumentRequest req = new ListDocumentRequest() {{
                blockId = 358152L;
                endDate = LocalDate.parse("2022-04-01");
                endNumber = 315428L;
                endYear = 607831L;
                page = 363711L;
                partnerId = 325047L;
                paymentMethod = PaymentMethodEnum.PAYPAL_UTOLAG;
                paymentStatus = PaymentStatusEnum.EXPIRED;
                perPage = 438601L;
                startDate = LocalDate.parse("2021-01-09");
                startNumber = 958950L;
                startYear = 102044L;
            }};            

            ListDocumentResponse res = sdk.document.listDocument(req);

            if (res.documentList != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## sendDocument

Returns a list of emails, where the invoice is sent.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.SendDocumentRequest;
import org.openapis.openapi.models.operations.SendDocumentResponse;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.SendDocument;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("mollitia") {{
                    apiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            SendDocumentRequest req = new SendDocumentRequest(208876L) {{
                sendDocument = new SendDocument() {{
                    emails = new String[]{{
                        add("consequuntur"),
                        add("repellat"),
                        add("mollitia"),
                    }};
                }};;
            }};            

            SendDocumentResponse res = sdk.document.sendDocument(req);

            if (res.sendDocument != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## updatePayment

Update payment history an existing document. Returns a payment history object if the update is succeded.

### Example Usage

```java
package hello.world;

import java.time.LocalDate;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdatePaymentRequest;
import org.openapis.openapi.models.operations.UpdatePaymentResponse;
import org.openapis.openapi.models.shared.PaymentHistory;
import org.openapis.openapi.models.shared.PaymentMethodEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("occaecati") {{
                    apiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            UpdatePaymentRequest req = new UpdatePaymentRequest(                new org.openapis.openapi.models.shared.PaymentHistory[]{{
                                add(new PaymentHistory(LocalDate.parse("2022-11-21"), PaymentMethodEnum.POSTAI_CSEKK, 6563.3) {{
                                    conversionRate = 4143.69;
                                    date = LocalDate.parse("2022-07-11");
                                    paymentMethod = PaymentMethodEnum.COUPON;
                                    price = 6235.1;
                                    voucherNumber = "quia";
                                }}),
                                add(new PaymentHistory(LocalDate.parse("2021-05-11"), PaymentMethodEnum.ARUHITEL, 971.01) {{
                                    conversionRate = 3172.02;
                                    date = LocalDate.parse("2022-03-22");
                                    paymentMethod = PaymentMethodEnum.CASH_ON_DELIVERY;
                                    price = 9495.72;
                                    voucherNumber = "ipsam";
                                }}),
                            }}, 622846L);            

            UpdatePaymentResponse res = sdk.document.updatePayment(req);

            if (res.paymentHistories != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
