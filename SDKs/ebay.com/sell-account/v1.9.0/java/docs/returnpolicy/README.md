# returnPolicy

### Available Operations

* [createReturnPolicy](#createreturnpolicy) - This method creates a new return policy where the policy encapsulates seller's terms for returning items.  <br/><br/>Each policy targets a specific marketplace, and you can create multiple policies for each marketplace. Return policies are not applicable to motor-vehicle listings.<br/><br/>A successful request returns the <b>getReturnPolicy</b> URI to the new policy in the <b>Location</b> response header and the ID for the new policy is returned in the response payload.  <p class="tablenote"><b>Tip:</b> For details on creating and using the business policies supported by the Account API, see <a href="/api-docs/sell/static/seller-accounts/business-policies.html">eBay business policies</a>.</p>
* [deleteReturnPolicy](#deletereturnpolicy) - This method deletes a return policy. Supply the ID of the policy you want to delete in the <b>returnPolicyId</b> path parameter.
* [getReturnPolicies](#getreturnpolicies) - This method retrieves all the return policies configured for the marketplace you specify using the <code>marketplace_id</code> query parameter.  <br/><br/><b>Marketplaces and locales</b>  <br/><br/>Get the correct policies for a marketplace that supports multiple locales using the <code>Content-Language</code> request header. For example, get the policies for the French locale of the Canadian marketplace by specifying <code>fr-CA</code> for the <code>Content-Language</code> header. Likewise, target the Dutch locale of the Belgium marketplace by setting <code>Content-Language: nl-BE</code>. For details on header values, see <a href="/api-docs/static/rest-request-components.html#HTTP" target="_blank">HTTP request headers</a>.
* [getReturnPolicy](#getreturnpolicy) - This method retrieves the complete details of the return policy specified by the <b>returnPolicyId</b> path parameter.
* [getReturnPolicyByName](#getreturnpolicybyname) - This method retrieves the details of a specific return policy. Supply both the policy <code>name</code> and its associated <code>marketplace_id</code> in the request query parameters.   <br/><br/><b>Marketplaces and locales</b>  <br/><br/>Get the correct policy for a marketplace that supports multiple locales using the <code>Content-Language</code> request header. For example, get a policy for the French locale of the Canadian marketplace by specifying <code>fr-CA</code> for the <code>Content-Language</code> header. Likewise, target the Dutch locale of the Belgium marketplace by setting <code>Content-Language: nl-BE</code>. For details on header values, see <a href="/api-docs/static/rest-request-components.html#HTTP">HTTP request headers</a>.
* [updateReturnPolicy](#updatereturnpolicy) - This method updates an existing return policy. Specify the policy you want to update using the <b>return_policy_id</b> path parameter. Supply a complete policy payload with the updates you want to make; this call overwrites the existing policy with the new details specified in the payload.

## createReturnPolicy

This method creates a new return policy where the policy encapsulates seller's terms for returning items.  <br/><br/>Each policy targets a specific marketplace, and you can create multiple policies for each marketplace. Return policies are not applicable to motor-vehicle listings.<br/><br/>A successful request returns the <b>getReturnPolicy</b> URI to the new policy in the <b>Location</b> response header and the ID for the new policy is returned in the response payload.  <p class="tablenote"><b>Tip:</b> For details on creating and using the business policies supported by the Account API, see <a href="/api-docs/sell/static/seller-accounts/business-policies.html">eBay business policies</a>.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateReturnPolicyResponse;
import org.openapis.openapi.models.operations.CreateReturnPolicySecurity;
import org.openapis.openapi.models.shared.CategoryType;
import org.openapis.openapi.models.shared.InternationalReturnOverrideType;
import org.openapis.openapi.models.shared.ReturnPolicyRequest;
import org.openapis.openapi.models.shared.TimeDuration;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            org.openapis.openapi.models.shared.ReturnPolicyRequest req = new ReturnPolicyRequest() {{
                categoryTypes = new org.openapis.openapi.models.shared.CategoryType[]{{
                    add(new CategoryType() {{
                        default_ = false;
                        name = "Erick Denesik";
                    }}),
                    add(new CategoryType() {{
                        default_ = false;
                        name = "Fannie Kub";
                    }}),
                }};
                description = "tenetur";
                extendedHolidayReturnsOffered = false;
                internationalOverride = new InternationalReturnOverrideType() {{
                    returnMethod = "amet";
                    returnPeriod = new TimeDuration() {{
                        unit = "tempore";
                        value = 880298;
                    }};;
                    returnShippingCostPayer = "numquam";
                    returnsAccepted = false;
                }};;
                marketplaceId = "enim";
                name = "Jeannie Leannon MD";
                refundMethod = "neque";
                restockingFeePercentage = "sed";
                returnInstructions = "vel";
                returnMethod = "libero";
                returnPeriod = new TimeDuration() {{
                    unit = "voluptas";
                    value = 646265;
                }};;
                returnShippingCostPayer = "quam";
                returnsAccepted = false;
            }};            

            CreateReturnPolicyResponse res = sdk.returnPolicy.createReturnPolicy(req, new CreateReturnPolicySecurity("ipsum") {{
                apiAuth = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.setReturnPolicyResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## deleteReturnPolicy

This method deletes a return policy. Supply the ID of the policy you want to delete in the <b>returnPolicyId</b> path parameter.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteReturnPolicyRequest;
import org.openapis.openapi.models.operations.DeleteReturnPolicyResponse;
import org.openapis.openapi.models.operations.DeleteReturnPolicySecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DeleteReturnPolicyRequest req = new DeleteReturnPolicyRequest("incidunt");            

            DeleteReturnPolicyResponse res = sdk.returnPolicy.deleteReturnPolicy(req, new DeleteReturnPolicySecurity("qui") {{
                apiAuth = "Bearer YOUR_ACCESS_TOKEN_HERE";
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

## getReturnPolicies

This method retrieves all the return policies configured for the marketplace you specify using the <code>marketplace_id</code> query parameter.  <br/><br/><b>Marketplaces and locales</b>  <br/><br/>Get the correct policies for a marketplace that supports multiple locales using the <code>Content-Language</code> request header. For example, get the policies for the French locale of the Canadian marketplace by specifying <code>fr-CA</code> for the <code>Content-Language</code> header. Likewise, target the Dutch locale of the Belgium marketplace by setting <code>Content-Language: nl-BE</code>. For details on header values, see <a href="/api-docs/static/rest-request-components.html#HTTP" target="_blank">HTTP request headers</a>.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetReturnPoliciesRequest;
import org.openapis.openapi.models.operations.GetReturnPoliciesResponse;
import org.openapis.openapi.models.operations.GetReturnPoliciesSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetReturnPoliciesRequest req = new GetReturnPoliciesRequest("cupiditate");            

            GetReturnPoliciesResponse res = sdk.returnPolicy.getReturnPolicies(req, new GetReturnPoliciesSecurity("maxime") {{
                apiAuth = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.returnPolicyResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getReturnPolicy

This method retrieves the complete details of the return policy specified by the <b>returnPolicyId</b> path parameter.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetReturnPolicyRequest;
import org.openapis.openapi.models.operations.GetReturnPolicyResponse;
import org.openapis.openapi.models.operations.GetReturnPolicySecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetReturnPolicyRequest req = new GetReturnPolicyRequest("pariatur");            

            GetReturnPolicyResponse res = sdk.returnPolicy.getReturnPolicy(req, new GetReturnPolicySecurity("soluta") {{
                apiAuth = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.returnPolicy != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getReturnPolicyByName

This method retrieves the details of a specific return policy. Supply both the policy <code>name</code> and its associated <code>marketplace_id</code> in the request query parameters.   <br/><br/><b>Marketplaces and locales</b>  <br/><br/>Get the correct policy for a marketplace that supports multiple locales using the <code>Content-Language</code> request header. For example, get a policy for the French locale of the Canadian marketplace by specifying <code>fr-CA</code> for the <code>Content-Language</code> header. Likewise, target the Dutch locale of the Belgium marketplace by setting <code>Content-Language: nl-BE</code>. For details on header values, see <a href="/api-docs/static/rest-request-components.html#HTTP">HTTP request headers</a>.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetReturnPolicyByNameRequest;
import org.openapis.openapi.models.operations.GetReturnPolicyByNameResponse;
import org.openapis.openapi.models.operations.GetReturnPolicyByNameSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetReturnPolicyByNameRequest req = new GetReturnPolicyByNameRequest("dicta", "laborum");            

            GetReturnPolicyByNameResponse res = sdk.returnPolicy.getReturnPolicyByName(req, new GetReturnPolicyByNameSecurity("totam") {{
                apiAuth = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.returnPolicy != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## updateReturnPolicy

This method updates an existing return policy. Specify the policy you want to update using the <b>return_policy_id</b> path parameter. Supply a complete policy payload with the updates you want to make; this call overwrites the existing policy with the new details specified in the payload.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdateReturnPolicyRequest;
import org.openapis.openapi.models.operations.UpdateReturnPolicyResponse;
import org.openapis.openapi.models.operations.UpdateReturnPolicySecurity;
import org.openapis.openapi.models.shared.CategoryType;
import org.openapis.openapi.models.shared.InternationalReturnOverrideType;
import org.openapis.openapi.models.shared.ReturnPolicyRequest;
import org.openapis.openapi.models.shared.TimeDuration;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            UpdateReturnPolicyRequest req = new UpdateReturnPolicyRequest(                new ReturnPolicyRequest() {{
                                categoryTypes = new org.openapis.openapi.models.shared.CategoryType[]{{
                                    add(new CategoryType() {{
                                        default_ = false;
                                        name = "Bonnie Raynor";
                                    }}),
                                    add(new CategoryType() {{
                                        default_ = false;
                                        name = "Felicia Spencer";
                                    }}),
                                }};
                                description = "fugit";
                                extendedHolidayReturnsOffered = false;
                                internationalOverride = new InternationalReturnOverrideType() {{
                                    returnMethod = "magni";
                                    returnPeriod = new TimeDuration() {{
                                        unit = "odio";
                                        value = 124833;
                                    }};;
                                    returnShippingCostPayer = "ullam";
                                    returnsAccepted = false;
                                }};;
                                marketplaceId = "nam";
                                name = "George Runolfsdottir";
                                refundMethod = "et";
                                restockingFeePercentage = "saepe";
                                returnInstructions = "ipsum";
                                returnMethod = "veritatis";
                                returnPeriod = new TimeDuration() {{
                                    unit = "nobis";
                                    value = 552193;
                                }};;
                                returnShippingCostPayer = "tempore";
                                returnsAccepted = false;
                            }};, "cupiditate");            

            UpdateReturnPolicyResponse res = sdk.returnPolicy.updateReturnPolicy(req, new UpdateReturnPolicySecurity("aperiam") {{
                apiAuth = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.setReturnPolicyResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
