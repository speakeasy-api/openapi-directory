# customerContracts

### Available Operations

* [createContract](#createcontract) - Create a new contract
* [deleteNextContract](#deletenextcontract) - Delete your next contract
* [getBillingPeriods](#getbillingperiods) - Get billing periods conditions
* [getContracts](#getcontracts) - Get contract list
* [getOffer](#getoffer) - Get offer pricing
* [getStandardOffers](#getstandardoffers) - Get all standard offers
* [reactivateCurrentContract](#reactivatecurrentcontract) - Reactivate your terminated contract.
* [terminateCurrentContract](#terminatecurrentcontract) - Schedule termination of your current contract at the end of the commitment.

## createContract

Now you are ready to create your contract. Before that, please ensure that you check the offer with the same request parameterts. /offers


### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateContractResponse;
import org.openapis.openapi.models.shared.OfferRequest;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            org.openapis.openapi.models.shared.OfferRequest req = new OfferRequest(12, 1, 1) {{
                couponDiscountCode = "I-LOVE-BEEZUP";
                couponOfferCode = "04efc310-bc25-4710-a83a-faf200284fe5";
            }};            

            CreateContractResponse res = sdk.customerContracts.createContract(req);

            if (res.createContractResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## deleteNextContract

Delete your next contract

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteNextContractResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DeleteNextContractResponse res = sdk.customerContracts.deleteNextContract();

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getBillingPeriods

Get billing periods conditions

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetBillingPeriodsRequest;
import org.openapis.openapi.models.operations.GetBillingPeriodsResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetBillingPeriodsRequest req = new GetBillingPeriodsRequest() {{
                ifNoneMatch = "possimus";
            }};            

            GetBillingPeriodsResponse res = sdk.customerContracts.getBillingPeriods(req);

            if (res.billingPeriodList != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getContracts

Get contract list

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetContractsRequest;
import org.openapis.openapi.models.operations.GetContractsResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetContractsRequest req = new GetContractsRequest() {{
                ifNoneMatch = "quia";
            }};            

            GetContractsResponse res = sdk.customerContracts.getContracts(req);

            if (res.contracts != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getOffer

Get the offer pricing then you can create your contract with the same request parameters. /v2/user/customer/contracts


### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetOfferResponse;
import org.openapis.openapi.models.shared.OfferRequest;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            org.openapis.openapi.models.shared.OfferRequest req = new OfferRequest(12, 1, 1) {{
                couponDiscountCode = "I-LOVE-BEEZUP";
                couponOfferCode = "04efc310-bc25-4710-a83a-faf200284fe5";
            }};            

            GetOfferResponse res = sdk.customerContracts.getOffer(req);

            if (res.offer != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getStandardOffers

Get all standard offers

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetStandardOffersRequest;
import org.openapis.openapi.models.operations.GetStandardOffersResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetStandardOffersRequest req = new GetStandardOffersRequest() {{
                ifNoneMatch = "eveniet";
            }};            

            GetStandardOffersResponse res = sdk.customerContracts.getStandardOffers(req);

            if (res.standardOffers != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## reactivateCurrentContract

By calling this operation you can re-enable the auto renewal.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ReactivateCurrentContractResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ReactivateCurrentContractResponse res = sdk.customerContracts.reactivateCurrentContract();

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## terminateCurrentContract

By default your contract are automatically renew. By calling this operation you can disable the auto renewal.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.TerminateCurrentContractResponse;
import org.openapis.openapi.models.shared.TerminateContract;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            org.openapis.openapi.models.shared.TerminateContract req = new TerminateContract(1) {{
                contractTerminationReason = "I'm crazy, I want to leave your splendid service...";
            }};            

            TerminateCurrentContractResponse res = sdk.customerContracts.terminateCurrentContract(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
