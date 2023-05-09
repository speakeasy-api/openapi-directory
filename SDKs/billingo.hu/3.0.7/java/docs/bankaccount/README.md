# bankAccount

## Overview

BankAccount object represents your bank account information.

### Available Operations

* [createBankAccount](#createbankaccount) - Create a bank account
* [deleteBankAccount](#deletebankaccount) - Delete a bank account
* [getBankAccount](#getbankaccount) - Retrieve a bank account
* [listBankAccount](#listbankaccount) - List all bank account
* [updateBankAccount](#updatebankaccount) - Update a bank account

## createBankAccount

Create a new bank account. Returns a bank account object if the create is succeded.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateBankAccountResponse;
import org.openapis.openapi.models.shared.BankAccountInput;
import org.openapis.openapi.models.shared.CurrencyEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("corrupti") {{
                    apiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            org.openapis.openapi.models.shared.BankAccountInput req = new BankAccountInput("illum", CurrencyEnum.INR, "error") {{
                accountNumberIban = "deserunt";
                needQr = false;
                swift = "suscipit";
            }};            

            CreateBankAccountResponse res = sdk.bankAccount.createBankAccount(req);

            if (res.bankAccount != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## deleteBankAccount

Delete an existing bank account.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteBankAccountRequest;
import org.openapis.openapi.models.operations.DeleteBankAccountResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("iure") {{
                    apiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            DeleteBankAccountRequest req = new DeleteBankAccountRequest(297534L);            

            DeleteBankAccountResponse res = sdk.bankAccount.deleteBankAccount(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getBankAccount

Retrieves the details of an existing bank account.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetBankAccountRequest;
import org.openapis.openapi.models.operations.GetBankAccountResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("debitis") {{
                    apiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetBankAccountRequest req = new GetBankAccountRequest(56713L);            

            GetBankAccountResponse res = sdk.bankAccount.getBankAccount(req);

            if (res.bankAccount != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listBankAccount

Returns a list of your bank accounts. The bank accounts are returned sorted by creation date, with the most recent bank account appearing first.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListBankAccountRequest;
import org.openapis.openapi.models.operations.ListBankAccountResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("delectus") {{
                    apiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            ListBankAccountRequest req = new ListBankAccountRequest() {{
                page = 272656L;
                perPage = 383441L;
            }};            

            ListBankAccountResponse res = sdk.bankAccount.listBankAccount(req);

            if (res.bankAccountList != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## updateBankAccount

Update an existing bank accounts. Returns a bank account object if the update is succeded.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdateBankAccountRequest;
import org.openapis.openapi.models.operations.UpdateBankAccountResponse;
import org.openapis.openapi.models.shared.BankAccountInput;
import org.openapis.openapi.models.shared.CurrencyEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("molestiae") {{
                    apiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            UpdateBankAccountRequest req = new UpdateBankAccountRequest(                new BankAccountInput("minus", CurrencyEnum.SEK, "voluptatum") {{
                                accountNumberIban = "iusto";
                                needQr = false;
                                swift = "excepturi";
                            }};, 392785L);            

            UpdateBankAccountResponse res = sdk.bankAccount.updateBankAccount(req);

            if (res.bankAccount != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
