# paymentPolicy

### Available Operations

* [createPaymentPolicy](#createpaymentpolicy) - This method creates a new payment policy where the policy encapsulates seller's terms for order payments.  <br/><br/>Each policy targets a specific eBay marketplace and category group, and you can create multiple policies for each combination.  <br/><br/>A successful request returns the <b>getPaymentPolicy</b> URI to the new policy in the <b>Location</b> response header and the ID for the new policy is returned in the response payload.  <p class="tablenote"><b>Tip:</b> For details on creating and using the business policies supported by the Account API, see <a href="/api-docs/sell/static/seller-accounts/business-policies.html">eBay business policies</a>.</p>
* [deletePaymentPolicy](#deletepaymentpolicy) - This method deletes a payment policy. Supply the ID of the policy you want to delete in the <b>paymentPolicyId</b> path parameter. 
* [getPaymentPolicies](#getpaymentpolicies) - This method retrieves all the payment policies configured for the marketplace you specify using the <code>marketplace_id</code> query parameter.  <br/><br/><b>Marketplaces and locales</b>  <br/><br/>Get the correct policies for a marketplace that supports multiple locales using the <code>Content-Language</code> request header. For example, get the policies for the French locale of the Canadian marketplace by specifying <code>fr-CA</code> for the <code>Content-Language</code> header. Likewise, target the Dutch locale of the Belgium marketplace by setting <code>Content-Language: nl-BE</code>. For details on header values, see <a href="/api-docs/static/rest-request-components.html#HTTP" target="_blank">HTTP request headers</a>.
* [getPaymentPolicy](#getpaymentpolicy) - This method retrieves the complete details of a payment policy. Supply the ID of the policy you want to retrieve using the <b>paymentPolicyId</b> path parameter.
* [getPaymentPolicyByName](#getpaymentpolicybyname) - This method retrieves the details of a specific payment policy. Supply both the policy <code>name</code> and its associated <code>marketplace_id</code> in the request query parameters.   <br/><br/><b>Marketplaces and locales</b>  <br/><br/>Get the correct policy for a marketplace that supports multiple locales using the <code>Content-Language</code> request header. For example, get a policy for the French locale of the Canadian marketplace by specifying <code>fr-CA</code> for the <code>Content-Language</code> header. Likewise, target the Dutch locale of the Belgium marketplace by setting <code>Content-Language: nl-BE</code>. For details on header values, see <a href="/api-docs/static/rest-request-components.html#HTTP">HTTP request headers</a>.
* [updatePaymentPolicy](#updatepaymentpolicy) - This method updates an existing payment policy. Specify the policy you want to update using the <b>payment_policy_id</b> path parameter. Supply a complete policy payload with the updates you want to make; this call overwrites the existing policy with the new details specified in the payload.

## createPaymentPolicy

This method creates a new payment policy where the policy encapsulates seller's terms for order payments.  <br/><br/>Each policy targets a specific eBay marketplace and category group, and you can create multiple policies for each combination.  <br/><br/>A successful request returns the <b>getPaymentPolicy</b> URI to the new policy in the <b>Location</b> response header and the ID for the new policy is returned in the response payload.  <p class="tablenote"><b>Tip:</b> For details on creating and using the business policies supported by the Account API, see <a href="/api-docs/sell/static/seller-accounts/business-policies.html">eBay business policies</a>.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreatePaymentPolicyResponse;
import org.openapis.openapi.models.operations.CreatePaymentPolicySecurity;
import org.openapis.openapi.models.shared.Amount;
import org.openapis.openapi.models.shared.CategoryType;
import org.openapis.openapi.models.shared.Deposit;
import org.openapis.openapi.models.shared.PaymentMethod;
import org.openapis.openapi.models.shared.PaymentPolicyRequest;
import org.openapis.openapi.models.shared.RecipientAccountReference;
import org.openapis.openapi.models.shared.TimeDuration;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            org.openapis.openapi.models.shared.PaymentPolicyRequest req = new PaymentPolicyRequest() {{
                categoryTypes = new org.openapis.openapi.models.shared.CategoryType[]{{
                    add(new CategoryType() {{
                        default_ = false;
                        name = "Miss Julian Marvin";
                    }}),
                    add(new CategoryType() {{
                        default_ = false;
                        name = "Tommy Kemmer";
                    }}),
                }};
                deposit = new Deposit() {{
                    amount = new Amount() {{
                        currency = "odit";
                        value = "nemo";
                    }};;
                    dueIn = new TimeDuration() {{
                        unit = "quasi";
                        value = 435865;
                    }};;
                    paymentMethods = new org.openapis.openapi.models.shared.PaymentMethod[]{{
                        add(new PaymentMethod() {{
                            brands = new String[]{{
                                add("eius"),
                                add("maxime"),
                                add("deleniti"),
                                add("facilis"),
                            }};
                            paymentMethodType = "in";
                            recipientAccountReference = new RecipientAccountReference() {{
                                referenceId = "architecto";
                                referenceType = "architecto";
                            }};
                        }}),
                        add(new PaymentMethod() {{
                            brands = new String[]{{
                                add("ullam"),
                                add("expedita"),
                                add("nihil"),
                                add("repellat"),
                            }};
                            paymentMethodType = "quibusdam";
                            recipientAccountReference = new RecipientAccountReference() {{
                                referenceId = "sed";
                                referenceType = "saepe";
                            }};
                        }}),
                        add(new PaymentMethod() {{
                            brands = new String[]{{
                                add("accusantium"),
                                add("consequuntur"),
                                add("praesentium"),
                                add("natus"),
                            }};
                            paymentMethodType = "magni";
                            recipientAccountReference = new RecipientAccountReference() {{
                                referenceId = "sunt";
                                referenceType = "quo";
                            }};
                        }}),
                        add(new PaymentMethod() {{
                            brands = new String[]{{
                                add("pariatur"),
                                add("maxime"),
                                add("ea"),
                                add("excepturi"),
                            }};
                            paymentMethodType = "odit";
                            recipientAccountReference = new RecipientAccountReference() {{
                                referenceId = "ea";
                                referenceType = "accusantium";
                            }};
                        }}),
                    }};
                }};;
                description = "ab";
                fullPaymentDueIn = new TimeDuration() {{
                    unit = "maiores";
                    value = 697429;
                }};;
                immediatePay = false;
                marketplaceId = "ipsam";
                name = "Dr. Stacey Reichert";
                paymentInstructions = "voluptatibus";
                paymentMethods = new org.openapis.openapi.models.shared.PaymentMethod[]{{
                    add(new PaymentMethod() {{
                        brands = new String[]{{
                            add("amet"),
                            add("aut"),
                            add("cumque"),
                            add("corporis"),
                        }};
                        paymentMethodType = "hic";
                        recipientAccountReference = new RecipientAccountReference() {{
                            referenceId = "libero";
                            referenceType = "nobis";
                        }};
                    }}),
                }};
            }};            

            CreatePaymentPolicyResponse res = sdk.paymentPolicy.createPaymentPolicy(req, new CreatePaymentPolicySecurity("dolores") {{
                apiAuth = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.setPaymentPolicyResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## deletePaymentPolicy

This method deletes a payment policy. Supply the ID of the policy you want to delete in the <b>paymentPolicyId</b> path parameter. 

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeletePaymentPolicyRequest;
import org.openapis.openapi.models.operations.DeletePaymentPolicyResponse;
import org.openapis.openapi.models.operations.DeletePaymentPolicySecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DeletePaymentPolicyRequest req = new DeletePaymentPolicyRequest("quis");            

            DeletePaymentPolicyResponse res = sdk.paymentPolicy.deletePaymentPolicy(req, new DeletePaymentPolicySecurity("totam") {{
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

## getPaymentPolicies

This method retrieves all the payment policies configured for the marketplace you specify using the <code>marketplace_id</code> query parameter.  <br/><br/><b>Marketplaces and locales</b>  <br/><br/>Get the correct policies for a marketplace that supports multiple locales using the <code>Content-Language</code> request header. For example, get the policies for the French locale of the Canadian marketplace by specifying <code>fr-CA</code> for the <code>Content-Language</code> header. Likewise, target the Dutch locale of the Belgium marketplace by setting <code>Content-Language: nl-BE</code>. For details on header values, see <a href="/api-docs/static/rest-request-components.html#HTTP" target="_blank">HTTP request headers</a>.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetPaymentPoliciesRequest;
import org.openapis.openapi.models.operations.GetPaymentPoliciesResponse;
import org.openapis.openapi.models.operations.GetPaymentPoliciesSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetPaymentPoliciesRequest req = new GetPaymentPoliciesRequest("dignissimos");            

            GetPaymentPoliciesResponse res = sdk.paymentPolicy.getPaymentPolicies(req, new GetPaymentPoliciesSecurity("eaque") {{
                apiAuth = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.paymentPolicyResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getPaymentPolicy

This method retrieves the complete details of a payment policy. Supply the ID of the policy you want to retrieve using the <b>paymentPolicyId</b> path parameter.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetPaymentPolicyRequest;
import org.openapis.openapi.models.operations.GetPaymentPolicyResponse;
import org.openapis.openapi.models.operations.GetPaymentPolicySecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetPaymentPolicyRequest req = new GetPaymentPolicyRequest("quis");            

            GetPaymentPolicyResponse res = sdk.paymentPolicy.getPaymentPolicy(req, new GetPaymentPolicySecurity("nesciunt") {{
                apiAuth = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.paymentPolicy != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getPaymentPolicyByName

This method retrieves the details of a specific payment policy. Supply both the policy <code>name</code> and its associated <code>marketplace_id</code> in the request query parameters.   <br/><br/><b>Marketplaces and locales</b>  <br/><br/>Get the correct policy for a marketplace that supports multiple locales using the <code>Content-Language</code> request header. For example, get a policy for the French locale of the Canadian marketplace by specifying <code>fr-CA</code> for the <code>Content-Language</code> header. Likewise, target the Dutch locale of the Belgium marketplace by setting <code>Content-Language: nl-BE</code>. For details on header values, see <a href="/api-docs/static/rest-request-components.html#HTTP">HTTP request headers</a>.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetPaymentPolicyByNameRequest;
import org.openapis.openapi.models.operations.GetPaymentPolicyByNameResponse;
import org.openapis.openapi.models.operations.GetPaymentPolicyByNameSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetPaymentPolicyByNameRequest req = new GetPaymentPolicyByNameRequest("eos", "perferendis");            

            GetPaymentPolicyByNameResponse res = sdk.paymentPolicy.getPaymentPolicyByName(req, new GetPaymentPolicyByNameSecurity("dolores") {{
                apiAuth = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.paymentPolicy != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## updatePaymentPolicy

This method updates an existing payment policy. Specify the policy you want to update using the <b>payment_policy_id</b> path parameter. Supply a complete policy payload with the updates you want to make; this call overwrites the existing policy with the new details specified in the payload.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdatePaymentPolicyRequest;
import org.openapis.openapi.models.operations.UpdatePaymentPolicyResponse;
import org.openapis.openapi.models.operations.UpdatePaymentPolicySecurity;
import org.openapis.openapi.models.shared.Amount;
import org.openapis.openapi.models.shared.CategoryType;
import org.openapis.openapi.models.shared.Deposit;
import org.openapis.openapi.models.shared.PaymentMethod;
import org.openapis.openapi.models.shared.PaymentPolicyRequest;
import org.openapis.openapi.models.shared.RecipientAccountReference;
import org.openapis.openapi.models.shared.TimeDuration;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            UpdatePaymentPolicyRequest req = new UpdatePaymentPolicyRequest(                new PaymentPolicyRequest() {{
                                categoryTypes = new org.openapis.openapi.models.shared.CategoryType[]{{
                                    add(new CategoryType() {{
                                        default_ = false;
                                        name = "Rosa Swift";
                                    }}),
                                    add(new CategoryType() {{
                                        default_ = false;
                                        name = "Alejandro Purdy DDS";
                                    }}),
                                    add(new CategoryType() {{
                                        default_ = false;
                                        name = "Ms. Vickie Mraz";
                                    }}),
                                    add(new CategoryType() {{
                                        default_ = false;
                                        name = "Ollie Watsica";
                                    }}),
                                }};
                                deposit = new Deposit() {{
                                    amount = new Amount() {{
                                        currency = "dolorum";
                                        value = "deleniti";
                                    }};;
                                    dueIn = new TimeDuration() {{
                                        unit = "pariatur";
                                        value = 589910;
                                    }};;
                                    paymentMethods = new org.openapis.openapi.models.shared.PaymentMethod[]{{
                                        add(new PaymentMethod() {{
                                            brands = new String[]{{
                                                add("delectus"),
                                                add("quaerat"),
                                                add("quos"),
                                            }};
                                            paymentMethodType = "aliquid";
                                            recipientAccountReference = new RecipientAccountReference() {{
                                                referenceId = "dolorem";
                                                referenceType = "dolorem";
                                            }};
                                        }}),
                                        add(new PaymentMethod() {{
                                            brands = new String[]{{
                                                add("qui"),
                                            }};
                                            paymentMethodType = "ipsum";
                                            recipientAccountReference = new RecipientAccountReference() {{
                                                referenceId = "hic";
                                                referenceType = "excepturi";
                                            }};
                                        }}),
                                        add(new PaymentMethod() {{
                                            brands = new String[]{{
                                                add("voluptate"),
                                                add("dignissimos"),
                                                add("reiciendis"),
                                            }};
                                            paymentMethodType = "amet";
                                            recipientAccountReference = new RecipientAccountReference() {{
                                                referenceId = "dolorum";
                                                referenceType = "numquam";
                                            }};
                                        }}),
                                        add(new PaymentMethod() {{
                                            brands = new String[]{{
                                                add("ipsa"),
                                            }};
                                            paymentMethodType = "ipsa";
                                            recipientAccountReference = new RecipientAccountReference() {{
                                                referenceId = "iure";
                                                referenceType = "odio";
                                            }};
                                        }}),
                                    }};
                                }};;
                                description = "quaerat";
                                fullPaymentDueIn = new TimeDuration() {{
                                    unit = "accusamus";
                                    value = 696344;
                                }};;
                                immediatePay = false;
                                marketplaceId = "voluptatibus";
                                name = "Faye Daugherty PhD";
                                paymentInstructions = "ab";
                                paymentMethods = new org.openapis.openapi.models.shared.PaymentMethod[]{{
                                    add(new PaymentMethod() {{
                                        brands = new String[]{{
                                            add("iusto"),
                                            add("voluptate"),
                                            add("dolorum"),
                                        }};
                                        paymentMethodType = "deleniti";
                                        recipientAccountReference = new RecipientAccountReference() {{
                                            referenceId = "omnis";
                                            referenceType = "necessitatibus";
                                        }};
                                    }}),
                                    add(new PaymentMethod() {{
                                        brands = new String[]{{
                                            add("asperiores"),
                                            add("nihil"),
                                            add("ipsum"),
                                        }};
                                        paymentMethodType = "voluptate";
                                        recipientAccountReference = new RecipientAccountReference() {{
                                            referenceId = "id";
                                            referenceType = "saepe";
                                        }};
                                    }}),
                                    add(new PaymentMethod() {{
                                        brands = new String[]{{
                                            add("aspernatur"),
                                            add("perferendis"),
                                        }};
                                        paymentMethodType = "amet";
                                        recipientAccountReference = new RecipientAccountReference() {{
                                            referenceId = "optio";
                                            referenceType = "accusamus";
                                        }};
                                    }}),
                                }};
                            }};, "ad");            

            UpdatePaymentPolicyResponse res = sdk.paymentPolicy.updatePaymentPolicy(req, new UpdatePaymentPolicySecurity("saepe") {{
                apiAuth = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.setPaymentPolicyResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
