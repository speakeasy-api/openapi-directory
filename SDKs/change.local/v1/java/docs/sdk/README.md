# SDK

### Available Operations

* [getApiV1DonationsCarbonCalculate](#getapiv1donationscarboncalculate) - Calculate shipping carbon offset
* [getApiV1DonationsCarbonStats](#getapiv1donationscarbonstats) - Retrieve carbon offset stats
* [getApiV1DonationsCryptoCalculate](#getapiv1donationscryptocalculate) - Calculate crypto carbon offset
* [getApiV1DonationsIndex](#getapiv1donationsindex) - List your donations
* [getApiV1DonationsShow](#getapiv1donationsshow) - Retrieve a donation
* [getApiV1NonprofitsList](#getapiv1nonprofitslist) - Search a nonprofit
* [getApiV1NonprofitsShow](#getapiv1nonprofitsshow) - Show a nonprofit
* [postApiV1DonationsCreate](#postapiv1donationscreate) - Create a donation

## getApiV1DonationsCarbonCalculate

Calculates the donation amount (to CarbonFund 501\(c\)3) needed to offset a physical shipment. This calculation depends on the weight, primary transportation method, and distance of the shipment. Provide the distance of the shipment using the origin and destination address, or directly with the number of miles. For convenience, this endpoint also returns the id of the nonprofit CarbonFund, for making a subsequent donation to. See the [Carbon offsets guide](/recipes/carbon-offsets/) for more on using this endpoint.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetApiV1DonationsCarbonCalculateRequest;
import org.openapis.openapi.models.operations.GetApiV1DonationsCarbonCalculateResponse;
import org.openapis.openapi.models.operations.GetApiV1DonationsCarbonCalculateSecurity;
import org.openapis.openapi.models.operations.GetApiV1DonationsCarbonCalculateTransportationMethodEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetApiV1DonationsCarbonCalculateRequest req = new GetApiV1DonationsCarbonCalculateRequest(8472.52) {{
                destinationAddress = 4236.55;
                distanceMi = 6235.64;
                originAddress = 6458.94;
                transportationMethod = GetApiV1DonationsCarbonCalculateTransportationMethodEnum.TRUCK;
            }};            

            GetApiV1DonationsCarbonCalculateResponse res = sdk.sdk.getApiV1DonationsCarbonCalculate(req, new GetApiV1DonationsCarbonCalculateSecurity("iure", "magnam") {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
            }});

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getApiV1DonationsCarbonStats

Measures your carbon offset impact in relatable terms. Provide the id of a donation to CarbonFund to see stats about that specific donation. If you omit the donation id, this endpoint returns aggregate stats for all of your CarbonFund donations.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetApiV1DonationsCarbonStatsRequest;
import org.openapis.openapi.models.operations.GetApiV1DonationsCarbonStatsResponse;
import org.openapis.openapi.models.operations.GetApiV1DonationsCarbonStatsSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetApiV1DonationsCarbonStatsRequest req = new GetApiV1DonationsCarbonStatsRequest() {{
                id = 8917.73;
            }};            

            GetApiV1DonationsCarbonStatsResponse res = sdk.sdk.getApiV1DonationsCarbonStats(req, new GetApiV1DonationsCarbonStatsSecurity("ipsa", "delectus") {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
            }});

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getApiV1DonationsCryptoCalculate

Calculates the donation amount (to CarbonFund 501\(c\)3) needed to offset a cryptocurrency transaction. For convenience, this endpoint also returns the id of the nonprofit CarbonFund, for making a subsequent donation to. See the [Carbon offsets guide](/recipes/carbon-offsets/) for more on using this endpoint.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetApiV1DonationsCryptoCalculateCurrencyEnum;
import org.openapis.openapi.models.operations.GetApiV1DonationsCryptoCalculateRequest;
import org.openapis.openapi.models.operations.GetApiV1DonationsCryptoCalculateResponse;
import org.openapis.openapi.models.operations.GetApiV1DonationsCryptoCalculateSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetApiV1DonationsCryptoCalculateRequest req = new GetApiV1DonationsCryptoCalculateRequest(GetApiV1DonationsCryptoCalculateCurrencyEnum.ETH) {{
                count = 3834.41;
            }};            

            GetApiV1DonationsCryptoCalculateResponse res = sdk.sdk.getApiV1DonationsCryptoCalculate(req, new GetApiV1DonationsCryptoCalculateSecurity("molestiae", "minus") {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
            }});

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getApiV1DonationsIndex

Retrieves a list of donations you've previously made. The donations are returned in order of creation, with the most recent donations appearing first. This endpoint is paginated.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetApiV1DonationsIndexRequest;
import org.openapis.openapi.models.operations.GetApiV1DonationsIndexResponse;
import org.openapis.openapi.models.operations.GetApiV1DonationsIndexSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetApiV1DonationsIndexRequest req = new GetApiV1DonationsIndexRequest() {{
                page = 8121.69;
            }};            

            GetApiV1DonationsIndexResponse res = sdk.sdk.getApiV1DonationsIndex(req, new GetApiV1DonationsIndexSecurity("voluptatum", "iusto") {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
            }});

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getApiV1DonationsShow

Retrieves the details of a donation you've previously made.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetApiV1DonationsShowRequest;
import org.openapis.openapi.models.operations.GetApiV1DonationsShowResponse;
import org.openapis.openapi.models.operations.GetApiV1DonationsShowSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetApiV1DonationsShowRequest req = new GetApiV1DonationsShowRequest("excepturi");            

            GetApiV1DonationsShowResponse res = sdk.sdk.getApiV1DonationsShow(req, new GetApiV1DonationsShowSecurity("nisi", "recusandae") {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
            }});

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getApiV1NonprofitsList

Retrieves a list of nonprofits whose names match the provided name. This endpoint is paginated.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetApiV1NonprofitsListRequest;
import org.openapis.openapi.models.operations.GetApiV1NonprofitsListResponse;
import org.openapis.openapi.models.operations.GetApiV1NonprofitsListSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetApiV1NonprofitsListRequest req = new GetApiV1NonprofitsListRequest() {{
                name = "Miss Raymond Hauck III";
                page = 8326.2;
            }};            

            GetApiV1NonprofitsListResponse res = sdk.sdk.getApiV1NonprofitsList(req, new GetApiV1NonprofitsListSecurity("sapiente", "quo") {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
            }});

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getApiV1NonprofitsShow

Retrieves information for a nonprofit.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetApiV1NonprofitsShowRequest;
import org.openapis.openapi.models.operations.GetApiV1NonprofitsShowResponse;
import org.openapis.openapi.models.operations.GetApiV1NonprofitsShowSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetApiV1NonprofitsShowRequest req = new GetApiV1NonprofitsShowRequest("odit");            

            GetApiV1NonprofitsShowResponse res = sdk.sdk.getApiV1NonprofitsShow(req, new GetApiV1NonprofitsShowSecurity("at", "at") {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
            }});

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postApiV1DonationsCreate

Creates a donation to any nonprofit. CHANGE keeps track of your donations, bills you at the end of the month, and handles the nonprofit payouts for you.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PostApiV1DonationsCreateFundingSourceEnum;
import org.openapis.openapi.models.operations.PostApiV1DonationsCreateRequest;
import org.openapis.openapi.models.operations.PostApiV1DonationsCreateResponse;
import org.openapis.openapi.models.operations.PostApiV1DonationsCreateSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            PostApiV1DonationsCreateRequest req = new PostApiV1DonationsCreateRequest("maiores", PostApiV1DonationsCreateFundingSourceEnum.MERCHANT, "quod") {{
                zipCode = "45761-7651";
            }};            

            PostApiV1DonationsCreateResponse res = sdk.sdk.postApiV1DonationsCreate(req, new PostApiV1DonationsCreateSecurity("deleniti", "hic") {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
            }});

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
