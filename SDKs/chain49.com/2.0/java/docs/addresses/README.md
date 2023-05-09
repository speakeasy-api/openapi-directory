# addresses

## Overview

 

### Available Operations

* [getAddressV2](#getaddressv2) - Get address V2
* [getBalanceHistoryV2](#getbalancehistoryv2) - Get Balance History V2
* [getUtxov2](#getutxov2) - Get UTXO V2
* [getXpubV2](#getxpubv2) - Get xpub V2

## getAddressV2

Returns balances and transactions of an address. The returned transactions are sorted by block height, newest blocks first.

The **details** query parameter can specify the level of details returned by the request (default: "txids").
Possible values are:

**basic**: return only xpub balances, without any derived addresses and transactions

**tokens**: basic + tokens (addresses) derived from the xpub, subject to tokens parameter

**tokenBalances**: basic + tokens (addresses) derived from the xpub with balances, subject to tokens parameter

**txids**: tokenBalances + list of txids, subject to from, to filter and paging

**txs**: tokenBalances + list of transaction with details, subject to from, to filter and paging


### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetAddressV2Request;
import org.openapis.openapi.models.operations.GetAddressV2Response;
import org.openapis.openapi.models.shared.DetailsEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    option1 = new SecurityOption1("provident") {{
                        xAPIKey = "YOUR_API_KEY_HERE";
                    }};
                }})
                .build();

            GetAddressV2Request req = new GetAddressV2Request("321x69Cb9HZLWwAWGiUBT1U81r1zPLnEjL", "bitcoin") {{
                contract = "0xdAC17F958D2ee523a2206206994597C13D831ec7";
                details = DetailsEnum.BASIC;
                fromBlock = 10L;
                page = 1L;
                pageSize = 1000L;
                secondary = "usd";
                toBlock = 100L;
            }};            

            GetAddressV2Response res = sdk.addresses.getAddressV2(req);

            if (res.getAddressV2200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getBalanceHistoryV2

Returns a balance history for the specified XPUB or address

The value of sentToSelf is the amount sent from the same address to the same address or within addresses of xpub.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetBalanceHistoryV2Request;
import org.openapis.openapi.models.operations.GetBalanceHistoryV2Response;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    option1 = new SecurityOption1("distinctio") {{
                        xAPIKey = "YOUR_API_KEY_HERE";
                    }};
                }})
                .build();

            GetBalanceHistoryV2Request req = new GetBalanceHistoryV2Request("321x69Cb9HZLWwAWGiUBT1U81r1zPLnEjL", "bitcoin") {{
                fiatcurrency = "usd";
                fromDate = "1578391200";
                groupBy = 172800;
                toDate = "1599053802";
            }};            

            GetBalanceHistoryV2Response res = sdk.addresses.getBalanceHistoryV2(req);

            if (res.getBalanceHistoryV2200ApplicationJSONObjects != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getUtxov2

Returns array of unspent transaction outputs of address or xpub, applicable only for Bitcoin-type coins. By default, the list contains both confirmed and unconfirmed transactions. The query parameter confirmed=true disables return of unconfirmed transactions. The returned utxos are sorted by block height, newest blocks first. For xpubs or output descriptors, the response also contains address and derivation path of the utxo.



Unconfirmed utxos do not have field height, the field confirmations has value 0 and may contain field lockTime, if not zero.

Coinbase utxos have field coinbase set to true, however due to performance reasons only up to minimum coinbase confirmations limit (100). After this limit, utxos are not detected as coinbase.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetUtxov2Request;
import org.openapis.openapi.models.operations.GetUtxov2Response;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    option1 = new SecurityOption1("quibusdam") {{
                        xAPIKey = "YOUR_API_KEY_HERE";
                    }};
                }})
                .build();

            GetUtxov2Request req = new GetUtxov2Request("321x69Cb9HZLWwAWGiUBT1U81r1zPLnEjL", "bitcoin") {{
                confirmed = true;
            }};            

            GetUtxov2Response res = sdk.addresses.getUtxov2(req);

            if (res.getUtxov2200ApplicationJSONAnies != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getXpubV2

Returns balances and transactions of an xpub or output descriptor, applicable only for Bitcoin-type coins.

Blockbook supports BIP44, BIP49, BIP84 and BIP86 (Taproot) derivation schemes, using either xpubs or output descriptors (see https://github.com/bitcoin/bitcoin/blob/master/doc/descriptors.md)

Note: usedTokens always returns total number of used addresses of xpub.

Detailed documentation found here: https://github.com/trezor/blockbook/blob/master/docs/api.md#get-xpub

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetXpubV2Request;
import org.openapis.openapi.models.operations.GetXpubV2Response;
import org.openapis.openapi.models.shared.DetailsEnum;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.TokensEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    option1 = new SecurityOption1("unde") {{
                        xAPIKey = "YOUR_API_KEY_HERE";
                    }};
                }})
                .build();

            GetXpubV2Request req = new GetXpubV2Request("bitcoin", "tpubDC88gkaZi5HvJGxGDNLADkvtdpni3mLmx6vr2KnXmWMG8zfkBRggsxHVBkUpgcwPe2KKpkyvTJCdXHb1UHEWE64vczyyPQfHr1skBcsRedN") {{
                details = DetailsEnum.BASIC;
                fromBlock = 10L;
                page = 1L;
                pageSize = 1000L;
                secondary = "usd";
                toBlock = 100L;
                tokens = TokensEnum.USED;
            }};            

            GetXpubV2Response res = sdk.addresses.getXpubV2(req);

            if (res.getXpubV2200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
