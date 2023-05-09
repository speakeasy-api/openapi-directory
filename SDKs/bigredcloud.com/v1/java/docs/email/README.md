# email

### Available Operations

* [emailSendEmailStatement](#emailsendemailstatement) - Sends a Statement email.
If "toAddress" is not empty then email will be sent to this address. Otherwise email will be sent to Statement Customer's address.
* [emailSendQuote](#emailsendquote) - Sends a Quote email.
If "toAddress" is not empty then email will be sent to this address. Otherwise email will be sent to Statement Customer's address.
* [emailSendSalesInvoice](#emailsendsalesinvoice) - Sends a Sales Invoice email.
If "toAddress" is not empty then email will be sent to this address. Otherwise email will be sent to Sales Invoice Customer's address.

## emailSendEmailStatement

Sends a Statement email.
If "toAddress" is not empty then email will be sent to this address. Otherwise email will be sent to Statement Customer's address.

### Example Usage

```java
package hello.world;

import java.time.OffsetDateTime;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.EmailSendEmailStatementResponse;
import org.openapis.openapi.models.shared.EmailStatementDto;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            org.openapis.openapi.models.shared.EmailStatementDto req = new EmailStatementDto() {{
                bccAddresses = new String[]{{
                    add("alias"),
                    add("maiores"),
                }};
                customerId = 970222L;
                fromPeriod = OffsetDateTime.parse("2022-05-03T16:31:59.395Z");
                messageBody = "minima";
                minimumBalance = 2931.44;
                toAddress = "dolorum";
                toPeriod = OffsetDateTime.parse("2022-12-08T22:18:03.712Z");
            }};            

            EmailSendEmailStatementResponse res = sdk.email.emailSendEmailStatement(req);

            if (res.emailSendEmailStatement200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## emailSendQuote

Sends a Quote email.
If "toAddress" is not empty then email will be sent to this address. Otherwise email will be sent to Statement Customer's address.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.EmailSendQuoteResponse;
import org.openapis.openapi.models.shared.EmailQuoteDto;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            org.openapis.openapi.models.shared.EmailQuoteDto req = new EmailQuoteDto() {{
                bccAddresses = new String[]{{
                    add("omnis"),
                    add("quaerat"),
                    add("molestiae"),
                    add("ex"),
                }};
                messageBody = "ut";
                quoteId = 633062L;
                toAddress = "adipisci";
            }};            

            EmailSendQuoteResponse res = sdk.email.emailSendQuote(req);

            if (res.emailSendQuote200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## emailSendSalesInvoice

Sends a Sales Invoice email.
If "toAddress" is not empty then email will be sent to this address. Otherwise email will be sent to Sales Invoice Customer's address.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.EmailSendSalesInvoiceResponse;
import org.openapis.openapi.models.shared.SalesInvoiceEmailInfoDto;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            org.openapis.openapi.models.shared.SalesInvoiceEmailInfoDto req = new SalesInvoiceEmailInfoDto() {{
                bccAddresses = new String[]{{
                    add("laudantium"),
                    add("eum"),
                    add("nemo"),
                    add("recusandae"),
                }};
                messageBody = "esse";
                salesInvoiceId = 592081L;
                toAddress = "quis";
            }};            

            EmailSendSalesInvoiceResponse res = sdk.email.emailSendSalesInvoice(req);

            if (res.emailSendSalesInvoice200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
