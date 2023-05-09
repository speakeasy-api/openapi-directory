# suppliers

### Available Operations

* [suppliersDelete](#suppliersdelete) - Removes an existing Supplier.
* [suppliersGet](#suppliersget) - Returns a list of company's Suppliers. Supports OData querying protocol.
Filtering is forbidden.
Ordering is allowed by "id" and "code" fields.
* [suppliersGetAccountTrans](#suppliersgetaccounttrans) - Returns a list of Supplier's account transactions.
* [suppliersGetOpeningBalance](#suppliersgetopeningbalance) - Returns a Supplier's opening balances, calculated for the next periods: current month, one month old, two months old, three and more months old.
* [suppliersGetOpeningBalanceList](#suppliersgetopeningbalancelist) - Returns a list of Supplier's opening balance transactions.
* [suppliersPost](#supplierspost) - Creates a new Supplier.
* [suppliersProcessBatch](#suppliersprocessbatch) - Processes a batch of Suppliers.
* [suppliersPut](#suppliersput) - Updates an existing Supplier.
* [getV1SuppliersId](#getv1suppliersid) - Returns information about a single Supplier. You may specify that Supplier's ledger balance should be calculated.

## suppliersDelete

Removes an existing Supplier.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.SuppliersDeleteRequest;
import org.openapis.openapi.models.operations.SuppliersDeleteResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            SuppliersDeleteRequest req = new SuppliersDeleteRequest(500828L, "porro");            

            SuppliersDeleteResponse res = sdk.suppliers.suppliersDelete(req);

            if (res.suppliersDelete200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## suppliersGet

Returns a list of company's Suppliers. Supports OData querying protocol.
Filtering is forbidden.
Ordering is allowed by "id" and "code" fields.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.SuppliersGetResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            SuppliersGetResponse res = sdk.suppliers.suppliersGet();

            if (res.pageResultSupplierQueryDto != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## suppliersGetAccountTrans

Returns a list of Supplier's account transactions.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.SuppliersGetAccountTransRequest;
import org.openapis.openapi.models.operations.SuppliersGetAccountTransResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            SuppliersGetAccountTransRequest req = new SuppliersGetAccountTransRequest(286486L);            

            SuppliersGetAccountTransResponse res = sdk.suppliers.suppliersGetAccountTrans(req);

            if (res.accountTranDtos != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## suppliersGetOpeningBalance

Returns a Supplier's opening balances, calculated for the next periods: current month, one month old, two months old, three and more months old.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.SuppliersGetOpeningBalanceRequest;
import org.openapis.openapi.models.operations.SuppliersGetOpeningBalanceResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            SuppliersGetOpeningBalanceRequest req = new SuppliersGetOpeningBalanceRequest(773889L);            

            SuppliersGetOpeningBalanceResponse res = sdk.suppliers.suppliersGetOpeningBalance(req);

            if (res.ownerOpeningBalanceInPeriodsDto != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## suppliersGetOpeningBalanceList

Returns a list of Supplier's opening balance transactions.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.SuppliersGetOpeningBalanceListRequest;
import org.openapis.openapi.models.operations.SuppliersGetOpeningBalanceListResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            SuppliersGetOpeningBalanceListRequest req = new SuppliersGetOpeningBalanceListRequest(285175L);            

            SuppliersGetOpeningBalanceListResponse res = sdk.suppliers.suppliersGetOpeningBalanceList(req);

            if (res.ownerOpeningBalanceDtos != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## suppliersPost

Creates a new Supplier.

### Example Usage

```java
package hello.world;

import java.time.OffsetDateTime;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.SuppliersPostResponse;
import org.openapis.openapi.models.shared.EFTBankDto;
import org.openapis.openapi.models.shared.OwnerOpeningBalanceDto;
import org.openapis.openapi.models.shared.OwnerOpeningBalanceInPeriodsDto;
import org.openapis.openapi.models.shared.OwnerOpeningBalanceVatEntryDto;
import org.openapis.openapi.models.shared.SupplierDto;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            org.openapis.openapi.models.shared.SupplierDto req = new SupplierDto() {{
                accountName = "earum";
                accountNumber = "ullam";
                additionalEmails = new String[]{{
                    add("enim"),
                    add("cupiditate"),
                }};
                address = new String[]{{
                    add("itaque"),
                    add("fuga"),
                    add("consectetur"),
                }};
                authCode = "modi";
                bank = new EFTBankDto() {{
                    branch = "aspernatur";
                    id = 129762L;
                    name = "Melissa Vandervort";
                    sortCode = "qui";
                }};;
                businessIdentifierCode = "accusantium";
                code = "consequatur";
                contact = "impedit";
                eFTReference = "recusandae";
                email = "Kale71@yahoo.com";
                fax = "quibusdam";
                id = 552984L;
                internationalBankAccountNumber = "maiores";
                ledgerBalance = 6966.78;
                mobile = "706.213.7841 x183";
                name = "Natasha Koch";
                openingBalance = new OwnerOpeningBalanceInPeriodsDto() {{
                    currentMonth = 1880.81;
                    oneMonthOld = 603.79;
                    threeMonthsOld = 8952.93;
                    twoMonthsOld = 6147.63;
                }};;
                openingBalances = new org.openapis.openapi.models.shared.OwnerOpeningBalanceDto[]{{
                    add(new OwnerOpeningBalanceDto() {{
                        entryDate = OffsetDateTime.parse("2021-07-05T06:13:45.654Z");
                        id = 160260L;
                        isChanged = false;
                        procDate = OffsetDateTime.parse("2022-04-09T16:36:14.999Z");
                        reference = "quia";
                        timestamp = "omnis";
                        total = 1206.46;
                        totalVAT = 1851.16;
                        unpaid = 1309.34;
                        vatEntries = new org.openapis.openapi.models.shared.OwnerOpeningBalanceVatEntryDto[]{{
                            add(new OwnerOpeningBalanceVatEntryDto() {{
                                amount = 2281.33;
                                vatRateId = 9284L;
                            }}),
                        }};
                    }}),
                    add(new OwnerOpeningBalanceDto() {{
                        entryDate = OffsetDateTime.parse("2021-05-28T08:36:40.882Z");
                        id = 245116L;
                        isChanged = false;
                        procDate = OffsetDateTime.parse("2021-12-06T15:34:37.259Z");
                        reference = "deserunt";
                        timestamp = "itaque";
                        total = 7143;
                        totalVAT = 4802.95;
                        unpaid = 4938.65;
                        vatEntries = new org.openapis.openapi.models.shared.OwnerOpeningBalanceVatEntryDto[]{{
                            add(new OwnerOpeningBalanceVatEntryDto() {{
                                amount = 5818.89;
                                vatRateId = 828735L;
                            }}),
                            add(new OwnerOpeningBalanceVatEntryDto() {{
                                amount = 1263.67;
                                vatRateId = 142856L;
                            }}),
                            add(new OwnerOpeningBalanceVatEntryDto() {{
                                amount = 8768.21;
                                vatRateId = 533723L;
                            }}),
                        }};
                    }}),
                    add(new OwnerOpeningBalanceDto() {{
                        entryDate = OffsetDateTime.parse("2022-09-14T19:22:57.784Z");
                        id = 998199L;
                        isChanged = false;
                        procDate = OffsetDateTime.parse("2022-05-28T15:53:37.829Z");
                        reference = "perspiciatis";
                        timestamp = "amet";
                        total = 5460.89;
                        totalVAT = 1251.61;
                        unpaid = 3642.84;
                        vatEntries = new org.openapis.openapi.models.shared.OwnerOpeningBalanceVatEntryDto[]{{
                            add(new OwnerOpeningBalanceVatEntryDto() {{
                                amount = 8484.39;
                                vatRateId = 780885L;
                            }}),
                            add(new OwnerOpeningBalanceVatEntryDto() {{
                                amount = 3096.34;
                                vatRateId = 166324L;
                            }}),
                            add(new OwnerOpeningBalanceVatEntryDto() {{
                                amount = 7639.28;
                                vatRateId = 552687L;
                            }}),
                            add(new OwnerOpeningBalanceVatEntryDto() {{
                                amount = 4484.82;
                                vatRateId = 413768L;
                            }}),
                        }};
                    }}),
                }};
                ourCode = "maxime";
                ownerTypeId = 151486L;
                phone = "389-737-9707 x43110";
                postponedAccounting = false;
                timestamp = "reiciendis";
                vatAnalysisTypeId = 553766L;
                vatReg = "numquam";
                vatType = 113894L;
            }};            

            SuppliersPostResponse res = sdk.suppliers.suppliersPost(req);

            if (res.suppliersPost200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## suppliersProcessBatch

Processes a batch of Suppliers.

### Example Usage

```java
package hello.world;

import java.time.OffsetDateTime;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.SuppliersProcessBatchResponse;
import org.openapis.openapi.models.shared.BatchItemSupplierDto;
import org.openapis.openapi.models.shared.BatchItemSupplierDtoOpCodeEnum;
import org.openapis.openapi.models.shared.EFTBankDto;
import org.openapis.openapi.models.shared.OwnerOpeningBalanceDto;
import org.openapis.openapi.models.shared.OwnerOpeningBalanceInPeriodsDto;
import org.openapis.openapi.models.shared.OwnerOpeningBalanceVatEntryDto;
import org.openapis.openapi.models.shared.SupplierDto;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            org.openapis.openapi.models.. req = new org.openapis.openapi.models.shared.BatchItemSupplierDto[]{{
                add(new BatchItemSupplierDto() {{
                    item = new SupplierDto() {{
                        accountName = "nam";
                        accountNumber = "architecto";
                        additionalEmails = new String[]{{
                            add("assumenda"),
                            add("eos"),
                            add("dolorem"),
                        }};
                        address = new String[]{{
                            add("repellendus"),
                            add("nam"),
                            add("ab"),
                            add("magnam"),
                        }};
                        authCode = "pariatur";
                        bank = new EFTBankDto() {{
                            branch = "expedita";
                            id = 418363L;
                            name = "Rolando Heaney";
                            sortCode = "laudantium";
                        }};
                        businessIdentifierCode = "corporis";
                        code = "excepturi";
                        contact = "natus";
                        eFTReference = "deleniti";
                        email = "Bridie_DAmore17@hotmail.com";
                        fax = "voluptatem";
                        id = 838176L;
                        internationalBankAccountNumber = "id";
                        ledgerBalance = 629.07;
                        mobile = "1-971-714-0615 x583";
                        name = "Kellie Ledner";
                        openingBalance = new OwnerOpeningBalanceInPeriodsDto() {{
                            currentMonth = 9261.42;
                            oneMonthOld = 6050.43;
                            threeMonthsOld = 585.67;
                            twoMonthsOld = 3029.05;
                        }};
                        openingBalances = new org.openapis.openapi.models.shared.OwnerOpeningBalanceDto[]{{
                            add(new OwnerOpeningBalanceDto() {{
                                entryDate = OffsetDateTime.parse("2021-04-25T20:16:52.073Z");
                                id = 169678L;
                                isChanged = false;
                                procDate = OffsetDateTime.parse("2022-11-03T19:03:01.910Z");
                                reference = "eius";
                                timestamp = "commodi";
                                total = 3712.17;
                                totalVAT = 4268.19;
                                unpaid = 5841.99;
                                vatEntries = new org.openapis.openapi.models.shared.OwnerOpeningBalanceVatEntryDto[]{{
                                    add(new OwnerOpeningBalanceVatEntryDto() {{
                                        amount = 3923.11;
                                        vatRateId = 131596L;
                                    }}),
                                    add(new OwnerOpeningBalanceVatEntryDto() {{
                                        amount = 2681.73;
                                        vatRateId = 39210L;
                                    }}),
                                }};
                            }}),
                        }};
                        ourCode = "odio";
                        ownerTypeId = 25231L;
                        phone = "494-771-4799 x0111";
                        postponedAccounting = false;
                        timestamp = "quis";
                        vatAnalysisTypeId = 114681L;
                        vatReg = "occaecati";
                        vatType = 290761L;
                    }};
                    opCode = BatchItemSupplierDtoOpCodeEnum.THREE;
                }}),
                add(new BatchItemSupplierDto() {{
                    item = new SupplierDto() {{
                        accountName = "quidem";
                        accountNumber = "exercitationem";
                        additionalEmails = new String[]{{
                            add("modi"),
                            add("quasi"),
                        }};
                        address = new String[]{{
                            add("similique"),
                        }};
                        authCode = "possimus";
                        bank = new EFTBankDto() {{
                            branch = "quo";
                            id = 379666L;
                            name = "Velma Orn";
                            sortCode = "alias";
                        }};
                        businessIdentifierCode = "deserunt";
                        code = "fugit";
                        contact = "autem";
                        eFTReference = "quo";
                        email = "Quinten_Schultz53@yahoo.com";
                        fax = "quasi";
                        id = 978857L;
                        internationalBankAccountNumber = "voluptatem";
                        ledgerBalance = 3961.84;
                        mobile = "650-847-7227 x9662";
                        name = "Myrtle Runte MD";
                        openingBalance = new OwnerOpeningBalanceInPeriodsDto() {{
                            currentMonth = 9747.75;
                            oneMonthOld = 3018.65;
                            threeMonthsOld = 492.85;
                            twoMonthsOld = 4967.44;
                        }};
                        openingBalances = new org.openapis.openapi.models.shared.OwnerOpeningBalanceDto[]{{
                            add(new OwnerOpeningBalanceDto() {{
                                entryDate = OffsetDateTime.parse("2022-03-30T03:00:00.239Z");
                                id = 987362L;
                                isChanged = false;
                                procDate = OffsetDateTime.parse("2020-02-17T02:25:23.787Z");
                                reference = "alias";
                                timestamp = "impedit";
                                total = 2542.4;
                                totalVAT = 1362.03;
                                unpaid = 7491.01;
                                vatEntries = new org.openapis.openapi.models.shared.OwnerOpeningBalanceVatEntryDto[]{{
                                    add(new OwnerOpeningBalanceVatEntryDto() {{
                                        amount = 5323.36;
                                        vatRateId = 968286L;
                                    }}),
                                    add(new OwnerOpeningBalanceVatEntryDto() {{
                                        amount = 1149.52;
                                        vatRateId = 353009L;
                                    }}),
                                }};
                            }}),
                            add(new OwnerOpeningBalanceDto() {{
                                entryDate = OffsetDateTime.parse("2022-11-03T18:48:36.092Z");
                                id = 375549L;
                                isChanged = false;
                                procDate = OffsetDateTime.parse("2022-06-07T14:53:54.944Z");
                                reference = "corrupti";
                                timestamp = "est";
                                total = 217.01;
                                totalVAT = 8408.31;
                                unpaid = 7702.62;
                                vatEntries = new org.openapis.openapi.models.shared.OwnerOpeningBalanceVatEntryDto[]{{
                                    add(new OwnerOpeningBalanceVatEntryDto() {{
                                        amount = 3925.69;
                                        vatRateId = 392022L;
                                    }}),
                                    add(new OwnerOpeningBalanceVatEntryDto() {{
                                        amount = 2233.58;
                                        vatRateId = 143976L;
                                    }}),
                                }};
                            }}),
                            add(new OwnerOpeningBalanceDto() {{
                                entryDate = OffsetDateTime.parse("2022-03-13T05:45:02.940Z");
                                id = 803144L;
                                isChanged = false;
                                procDate = OffsetDateTime.parse("2022-12-04T20:35:09.945Z");
                                reference = "ea";
                                timestamp = "impedit";
                                total = 5184.32;
                                totalVAT = 7622.97;
                                unpaid = 6651.83;
                                vatEntries = new org.openapis.openapi.models.shared.OwnerOpeningBalanceVatEntryDto[]{{
                                    add(new OwnerOpeningBalanceVatEntryDto() {{
                                        amount = 1648.05;
                                        vatRateId = 831037L;
                                    }}),
                                }};
                            }}),
                            add(new OwnerOpeningBalanceDto() {{
                                entryDate = OffsetDateTime.parse("2022-10-30T04:54:37.407Z");
                                id = 317504L;
                                isChanged = false;
                                procDate = OffsetDateTime.parse("2022-05-28T14:40:30.235Z");
                                reference = "magni";
                                timestamp = "odio";
                                total = 27.58;
                                totalVAT = 6925.55;
                                unpaid = 5334.57;
                                vatEntries = new org.openapis.openapi.models.shared.OwnerOpeningBalanceVatEntryDto[]{{
                                    add(new OwnerOpeningBalanceVatEntryDto() {{
                                        amount = 3689.76;
                                        vatRateId = 488442L;
                                    }}),
                                    add(new OwnerOpeningBalanceVatEntryDto() {{
                                        amount = 1432.53;
                                        vatRateId = 134267L;
                                    }}),
                                    add(new OwnerOpeningBalanceVatEntryDto() {{
                                        amount = 8687.29;
                                        vatRateId = 850628L;
                                    }}),
                                    add(new OwnerOpeningBalanceVatEntryDto() {{
                                        amount = 5062.02;
                                        vatRateId = 574990L;
                                    }}),
                                }};
                            }}),
                        }};
                        ourCode = "exercitationem";
                        ownerTypeId = 739938L;
                        phone = "789-328-7536 x3522";
                        postponedAccounting = false;
                        timestamp = "nostrum";
                        vatAnalysisTypeId = 184738L;
                        vatReg = "tenetur";
                        vatType = 477352L;
                    }};
                    opCode = BatchItemSupplierDtoOpCodeEnum.ONE;
                }}),
                add(new BatchItemSupplierDto() {{
                    item = new SupplierDto() {{
                        accountName = "ullam";
                        accountNumber = "velit";
                        additionalEmails = new String[]{{
                            add("cupiditate"),
                        }};
                        address = new String[]{{
                            add("numquam"),
                            add("fugiat"),
                            add("molestiae"),
                        }};
                        authCode = "quas";
                        bank = new EFTBankDto() {{
                            branch = "repellendus";
                            id = 906524L;
                            name = "Verna Kautzer";
                            sortCode = "nesciunt";
                        }};
                        businessIdentifierCode = "corrupti";
                        code = "cupiditate";
                        contact = "voluptatibus";
                        eFTReference = "ullam";
                        email = "Natalia_Ritchie@hotmail.com";
                        fax = "commodi";
                        id = 414438L;
                        internationalBankAccountNumber = "fugit";
                        ledgerBalance = 3553.8;
                        mobile = "(261) 625-1672 x526";
                        name = "Rufus Conn II";
                        openingBalance = new OwnerOpeningBalanceInPeriodsDto() {{
                            currentMonth = 7036.51;
                            oneMonthOld = 7083.6;
                            threeMonthsOld = 6471.25;
                            twoMonthsOld = 3927.59;
                        }};
                        openingBalances = new org.openapis.openapi.models.shared.OwnerOpeningBalanceDto[]{{
                            add(new OwnerOpeningBalanceDto() {{
                                entryDate = OffsetDateTime.parse("2022-12-03T23:21:08.092Z");
                                id = 434955L;
                                isChanged = false;
                                procDate = OffsetDateTime.parse("2022-02-03T11:31:39.656Z");
                                reference = "quae";
                                timestamp = "ea";
                                total = 9891.22;
                                totalVAT = 3322.49;
                                unpaid = 6954.08;
                                vatEntries = new org.openapis.openapi.models.shared.OwnerOpeningBalanceVatEntryDto[]{{
                                    add(new OwnerOpeningBalanceVatEntryDto() {{
                                        amount = 4318.93;
                                        vatRateId = 644416L;
                                    }}),
                                    add(new OwnerOpeningBalanceVatEntryDto() {{
                                        amount = 9197.3;
                                        vatRateId = 365998L;
                                    }}),
                                    add(new OwnerOpeningBalanceVatEntryDto() {{
                                        amount = 5654.46;
                                        vatRateId = 102019L;
                                    }}),
                                    add(new OwnerOpeningBalanceVatEntryDto() {{
                                        amount = 7112.75;
                                        vatRateId = 787850L;
                                    }}),
                                }};
                            }}),
                            add(new OwnerOpeningBalanceDto() {{
                                entryDate = OffsetDateTime.parse("2021-08-02T02:31:37.642Z");
                                id = 826478L;
                                isChanged = false;
                                procDate = OffsetDateTime.parse("2020-01-21T05:18:22.117Z");
                                reference = "ipsum";
                                timestamp = "commodi";
                                total = 1149.24;
                                totalVAT = 1472.97;
                                unpaid = 7240.73;
                                vatEntries = new org.openapis.openapi.models.shared.OwnerOpeningBalanceVatEntryDto[]{{
                                    add(new OwnerOpeningBalanceVatEntryDto() {{
                                        amount = 2033.96;
                                        vatRateId = 797712L;
                                    }}),
                                    add(new OwnerOpeningBalanceVatEntryDto() {{
                                        amount = 1761.04;
                                        vatRateId = 186L;
                                    }}),
                                }};
                            }}),
                        }};
                        ourCode = "ad";
                        ownerTypeId = 954595L;
                        phone = "(753) 244-2645 x65623";
                        postponedAccounting = false;
                        timestamp = "illum";
                        vatAnalysisTypeId = 22966L;
                        vatReg = "molestias";
                        vatType = 377194L;
                    }};
                    opCode = BatchItemSupplierDtoOpCodeEnum.THREE;
                }}),
                add(new BatchItemSupplierDto() {{
                    item = new SupplierDto() {{
                        accountName = "voluptas";
                        accountNumber = "maiores";
                        additionalEmails = new String[]{{
                            add("vel"),
                            add("delectus"),
                        }};
                        address = new String[]{{
                            add("reiciendis"),
                            add("consequatur"),
                            add("sed"),
                            add("accusantium"),
                        }};
                        authCode = "voluptates";
                        bank = new EFTBankDto() {{
                            branch = "provident";
                            id = 978460L;
                            name = "Carrie Franey";
                            sortCode = "dolores";
                        }};
                        businessIdentifierCode = "enim";
                        code = "nihil";
                        contact = "libero";
                        eFTReference = "omnis";
                        email = "Chelsea_Schamberger@yahoo.com";
                        fax = "cum";
                        id = 842935L;
                        internationalBankAccountNumber = "est";
                        ledgerBalance = 4146.44;
                        mobile = "1-519-961-0651 x3598";
                        name = "Harriet Moore";
                        openingBalance = new OwnerOpeningBalanceInPeriodsDto() {{
                            currentMonth = 6585.44;
                            oneMonthOld = 2889.07;
                            threeMonthsOld = 4554;
                            twoMonthsOld = 9736.42;
                        }};
                        openingBalances = new org.openapis.openapi.models.shared.OwnerOpeningBalanceDto[]{{
                            add(new OwnerOpeningBalanceDto() {{
                                entryDate = OffsetDateTime.parse("2022-05-14T06:09:57.887Z");
                                id = 915653L;
                                isChanged = false;
                                procDate = OffsetDateTime.parse("2022-12-10T22:34:52.237Z");
                                reference = "quaerat";
                                timestamp = "excepturi";
                                total = 3999.46;
                                totalVAT = 2946.5;
                                unpaid = 297.89;
                                vatEntries = new org.openapis.openapi.models.shared.OwnerOpeningBalanceVatEntryDto[]{{
                                    add(new OwnerOpeningBalanceVatEntryDto() {{
                                        amount = 3880.06;
                                        vatRateId = 632850L;
                                    }}),
                                    add(new OwnerOpeningBalanceVatEntryDto() {{
                                        amount = 1167.05;
                                        vatRateId = 538877L;
                                    }}),
                                    add(new OwnerOpeningBalanceVatEntryDto() {{
                                        amount = 1914.25;
                                        vatRateId = 114588L;
                                    }}),
                                    add(new OwnerOpeningBalanceVatEntryDto() {{
                                        amount = 7895.39;
                                        vatRateId = 540223L;
                                    }}),
                                }};
                            }}),
                            add(new OwnerOpeningBalanceDto() {{
                                entryDate = OffsetDateTime.parse("2022-05-15T08:31:10.596Z");
                                id = 837739L;
                                isChanged = false;
                                procDate = OffsetDateTime.parse("2022-01-12T11:31:49.866Z");
                                reference = "cupiditate";
                                timestamp = "suscipit";
                                total = 9674.01;
                                totalVAT = 8321.35;
                                unpaid = 9616.07;
                                vatEntries = new org.openapis.openapi.models.shared.OwnerOpeningBalanceVatEntryDto[]{{
                                    add(new OwnerOpeningBalanceVatEntryDto() {{
                                        amount = 6502;
                                        vatRateId = 820423L;
                                    }}),
                                }};
                            }}),
                        }};
                        ourCode = "praesentium";
                        ownerTypeId = 205390L;
                        phone = "785.271.7157 x537";
                        postponedAccounting = false;
                        timestamp = "officia";
                        vatAnalysisTypeId = 610563L;
                        vatReg = "unde";
                        vatType = 558992L;
                    }};
                    opCode = BatchItemSupplierDtoOpCodeEnum.TWO;
                }}),
            }}            

            SuppliersProcessBatchResponse res = sdk.suppliers.suppliersProcessBatch(req);

            if (res.suppliersProcessBatch200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## suppliersPut

Updates an existing Supplier.

### Example Usage

```java
package hello.world;

import java.time.OffsetDateTime;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.SuppliersPutRequest;
import org.openapis.openapi.models.operations.SuppliersPutResponse;
import org.openapis.openapi.models.shared.EFTBankDto;
import org.openapis.openapi.models.shared.OwnerOpeningBalanceDto;
import org.openapis.openapi.models.shared.OwnerOpeningBalanceInPeriodsDto;
import org.openapis.openapi.models.shared.OwnerOpeningBalanceVatEntryDto;
import org.openapis.openapi.models.shared.SupplierDto;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            SuppliersPutRequest req = new SuppliersPutRequest(                new SupplierDto() {{
                                accountName = "ducimus";
                                accountNumber = "voluptatum";
                                additionalEmails = new String[]{{
                                    add("deserunt"),
                                    add("dolor"),
                                    add("hic"),
                                    add("iure"),
                                }};
                                address = new String[]{{
                                    add("autem"),
                                    add("iste"),
                                    add("cupiditate"),
                                }};
                                authCode = "ab";
                                bank = new EFTBankDto() {{
                                    branch = "fuga";
                                    id = 952216L;
                                    name = "Jennie MacGyver";
                                    sortCode = "eaque";
                                }};;
                                businessIdentifierCode = "consectetur";
                                code = "autem";
                                contact = "vitae";
                                eFTReference = "numquam";
                                email = "Dock.Lueilwitz62@gmail.com";
                                fax = "reprehenderit";
                                id = 439745L;
                                internationalBankAccountNumber = "animi";
                                ledgerBalance = 105.85;
                                mobile = "1-919-423-0158 x99995";
                                name = "Alicia Bernier";
                                openingBalance = new OwnerOpeningBalanceInPeriodsDto() {{
                                    currentMonth = 8979.14;
                                    oneMonthOld = 8208.66;
                                    threeMonthsOld = 4917.84;
                                    twoMonthsOld = 9296.79;
                                }};;
                                openingBalances = new org.openapis.openapi.models.shared.OwnerOpeningBalanceDto[]{{
                                    add(new OwnerOpeningBalanceDto() {{
                                        entryDate = OffsetDateTime.parse("2022-10-02T07:47:33.628Z");
                                        id = 962497L;
                                        isChanged = false;
                                        procDate = OffsetDateTime.parse("2022-03-16T02:42:14.341Z");
                                        reference = "sunt";
                                        timestamp = "ullam";
                                        total = 4630.44;
                                        totalVAT = 8509.53;
                                        unpaid = 9160.51;
                                        vatEntries = new org.openapis.openapi.models.shared.OwnerOpeningBalanceVatEntryDto[]{{
                                            add(new OwnerOpeningBalanceVatEntryDto() {{
                                                amount = 6687.83;
                                                vatRateId = 446484L;
                                            }}),
                                            add(new OwnerOpeningBalanceVatEntryDto() {{
                                                amount = 724.73;
                                                vatRateId = 451926L;
                                            }}),
                                            add(new OwnerOpeningBalanceVatEntryDto() {{
                                                amount = 54.94;
                                                vatRateId = 962120L;
                                            }}),
                                        }};
                                    }}),
                                }};
                                ourCode = "incidunt";
                                ownerTypeId = 293023L;
                                phone = "(778) 933-4669 x577";
                                postponedAccounting = false;
                                timestamp = "culpa";
                                vatAnalysisTypeId = 855647L;
                                vatReg = "inventore";
                                vatType = 541743L;
                            }};, 323215L);            

            SuppliersPutResponse res = sdk.suppliers.suppliersPut(req);

            if (res.suppliersPut200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getV1SuppliersId

Returns information about a single Supplier. You may specify that Supplier's ledger balance should be calculated.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetV1SuppliersIdRequest;
import org.openapis.openapi.models.operations.GetV1SuppliersIdResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetV1SuppliersIdRequest req = new GetV1SuppliersIdRequest(959420L) {{
                needBalance = false;
            }};            

            GetV1SuppliersIdResponse res = sdk.suppliers.getV1SuppliersId(req);

            if (res.supplierDto != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
