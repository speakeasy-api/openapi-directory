# bt

### Available Operations

* [assignToken](#assigntoken) - Assigns an UserToken to a profile on the ITV side. Currently throws an exception.
* [checkEeBtEligibility](#checkeebteligibility) - Check whether or not a user is eligible for switching to Bt or EE offers.
* [checkUserToken](#checkusertoken) - Checks a provided token for BT eligible user.

* [getPlanByToken](#getplanbytoken) - Returns all the plans available for BT flow including additional description data.
* [getPlans](#getplans) - Returns all the plans available for BT flow including additional description data.

## assignToken

Assigns an UserToken to a profile on the ITV side. Currently throws an exception.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.AssignTokenRequest;
import org.openapis.openapi.models.operations.AssignTokenResponse;
import org.openapis.openapi.models.operations.AssignTokenSecurity;
import org.openapis.openapi.models.shared.ItvAssignBtTokenRequest;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            AssignTokenRequest req = new AssignTokenRequest(                new ItvAssignBtTokenRequest("modi", "iste");) {{
                lang = "dolorum";
            }};            

            AssignTokenResponse res = sdk.bt.assignToken(req, new AssignTokenSecurity("deleniti") {{
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
                lang = "pariatur";
            }};            

            CheckEeBtEligibilityResponse res = sdk.bt.checkEeBtEligibility(req, new CheckEeBtEligibilitySecurity("provident") {{
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

## checkUserToken

Checks a provided token for BT eligible user.


### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CheckUserTokenRequest;
import org.openapis.openapi.models.operations.CheckUserTokenResponse;
import org.openapis.openapi.models.shared.FeatureFlagsEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            CheckUserTokenRequest req = new CheckUserTokenRequest("nobis") {{
                ff = new org.openapis.openapi.models.shared.FeatureFlagsEnum[]{{
                    add(FeatureFlagsEnum.CD),
                    add(FeatureFlagsEnum.LDP),
                    add(FeatureFlagsEnum.RPT),
                }};
                lang = "aliquid";
            }};            

            CheckUserTokenResponse res = sdk.bt.checkUserToken(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getPlanByToken

Returns all the plans available for BT flow including additional description data.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetPlanByTokenRequest;
import org.openapis.openapi.models.operations.GetPlanByTokenResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetPlanByTokenRequest req = new GetPlanByTokenRequest("dolorem") {{
                lang = "dolorem";
            }};            

            GetPlanByTokenResponse res = sdk.bt.getPlanByToken(req);

            if (res.btPlanListItem != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getPlans

Returns all the plans available for BT flow including additional description data.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetPlansRequest;
import org.openapis.openapi.models.operations.GetPlansResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetPlansRequest req = new GetPlansRequest() {{
                lang = "dolor";
            }};            

            GetPlansResponse res = sdk.bt.getPlans(req);

            if (res.btPlans != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
