# ee

### Available Operations

* [assignMsisdn](#assignmsisdn) - Assigns a msisdn to a profile on ITV side.
* [checkEeBtEligibility](#checkeebteligibility) - Check whether or not a user is eligible for switching to Bt or EE offers.
* [createPinRequest](#createpinrequest) - Creates a PIN request that will send an SMS to the given msisdn.
This call is to validate MSISDN entered by a user not comming through EE network.
This call should be followed by POST ee/pin.

* [createToken](#createtoken) - Returns a token for later calls to EE API. TTL is one hour. Recommended is FE refreshes this token before each call.
* [getEligibleOffers](#geteligibleoffers) - Returns eligible partner specific offers for the querying partner for an EE MSISDN.
This call is supposed to be called after we have MSISDN accired.
This call should be followed by POST /ee/msisdn.

* [getPlan](#getplan) - Returns the plan description for EE flow including additional description data.
* [getEePlans](#geteeplans) - Returns all the plans available for EE flow including additional description data.
* [validatePinRequest](#validatepinrequest) - Validate PIN request created by calling POST /ee/pin This call is to validate MSISDN entered by a user not comming through EE network. This call should be called after PUT /ee/pin. This call should be followed by POST /ee/offers.

## assignMsisdn

Assigns a msisdn to a profile on ITV side.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.AssignMsisdnRequest;
import org.openapis.openapi.models.operations.AssignMsisdnResponse;
import org.openapis.openapi.models.operations.AssignMsisdnSecurity;
import org.openapis.openapi.models.shared.ItvAssignMsisdnRequest;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            AssignMsisdnRequest req = new AssignMsisdnRequest(                new ItvAssignMsisdnRequest("consectetur", "vero", "tenetur", "dignissimos");) {{
                lang = "hic";
            }};            

            AssignMsisdnResponse res = sdk.ee.assignMsisdn(req, new AssignMsisdnSecurity("distinctio") {{
                accountAuth = "Bearer YOUR_ACCESS_TOKEN_HERE";
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

## checkEeBtEligibility

Check whether or not a user is eligible for switching to Bt or EE offers.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CheckEeBtEligibilityRequest;
import org.openapis.openapi.models.operations.CheckEeBtEligibilityResponse;
import org.openapis.openapi.models.operations.CheckEeBtEligibilitySecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            CheckEeBtEligibilityRequest req = new CheckEeBtEligibilityRequest() {{
                lang = "quod";
            }};            

            CheckEeBtEligibilityResponse res = sdk.ee.checkEeBtEligibility(req, new CheckEeBtEligibilitySecurity("odio") {{
                accountAuth = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.eeBtEligibility != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## createPinRequest

Creates a PIN request that will send an SMS to the given msisdn.
This call is to validate MSISDN entered by a user not comming through EE network.
This call should be followed by POST ee/pin.


### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreatePinRequestRequest;
import org.openapis.openapi.models.operations.CreatePinRequestResponse;
import org.openapis.openapi.models.shared.EeCreatePinRequest;
import org.openapis.openapi.models.shared.FeatureFlagsEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            CreatePinRequestRequest req = new CreatePinRequestRequest(                new EeCreatePinRequest("similique", "facilis") {{
                                trackingHeader = "vero";
                            }};) {{
                ff = new org.openapis.openapi.models.shared.FeatureFlagsEnum[]{{
                    add(FeatureFlagsEnum.LDP),
                    add(FeatureFlagsEnum.LRL),
                }};
                lang = "illum";
            }};            

            CreatePinRequestResponse res = sdk.ee.createPinRequest(req);

            if (res.eeCreatePinResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## createToken

Returns a token for later calls to EE API. TTL is one hour. Recommended is FE refreshes this token before each call.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateTokenResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            CreateTokenResponse res = sdk.ee.createToken();

            if (res.eeCreateTokenResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getEligibleOffers

Returns eligible partner specific offers for the querying partner for an EE MSISDN.
This call is supposed to be called after we have MSISDN accired.
This call should be followed by POST /ee/msisdn.


### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetEligibleOffersRequest;
import org.openapis.openapi.models.operations.GetEligibleOffersResponse;
import org.openapis.openapi.models.shared.EeOffersRequest;
import org.openapis.openapi.models.shared.FeatureFlagsEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetEligibleOffersRequest req = new GetEligibleOffersRequest(                new EeOffersRequest("sequi", "natus") {{
                                trackingHeader = "impedit";
                            }};) {{
                ff = new org.openapis.openapi.models.shared.FeatureFlagsEnum[]{{
                    add(FeatureFlagsEnum.CD),
                }};
                lang = "exercitationem";
            }};            

            GetEligibleOffersResponse res = sdk.ee.getEligibleOffers(req);

            if (res.eeOffersResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getPlan

Returns the plan description for EE flow including additional description data.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetPlanRequest;
import org.openapis.openapi.models.operations.GetPlanResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetPlanRequest req = new GetPlanRequest("nulla") {{
                lang = "fugit";
            }};            

            GetPlanResponse res = sdk.ee.getPlan(req);

            if (res.eePlanListItem != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getEePlans

Returns all the plans available for EE flow including additional description data.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetEePlansRequest;
import org.openapis.openapi.models.operations.GetEePlansResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetEePlansRequest req = new GetEePlansRequest() {{
                lang = "porro";
            }};            

            GetEePlansResponse res = sdk.ee.getEePlans(req);

            if (res.eePlans != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## validatePinRequest

Validate PIN request created by calling POST /ee/pin This call is to validate MSISDN entered by a user not comming through EE network. This call should be called after PUT /ee/pin. This call should be followed by POST /ee/offers.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ValidatePinRequestRequest;
import org.openapis.openapi.models.operations.ValidatePinRequestResponse;
import org.openapis.openapi.models.shared.EeValidatePinRequest;
import org.openapis.openapi.models.shared.FeatureFlagsEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ValidatePinRequestRequest req = new ValidatePinRequestRequest(                new EeValidatePinRequest("maiores", "doloribus", "iusto") {{
                                trackingHeader = "eligendi";
                            }};) {{
                ff = new org.openapis.openapi.models.shared.FeatureFlagsEnum[]{{
                    add(FeatureFlagsEnum.ALL),
                    add(FeatureFlagsEnum.CAS),
                }};
                lang = "tempora";
            }};            

            ValidatePinRequestResponse res = sdk.ee.validatePinRequest(req);

            if (res.eeValidatePinResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
