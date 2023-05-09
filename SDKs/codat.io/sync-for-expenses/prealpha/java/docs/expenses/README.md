# expenses

## Overview

Create expense datasets and upload receipts.

### Available Operations

* [createExpenseDataset](#createexpensedataset) - Create expense-transactions
* [uploadAttachment](#uploadattachment) - Upload attachment

## createExpenseDataset

Create an expense transaction

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateExpenseDatasetRequest;
import org.openapis.openapi.models.operations.CreateExpenseDatasetResponse;
import org.openapis.openapi.models.shared.CreateExpenseRequest;
import org.openapis.openapi.models.shared.ExpenseTransaction;
import org.openapis.openapi.models.shared.ExpenseTransactionLine;
import org.openapis.openapi.models.shared.ExpenseTransactionTypeEnum;
import org.openapis.openapi.models.shared.RecordRef;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("unde") {{
                    authHeader = "YOUR_API_KEY_HERE";
                }})
                .build();

            CreateExpenseDatasetRequest req = new CreateExpenseDatasetRequest("8a210b68-6988-11ed-a1eb-0242ac120002") {{
                createExpenseRequest = new CreateExpenseRequest() {{
                    items = new org.openapis.openapi.models.shared.ExpenseTransaction[]{{
                        add(new ExpenseTransaction("GBP", "4d7c6929-7770-412b-91bb-44d3bc71d111", "2022-10-23T00:00:00Z", ExpenseTransactionTypeEnum.PAYMENT) {{
                            currency = "GBP";
                            currencyRate = 5448.83;
                            id = "4d7c6929-7770-412b-91bb-44d3bc71d111";
                            issueDate = "2022-10-23T00:00:00Z";
                            lines = new org.openapis.openapi.models.shared.ExpenseTransactionLine[]{{
                                add(new ExpenseTransactionLine(                new RecordRef() {{
                                                    id = "40e3e57c-2322-4898-966c-ca41adfd23fd";
                                                }};, 110.42, 14.43) {{
                                    accountRef = new RecordRef() {{
                                        id = "40e3e57c-2322-4898-966c-ca41adfd23fd";
                                    }};
                                    netAmount = 110.42;
                                    taxAmount = 14.43;
                                    taxRateRef = new RecordRef() {{
                                        id = "40e3e57c-2322-4898-966c-ca41adfd23fd";
                                    }};
                                    trackingRefs = new org.openapis.openapi.models.shared.RecordRef[]{{
                                        add(new RecordRef() {{
                                            id = "40e3e57c-2322-4898-966c-ca41adfd23fd";
                                        }}),
                                        add(new RecordRef() {{
                                            id = "40e3e57c-2322-4898-966c-ca41adfd23fd";
                                        }}),
                                    }};
                                }}),
                                add(new ExpenseTransactionLine(                new RecordRef() {{
                                                    id = "40e3e57c-2322-4898-966c-ca41adfd23fd";
                                                }};, 110.42, 14.43) {{
                                    accountRef = new RecordRef() {{
                                        id = "40e3e57c-2322-4898-966c-ca41adfd23fd";
                                    }};
                                    netAmount = 110.42;
                                    taxAmount = 14.43;
                                    taxRateRef = new RecordRef() {{
                                        id = "40e3e57c-2322-4898-966c-ca41adfd23fd";
                                    }};
                                    trackingRefs = new org.openapis.openapi.models.shared.RecordRef[]{{
                                        add(new RecordRef() {{
                                            id = "40e3e57c-2322-4898-966c-ca41adfd23fd";
                                        }}),
                                        add(new RecordRef() {{
                                            id = "40e3e57c-2322-4898-966c-ca41adfd23fd";
                                        }}),
                                        add(new RecordRef() {{
                                            id = "40e3e57c-2322-4898-966c-ca41adfd23fd";
                                        }}),
                                    }};
                                }}),
                                add(new ExpenseTransactionLine(                new RecordRef() {{
                                                    id = "40e3e57c-2322-4898-966c-ca41adfd23fd";
                                                }};, 110.42, 14.43) {{
                                    accountRef = new RecordRef() {{
                                        id = "40e3e57c-2322-4898-966c-ca41adfd23fd";
                                    }};
                                    netAmount = 110.42;
                                    taxAmount = 14.43;
                                    taxRateRef = new RecordRef() {{
                                        id = "40e3e57c-2322-4898-966c-ca41adfd23fd";
                                    }};
                                    trackingRefs = new org.openapis.openapi.models.shared.RecordRef[]{{
                                        add(new RecordRef() {{
                                            id = "40e3e57c-2322-4898-966c-ca41adfd23fd";
                                        }}),
                                        add(new RecordRef() {{
                                            id = "40e3e57c-2322-4898-966c-ca41adfd23fd";
                                        }}),
                                        add(new RecordRef() {{
                                            id = "40e3e57c-2322-4898-966c-ca41adfd23fd";
                                        }}),
                                    }};
                                }}),
                                add(new ExpenseTransactionLine(                new RecordRef() {{
                                                    id = "40e3e57c-2322-4898-966c-ca41adfd23fd";
                                                }};, 110.42, 14.43) {{
                                    accountRef = new RecordRef() {{
                                        id = "40e3e57c-2322-4898-966c-ca41adfd23fd";
                                    }};
                                    netAmount = 110.42;
                                    taxAmount = 14.43;
                                    taxRateRef = new RecordRef() {{
                                        id = "40e3e57c-2322-4898-966c-ca41adfd23fd";
                                    }};
                                    trackingRefs = new org.openapis.openapi.models.shared.RecordRef[]{{
                                        add(new RecordRef() {{
                                            id = "40e3e57c-2322-4898-966c-ca41adfd23fd";
                                        }}),
                                        add(new RecordRef() {{
                                            id = "40e3e57c-2322-4898-966c-ca41adfd23fd";
                                        }}),
                                    }};
                                }}),
                            }};
                            merchantName = "Amazon UK";
                            notes = "APPLE.COM/BILL - 09001077498 - Card Ending: 4590";
                            type = ExpenseTransactionTypeEnum.PAYMENT;
                        }}),
                        add(new ExpenseTransaction("GBP", "4d7c6929-7770-412b-91bb-44d3bc71d111", "2022-10-23T00:00:00Z", ExpenseTransactionTypeEnum.PAYMENT) {{
                            currency = "GBP";
                            currencyRate = 4375.87;
                            id = "4d7c6929-7770-412b-91bb-44d3bc71d111";
                            issueDate = "2022-10-23T00:00:00Z";
                            lines = new org.openapis.openapi.models.shared.ExpenseTransactionLine[]{{
                                add(new ExpenseTransactionLine(                new RecordRef() {{
                                                    id = "40e3e57c-2322-4898-966c-ca41adfd23fd";
                                                }};, 110.42, 14.43) {{
                                    accountRef = new RecordRef() {{
                                        id = "40e3e57c-2322-4898-966c-ca41adfd23fd";
                                    }};
                                    netAmount = 110.42;
                                    taxAmount = 14.43;
                                    taxRateRef = new RecordRef() {{
                                        id = "40e3e57c-2322-4898-966c-ca41adfd23fd";
                                    }};
                                    trackingRefs = new org.openapis.openapi.models.shared.RecordRef[]{{
                                        add(new RecordRef() {{
                                            id = "40e3e57c-2322-4898-966c-ca41adfd23fd";
                                        }}),
                                        add(new RecordRef() {{
                                            id = "40e3e57c-2322-4898-966c-ca41adfd23fd";
                                        }}),
                                        add(new RecordRef() {{
                                            id = "40e3e57c-2322-4898-966c-ca41adfd23fd";
                                        }}),
                                        add(new RecordRef() {{
                                            id = "40e3e57c-2322-4898-966c-ca41adfd23fd";
                                        }}),
                                    }};
                                }}),
                                add(new ExpenseTransactionLine(                new RecordRef() {{
                                                    id = "40e3e57c-2322-4898-966c-ca41adfd23fd";
                                                }};, 110.42, 14.43) {{
                                    accountRef = new RecordRef() {{
                                        id = "40e3e57c-2322-4898-966c-ca41adfd23fd";
                                    }};
                                    netAmount = 110.42;
                                    taxAmount = 14.43;
                                    taxRateRef = new RecordRef() {{
                                        id = "40e3e57c-2322-4898-966c-ca41adfd23fd";
                                    }};
                                    trackingRefs = new org.openapis.openapi.models.shared.RecordRef[]{{
                                        add(new RecordRef() {{
                                            id = "40e3e57c-2322-4898-966c-ca41adfd23fd";
                                        }}),
                                    }};
                                }}),
                            }};
                            merchantName = "Amazon UK";
                            notes = "APPLE.COM/BILL - 09001077498 - Card Ending: 4590";
                            type = ExpenseTransactionTypeEnum.PAYMENT;
                        }}),
                        add(new ExpenseTransaction("GBP", "4d7c6929-7770-412b-91bb-44d3bc71d111", "2022-10-23T00:00:00Z", ExpenseTransactionTypeEnum.PAYMENT) {{
                            currency = "GBP";
                            currencyRate = 9636.63;
                            id = "4d7c6929-7770-412b-91bb-44d3bc71d111";
                            issueDate = "2022-10-23T00:00:00Z";
                            lines = new org.openapis.openapi.models.shared.ExpenseTransactionLine[]{{
                                add(new ExpenseTransactionLine(                new RecordRef() {{
                                                    id = "40e3e57c-2322-4898-966c-ca41adfd23fd";
                                                }};, 110.42, 14.43) {{
                                    accountRef = new RecordRef() {{
                                        id = "40e3e57c-2322-4898-966c-ca41adfd23fd";
                                    }};
                                    netAmount = 110.42;
                                    taxAmount = 14.43;
                                    taxRateRef = new RecordRef() {{
                                        id = "40e3e57c-2322-4898-966c-ca41adfd23fd";
                                    }};
                                    trackingRefs = new org.openapis.openapi.models.shared.RecordRef[]{{
                                        add(new RecordRef() {{
                                            id = "40e3e57c-2322-4898-966c-ca41adfd23fd";
                                        }}),
                                        add(new RecordRef() {{
                                            id = "40e3e57c-2322-4898-966c-ca41adfd23fd";
                                        }}),
                                    }};
                                }}),
                                add(new ExpenseTransactionLine(                new RecordRef() {{
                                                    id = "40e3e57c-2322-4898-966c-ca41adfd23fd";
                                                }};, 110.42, 14.43) {{
                                    accountRef = new RecordRef() {{
                                        id = "40e3e57c-2322-4898-966c-ca41adfd23fd";
                                    }};
                                    netAmount = 110.42;
                                    taxAmount = 14.43;
                                    taxRateRef = new RecordRef() {{
                                        id = "40e3e57c-2322-4898-966c-ca41adfd23fd";
                                    }};
                                    trackingRefs = new org.openapis.openapi.models.shared.RecordRef[]{{
                                        add(new RecordRef() {{
                                            id = "40e3e57c-2322-4898-966c-ca41adfd23fd";
                                        }}),
                                        add(new RecordRef() {{
                                            id = "40e3e57c-2322-4898-966c-ca41adfd23fd";
                                        }}),
                                    }};
                                }}),
                            }};
                            merchantName = "Amazon UK";
                            notes = "APPLE.COM/BILL - 09001077498 - Card Ending: 4590";
                            type = ExpenseTransactionTypeEnum.PAYMENT;
                        }}),
                        add(new ExpenseTransaction("GBP", "4d7c6929-7770-412b-91bb-44d3bc71d111", "2022-10-23T00:00:00Z", ExpenseTransactionTypeEnum.PAYMENT) {{
                            currency = "GBP";
                            currencyRate = 7917.25;
                            id = "4d7c6929-7770-412b-91bb-44d3bc71d111";
                            issueDate = "2022-10-23T00:00:00Z";
                            lines = new org.openapis.openapi.models.shared.ExpenseTransactionLine[]{{
                                add(new ExpenseTransactionLine(                new RecordRef() {{
                                                    id = "40e3e57c-2322-4898-966c-ca41adfd23fd";
                                                }};, 110.42, 14.43) {{
                                    accountRef = new RecordRef() {{
                                        id = "40e3e57c-2322-4898-966c-ca41adfd23fd";
                                    }};
                                    netAmount = 110.42;
                                    taxAmount = 14.43;
                                    taxRateRef = new RecordRef() {{
                                        id = "40e3e57c-2322-4898-966c-ca41adfd23fd";
                                    }};
                                    trackingRefs = new org.openapis.openapi.models.shared.RecordRef[]{{
                                        add(new RecordRef() {{
                                            id = "40e3e57c-2322-4898-966c-ca41adfd23fd";
                                        }}),
                                        add(new RecordRef() {{
                                            id = "40e3e57c-2322-4898-966c-ca41adfd23fd";
                                        }}),
                                        add(new RecordRef() {{
                                            id = "40e3e57c-2322-4898-966c-ca41adfd23fd";
                                        }}),
                                    }};
                                }}),
                                add(new ExpenseTransactionLine(                new RecordRef() {{
                                                    id = "40e3e57c-2322-4898-966c-ca41adfd23fd";
                                                }};, 110.42, 14.43) {{
                                    accountRef = new RecordRef() {{
                                        id = "40e3e57c-2322-4898-966c-ca41adfd23fd";
                                    }};
                                    netAmount = 110.42;
                                    taxAmount = 14.43;
                                    taxRateRef = new RecordRef() {{
                                        id = "40e3e57c-2322-4898-966c-ca41adfd23fd";
                                    }};
                                    trackingRefs = new org.openapis.openapi.models.shared.RecordRef[]{{
                                        add(new RecordRef() {{
                                            id = "40e3e57c-2322-4898-966c-ca41adfd23fd";
                                        }}),
                                        add(new RecordRef() {{
                                            id = "40e3e57c-2322-4898-966c-ca41adfd23fd";
                                        }}),
                                    }};
                                }}),
                                add(new ExpenseTransactionLine(                new RecordRef() {{
                                                    id = "40e3e57c-2322-4898-966c-ca41adfd23fd";
                                                }};, 110.42, 14.43) {{
                                    accountRef = new RecordRef() {{
                                        id = "40e3e57c-2322-4898-966c-ca41adfd23fd";
                                    }};
                                    netAmount = 110.42;
                                    taxAmount = 14.43;
                                    taxRateRef = new RecordRef() {{
                                        id = "40e3e57c-2322-4898-966c-ca41adfd23fd";
                                    }};
                                    trackingRefs = new org.openapis.openapi.models.shared.RecordRef[]{{
                                        add(new RecordRef() {{
                                            id = "40e3e57c-2322-4898-966c-ca41adfd23fd";
                                        }}),
                                        add(new RecordRef() {{
                                            id = "40e3e57c-2322-4898-966c-ca41adfd23fd";
                                        }}),
                                        add(new RecordRef() {{
                                            id = "40e3e57c-2322-4898-966c-ca41adfd23fd";
                                        }}),
                                    }};
                                }}),
                                add(new ExpenseTransactionLine(                new RecordRef() {{
                                                    id = "40e3e57c-2322-4898-966c-ca41adfd23fd";
                                                }};, 110.42, 14.43) {{
                                    accountRef = new RecordRef() {{
                                        id = "40e3e57c-2322-4898-966c-ca41adfd23fd";
                                    }};
                                    netAmount = 110.42;
                                    taxAmount = 14.43;
                                    taxRateRef = new RecordRef() {{
                                        id = "40e3e57c-2322-4898-966c-ca41adfd23fd";
                                    }};
                                    trackingRefs = new org.openapis.openapi.models.shared.RecordRef[]{{
                                        add(new RecordRef() {{
                                            id = "40e3e57c-2322-4898-966c-ca41adfd23fd";
                                        }}),
                                        add(new RecordRef() {{
                                            id = "40e3e57c-2322-4898-966c-ca41adfd23fd";
                                        }}),
                                    }};
                                }}),
                            }};
                            merchantName = "Amazon UK";
                            notes = "APPLE.COM/BILL - 09001077498 - Card Ending: 4590";
                            type = ExpenseTransactionTypeEnum.PAYMENT;
                        }}),
                    }};
                }};;
            }};            

            CreateExpenseDatasetResponse res = sdk.expenses.createExpenseDataset(req);

            if (res.createExpenseResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## uploadAttachment

Creates an attachment in the accounting software against the given transactionId

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UploadAttachmentRequest;
import org.openapis.openapi.models.operations.UploadAttachmentRequestBody;
import org.openapis.openapi.models.operations.UploadAttachmentResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("recusandae") {{
                    authHeader = "YOUR_API_KEY_HERE";
                }})
                .build();

            UploadAttachmentRequest req = new UploadAttachmentRequest("8a210b68-6988-11ed-a1eb-0242ac120002", "6fb40d5e-b13e-11ed-afa1-0242ac120002", "336694d8-2dca-4cb5-a28d-3ccb83e55eee") {{
                requestBody = new UploadAttachmentRequestBody("temporibus".getBytes(), "ab");;
            }};            

            UploadAttachmentResponse res = sdk.expenses.uploadAttachment(req);

            if (res.attachment != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
