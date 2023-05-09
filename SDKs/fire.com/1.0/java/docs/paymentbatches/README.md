# paymentBatches

## Overview

The fire.com API allows businesses to automate payments between their accounts or to third parties across the UK and Europe.

For added security, the API can only set up the payments in batches. These batches must be approved by an authorised user via the firework mobile app.


The process is as follows:

**1.**Create a new batch

**2.**Add payments to the batch

**3.**Submit the batch for approval

Once the batch is submitted, the authorised users will receive notifications to their firework mobile apps. They can review the contents of the batch and then approve or reject it. If approved, the batch is then processed. You can avail of enhanced security by using Dual Authorisation to verify payments if you wish. Dual Authorisation can be enabled by you when setting up your API application in firework online.

**Batch Life Cycle Events**

A batch webhook can be specified to receive details of all the payments as they are processed. This webhook receives notifications for every event in the batch lifecycle.

The following events are triggered during a batch:

**batch.opened:** Contains the details of the batch opened. Checks that the callback URL exists - unless a HTTP 200 response is returned, the callback URL will not be configured.

**batch.item-added:** Details of the item added to the batch

**batch.item-removed:** Details of the item removed from the batch

**batch.cancelled:** Notifies that the batch was cancelled.

**batch.submitted:** Notifes that the batch was submitted

**batch.approved:** Notifies that the batch was approved.

**batch.rejected:** Notifies that the batch was rejected.

**batch.failed:** Notifies that the batch failed - includes the details of the failure (insufficient funds etc)

**batch.completed:** Notifies that the batch completed successfully. Includes a summary.

Push notifications are sent to the firework mobile app for many of these events too - these can be configured from within the app.


### Available Operations

