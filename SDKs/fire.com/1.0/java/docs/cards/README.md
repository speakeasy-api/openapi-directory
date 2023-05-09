# cards

### Available Operations

* [blockCard](#blockcard) - Block a card
* [createNewCard](#createnewcard) - Create a new debit card.
* [getListofCardTransactions](#getlistofcardtransactions) - List Card Transactions.
* [getListofCards](#getlistofcards) - View List of Cards.
* [unblockCard](#unblockcard) - Unblock a card

## blockCard

Updates status of an existing card to block which prevents any transactions being carried out with that card.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.BlockCardRequest;
import org.openapis.openapi.models.operations.BlockCardResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("tempora") {{
                    bearerAuth = "Bearer YOUR_BEARER_TOKEN_HERE";
                }})
                .build();

            BlockCardRequest req = new BlockCardRequest(383441L);            

            BlockCardResponse res = sdk.cards.blockCard(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## createNewCard

You can create multiple debit cards which can be linked to your fire.com accounts.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateNewCardNewCard;
import org.openapis.openapi.models.operations.CreateNewCardNewCardAddressTypeEnum;
import org.openapis.openapi.models.operations.CreateNewCardResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("molestiae") {{
                    bearerAuth = "Bearer YOUR_BEARER_TOKEN_HERE";
                }})
                .build();

            CreateNewCardNewCard req = new CreateNewCardNewCard() {{
                acceptFeesAndCharges = true;
                addressType = CreateNewCardNewCardAddressTypeEnum.BUSINESS;
                cardPin = "5345";
                eurIcan = 2150L;
                gbpIcan = 2152L;
                userId = 3245L;
            }};            

            CreateNewCardResponse res = sdk.cards.createNewCard(req);

            if (res.newCardResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getListofCardTransactions

Returns a list of cards transactions related to your fire.com card.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetListofCardTransactionsRequest;
import org.openapis.openapi.models.operations.GetListofCardTransactionsResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("minus") {{
                    bearerAuth = "Bearer YOUR_BEARER_TOKEN_HERE";
                }})
                .build();

            GetListofCardTransactionsRequest req = new GetListofCardTransactionsRequest(812169L) {{
                limit = 528895L;
                offset = 479977L;
            }};            

            GetListofCardTransactionsResponse res = sdk.cards.getListofCardTransactions(req);

            if (res.cardTransactionsv1s != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getListofCards

Returns a list of cards related to your fire.com account.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetListofCardsResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("excepturi") {{
                    bearerAuth = "Bearer YOUR_BEARER_TOKEN_HERE";
                }})
                .build();

            GetListofCardsResponse res = sdk.cards.getListofCards();

            if (res.cards != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## unblockCard

Updates status of an existing card to unblock which means that transactions can be carried out with that card.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UnblockCardRequest;
import org.openapis.openapi.models.operations.UnblockCardResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("nisi") {{
                    bearerAuth = "Bearer YOUR_BEARER_TOKEN_HERE";
                }})
                .build();

            UnblockCardRequest req = new UnblockCardRequest(925597L);            

            UnblockCardResponse res = sdk.cards.unblockCard(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
