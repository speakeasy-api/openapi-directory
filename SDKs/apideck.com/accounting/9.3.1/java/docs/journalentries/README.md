# journalEntries

### Available Operations

* [journalEntriesAdd](#journalentriesadd) - Create Journal Entry
* [journalEntriesAll](#journalentriesall) - List Journal Entries
* [journalEntriesDelete](#journalentriesdelete) - Delete Journal Entry
* [journalEntriesOne](#journalentriesone) - Get Journal Entry
* [journalEntriesUpdate](#journalentriesupdate) - Update Journal Entry

## journalEntriesAdd

Create Journal Entry

### Example Usage

```java
package hello.world;

import java.time.OffsetDateTime;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.JournalEntriesAddRequest;
import org.openapis.openapi.models.operations.JournalEntriesAddResponse;
import org.openapis.openapi.models.operations.JournalEntriesAddSecurity;
import org.openapis.openapi.models.shared.CurrencyEnum;
import org.openapis.openapi.models.shared.JournalEntryInput;
import org.openapis.openapi.models.shared.JournalEntryLineItemInput;
import org.openapis.openapi.models.shared.JournalEntryLineItemTypeEnum;
import org.openapis.openapi.models.shared.LinkedLedgerAccountInput;
import org.openapis.openapi.models.shared.LinkedTaxRateInput;
import org.openapis.openapi.models.shared.LinkedTrackingCategory;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            JournalEntriesAddRequest req = new JournalEntriesAddRequest(                new JournalEntryInput() {{
                                currency = CurrencyEnum.USD;
                                currencyRate = 0.69;
                                journalSymbol = "IND";
                                lineItems = new org.openapis.openapi.models.shared.JournalEntryLineItemInput[]{{
                                    add(new JournalEntryLineItemInput(                new LinkedLedgerAccountInput() {{
                                                        code = "453";
                                                        id = "123456";
                                                        nominalCode = "N091";
                                                    }};, 27500, JournalEntryLineItemTypeEnum.DEBIT) {{
                                        description = "Model Y is a fully electric, mid-size SUV, with seating for up to seven, dual motor AWD and unparalleled protection.";
                                        ledgerAccount = new LinkedLedgerAccountInput() {{
                                            code = "453";
                                            id = "123456";
                                            nominalCode = "N091";
                                        }};
                                        taxAmount = 27500;
                                        taxRate = new LinkedTaxRateInput() {{
                                            id = "123456";
                                        }};
                                        totalAmount = 27500;
                                        trackingCategory = new LinkedTrackingCategory() {{
                                            id = "123456";
                                            name = "New York";
                                        }};
                                        type = JournalEntryLineItemTypeEnum.DEBIT;
                                    }}),
                                    add(new JournalEntryLineItemInput(                new LinkedLedgerAccountInput() {{
                                                        code = "453";
                                                        id = "123456";
                                                        nominalCode = "N091";
                                                    }};, 27500, JournalEntryLineItemTypeEnum.DEBIT) {{
                                        description = "Model Y is a fully electric, mid-size SUV, with seating for up to seven, dual motor AWD and unparalleled protection.";
                                        ledgerAccount = new LinkedLedgerAccountInput() {{
                                            code = "453";
                                            id = "123456";
                                            nominalCode = "N091";
                                        }};
                                        taxAmount = 27500;
                                        taxRate = new LinkedTaxRateInput() {{
                                            id = "123456";
                                        }};
                                        totalAmount = 27500;
                                        trackingCategory = new LinkedTrackingCategory() {{
                                            id = "123456";
                                            name = "New York";
                                        }};
                                        type = JournalEntryLineItemTypeEnum.DEBIT;
                                    }}),
                                    add(new JournalEntryLineItemInput(                new LinkedLedgerAccountInput() {{
                                                        code = "453";
                                                        id = "123456";
                                                        nominalCode = "N091";
                                                    }};, 27500, JournalEntryLineItemTypeEnum.DEBIT) {{
                                        description = "Model Y is a fully electric, mid-size SUV, with seating for up to seven, dual motor AWD and unparalleled protection.";
                                        ledgerAccount = new LinkedLedgerAccountInput() {{
                                            code = "453";
                                            id = "123456";
                                            nominalCode = "N091";
                                        }};
                                        taxAmount = 27500;
                                        taxRate = new LinkedTaxRateInput() {{
                                            id = "123456";
                                        }};
                                        totalAmount = 27500;
                                        trackingCategory = new LinkedTrackingCategory() {{
                                            id = "123456";
                                            name = "New York";
                                        }};
                                        type = JournalEntryLineItemTypeEnum.DEBIT;
                                    }}),
                                    add(new JournalEntryLineItemInput(                new LinkedLedgerAccountInput() {{
                                                        code = "453";
                                                        id = "123456";
                                                        nominalCode = "N091";
                                                    }};, 27500, JournalEntryLineItemTypeEnum.DEBIT) {{
                                        description = "Model Y is a fully electric, mid-size SUV, with seating for up to seven, dual motor AWD and unparalleled protection.";
                                        ledgerAccount = new LinkedLedgerAccountInput() {{
                                            code = "453";
                                            id = "123456";
                                            nominalCode = "N091";
                                        }};
                                        taxAmount = 27500;
                                        taxRate = new LinkedTaxRateInput() {{
                                            id = "123456";
                                        }};
                                        totalAmount = 27500;
                                        trackingCategory = new LinkedTrackingCategory() {{
                                            id = "123456";
                                            name = "New York";
                                        }};
                                        type = JournalEntryLineItemTypeEnum.DEBIT;
                                    }}),
                                }};
                                memo = "Thank you for your business and have a great day!";
                                postedAt = OffsetDateTime.parse("2020-09-30T07:43:32.000Z");
                                rowVersion = "1-12345";
                                title = "Purchase Invoice-Inventory (USD): 2019/02/01 Batch Summary Entry";
                            }};, "a", "dolorum") {{
                raw = false;
                xApideckServiceId = "in";
            }};            

            JournalEntriesAddResponse res = sdk.journalEntries.journalEntriesAdd(req, new JournalEntriesAddSecurity("in") {{
                apiKey = "YOUR_API_KEY_HERE";
            }});

            if (res.createJournalEntryResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## journalEntriesAll

List Journal Entries

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.JournalEntriesAllRequest;
import org.openapis.openapi.models.operations.JournalEntriesAllResponse;
import org.openapis.openapi.models.operations.JournalEntriesAllSecurity;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            JournalEntriesAllRequest req = new JournalEntriesAllRequest("illum", "maiores") {{
                cursor = "rerum";
                fields = "dicta";
                limit = 297437L;
                passThrough = new java.util.HashMap<String, Object>() {{
                    put("facere", "ea");
                    put("aliquid", "laborum");
                    put("accusamus", "non");
                    put("occaecati", "enim");
                }};
                raw = false;
                xApideckServiceId = "accusamus";
            }};            

            JournalEntriesAllResponse res = sdk.journalEntries.journalEntriesAll(req, new JournalEntriesAllSecurity("delectus") {{
                apiKey = "YOUR_API_KEY_HERE";
            }});

            if (res.getJournalEntriesResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## journalEntriesDelete

Delete Journal Entry

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.JournalEntriesDeleteRequest;
import org.openapis.openapi.models.operations.JournalEntriesDeleteResponse;
import org.openapis.openapi.models.operations.JournalEntriesDeleteSecurity;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            JournalEntriesDeleteRequest req = new JournalEntriesDeleteRequest("quidem", "provident", "nam") {{
                raw = false;
                xApideckServiceId = "id";
            }};            

            JournalEntriesDeleteResponse res = sdk.journalEntries.journalEntriesDelete(req, new JournalEntriesDeleteSecurity("blanditiis") {{
                apiKey = "YOUR_API_KEY_HERE";
            }});

            if (res.deleteJournalEntryResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## journalEntriesOne

Get Journal Entry

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.JournalEntriesOneRequest;
import org.openapis.openapi.models.operations.JournalEntriesOneResponse;
import org.openapis.openapi.models.operations.JournalEntriesOneSecurity;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            JournalEntriesOneRequest req = new JournalEntriesOneRequest("deleniti", "sapiente", "amet") {{
                fields = "deserunt";
                raw = false;
                xApideckServiceId = "nisi";
            }};            

            JournalEntriesOneResponse res = sdk.journalEntries.journalEntriesOne(req, new JournalEntriesOneSecurity("vel") {{
                apiKey = "YOUR_API_KEY_HERE";
            }});

            if (res.getJournalEntryResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## journalEntriesUpdate

Update Journal Entry

### Example Usage

```java
package hello.world;

import java.time.OffsetDateTime;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.JournalEntriesUpdateRequest;
import org.openapis.openapi.models.operations.JournalEntriesUpdateResponse;
import org.openapis.openapi.models.operations.JournalEntriesUpdateSecurity;
import org.openapis.openapi.models.shared.CurrencyEnum;
import org.openapis.openapi.models.shared.JournalEntryInput;
import org.openapis.openapi.models.shared.JournalEntryLineItemInput;
import org.openapis.openapi.models.shared.JournalEntryLineItemTypeEnum;
import org.openapis.openapi.models.shared.LinkedLedgerAccountInput;
import org.openapis.openapi.models.shared.LinkedTaxRateInput;
import org.openapis.openapi.models.shared.LinkedTrackingCategory;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            JournalEntriesUpdateRequest req = new JournalEntriesUpdateRequest(                new JournalEntryInput() {{
                                currency = CurrencyEnum.USD;
                                currencyRate = 0.69;
                                journalSymbol = "IND";
                                lineItems = new org.openapis.openapi.models.shared.JournalEntryLineItemInput[]{{
                                    add(new JournalEntryLineItemInput(                new LinkedLedgerAccountInput() {{
                                                        code = "453";
                                                        id = "123456";
                                                        nominalCode = "N091";
                                                    }};, 27500, JournalEntryLineItemTypeEnum.DEBIT) {{
                                        description = "Model Y is a fully electric, mid-size SUV, with seating for up to seven, dual motor AWD and unparalleled protection.";
                                        ledgerAccount = new LinkedLedgerAccountInput() {{
                                            code = "453";
                                            id = "123456";
                                            nominalCode = "N091";
                                        }};
                                        taxAmount = 27500;
                                        taxRate = new LinkedTaxRateInput() {{
                                            id = "123456";
                                        }};
                                        totalAmount = 27500;
                                        trackingCategory = new LinkedTrackingCategory() {{
                                            id = "123456";
                                            name = "New York";
                                        }};
                                        type = JournalEntryLineItemTypeEnum.DEBIT;
                                    }}),
                                    add(new JournalEntryLineItemInput(                new LinkedLedgerAccountInput() {{
                                                        code = "453";
                                                        id = "123456";
                                                        nominalCode = "N091";
                                                    }};, 27500, JournalEntryLineItemTypeEnum.DEBIT) {{
                                        description = "Model Y is a fully electric, mid-size SUV, with seating for up to seven, dual motor AWD and unparalleled protection.";
                                        ledgerAccount = new LinkedLedgerAccountInput() {{
                                            code = "453";
                                            id = "123456";
                                            nominalCode = "N091";
                                        }};
                                        taxAmount = 27500;
                                        taxRate = new LinkedTaxRateInput() {{
                                            id = "123456";
                                        }};
                                        totalAmount = 27500;
                                        trackingCategory = new LinkedTrackingCategory() {{
                                            id = "123456";
                                            name = "New York";
                                        }};
                                        type = JournalEntryLineItemTypeEnum.DEBIT;
                                    }}),
                                    add(new JournalEntryLineItemInput(                new LinkedLedgerAccountInput() {{
                                                        code = "453";
                                                        id = "123456";
                                                        nominalCode = "N091";
                                                    }};, 27500, JournalEntryLineItemTypeEnum.DEBIT) {{
                                        description = "Model Y is a fully electric, mid-size SUV, with seating for up to seven, dual motor AWD and unparalleled protection.";
                                        ledgerAccount = new LinkedLedgerAccountInput() {{
                                            code = "453";
                                            id = "123456";
                                            nominalCode = "N091";
                                        }};
                                        taxAmount = 27500;
                                        taxRate = new LinkedTaxRateInput() {{
                                            id = "123456";
                                        }};
                                        totalAmount = 27500;
                                        trackingCategory = new LinkedTrackingCategory() {{
                                            id = "123456";
                                            name = "New York";
                                        }};
                                        type = JournalEntryLineItemTypeEnum.DEBIT;
                                    }}),
                                }};
                                memo = "Thank you for your business and have a great day!";
                                postedAt = OffsetDateTime.parse("2020-09-30T07:43:32.000Z");
                                rowVersion = "1-12345";
                                title = "Purchase Invoice-Inventory (USD): 2019/02/01 Batch Summary Entry";
                            }};, "omnis", "molestiae", "perferendis") {{
                raw = false;
                xApideckServiceId = "nihil";
            }};            

            JournalEntriesUpdateResponse res = sdk.journalEntries.journalEntriesUpdate(req, new JournalEntriesUpdateSecurity("magnam") {{
                apiKey = "YOUR_API_KEY_HERE";
            }});

            if (res.updateJournalEntryResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