* [addBankTransferBatchPayment](#addbanktransferbatchpayment) - Add a bank transfer payment to the batch.
* [addInternalTransferBatchPayment](#addinternaltransferbatchpayment) - Add an internal transfer payment to the batch
* [addInternationalTransferBatchPayment](#addinternationaltransferbatchpayment) - Add an international transfer payment to the batch.
* [cancelBatchPayment](#cancelbatchpayment) - Cancel a batch
* [createBatchPayment](#createbatchpayment) - Create a new batch of payments
* [deleteBankTransferBatchPayment](#deletebanktransferbatchpayment) - Remove a Payment from the Batch (Bank Transfers)
* [deleteInternalTransferBatchPayment](#deleteinternaltransferbatchpayment) - Remove a Payment from the Batch (Internal Transfer)
* [deleteInternationalTransferBatchPayment](#deleteinternationaltransferbatchpayment) - Remove a Payment from the Batch (International Transfers)
* [getBatches](#getbatches) - List batches
* [getDetailsSingleBatch](#getdetailssinglebatch) - Get details of a single Batch
* [getItemsBatchBankTransfer](#getitemsbatchbanktransfer) - List items in a Batch (Bank Transfers)
* [getItemsBatchInternalTrasnfer](#getitemsbatchinternaltrasnfer) - List items in a Batch (Internal Transfers)
* [getItemsBatchInternationalTransfer](#getitemsbatchinternationaltransfer) - List items in a Batch (International Transfers)
* [getListofApproversForBatch](#getlistofapproversforbatch) - List Approvers for a Batch
* [submitBatch](#submitbatch) - Submit a batch for approval

## addBankTransferBatchPayment

There are two ways to process bank transfers - by Payee ID (**Mode 1**) or by Payee Account Details (**Mode 2**).

**Mode 1:** Use the payee IDs of existing approved payees set up against your account. These batches can be approved in the normal manner.

**Mode 2:** Use the account details of the payee. In the event that these details correspond to an existing approved payee, the batch can be approved as normal. If the account details are new, a batch of New Payees will automatically be created. This batch will need to be approved before the Payment batch can be approved. These payees will then exist as approved payees for future batches.


### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.AddBankTransferBatchPaymentRequest;
import org.openapis.openapi.models.operations.AddBankTransferBatchPaymentRequestBodyBatchItemBankTransferMode1;
import org.openapis.openapi.models.operations.AddBankTransferBatchPaymentRequestBodyBatchItemBankTransferMode1PayeeTypeEnum;
import org.openapis.openapi.models.operations.AddBankTransferBatchPaymentRequestBodyBatchItemBankTransferMode2;
import org.openapis.openapi.models.operations.AddBankTransferBatchPaymentRequestBodyBatchItemBankTransferMode2PayeeTypeEnum;
import org.openapis.openapi.models.operations.AddBankTransferBatchPaymentResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("quod") {{
                    bearerAuth = "Bearer YOUR_BEARER_TOKEN_HERE";
                }})
                .build();

            AddBankTransferBatchPaymentRequest req = new AddBankTransferBatchPaymentRequest(                new AddBankTransferBatchPaymentRequestBodyBatchItemBankTransferMode1() {{
                                amount = 500L;
                                icanFrom = 2001L;
                                myRef = "Payment to John Smith for Consultancy in device.";
                                payeeId = 15002L;
                                payeeType = AddBankTransferBatchPaymentRequestBodyBatchItemBankTransferMode1PayeeTypeEnum.PAYEE_ID;
                                yourRef = "ACME LTD - INV 23434";
                            }}, "4ADFB67A-0F5B-4A9A-9D74-34437250045C");            

            AddBankTransferBatchPaymentResponse res = sdk.paymentBatches.addBankTransferBatchPayment(req);

            if (res.newBatchItemResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## addInternalTransferBatchPayment

Simply specify the source account, destination account, amount and a reference.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.AddInternalTransferBatchPaymentBatchItemInternalTransfer;
import org.openapis.openapi.models.operations.AddInternalTransferBatchPaymentRequest;
import org.openapis.openapi.models.operations.AddInternalTransferBatchPaymentResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("esse") {{
                    bearerAuth = "Bearer YOUR_BEARER_TOKEN_HERE";
                }})
                .build();

            AddInternalTransferBatchPaymentRequest req = new AddInternalTransferBatchPaymentRequest(                new AddInternalTransferBatchPaymentBatchItemInternalTransfer() {{
                                amount = 10000L;
                                icanFrom = 2001L;
                                icanTo = 3221L;
                                ref = "Moving funds to Operating Account";
                            }};, "4ADFB67A-0F5B-4A9A-9D74-34437250045C");            

            AddInternalTransferBatchPaymentResponse res = sdk.paymentBatches.addInternalTransferBatchPayment(req);

            if (res.newBatchItemResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## addInternationalTransferBatchPayment

International transfers must be added to a batch using the Payee ID (**Mode 1**). Payees must be set up using the web application.

**Mode 1:** Use the payee IDs of existing approved payees set up against your account. These batches can be approved in the normal manner.


### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.AddInternationalTransferBatchPaymentBatchItemInternationalTransferMode1;
import org.openapis.openapi.models.operations.AddInternationalTransferBatchPaymentRequest;
import org.openapis.openapi.models.operations.AddInternationalTransferBatchPaymentResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("totam") {{
                    bearerAuth = "Bearer YOUR_BEARER_TOKEN_HERE";
                }})
                .build();

            AddInternationalTransferBatchPaymentRequest req = new AddInternationalTransferBatchPaymentRequest(                new AddInternationalTransferBatchPaymentBatchItemInternationalTransferMode1() {{
                                amount = 500L;
                                icanFrom = 2001L;
                                myRef = "Payment to John Smith for Consultancy in device.";
                                payeeId = 15002L;
                                paymentReason = "Invoice Payment, Salary/Dividend Payment";
                                yourRef = "ACME LTD - INV 23434";
                            }};, "4ADFB67A-0F5B-4A9A-9D74-34437250045C");            

            AddInternationalTransferBatchPaymentResponse res = sdk.paymentBatches.addInternationalTransferBatchPayment(req);

            if (res.newBatchItemResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## cancelBatchPayment

Cancels the Batch. You can only cancel a batch before it is submitted for approval (while it is in the OPEN state).

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CancelBatchPaymentRequest;
import org.openapis.openapi.models.operations.CancelBatchPaymentResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("porro") {{
                    bearerAuth = "Bearer YOUR_BEARER_TOKEN_HERE";
                }})
                .build();

            CancelBatchPaymentRequest req = new CancelBatchPaymentRequest("4ADFB67A-0F5B-4A9A-9D74-34437250045C");            

            CancelBatchPaymentResponse res = sdk.paymentBatches.cancelBatchPayment(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## createBatchPayment

The fire.com API allows businesses to automate payments between their accounts or to third parties across the UK and Europe.

For added security, the API can only set up the payments in batches. These batches must be approved by an authorised user via the firework mobile app.


The process is as follows:

**1.**Create a new batch

**2.**Add payments to the batch

**3.**Submit the batch for approval

Once the batch is submitted, the authorised users will receive notifications to their firework mobile apps. They can review the contents of the batch and then approve or reject it. If approved, the batch is then processed. You can avail of enhanced security by using Dual Authorisation to verify payments if you wish. Dual Authorisation can be enabled by you when setting up your API application in firework online.

**Batch Life Cycle Events**

A batch webhook can be specified to receive details of all the payments as they are processed. This webhook receives notifications for every event in the batch lifecycle.

The following events are triggered during a batch:

**batch.opened:** Contains the details of the batch opened. Checks that the callback URL exists - unless a HTTP 200 response is returned, the callback URL will not be configured.

**batch.item-added:** Details of the item added to the batch

**batch.item-removed:** Details of the item removed from the batch

**batch.cancelled:** Notifies that the batch was cancelled.

**batch.submitted:** Notifes that the batch was submitted

**batch.approved:** Notifies that the batch was approved.

**batch.rejected:** Notifies that the batch was rejected.

**batch.failed:** Notifies that the batch failed - includes the details of the failure (insufficient funds etc)

**batch.completed:** Notifies that the batch completed successfully. Includes a summary.

Push notifications are sent to the firework mobile app for many of these events too - these can be configured from within the app.

This is the first step in creating a batch payment.


### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateBatchPaymentNewBatch;
import org.openapis.openapi.models.operations.CreateBatchPaymentNewBatchTypeEnum;
import org.openapis.openapi.models.operations.CreateBatchPaymentResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("dolorum") {{
                    bearerAuth = "Bearer YOUR_BEARER_TOKEN_HERE";
                }})
                .build();

            CreateBatchPaymentNewBatch req = new CreateBatchPaymentNewBatch() {{
                batchName = "January 2018 Payroll";
                callbackUrl = "https://my.webserver.com/cb/payroll";
                currency = "EUR";
                jobNumber = "2022-01-PR";
                type = CreateBatchPaymentNewBatchTypeEnum.BANK_TRANSFER;
            }};            

            CreateBatchPaymentResponse res = sdk.paymentBatches.createBatchPayment(req);

            if (res.newBatchResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## deleteBankTransferBatchPayment

Removes a Payment from the Batch (Bank Transfers). You can only remove payments before the batch is submitted for approval (while it is in the OPEN state).

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteBankTransferBatchPaymentRequest;
import org.openapis.openapi.models.operations.DeleteBankTransferBatchPaymentResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("nam") {{
                    bearerAuth = "Bearer YOUR_BEARER_TOKEN_HERE";
                }})
                .build();

            DeleteBankTransferBatchPaymentRequest req = new DeleteBankTransferBatchPaymentRequest("4ADFB67A-0F5B-4A9A-9D74-34437250045C", "officia");            

            DeleteBankTransferBatchPaymentResponse res = sdk.paymentBatches.deleteBankTransferBatchPayment(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## deleteInternalTransferBatchPayment

Removes a Payment from the Batch (Internal Transfer). You can only remove payments before the batch is submitted for approval (while it is in the OPEN state).

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteInternalTransferBatchPaymentRequest;
import org.openapis.openapi.models.operations.DeleteInternalTransferBatchPaymentResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("occaecati") {{
                    bearerAuth = "Bearer YOUR_BEARER_TOKEN_HERE";
                }})
                .build();

            DeleteInternalTransferBatchPaymentRequest req = new DeleteInternalTransferBatchPaymentRequest("4ADFB67A-0F5B-4A9A-9D74-34437250045C", "4ADFB67A-0F5B-4A9A-9D74-34437250045C");            

            DeleteInternalTransferBatchPaymentResponse res = sdk.paymentBatches.deleteInternalTransferBatchPayment(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## deleteInternationalTransferBatchPayment

Removes a Payment from the Batch (International Transfers). You can only remove payments before the batch is submitted for approval (while it is in the OPEN state).

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteInternationalTransferBatchPaymentRequest;
import org.openapis.openapi.models.operations.DeleteInternationalTransferBatchPaymentResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("fugit") {{
                    bearerAuth = "Bearer YOUR_BEARER_TOKEN_HERE";
                }})
                .build();

            DeleteInternationalTransferBatchPaymentRequest req = new DeleteInternationalTransferBatchPaymentRequest("4ADFB67A-0F5B-4A9A-9D74-34437250045C", "deleniti");            

            DeleteInternationalTransferBatchPaymentResponse res = sdk.paymentBatches.deleteInternationalTransferBatchPayment(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getBatches

Returns the list of batch with the specified types and statuses.


### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetBatchesBatchStatusEnum;
import org.openapis.openapi.models.operations.GetBatchesBatchTypesEnum;
import org.openapis.openapi.models.operations.GetBatchesOrderByEnum;
import org.openapis.openapi.models.operations.GetBatchesOrderEnum;
import org.openapis.openapi.models.operations.GetBatchesRequest;
import org.openapis.openapi.models.operations.GetBatchesResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("hic") {{
                    bearerAuth = "Bearer YOUR_BEARER_TOKEN_HERE";
                }})
                .build();

            GetBatchesRequest req = new GetBatchesRequest() {{
                batchStatus = GetBatchesBatchStatusEnum.SUBMITTED;
                batchTypes = GetBatchesBatchTypesEnum.INTERNAL_TRANSFER;
                order = GetBatchesOrderEnum.DESC;
                orderBy = GetBatchesOrderByEnum.DATE;
            }};            

            GetBatchesResponse res = sdk.paymentBatches.getBatches(req);

            if (res.batchItems != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getDetailsSingleBatch

Returns the details of the batch specified in the API endpoint - {batchUuid}.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetDetailsSingleBatchRequest;
import org.openapis.openapi.models.operations.GetDetailsSingleBatchResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("optio") {{
                    bearerAuth = "Bearer YOUR_BEARER_TOKEN_HERE";
                }})
                .build();

            GetDetailsSingleBatchRequest req = new GetDetailsSingleBatchRequest("4ADFB67A-0F5B-4A9A-9D74-34437250045C");            

            GetDetailsSingleBatchResponse res = sdk.paymentBatches.getDetailsSingleBatch(req);

            if (res.batch != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getItemsBatchBankTransfer

Returns a paginated list of items in the specified batch.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetItemsBatchBankTransferRequest;
import org.openapis.openapi.models.operations.GetItemsBatchBankTransferResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("totam") {{
                    bearerAuth = "Bearer YOUR_BEARER_TOKEN_HERE";
                }})
                .build();

            GetItemsBatchBankTransferRequest req = new GetItemsBatchBankTransferRequest("4ADFB67A-0F5B-4A9A-9D74-34437250045C") {{
                limit = 10L;
                offset = 0L;
            }};            

            GetItemsBatchBankTransferResponse res = sdk.paymentBatches.getItemsBatchBankTransfer(req);

            if (res.batchItems != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getItemsBatchInternalTrasnfer

Returns a paginated list of items in the specified batch.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetItemsBatchInternalTrasnferRequest;
import org.openapis.openapi.models.operations.GetItemsBatchInternalTrasnferResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("beatae") {{
                    bearerAuth = "Bearer YOUR_BEARER_TOKEN_HERE";
                }})
                .build();

            GetItemsBatchInternalTrasnferRequest req = new GetItemsBatchInternalTrasnferRequest("4ADFB67A-0F5B-4A9A-9D74-34437250045C") {{
                limit = 10L;
                offset = 0L;
            }};            

            GetItemsBatchInternalTrasnferResponse res = sdk.paymentBatches.getItemsBatchInternalTrasnfer(req);

            if (res.batchItems != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getItemsBatchInternationalTransfer

Returns a paginated list of items in the specified batch.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetItemsBatchInternationalTransferRequest;
import org.openapis.openapi.models.operations.GetItemsBatchInternationalTransferResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("commodi") {{
                    bearerAuth = "Bearer YOUR_BEARER_TOKEN_HERE";
                }})
                .build();

            GetItemsBatchInternationalTransferRequest req = new GetItemsBatchInternationalTransferRequest("4ADFB67A-0F5B-4A9A-9D74-34437250045C") {{
                limit = 10L;
                offset = 0L;
            }};            

            GetItemsBatchInternationalTransferResponse res = sdk.paymentBatches.getItemsBatchInternationalTransfer(req);

            if (res.batchItems != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getListofApproversForBatch

Returns a list of approvers for this batch.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetListofApproversForBatchRequest;
import org.openapis.openapi.models.operations.GetListofApproversForBatchResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("molestiae") {{
                    bearerAuth = "Bearer YOUR_BEARER_TOKEN_HERE";
                }})
                .build();

            GetListofApproversForBatchRequest req = new GetListofApproversForBatchRequest("4ADFB67A-0F5B-4A9A-9D74-34437250045C");            

            GetListofApproversForBatchResponse res = sdk.paymentBatches.getListofApproversForBatch(req);

            if (res.batchApprovers != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## submitBatch

Submits the Batch (for approval in the case of a **BANK_TRANSFER** or **INTERNATIONAL_TRANSFER**). If this is an **INTERNAL_TRANSFER** batch, the transfers are immediately queued for processing. If this is a **BANK_TRANSFER** or **INTERNATIONAL_TRANSFER** batch, this will trigger requests for approval to the firework mobile apps of authorised users. Once those users approve the batch, it is queued for processing.

You can only submit a batch while it is in the OPEN state.


### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.SubmitBatchRequest;
import org.openapis.openapi.models.operations.SubmitBatchResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("modi") {{
                    bearerAuth = "Bearer YOUR_BEARER_TOKEN_HERE";
                }})
                .build();

            SubmitBatchRequest req = new SubmitBatchRequest("4ADFB67A-0F5B-4A9A-9D74-34437250045C");            

            SubmitBatchResponse res = sdk.paymentBatches.submitBatch(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
