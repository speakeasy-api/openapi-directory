# billing

## Overview

Create and manage billing resources

### Available Operations

* [billingProfilesList](#billingprofileslist) - Retrieve or search billing profiles
* [billingProfilesRead](#billingprofilesread) - Retrieve an existing billing profiles
* [commLogsCreate](#commlogscreate) - Create communication (phone call) logs
* [commLogsList](#commlogslist) - Retrieve or search communicatioin (phone call) logs
* [commLogsPartialUpdate](#commlogspartialupdate) - Update an existing communication (phone call) logs
* [commLogsRead](#commlogsread) - Retrieve an existing communication (phone call) logs
* [commLogsUpdate](#commlogsupdate) - Update an existing communication (phone call) logs
* [customInsurancePlanNamesList](#custominsuranceplannameslist) - Retrieve or search custom insurance plan names
* [customInsurancePlanNamesRead](#custominsuranceplannamesread) - Retrieve an existing custom insurance plan name
* [eligibilityChecksList](#eligibilitycheckslist) - Retrieve or search past eligibility checks for patient
* [eligibilityChecksRead](#eligibilitychecksread) - Retrieve an existing past eligibility check
* [lineItemsCreate](#lineitemscreate) - Create billing line item for appointments
* [lineItemsDelete](#lineitemsdelete)
* [lineItemsList](#lineitemslist) - Retrieve or search billing line items
* [lineItemsPartialUpdate](#lineitemspartialupdate)
* [lineItemsRead](#lineitemsread) - Retrieve an existing billing line item
* [lineItemsUpdate](#lineitemsupdate)
* [patientPaymentLogList](#patientpaymentloglist) - Retrieve or search patient payment logs
* [patientPaymentLogRead](#patientpaymentlogread) - Retrieve an existing patient payment log
* [patientPaymentsCreate](#patientpaymentscreate) - Create patient payment
* [patientPaymentsList](#patientpaymentslist) - Retrieve or search patient payments
* [patientPaymentsRead](#patientpaymentsread) - Retrieve an existing patient payment
* [proceduresList](#procedureslist)
* [proceduresRead](#proceduresread)
* [transactionsList](#transactionslist) - Retrieve or search insurance transactions associated with billing line items
* [transactionsRead](#transactionsread) - Retrieve an existing insurance transaction

## billingProfilesList

Retrieve or search billing profiles

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.BillingProfilesListRequest;
import org.openapis.openapi.models.operations.BillingProfilesListResponse;
import org.openapis.openapi.models.operations.BillingProfilesListSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            BillingProfilesListRequest req = new BillingProfilesListRequest() {{
                cursor = "nisi";
                doctor = 925597L;
                pageSize = 836079L;
            }};            

            BillingProfilesListResponse res = sdk.billing.billingProfilesList(req, new BillingProfilesListSecurity("ab") {{
                drchronoOauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.billingProfilesList200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## billingProfilesRead

Retrieve an existing billing profiles

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.BillingProfilesReadRequest;
import org.openapis.openapi.models.operations.BillingProfilesReadResponse;
import org.openapis.openapi.models.operations.BillingProfilesReadSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            BillingProfilesReadRequest req = new BillingProfilesReadRequest("quis") {{
                doctor = 87129L;
            }};            

            BillingProfilesReadResponse res = sdk.billing.billingProfilesRead(req, new BillingProfilesReadSecurity("deserunt") {{
                drchronoOauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.billingProfile != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## commLogsCreate

Create communication (phone call) logs

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CommLogsCreateRequest;
import org.openapis.openapi.models.operations.CommLogsCreateResponse;
import org.openapis.openapi.models.operations.CommLogsCreateSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            CommLogsCreateRequest req = new CommLogsCreateRequest() {{
                doctor = 20218L;
                patient = 368241L;
                since = "repellendus";
            }};            

            CommLogsCreateResponse res = sdk.billing.commLogsCreate(req, new CommLogsCreateSecurity("sapiente") {{
                drchronoOauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.phoneCallLog != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## commLogsList

Retrieve or search communicatioin (phone call) logs

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CommLogsListRequest;
import org.openapis.openapi.models.operations.CommLogsListResponse;
import org.openapis.openapi.models.operations.CommLogsListSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            CommLogsListRequest req = new CommLogsListRequest() {{
                cursor = "quo";
                doctor = 140350L;
                pageSize = 870013L;
                patient = 870088L;
                since = "maiores";
            }};            

            CommLogsListResponse res = sdk.billing.commLogsList(req, new CommLogsListSecurity("molestiae") {{
                drchronoOauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.commLogsList200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## commLogsPartialUpdate

Update an existing communication (phone call) logs

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CommLogsPartialUpdateRequest;
import org.openapis.openapi.models.operations.CommLogsPartialUpdateResponse;
import org.openapis.openapi.models.operations.CommLogsPartialUpdateSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            CommLogsPartialUpdateRequest req = new CommLogsPartialUpdateRequest("quod") {{
                doctor = 800911L;
                patient = 461479L;
                since = "totam";
            }};            

            CommLogsPartialUpdateResponse res = sdk.billing.commLogsPartialUpdate(req, new CommLogsPartialUpdateSecurity("porro") {{
                drchronoOauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## commLogsRead

Retrieve an existing communication (phone call) logs

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CommLogsReadRequest;
import org.openapis.openapi.models.operations.CommLogsReadResponse;
import org.openapis.openapi.models.operations.CommLogsReadSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            CommLogsReadRequest req = new CommLogsReadRequest("dolorum") {{
                doctor = 118274L;
                patient = 720633L;
                since = "officia";
            }};            

            CommLogsReadResponse res = sdk.billing.commLogsRead(req, new CommLogsReadSecurity("occaecati") {{
                drchronoOauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.phoneCallLog != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## commLogsUpdate

Update an existing communication (phone call) logs

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CommLogsUpdateRequest;
import org.openapis.openapi.models.operations.CommLogsUpdateResponse;
import org.openapis.openapi.models.operations.CommLogsUpdateSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            CommLogsUpdateRequest req = new CommLogsUpdateRequest("fugit") {{
                doctor = 537373L;
                patient = 944669L;
                since = "optio";
            }};            

            CommLogsUpdateResponse res = sdk.billing.commLogsUpdate(req, new CommLogsUpdateSecurity("totam") {{
                drchronoOauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## customInsurancePlanNamesList

Retrieve or search custom insurance plan names

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CustomInsurancePlanNamesListRequest;
import org.openapis.openapi.models.operations.CustomInsurancePlanNamesListResponse;
import org.openapis.openapi.models.operations.CustomInsurancePlanNamesListSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            CustomInsurancePlanNamesListRequest req = new CustomInsurancePlanNamesListRequest() {{
                cursor = "beatae";
                doctor = 414662L;
                name = "Pauline Dibbert";
                pageSize = 456150L;
                since = "ipsum";
                user = 568434L;
            }};            

            CustomInsurancePlanNamesListResponse res = sdk.billing.customInsurancePlanNamesList(req, new CustomInsurancePlanNamesListSecurity("aspernatur") {{
                drchronoOauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.customInsurancePlanNamesList200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## customInsurancePlanNamesRead

Retrieve an existing custom insurance plan name

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CustomInsurancePlanNamesReadRequest;
import org.openapis.openapi.models.operations.CustomInsurancePlanNamesReadResponse;
import org.openapis.openapi.models.operations.CustomInsurancePlanNamesReadSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            CustomInsurancePlanNamesReadRequest req = new CustomInsurancePlanNamesReadRequest("perferendis") {{
                doctor = 324141L;
                name = "Louis Moore";
                since = "laboriosam";
                user = 943749L;
            }};            

            CustomInsurancePlanNamesReadResponse res = sdk.billing.customInsurancePlanNamesRead(req, new CustomInsurancePlanNamesReadSecurity("saepe") {{
                drchronoOauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.customInsurancePlanName != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## eligibilityChecksList

Retrieve or search past eligibility checks for patient

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.EligibilityChecksListRequest;
import org.openapis.openapi.models.operations.EligibilityChecksListResponse;
import org.openapis.openapi.models.operations.EligibilityChecksListSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            EligibilityChecksListRequest req = new EligibilityChecksListRequest() {{
                appointment = 681820L;
                appointmentDate = "in";
                appointmentDateRange = "corporis";
                cursor = "iste";
                doctor = 437032L;
                pageSize = 902349L;
                patient = 697631L;
                queryDate = "architecto";
                queryDateRange = "ipsa";
            }};            

            EligibilityChecksListResponse res = sdk.billing.eligibilityChecksList(req, new EligibilityChecksListSecurity("reiciendis") {{
                drchronoOauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.eligibilityChecksList200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## eligibilityChecksRead

Retrieve an existing past eligibility check

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.EligibilityChecksReadRequest;
import org.openapis.openapi.models.operations.EligibilityChecksReadResponse;
import org.openapis.openapi.models.operations.EligibilityChecksReadSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            EligibilityChecksReadRequest req = new EligibilityChecksReadRequest("est") {{
                appointment = 653140L;
                appointmentDate = "laborum";
                appointmentDateRange = "dolores";
                doctor = 210382L;
                patient = 358152L;
                queryDate = "explicabo";
                queryDateRange = "nobis";
            }};            

            EligibilityChecksReadResponse res = sdk.billing.eligibilityChecksRead(req, new EligibilityChecksReadSecurity("enim") {{
                drchronoOauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.coverage != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## lineItemsCreate

Create billing line item for appointments

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.LineItemsCreateRequest;
import org.openapis.openapi.models.operations.LineItemsCreateResponse;
import org.openapis.openapi.models.operations.LineItemsCreateSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            LineItemsCreateRequest req = new LineItemsCreateRequest() {{
                appointment = 607831L;
                doctor = 363711L;
                office = 325047L;
                patient = 570197L;
                postedDate = "accusantium";
                serviceDate = "iure";
                since = "culpa";
            }};            

            LineItemsCreateResponse res = sdk.billing.lineItemsCreate(req, new LineItemsCreateSecurity("doloribus") {{
                drchronoOauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.billingLineItem != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## lineItemsDelete

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.LineItemsDeleteRequest;
import org.openapis.openapi.models.operations.LineItemsDeleteResponse;
import org.openapis.openapi.models.operations.LineItemsDeleteSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            LineItemsDeleteRequest req = new LineItemsDeleteRequest("sapiente") {{
                appointment = 102044L;
                doctor = 652790L;
                office = 208876L;
                patient = 635059L;
                postedDate = "consequuntur";
                serviceDate = "repellat";
                since = "mollitia";
            }};            

            LineItemsDeleteResponse res = sdk.billing.lineItemsDelete(req, new LineItemsDeleteSecurity("occaecati") {{
                drchronoOauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## lineItemsList

Retrieve or search billing line items

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.LineItemsListRequest;
import org.openapis.openapi.models.operations.LineItemsListResponse;
import org.openapis.openapi.models.operations.LineItemsListSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            LineItemsListRequest req = new LineItemsListRequest() {{
                appointment = 253291L;
                cursor = "commodi";
                doctor = 466311L;
                office = 474697L;
                pageSize = 244425L;
                patient = 623510L;
                postedDate = "quia";
                serviceDate = "quis";
                since = "vitae";
            }};            

            LineItemsListResponse res = sdk.billing.lineItemsList(req, new LineItemsListSecurity("laborum") {{
                drchronoOauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.lineItemsList200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## lineItemsPartialUpdate

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.LineItemsPartialUpdateRequest;
import org.openapis.openapi.models.operations.LineItemsPartialUpdateResponse;
import org.openapis.openapi.models.operations.LineItemsPartialUpdateSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            LineItemsPartialUpdateRequest req = new LineItemsPartialUpdateRequest("animi") {{
                appointment = 317202L;
                doctor = 138183L;
                office = 778346L;
                patient = 196582L;
                postedDate = "tenetur";
                serviceDate = "ipsam";
                since = "id";
            }};            

            LineItemsPartialUpdateResponse res = sdk.billing.lineItemsPartialUpdate(req, new LineItemsPartialUpdateSecurity("possimus") {{
                drchronoOauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## lineItemsRead

Retrieve an existing billing line item

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.LineItemsReadRequest;
import org.openapis.openapi.models.operations.LineItemsReadResponse;
import org.openapis.openapi.models.operations.LineItemsReadSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            LineItemsReadRequest req = new LineItemsReadRequest("aut") {{
                appointment = 97101L;
                doctor = 622846L;
                office = 837945L;
                patient = 673660L;
                postedDate = "quasi";
                serviceDate = "reiciendis";
                since = "voluptatibus";
            }};            

            LineItemsReadResponse res = sdk.billing.lineItemsRead(req, new LineItemsReadSecurity("vero") {{
                drchronoOauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.billingLineItem != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## lineItemsUpdate

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.LineItemsUpdateRequest;
import org.openapis.openapi.models.operations.LineItemsUpdateResponse;
import org.openapis.openapi.models.operations.LineItemsUpdateSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            LineItemsUpdateRequest req = new LineItemsUpdateRequest("nihil") {{
                appointment = 509624L;
                doctor = 976762L;
                office = 55714L;
                patient = 604846L;
                postedDate = "voluptate";
                serviceDate = "cum";
                since = "perferendis";
            }};            

            LineItemsUpdateResponse res = sdk.billing.lineItemsUpdate(req, new LineItemsUpdateSecurity("doloremque") {{
                drchronoOauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## patientPaymentLogList

Retrieve or search patient payment logs

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PatientPaymentLogListRequest;
import org.openapis.openapi.models.operations.PatientPaymentLogListResponse;
import org.openapis.openapi.models.operations.PatientPaymentLogListSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            PatientPaymentLogListRequest req = new PatientPaymentLogListRequest() {{
                cursor = "reprehenderit";
                doctor = 282807L;
                office = 979587L;
                pageSize = 120196L;
                since = "corporis";
            }};            

            PatientPaymentLogListResponse res = sdk.billing.patientPaymentLogList(req, new PatientPaymentLogListSecurity("dolore") {{
                drchronoOauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.patientPaymentLogList200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## patientPaymentLogRead

Retrieve an existing patient payment log

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PatientPaymentLogReadRequest;
import org.openapis.openapi.models.operations.PatientPaymentLogReadResponse;
import org.openapis.openapi.models.operations.PatientPaymentLogReadSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            PatientPaymentLogReadRequest req = new PatientPaymentLogReadRequest("iusto") {{
                doctor = 118727L;
                office = 688661L;
                since = "enim";
            }};            

            PatientPaymentLogReadResponse res = sdk.billing.patientPaymentLogRead(req, new PatientPaymentLogReadSecurity("accusamus") {{
                drchronoOauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.cashPaymentLog != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## patientPaymentsCreate

Create patient payment

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PatientPaymentsCreateRequest;
import org.openapis.openapi.models.operations.PatientPaymentsCreateResponse;
import org.openapis.openapi.models.operations.PatientPaymentsCreateSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            PatientPaymentsCreateRequest req = new PatientPaymentsCreateRequest() {{
                doctor = 414263L;
                patient = 918236L;
                since = "quae";
            }};            

            PatientPaymentsCreateResponse res = sdk.billing.patientPaymentsCreate(req, new PatientPaymentsCreateSecurity("ipsum") {{
                drchronoOauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.cashPayment != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## patientPaymentsList

Retrieve or search patient payments

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PatientPaymentsListRequest;
import org.openapis.openapi.models.operations.PatientPaymentsListResponse;
import org.openapis.openapi.models.operations.PatientPaymentsListSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            PatientPaymentsListRequest req = new PatientPaymentsListRequest() {{
                cursor = "quidem";
                doctor = 565189L;
                pageSize = 566602L;
                patient = 865103L;
                since = "modi";
            }};            

            PatientPaymentsListResponse res = sdk.billing.patientPaymentsList(req, new PatientPaymentsListSecurity("praesentium") {{
                drchronoOauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.patientPaymentsList200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## patientPaymentsRead

Retrieve an existing patient payment

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PatientPaymentsReadRequest;
import org.openapis.openapi.models.operations.PatientPaymentsReadResponse;
import org.openapis.openapi.models.operations.PatientPaymentsReadSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            PatientPaymentsReadRequest req = new PatientPaymentsReadRequest("rem") {{
                doctor = 916723L;
                patient = 93940L;
                since = "repudiandae";
            }};            

            PatientPaymentsReadResponse res = sdk.billing.patientPaymentsRead(req, new PatientPaymentsReadSecurity("sint") {{
                drchronoOauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.cashPayment != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## proceduresList

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ProceduresListRequest;
import org.openapis.openapi.models.operations.ProceduresListResponse;
import org.openapis.openapi.models.operations.ProceduresListSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ProceduresListRequest req = new ProceduresListRequest() {{
                appointment = 83112L;
                cursor = "itaque";
                doctor = 277718L;
                muDate = "enim";
                muDateRange = "consequatur";
                pageSize = 667411L;
                patient = 842342L;
                serviceDate = "explicabo";
            }};            

            ProceduresListResponse res = sdk.billing.proceduresList(req, new ProceduresListSecurity("deserunt") {{
                drchronoOauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.proceduresList200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## proceduresRead

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ProceduresReadRequest;
import org.openapis.openapi.models.operations.ProceduresReadResponse;
import org.openapis.openapi.models.operations.ProceduresReadSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ProceduresReadRequest req = new ProceduresReadRequest("distinctio") {{
                appointment = 841386L;
                doctor = 289406L;
                muDate = "modi";
                muDateRange = "qui";
                patient = 397821L;
                serviceDate = "cupiditate";
            }};            

            ProceduresReadResponse res = sdk.billing.proceduresRead(req, new ProceduresReadSecurity("quos") {{
                drchronoOauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.billingLineItem != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## transactionsList

Retrieve or search insurance transactions associated with billing line items

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.TransactionsListRequest;
import org.openapis.openapi.models.operations.TransactionsListResponse;
import org.openapis.openapi.models.operations.TransactionsListSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            TransactionsListRequest req = new TransactionsListRequest() {{
                appointment = 20107L;
                cursor = "magni";
                doctor = 828940L;
                lineItem = 369808L;
                pageSize = 4695L;
                postedDate = "fugit";
                since = "dolorum";
            }};            

            TransactionsListResponse res = sdk.billing.transactionsList(req, new TransactionsListSecurity("excepturi") {{
                drchronoOauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.transactionsList200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## transactionsRead

Retrieve an existing insurance transaction

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.TransactionsReadRequest;
import org.openapis.openapi.models.operations.TransactionsReadResponse;
import org.openapis.openapi.models.operations.TransactionsReadSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            TransactionsReadRequest req = new TransactionsReadRequest("tempora") {{
                appointment = 703737L;
                doctor = 735194L;
                lineItem = 288476L;
                postedDate = "delectus";
                since = "eum";
            }};            

            TransactionsReadResponse res = sdk.billing.transactionsRead(req, new TransactionsReadSecurity("non") {{
                drchronoOauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.lineItemTransaction != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
