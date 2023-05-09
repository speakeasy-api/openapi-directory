# stromkontoLedger

## Overview

Managing accounts and balances for market partners (eq. households, grid operators, traders,..) Stromkonto is based on distributed ledger technology (AKA Blockchain). Instead of using the REST Api to access any energy ledger, you might act as a blockchain node and use the published ABI definitions to get the same results and/or run transactions directly.


### Available Operations

* [prepareTransaction](#preparetransaction) - Prepare Transaction
* [stromkontoBalances](#stromkontobalances) - Balances
* [stromkontoChoices](#stromkontochoices) - Selectable Choices for customer
* [stromkontoLogin](#stromkontologin) - Login (via Mail)
* [stromkontoRegister](#stromkontoregister) - Register (new Stromkonto)

## prepareTransaction

Prepares and inques a transaction (transfer) between two accounts (Stromkonten). This might be used to send any balanced entity. Using this endpoint will only prepare the transaction and enques it for signing and countersigning. This is done from within the user UI using validation process. Note: This API method does not validate any transations. In other words authentication, authorization, validation and actual transfer of value is done using a smart contract during processing in the energy blockchain.


### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PrepareTransactionRequestBody;
import org.openapis.openapi.models.operations.PrepareTransactionRequestBodyVariationEnum;
import org.openapis.openapi.models.operations.PrepareTransactionResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            PrepareTransactionRequestBody req = new PrepareTransactionRequestBody() {{
                account = "sapiente";
                signature = "quo";
                to = "odit";
                value = 870013L;
                variation = PrepareTransactionRequestBodyVariationEnum.BAEUME;
            }};            

            PrepareTransactionResponse res = sdk.stromkontoLedger.prepareTransaction(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## stromkontoBalances

Stromkonto represents a core component of the Corrently Ecosystem. It is a ledger for green energy related transactions and gets heavily used by the public Web-UI on www.stromkonto.net . Beside of some decoration and reformating operations all data is backed by the [Energychain blockchain](https://github.com/energychain/) to provide consensus of balances and transactions. Use this API Endppoint if you prefere not to work with low level Distributed Ledger Technology (Blockchain).


### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.StromkontoBalancesRequest;
import org.openapis.openapi.models.operations.StromkontoBalancesResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            StromkontoBalancesRequest req = new StromkontoBalancesRequest() {{
                account = "maiores";
            }};            

            StromkontoBalancesResponse res = sdk.stromkontoLedger.stromkontoBalances(req);

            if (res.balances != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## stromkontoChoices

Signable choices (contract changes) for customer.


### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.StromkontoChoicesRequest;
import org.openapis.openapi.models.operations.StromkontoChoicesResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            StromkontoChoicesRequest req = new StromkontoChoicesRequest() {{
                account = "molestiae";
            }};            

            StromkontoChoicesResponse res = sdk.stromkontoLedger.stromkontoChoices(req);

            if (res.balances != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## stromkontoLogin

Sends a mail to a given email address to login this user. This function makes life a bit easier in order to not having to deal with private key protection on the user side as a shared key is used to sign transactions onbehalf of a particular account.  However viewing consensus information (balances) are public and *might move* from account to account without prior notification. Best practice for third party uses is to always start a session with the login RESP call and only create a user in case the response indicates an `unregistered` status.


### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.StromkontoLoginRequestBody;
import org.openapis.openapi.models.operations.StromkontoLoginResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            StromkontoLoginRequestBody req = new StromkontoLoginRequestBody() {{
                email = "Presley_Koepp@hotmail.com";
            }};            

            StromkontoLoginResponse res = sdk.stromkontoLedger.stromkontoLogin(req);

            if (res.stromkontoLogin200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## stromkontoRegister

Calling this method with an unregistered (new) email will create a new account (Stromkonto) with all balances having a value of `0` and no transaction history. In addition some basic properties like region and zipcode are set to allow further operation of account.


### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.StromkontoRegisterRequestBody;
import org.openapis.openapi.models.operations.StromkontoRegisterResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            StromkontoRegisterRequestBody req = new StromkontoRegisterRequestBody() {{
                email = "Billy_Reichel@hotmail.com";
                firstName = "Buck";
                lastName = "Lind";
                zipcode = "75144-2177";
            }};            

            StromkontoRegisterResponse res = sdk.stromkontoLedger.stromkontoRegister(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
