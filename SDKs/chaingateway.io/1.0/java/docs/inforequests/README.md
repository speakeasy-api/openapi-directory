# infoRequests

## Overview

Requests that return information on balances, transactions, gas price, exchange rates, ...

### Available Operations

* [getBlock](#getblock) - getBlock
* [getEthereumBalance](#getethereumbalance) - getEthereumBalance
* [getExchangeRate](#getexchangerate) - getExchangeRate
* [getGasPrice](#getgasprice) - getGasPrice
* [getLastBlockNumber](#getlastblocknumber) - getLastBlockNumber
* [getToken](#gettoken) - getToken
* [getTokenBalance](#gettokenbalance) - getTokenBalance
* [getTransactions](#gettransactions) - getTransactions

## getBlock

Returns information of an ethereum block with or without transactions

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetBlockRequest;
import org.openapis.openapi.models.operations.GetBlockResponse;
import org.openapis.openapi.models.shared.GetBlockRequest;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetBlockRequest req = new GetBlockRequest("q9PdaWuD4j6DK6vsUgehhL8pgarSrS9m",                 new GetBlockRequest("voluptatum"););            

            GetBlockResponse res = sdk.infoRequests.getBlock(req);

            if (res.getBlock != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getEthereumBalance

Returns the ethereum balance of a given address.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetEthereumBalanceRequest;
import org.openapis.openapi.models.operations.GetEthereumBalanceResponse;
import org.openapis.openapi.models.shared.GetEthereumBalanceRequest;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetEthereumBalanceRequest req = new GetEthereumBalanceRequest("q9PdaWuD4j6DK6vsUgehhL8pgarSrS9m",                 new GetEthereumBalanceRequest("iusto"););            

            GetEthereumBalanceResponse res = sdk.infoRequests.getEthereumBalance(req);

            if (res.getEthereumBalance != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getExchangeRate

Returns the current Ethereum price in Euro or US Dollar.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetExchangeRateRequest;
import org.openapis.openapi.models.operations.GetExchangeRateResponse;
import org.openapis.openapi.models.shared.GetExchangeRateRequest;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetExchangeRateRequest req = new GetExchangeRateRequest("q9PdaWuD4j6DK6vsUgehhL8pgarSrS9m",                 new GetExchangeRateRequest("excepturi"););            

            GetExchangeRateResponse res = sdk.infoRequests.getExchangeRate(req);

            if (res.getExchangeRate != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getGasPrice

Returns the current gas price in GWEI.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetGasPriceRequest;
import org.openapis.openapi.models.operations.GetGasPriceResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetGasPriceRequest req = new GetGasPriceRequest("q9PdaWuD4j6DK6vsUgehhL8pgarSrS9m", "application/json");            

            GetGasPriceResponse res = sdk.infoRequests.getGasPrice(req);

            if (res.getGasPrice != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getLastBlockNumber

Returns the block number of the last mined ethereum block.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetLastBlockNumberRequest;
import org.openapis.openapi.models.operations.GetLastBlockNumberResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetLastBlockNumberRequest req = new GetLastBlockNumberRequest("q9PdaWuD4j6DK6vsUgehhL8pgarSrS9m", "application/json");            

            GetLastBlockNumberResponse res = sdk.infoRequests.getLastBlockNumber(req);

            if (res.getLastBlockNumber != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getToken

Returns information about a specific ERC20 token like name, symbol, decimal places and total supply.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetTokenRequest;
import org.openapis.openapi.models.operations.GetTokenResponse;
import org.openapis.openapi.models.shared.GetTokenRequest;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetTokenRequest req = new GetTokenRequest("q9PdaWuD4j6DK6vsUgehhL8pgarSrS9m",                 new GetTokenRequest("nisi"););            

            GetTokenResponse res = sdk.infoRequests.getToken(req);

            if (res.getToken != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getTokenBalance

Returns the token balance of a given address.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetTokenBalanceRequest;
import org.openapis.openapi.models.operations.GetTokenBalanceResponse;
import org.openapis.openapi.models.shared.GetTokenBalanceRequest;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetTokenBalanceRequest req = new GetTokenBalanceRequest("q9PdaWuD4j6DK6vsUgehhL8pgarSrS9m",                 new GetTokenBalanceRequest("recusandae", "temporibus"););            

            GetTokenBalanceResponse res = sdk.infoRequests.getTokenBalance(req);

            if (res.getTokenBalance != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getTransactions

Returns information like confirmations, token contract address, amount, gas price and more of a given transaction.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetTransactionsRequest;
import org.openapis.openapi.models.operations.GetTransactionsResponse;
import org.openapis.openapi.models.shared.GetTransactionsRequest;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetTransactionsRequest req = new GetTransactionsRequest("q9PdaWuD4j6DK6vsUgehhL8pgarSrS9m",                 new GetTransactionsRequest("ab"););            

            GetTransactionsResponse res = sdk.infoRequests.getTransactions(req);

            if (res.getTransactions != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
