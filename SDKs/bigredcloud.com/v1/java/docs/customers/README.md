# customers

### Available Operations

* [customersDelete](#customersdelete) - Removes an existing Customer.
* [customersGet](#customersget) - Returns a list of company's Customers. Supports OData querying protocol.
Filtering is forbidden.
Ordering is allowed by "id" and "code" fields.
* [customersGetAccountTrans](#customersgetaccounttrans) - Returns a list of Customer's account transactions.
* [customersGetOpeningBalance](#customersgetopeningbalance) - Returns a Customer's opening balances, calculated for the next periods: current month, one month old, two months old, three and more months old.
* [customersGetOpeningBalanceList](#customersgetopeningbalancelist) - Returns a list of Customer's opening balance transactions.
* [customersGetQuotes](#customersgetquotes) - Returns a list of Customer's quotes.
* [customersPost](#customerspost) - Creates a new Customer.
* [customersProcessBatch](#customersprocessbatch) - Processes a batch of Customers.
* [customersPut](#customersput) - Updates an existing Customer.
* [getV1CustomersId](#getv1customersid) - Returns information about a single Customer. You may specify that Customer's ledger balance should be calculated.

## customersDelete

Removes an existing Customer.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CustomersDeleteRequest;
import org.openapis.openapi.models.operations.CustomersDeleteResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            CustomersDeleteRequest req = new CustomersDeleteRequest(681359L, "eius");            

            CustomersDeleteResponse res = sdk.customers.customersDelete(req);

            if (res.customersDelete200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## customersGet

Returns a list of company's Customers. Supports OData querying protocol.
Filtering is forbidden.
Ordering is allowed by "id" and "code" fields.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CustomersGetResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            CustomersGetResponse res = sdk.customers.customersGet();

            if (res.pageResultCustomerQueryDto != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## customersGetAccountTrans

Returns a list of Customer's account transactions.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CustomersGetAccountTransRequest;
import org.openapis.openapi.models.operations.CustomersGetAccountTransResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            CustomersGetAccountTransRequest req = new CustomersGetAccountTransRequest(178367L);            

            CustomersGetAccountTransResponse res = sdk.customers.customersGetAccountTrans(req);

            if (res.accountTranDtos != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## customersGetOpeningBalance

Returns a Customer's opening balances, calculated for the next periods: current month, one month old, two months old, three and more months old.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CustomersGetOpeningBalanceRequest;
import org.openapis.openapi.models.operations.CustomersGetOpeningBalanceResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            CustomersGetOpeningBalanceRequest req = new CustomersGetOpeningBalanceRequest(373813L);            

            CustomersGetOpeningBalanceResponse res = sdk.customers.customersGetOpeningBalance(req);

            if (res.ownerOpeningBalanceInPeriodsDto != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## customersGetOpeningBalanceList

Returns a list of Customer's opening balance transactions.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CustomersGetOpeningBalanceListRequest;
import org.openapis.openapi.models.operations.CustomersGetOpeningBalanceListResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            CustomersGetOpeningBalanceListRequest req = new CustomersGetOpeningBalanceListRequest(69859L);            

            CustomersGetOpeningBalanceListResponse res = sdk.customers.customersGetOpeningBalanceList(req);

            if (res.ownerOpeningBalanceDtos != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## customersGetQuotes

Returns a list of Customer's quotes.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CustomersGetQuotesRequest;
import org.openapis.openapi.models.operations.CustomersGetQuotesResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            CustomersGetQuotesRequest req = new CustomersGetQuotesRequest(587600L);            

            CustomersGetQuotesResponse res = sdk.customers.customersGetQuotes(req);

            if (res.quoteDtos != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## customersPost

Creates a new Customer.

### Example Usage

```java
package hello.world;

import java.time.OffsetDateTime;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CustomersPostResponse;
import org.openapis.openapi.models.shared.CustomerDto;
import org.openapis.openapi.models.shared.EFTBankDto;
import org.openapis.openapi.models.shared.OwnerOpeningBalanceDto;
import org.openapis.openapi.models.shared.OwnerOpeningBalanceInPeriodsDto;
import org.openapis.openapi.models.shared.OwnerOpeningBalanceVatEntryDto;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            org.openapis.openapi.models.shared.CustomerDto req = new CustomerDto() {{
                accountName = "consequatur";
                accountNumber = "tempora";
                additionalEmails = new String[]{{
                    add("ipsam"),
                    add("aspernatur"),
                    add("sequi"),
                    add("quo"),
                }};
                address = new String[]{{
                    add("recusandae"),
                    add("aperiam"),
                }};
                authCode = "distinctio";
                bank = new EFTBankDto() {{
                    branch = "quod";
                    id = 490819L;
                    name = "Jackie Leannon";
                    sortCode = "odio";
                }};;
                businessIdentifierCode = "occaecati";
                code = "commodi";
                contact = "sapiente";
                delivery = new String[]{{
                    add("deserunt"),
                }};
                eFTReference = "molestiae";
                email = "Ottilie_Keeling@gmail.com";
                fax = "consequuntur";
                id = 536178L;
                internationalBankAccountNumber = "fugit";
                ledgerBalance = 6813.93;
                mobile = "1-451-431-9111 x9550";
                name = "Ms. Olive Tillman";
                openingBalance = new OwnerOpeningBalanceInPeriodsDto() {{
                    currentMonth = 7241.68;
                    oneMonthOld = 8771.31;
                    threeMonthsOld = 3990.25;
                    twoMonthsOld = 934.59;
                }};;
                openingBalances = new org.openapis.openapi.models.shared.OwnerOpeningBalanceDto[]{{
                    add(new OwnerOpeningBalanceDto() {{
                        entryDate = OffsetDateTime.parse("2022-04-24T03:22:50.654Z");
                        id = 473221L;
                        isChanged = false;
                        procDate = OffsetDateTime.parse("2021-11-03T10:56:47.600Z");
                        reference = "minima";
                        timestamp = "distinctio";
                        total = 7567.79;
                        totalVAT = 270.69;
                        unpaid = 6360.61;
                        vatEntries = new org.openapis.openapi.models.shared.OwnerOpeningBalanceVatEntryDto[]{{
                            add(new OwnerOpeningBalanceVatEntryDto() {{
                                amount = 2400.2;
                                vatRateId = 766964L;
                            }}),
                            add(new OwnerOpeningBalanceVatEntryDto() {{
                                amount = 1605.38;
                                vatRateId = 9766L;
                            }}),
                            add(new OwnerOpeningBalanceVatEntryDto() {{
                                amount = 7963.92;
                                vatRateId = 308286L;
                            }}),
                        }};
                    }}),
                    add(new OwnerOpeningBalanceDto() {{
                        entryDate = OffsetDateTime.parse("2022-04-21T00:17:42.407Z");
                        id = 458139L;
                        isChanged = false;
                        procDate = OffsetDateTime.parse("2021-10-26T13:57:26.455Z");
                        reference = "a";
                        timestamp = "nulla";
                        total = 5578.11;
                        totalVAT = 4572.23;
                        unpaid = 974.68;
                        vatEntries = new org.openapis.openapi.models.shared.OwnerOpeningBalanceVatEntryDto[]{{
                            add(new OwnerOpeningBalanceVatEntryDto() {{
                                amount = 6216.79;
                                vatRateId = 575751L;
                            }}),
                            add(new OwnerOpeningBalanceVatEntryDto() {{
                                amount = 8630.23;
                                vatRateId = 820767L;
                            }}),
                            add(new OwnerOpeningBalanceVatEntryDto() {{
                                amount = 1576.32;
                                vatRateId = 908844L;
                            }}),
                            add(new OwnerOpeningBalanceVatEntryDto() {{
                                amount = 9924.3;
                                vatRateId = 815524L;
                            }}),
                        }};
                    }}),
                    add(new OwnerOpeningBalanceDto() {{
                        entryDate = OffsetDateTime.parse("2022-11-03T19:31:44.626Z");
                        id = 94458L;
                        isChanged = false;
                        procDate = OffsetDateTime.parse("2021-09-25T11:11:22.943Z");
                        reference = "aliquid";
                        timestamp = "tenetur";
                        total = 627.13;
                        totalVAT = 9367.47;
                        unpaid = 4240.32;
                        vatEntries = new org.openapis.openapi.models.shared.OwnerOpeningBalanceVatEntryDto[]{{
                            add(new OwnerOpeningBalanceVatEntryDto() {{
                                amount = 2586.84;
                                vatRateId = 727697L;
                            }}),
                            add(new OwnerOpeningBalanceVatEntryDto() {{
                                amount = 8490.39;
                                vatRateId = 742238L;
                            }}),
                        }};
                    }}),
                    add(new OwnerOpeningBalanceDto() {{
                        entryDate = OffsetDateTime.parse("2022-09-10T22:48:07.154Z");
                        id = 958983L;
                        isChanged = false;
                        procDate = OffsetDateTime.parse("2022-08-24T06:58:07.315Z");
                        reference = "reprehenderit";
                        timestamp = "ullam";
                        total = 3917.74;
                        totalVAT = 163.28;
                        unpaid = 5318.49;
                        vatEntries = new org.openapis.openapi.models.shared.OwnerOpeningBalanceVatEntryDto[]{{
                            add(new OwnerOpeningBalanceVatEntryDto() {{
                                amount = 8453.58;
                                vatRateId = 401259L;
                            }}),
                        }};
                    }}),
                }};
                ourCode = "deleniti";
                ownerTypeId = 929292L;
                phone = "1-269-280-4030 x2268";
                timestamp = "accusantium";
                vatAnalysisTypeId = 522371L;
                vatReg = "aut";
                vatType = 513075L;
            }};            

            CustomersPostResponse res = sdk.customers.customersPost(req);

            if (res.customersPost200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## customersProcessBatch

Processes a batch of Customers.

### Example Usage

```java
package hello.world;

import java.time.OffsetDateTime;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CustomersProcessBatchResponse;
import org.openapis.openapi.models.shared.BatchItemCustomerDto;
import org.openapis.openapi.models.shared.BatchItemCustomerDtoOpCodeEnum;
import org.openapis.openapi.models.shared.CustomerDto;
import org.openapis.openapi.models.shared.EFTBankDto;
import org.openapis.openapi.models.shared.OwnerOpeningBalanceDto;
import org.openapis.openapi.models.shared.OwnerOpeningBalanceInPeriodsDto;
import org.openapis.openapi.models.shared.OwnerOpeningBalanceVatEntryDto;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            org.openapis.openapi.models.. req = new org.openapis.openapi.models.shared.BatchItemCustomerDto[]{{
                add(new BatchItemCustomerDto() {{
                    item = new CustomerDto() {{
                        accountName = "mollitia";
                        accountNumber = "ab";
                        additionalEmails = new String[]{{
                            add("non"),
                            add("voluptatem"),
                            add("dolor"),
                        }};
                        address = new String[]{{
                            add("numquam"),
                            add("impedit"),
                            add("explicabo"),
                        }};
                        authCode = "voluptas";
                        bank = new EFTBankDto() {{
                            branch = "aut";
                            id = 491025L;
                            name = "Elisa Mosciski";
                            sortCode = "voluptas";
                        }};
                        businessIdentifierCode = "asperiores";
                        code = "aperiam";
                        contact = "ea";
                        delivery = new String[]{{
                            add("consequuntur"),
                            add("repellendus"),
                        }};
                        eFTReference = "officia";
                        email = "Jennifer.Nikolaus6@hotmail.com";
                        fax = "quaerat";
                        id = 783235L;
                        internationalBankAccountNumber = "quod";
                        ledgerBalance = 2883.98;
                        mobile = "(366) 526-6958";
                        name = "Dora Luettgen";
                        openingBalance = new OwnerOpeningBalanceInPeriodsDto() {{
                            currentMonth = 8225.6;
                            oneMonthOld = 7065.75;
                            threeMonthsOld = 7382.27;
                            twoMonthsOld = 4148.57;
                        }};
                        openingBalances = new org.openapis.openapi.models.shared.OwnerOpeningBalanceDto[]{{
                            add(new OwnerOpeningBalanceDto() {{
                                entryDate = OffsetDateTime.parse("2022-01-12T08:24:33.830Z");
                                id = 828657L;
                                isChanged = false;
                                procDate = OffsetDateTime.parse("2022-01-28T09:17:23.255Z");
                                reference = "aliquid";
                                timestamp = "aperiam";
                                total = 7386.83;
                                totalVAT = 2326.27;
                                unpaid = 4490.83;
                                vatEntries = new org.openapis.openapi.models.shared.OwnerOpeningBalanceVatEntryDto[]{{
                                    add(new OwnerOpeningBalanceVatEntryDto() {{
                                        amount = 9372.85;
                                        vatRateId = 814967L;
                                    }}),
                                    add(new OwnerOpeningBalanceVatEntryDto() {{
                                        amount = 2572.33;
                                        vatRateId = 985492L;
                                    }}),
                                }};
                            }}),
                            add(new OwnerOpeningBalanceDto() {{
                                entryDate = OffsetDateTime.parse("2022-01-12T07:48:28.322Z");
                                id = 697142L;
                                isChanged = false;
                                procDate = OffsetDateTime.parse("2020-04-23T16:59:51.275Z");
                                reference = "dolore";
                                timestamp = "sunt";
                                total = 9920.12;
                                totalVAT = 2415.45;
                                unpaid = 2494.2;
                                vatEntries = new org.openapis.openapi.models.shared.OwnerOpeningBalanceVatEntryDto[]{{
                                    add(new OwnerOpeningBalanceVatEntryDto() {{
                                        amount = 1059.06;
                                        vatRateId = 489509L;
                                    }}),
                                }};
                            }}),
                        }};
                        ourCode = "a";
                        ownerTypeId = 891523L;
                        phone = "463.297.1862";
                        timestamp = "aspernatur";
                        vatAnalysisTypeId = 379057L;
                        vatReg = "voluptas";
                        vatType = 374296L;
                    }};
                    opCode = BatchItemCustomerDtoOpCodeEnum.ONE;
                }}),
                add(new BatchItemCustomerDto() {{
                    item = new CustomerDto() {{
                        accountName = "nobis";
                        accountNumber = "dolorum";
                        additionalEmails = new String[]{{
                            add("minus"),
                        }};
                        address = new String[]{{
                            add("blanditiis"),
                        }};
                        authCode = "in";
                        bank = new EFTBankDto() {{
                            branch = "dolore";
                            id = 304468L;
                            name = "Lionel Herman";
                            sortCode = "blanditiis";
                        }};
                        businessIdentifierCode = "quas";
                        code = "hic";
                        contact = "nesciunt";
                        delivery = new String[]{{
                            add("corrupti"),
                            add("pariatur"),
                            add("totam"),
                        }};
                        eFTReference = "hic";
                        email = "Nettie.Bailey96@yahoo.com";
                        fax = "explicabo";
                        id = 994401L;
                        internationalBankAccountNumber = "facilis";
                        ledgerBalance = 4518.22;
                        mobile = "262.714.4613 x6139";
                        name = "Ms. Gregory Wisoky";
                        openingBalance = new OwnerOpeningBalanceInPeriodsDto() {{
                            currentMonth = 2748.23;
                            oneMonthOld = 1484.78;
                            threeMonthsOld = 5922.31;
                            twoMonthsOld = 2587.02;
                        }};
                        openingBalances = new org.openapis.openapi.models.shared.OwnerOpeningBalanceDto[]{{
                            add(new OwnerOpeningBalanceDto() {{
                                entryDate = OffsetDateTime.parse("2022-08-05T13:00:56.741Z");
                                id = 579912L;
                                isChanged = false;
                                procDate = OffsetDateTime.parse("2021-01-18T16:49:49.451Z");
                                reference = "tempora";
                                timestamp = "tempora";
                                total = 4554.44;
                                totalVAT = 9700.76;
                                unpaid = 4017.13;
                                vatEntries = new org.openapis.openapi.models.shared.OwnerOpeningBalanceVatEntryDto[]{{
                                    add(new OwnerOpeningBalanceVatEntryDto() {{
                                        amount = 2484.13;
                                        vatRateId = 888044L;
                                    }}),
                                }};
                            }}),
                            add(new OwnerOpeningBalanceDto() {{
                                entryDate = OffsetDateTime.parse("2021-08-01T17:10:22.856Z");
                                id = 310381L;
                                isChanged = false;
                                procDate = OffsetDateTime.parse("2022-08-17T20:12:51.918Z");
                                reference = "debitis";
                                timestamp = "rem";
                                total = 265.22;
                                totalVAT = 7505.95;
                                unpaid = 6256.37;
                                vatEntries = new org.openapis.openapi.models.shared.OwnerOpeningBalanceVatEntryDto[]{{
                                    add(new OwnerOpeningBalanceVatEntryDto() {{
                                        amount = 3295.43;
                                        vatRateId = 924159L;
                                    }}),
                                    add(new OwnerOpeningBalanceVatEntryDto() {{
                                        amount = 9671.22;
                                        vatRateId = 862319L;
                                    }}),
                                }};
                            }}),
                            add(new OwnerOpeningBalanceDto() {{
                                entryDate = OffsetDateTime.parse("2022-12-14T05:28:22.043Z");
                                id = 901483L;
                                isChanged = false;
                                procDate = OffsetDateTime.parse("2022-09-02T13:45:48.565Z");
                                reference = "in";
                                timestamp = "officiis";
                                total = 1046.27;
                                totalVAT = 5124.52;
                                unpaid = 3484.76;
                                vatEntries = new org.openapis.openapi.models.shared.OwnerOpeningBalanceVatEntryDto[]{{
                                    add(new OwnerOpeningBalanceVatEntryDto() {{
                                        amount = 7400.98;
                                        vatRateId = 386827L;
                                    }}),
                                    add(new OwnerOpeningBalanceVatEntryDto() {{
                                        amount = 6805.15;
                                        vatRateId = 530089L;
                                    }}),
                                    add(new OwnerOpeningBalanceVatEntryDto() {{
                                        amount = 6223.85;
                                        vatRateId = 944708L;
                                    }}),
                                }};
                            }}),
                            add(new OwnerOpeningBalanceDto() {{
                                entryDate = OffsetDateTime.parse("2021-03-20T05:03:12.319Z");
                                id = 204923L;
                                isChanged = false;
                                procDate = OffsetDateTime.parse("2022-04-26T13:26:55.921Z");
                                reference = "officia";
                                timestamp = "dolorum";
                                total = 5483.61;
                                totalVAT = 8792.35;
                                unpaid = 2726.83;
                                vatEntries = new org.openapis.openapi.models.shared.OwnerOpeningBalanceVatEntryDto[]{{
                                    add(new OwnerOpeningBalanceVatEntryDto() {{
                                        amount = 1482.68;
                                        vatRateId = 282699L;
                                    }}),
                                    add(new OwnerOpeningBalanceVatEntryDto() {{
                                        amount = 8563.03;
                                        vatRateId = 30235L;
                                    }}),
                                    add(new OwnerOpeningBalanceVatEntryDto() {{
                                        amount = 6350.57;
                                        vatRateId = 710337L;
                                    }}),
                                }};
                            }}),
                        }};
                        ourCode = "magnam";
                        ownerTypeId = 7884L;
                        phone = "405.693.0541 x043";
                        timestamp = "saepe";
                        vatAnalysisTypeId = 622231L;
                        vatReg = "consequatur";
                        vatType = 279068L;
                    }};
                    opCode = BatchItemCustomerDtoOpCodeEnum.THREE;
                }}),
            }}            

            CustomersProcessBatchResponse res = sdk.customers.customersProcessBatch(req);

            if (res.customersProcessBatch200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## customersPut

Updates an existing Customer.

### Example Usage

```java
package hello.world;

import java.time.OffsetDateTime;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CustomersPutRequest;
import org.openapis.openapi.models.operations.CustomersPutResponse;
import org.openapis.openapi.models.shared.CustomerDto;
import org.openapis.openapi.models.shared.EFTBankDto;
import org.openapis.openapi.models.shared.OwnerOpeningBalanceDto;
import org.openapis.openapi.models.shared.OwnerOpeningBalanceInPeriodsDto;
import org.openapis.openapi.models.shared.OwnerOpeningBalanceVatEntryDto;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            CustomersPutRequest req = new CustomersPutRequest(                new CustomerDto() {{
                                accountName = "dolorem";
                                accountNumber = "harum";
                                additionalEmails = new String[]{{
                                    add("architecto"),
                                }};
                                address = new String[]{{
                                    add("labore"),
                                    add("quidem"),
                                    add("atque"),
                                }};
                                authCode = "laborum";
                                bank = new EFTBankDto() {{
                                    branch = "nam";
                                    id = 948861L;
                                    name = "Patricia Farrell";
                                    sortCode = "unde";
                                }};;
                                businessIdentifierCode = "reiciendis";
                                code = "provident";
                                contact = "repellendus";
                                delivery = new String[]{{
                                    add("voluptates"),
                                    add("perferendis"),
                                    add("est"),
                                    add("quidem"),
                                }};
                                eFTReference = "reprehenderit";
                                email = "Marlene.Langosh@hotmail.com";
                                fax = "voluptatem";
                                id = 790840L;
                                internationalBankAccountNumber = "repudiandae";
                                ledgerBalance = 972.43;
                                mobile = "595-568-0428 x4568";
                                name = "Tomas Mosciski";
                                openingBalance = new OwnerOpeningBalanceInPeriodsDto() {{
                                    currentMonth = 4044.25;
                                    oneMonthOld = 9805.81;
                                    threeMonthsOld = 5446.47;
                                    twoMonthsOld = 8717.86;
                                }};;
                                openingBalances = new org.openapis.openapi.models.shared.OwnerOpeningBalanceDto[]{{
                                    add(new OwnerOpeningBalanceDto() {{
                                        entryDate = OffsetDateTime.parse("2022-03-30T01:40:53.027Z");
                                        id = 922348L;
                                        isChanged = false;
                                        procDate = OffsetDateTime.parse("2021-12-01T19:00:30.130Z");
                                        reference = "sunt";
                                        timestamp = "recusandae";
                                        total = 6806.97;
                                        totalVAT = 8298.98;
                                        unpaid = 2871.19;
                                        vatEntries = new org.openapis.openapi.models.shared.OwnerOpeningBalanceVatEntryDto[]{{
                                            add(new OwnerOpeningBalanceVatEntryDto() {{
                                                amount = 429.76;
                                                vatRateId = 919783L;
                                            }}),
                                            add(new OwnerOpeningBalanceVatEntryDto() {{
                                                amount = 1160.98;
                                                vatRateId = 36033L;
                                            }}),
                                            add(new OwnerOpeningBalanceVatEntryDto() {{
                                                amount = 1064.29;
                                                vatRateId = 174772L;
                                            }}),
                                            add(new OwnerOpeningBalanceVatEntryDto() {{
                                                amount = 3164.88;
                                                vatRateId = 389135L;
                                            }}),
                                        }};
                                    }}),
                                    add(new OwnerOpeningBalanceDto() {{
                                        entryDate = OffsetDateTime.parse("2022-01-18T11:13:47.798Z");
                                        id = 562783L;
                                        isChanged = false;
                                        procDate = OffsetDateTime.parse("2022-02-04T04:20:12.809Z");
                                        reference = "consequuntur";
                                        timestamp = "occaecati";
                                        total = 8863.05;
                                        totalVAT = 5979.37;
                                        unpaid = 4463.94;
                                        vatEntries = new org.openapis.openapi.models.shared.OwnerOpeningBalanceVatEntryDto[]{{
                                            add(new OwnerOpeningBalanceVatEntryDto() {{
                                                amount = 9078.76;
                                                vatRateId = 580887L;
                                            }}),
                                        }};
                                    }}),
                                    add(new OwnerOpeningBalanceDto() {{
                                        entryDate = OffsetDateTime.parse("2022-11-08T18:10:37.954Z");
                                        id = 661118L;
                                        isChanged = false;
                                        procDate = OffsetDateTime.parse("2022-07-24T07:17:21.827Z");
                                        reference = "error";
                                        timestamp = "illo";
                                        total = 3613.06;
                                        totalVAT = 6964.63;
                                        unpaid = 9109.94;
                                        vatEntries = new org.openapis.openapi.models.shared.OwnerOpeningBalanceVatEntryDto[]{{
                                            add(new OwnerOpeningBalanceVatEntryDto() {{
                                                amount = 8784.93;
                                                vatRateId = 39615L;
                                            }}),
                                        }};
                                    }}),
                                }};
                                ourCode = "iure";
                                ownerTypeId = 59944L;
                                phone = "249-374-8167 x5533";
                                timestamp = "repellat";
                                vatAnalysisTypeId = 3099L;
                                vatReg = "corporis";
                                vatType = 597303L;
                            }};, 470649L);            

            CustomersPutResponse res = sdk.customers.customersPut(req);

            if (res.customersPut200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getV1CustomersId

Returns information about a single Customer. You may specify that Customer's ledger balance should be calculated.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetV1CustomersIdRequest;
import org.openapis.openapi.models.operations.GetV1CustomersIdResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetV1CustomersIdRequest req = new GetV1CustomersIdRequest(649078L) {{
                needBalance = false;
            }};            

            GetV1CustomersIdResponse res = sdk.customers.getV1CustomersId(req);

            if (res.customerDto != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
