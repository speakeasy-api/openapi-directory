# marketplace

### Available Operations

* [getAutomotivePartsCompatibilityPolicies](#getautomotivepartscompatibilitypolicies) - This method returns the eBay policies that define how to list automotive-parts-compatibility items in the categories of a specific marketplace.  <br><br>By default, this method returns the entire category tree for the specified marketplace. You can limit the size of the result set by using the <b>filter</b> query parameter to specify only the category IDs you want to review.<br /><br /><span class="tablenote"><span style="color:#478415"><strong>Tip:</strong></span> This method can potentially return a very large response payload. eBay recommends that the response payload be compressed by passing in the <b>Accept-Encoding</b> request header and setting the value to <code>application/gzip</code>.</span>
* [getExtendedProducerResponsibilityPolicies](#getextendedproducerresponsibilitypolicies) - This method returns the Extended Producer Responsibility policies for one, multiple, or all eBay categories in an eBay marketplace.<br /><br />The identifier of the eBay marketplace is passed in as a path parameter, and unless one or more eBay category IDs are passed in through the filter query parameter, this method will return metadata on every applicable category for the specified marketplace.<br /><br /><span class="tablenote"><span style="color:#004680"><strong>Note:</strong></span> Currently, the Extended Producer Responsibility policies are only applicable to a limited number of categories, and only in the EBAY_FR marketplace.</span><br /><br /><span class="tablenote"><span style="color:#478415"><strong>Tip:</strong></span> This method can potentially return a very large response payload. eBay recommends that the response payload be compressed by passing in the <b>Accept-Encoding</b> request header and setting the value to <code>application/gzip</code>.</span>
* [getHazardousMaterialsLabels](#gethazardousmaterialslabels) - This method returns hazardous materials label information for the specified eBay marketplace. The information includes IDs, descriptions, and URLs (as applicable) for the available signal words, statements, and pictograms. The returned statements are localized for the default langauge of the marketplace. If a marketplace does not support hazardous materials label information, an error is returned.<p>This information is used by the seller to add hazardous materials label related information to their listings (see <a href='/api-docs/sell/static/metadata/feature-regulatorhazmatcontainer.html'>Specifying hazardous material related information</a>).</p>
* [getItemConditionPolicies](#getitemconditionpolicies) - This method returns item condition metadata on one, multiple, or all eBay categories on an eBay marketplace. This metadata consists of the different item conditions (with IDs) that an eBay category supports, and a boolean to indicate if an eBay category requires an item condition. <br><br>The identifier of the eBay marketplace is passed in as a path parameter, and unless one or more eBay category IDs are passed in through the <b>filter</b> query parameter, this method will return metadata on every single category for the specified marketplace. If you only want to view item condition metadata for one eBay category or a select group of eBay categories, you can pass in up to 50 eBay category ID through the <b>filter</b> query parameter.<br /><br /><span class="tablenote"><span style="color:#FF0000"><strong>Important:</strong></span> <b>Certified - Refurbished</b>-eligible sellers, and sellers who are eligible to list with the new values (EXCELLENT_REFURBISHED, VERY_GOOD_REFURBISHED, and GOOD_REFURBISHED) must use an OAuth token created with the <a href="/api-docs/static/oauth-authorization-code-grant.html" target="_blank">authorization code grant flow</a> and <b>https://api.ebay.com/oauth/api_scope/sell.inventory</b> scope in order to retrieve the refurbished conditions for the relevant categories.<br/><br/>See the <a href="/api-docs/sell/static/metadata/condition-id-values.html#Category " target="_blank">eBay Refurbished Program - Category and marketplace support</a> topic for the categories and marketplaces that support these refurbished conditions<br/><br/>These restricted item conditions will not be returned if an OAuth token created with the <a href="/api-docs/static/oauth-client-credentials-grant.html" target="_blank">client credentials grant flow</a> and <b>https://api.ebay.com/oauth/api_scope</b> scope is used, or if any seller is not eligible to list with that item condition. <br/><br/> See the <a href="/api-docs/static/oauth-scopes.html" target="_blank">Specifying OAuth scopes</a> topic for more information about specifying scopes.</span><br /><br /><span class="tablenote"><span style="color:#478415"><strong>Tip:</strong></span> This method can potentially return a very large response payload. eBay recommends that the response payload be compressed by passing in the <b>Accept-Encoding</b> request header and setting the value to <code>application/gzip</code>.</span>
* [getListingStructurePolicies](#getlistingstructurepolicies) - This method returns the eBay policies that define the allowed listing structures for the categories of a specific marketplace. The listing-structure policies currently pertain to whether or not you can list items with variations.  <br><br>By default, this method returns the entire category tree for the specified marketplace. You can limit the size of the result set by using the <b>filter</b> query parameter to specify only the category IDs you want to review.<br /><br /><span class="tablenote"><span style="color:#478415"><strong>Tip:</strong></span> This method can potentially return a very large response payload. eBay recommends that the response payload be compressed by passing in the <b>Accept-Encoding</b> request header and setting the value to <code>application/gzip</code>.</span>
* [getNegotiatedPricePolicies](#getnegotiatedpricepolicies) - This method returns the eBay policies that define the supported negotiated price features (like "best offer") for the categories of a specific marketplace.  <br><br>By default, this method returns the entire category tree for the specified marketplace. You can limit the size of the result set by using the <b>filter</b> query parameter to specify only the category IDs you want to review.<br /><br /><span class="tablenote"><span style="color:#478415"><strong>Tip:</strong></span> This method can potentially return a very large response payload. eBay recommends that the response payload be compressed by passing in the <b>Accept-Encoding</b> request header and setting the value to <code>application/gzip</code>.</span>
* [getReturnPolicies](#getreturnpolicies) - This method returns the eBay policies that define whether or not you must include a return policy for the items you list in the categories of a specific marketplace, plus the guidelines for creating domestic and international return policies in the different eBay categories.  <br><br>By default, this method returns the entire category tree for the specified marketplace. You can limit the size of the result set by using the <b>filter</b> query parameter to specify only the category IDs you want to review.<br /><br /><span class="tablenote"><span style="color:#478415"><strong>Tip:</strong></span> This method can potentially return a very large response payload. eBay recommends that the response payload be compressed by passing in the <b>Accept-Encoding</b> request header and setting the value to <code>application/gzip</code>.</span>

## getAutomotivePartsCompatibilityPolicies

This method returns the eBay policies that define how to list automotive-parts-compatibility items in the categories of a specific marketplace.  <br><br>By default, this method returns the entire category tree for the specified marketplace. You can limit the size of the result set by using the <b>filter</b> query parameter to specify only the category IDs you want to review.<br /><br /><span class="tablenote"><span style="color:#478415"><strong>Tip:</strong></span> This method can potentially return a very large response payload. eBay recommends that the response payload be compressed by passing in the <b>Accept-Encoding</b> request header and setting the value to <code>application/gzip</code>.</span>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetAutomotivePartsCompatibilityPoliciesRequest;
import org.openapis.openapi.models.operations.GetAutomotivePartsCompatibilityPoliciesResponse;
import org.openapis.openapi.models.operations.GetAutomotivePartsCompatibilityPoliciesSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetAutomotivePartsCompatibilityPoliciesRequest req = new GetAutomotivePartsCompatibilityPoliciesRequest("unde") {{
                filter = "nulla";
            }};            

            GetAutomotivePartsCompatibilityPoliciesResponse res = sdk.marketplace.getAutomotivePartsCompatibilityPolicies(req, new GetAutomotivePartsCompatibilityPoliciesSecurity("corrupti") {{
                apiAuth = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.automotivePartsCompatibilityPolicyResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getExtendedProducerResponsibilityPolicies

This method returns the Extended Producer Responsibility policies for one, multiple, or all eBay categories in an eBay marketplace.<br /><br />The identifier of the eBay marketplace is passed in as a path parameter, and unless one or more eBay category IDs are passed in through the filter query parameter, this method will return metadata on every applicable category for the specified marketplace.<br /><br /><span class="tablenote"><span style="color:#004680"><strong>Note:</strong></span> Currently, the Extended Producer Responsibility policies are only applicable to a limited number of categories, and only in the EBAY_FR marketplace.</span><br /><br /><span class="tablenote"><span style="color:#478415"><strong>Tip:</strong></span> This method can potentially return a very large response payload. eBay recommends that the response payload be compressed by passing in the <b>Accept-Encoding</b> request header and setting the value to <code>application/gzip</code>.</span>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetExtendedProducerResponsibilityPoliciesRequest;
import org.openapis.openapi.models.operations.GetExtendedProducerResponsibilityPoliciesResponse;
import org.openapis.openapi.models.operations.GetExtendedProducerResponsibilityPoliciesSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetExtendedProducerResponsibilityPoliciesRequest req = new GetExtendedProducerResponsibilityPoliciesRequest("illum") {{
                filter = "vel";
            }};            

            GetExtendedProducerResponsibilityPoliciesResponse res = sdk.marketplace.getExtendedProducerResponsibilityPolicies(req, new GetExtendedProducerResponsibilityPoliciesSecurity("error") {{
                apiAuth = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.extendedProducerResponsibilityPolicyResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getHazardousMaterialsLabels

This method returns hazardous materials label information for the specified eBay marketplace. The information includes IDs, descriptions, and URLs (as applicable) for the available signal words, statements, and pictograms. The returned statements are localized for the default langauge of the marketplace. If a marketplace does not support hazardous materials label information, an error is returned.<p>This information is used by the seller to add hazardous materials label related information to their listings (see <a href='/api-docs/sell/static/metadata/feature-regulatorhazmatcontainer.html'>Specifying hazardous material related information</a>).</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetHazardousMaterialsLabelsRequest;
import org.openapis.openapi.models.operations.GetHazardousMaterialsLabelsResponse;
import org.openapis.openapi.models.operations.GetHazardousMaterialsLabelsSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetHazardousMaterialsLabelsRequest req = new GetHazardousMaterialsLabelsRequest("deserunt");            

            GetHazardousMaterialsLabelsResponse res = sdk.marketplace.getHazardousMaterialsLabels(req, new GetHazardousMaterialsLabelsSecurity("suscipit") {{
                apiAuth = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.hazardousMaterialDetailsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getItemConditionPolicies

This method returns item condition metadata on one, multiple, or all eBay categories on an eBay marketplace. This metadata consists of the different item conditions (with IDs) that an eBay category supports, and a boolean to indicate if an eBay category requires an item condition. <br><br>The identifier of the eBay marketplace is passed in as a path parameter, and unless one or more eBay category IDs are passed in through the <b>filter</b> query parameter, this method will return metadata on every single category for the specified marketplace. If you only want to view item condition metadata for one eBay category or a select group of eBay categories, you can pass in up to 50 eBay category ID through the <b>filter</b> query parameter.<br /><br /><span class="tablenote"><span style="color:#FF0000"><strong>Important:</strong></span> <b>Certified - Refurbished</b>-eligible sellers, and sellers who are eligible to list with the new values (EXCELLENT_REFURBISHED, VERY_GOOD_REFURBISHED, and GOOD_REFURBISHED) must use an OAuth token created with the <a href="/api-docs/static/oauth-authorization-code-grant.html" target="_blank">authorization code grant flow</a> and <b>https://api.ebay.com/oauth/api_scope/sell.inventory</b> scope in order to retrieve the refurbished conditions for the relevant categories.<br/><br/>See the <a href="/api-docs/sell/static/metadata/condition-id-values.html#Category " target="_blank">eBay Refurbished Program - Category and marketplace support</a> topic for the categories and marketplaces that support these refurbished conditions<br/><br/>These restricted item conditions will not be returned if an OAuth token created with the <a href="/api-docs/static/oauth-client-credentials-grant.html" target="_blank">client credentials grant flow</a> and <b>https://api.ebay.com/oauth/api_scope</b> scope is used, or if any seller is not eligible to list with that item condition. <br/><br/> See the <a href="/api-docs/static/oauth-scopes.html" target="_blank">Specifying OAuth scopes</a> topic for more information about specifying scopes.</span><br /><br /><span class="tablenote"><span style="color:#478415"><strong>Tip:</strong></span> This method can potentially return a very large response payload. eBay recommends that the response payload be compressed by passing in the <b>Accept-Encoding</b> request header and setting the value to <code>application/gzip</code>.</span>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetItemConditionPoliciesRequest;
import org.openapis.openapi.models.operations.GetItemConditionPoliciesResponse;
import org.openapis.openapi.models.operations.GetItemConditionPoliciesSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetItemConditionPoliciesRequest req = new GetItemConditionPoliciesRequest("iure") {{
                filter = "magnam";
            }};            

            GetItemConditionPoliciesResponse res = sdk.marketplace.getItemConditionPolicies(req, new GetItemConditionPoliciesSecurity("debitis") {{
                apiAuth = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.itemConditionPolicyResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getListingStructurePolicies

This method returns the eBay policies that define the allowed listing structures for the categories of a specific marketplace. The listing-structure policies currently pertain to whether or not you can list items with variations.  <br><br>By default, this method returns the entire category tree for the specified marketplace. You can limit the size of the result set by using the <b>filter</b> query parameter to specify only the category IDs you want to review.<br /><br /><span class="tablenote"><span style="color:#478415"><strong>Tip:</strong></span> This method can potentially return a very large response payload. eBay recommends that the response payload be compressed by passing in the <b>Accept-Encoding</b> request header and setting the value to <code>application/gzip</code>.</span>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetListingStructurePoliciesRequest;
import org.openapis.openapi.models.operations.GetListingStructurePoliciesResponse;
import org.openapis.openapi.models.operations.GetListingStructurePoliciesSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetListingStructurePoliciesRequest req = new GetListingStructurePoliciesRequest("ipsa") {{
                filter = "delectus";
            }};            

            GetListingStructurePoliciesResponse res = sdk.marketplace.getListingStructurePolicies(req, new GetListingStructurePoliciesSecurity("tempora") {{
                apiAuth = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.listingStructurePolicyResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getNegotiatedPricePolicies

This method returns the eBay policies that define the supported negotiated price features (like "best offer") for the categories of a specific marketplace.  <br><br>By default, this method returns the entire category tree for the specified marketplace. You can limit the size of the result set by using the <b>filter</b> query parameter to specify only the category IDs you want to review.<br /><br /><span class="tablenote"><span style="color:#478415"><strong>Tip:</strong></span> This method can potentially return a very large response payload. eBay recommends that the response payload be compressed by passing in the <b>Accept-Encoding</b> request header and setting the value to <code>application/gzip</code>.</span>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetNegotiatedPricePoliciesRequest;
import org.openapis.openapi.models.operations.GetNegotiatedPricePoliciesResponse;
import org.openapis.openapi.models.operations.GetNegotiatedPricePoliciesSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetNegotiatedPricePoliciesRequest req = new GetNegotiatedPricePoliciesRequest("suscipit") {{
                filter = "molestiae";
            }};            

            GetNegotiatedPricePoliciesResponse res = sdk.marketplace.getNegotiatedPricePolicies(req, new GetNegotiatedPricePoliciesSecurity("minus") {{
                apiAuth = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.negotiatedPricePolicyResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getReturnPolicies

This method returns the eBay policies that define whether or not you must include a return policy for the items you list in the categories of a specific marketplace, plus the guidelines for creating domestic and international return policies in the different eBay categories.  <br><br>By default, this method returns the entire category tree for the specified marketplace. You can limit the size of the result set by using the <b>filter</b> query parameter to specify only the category IDs you want to review.<br /><br /><span class="tablenote"><span style="color:#478415"><strong>Tip:</strong></span> This method can potentially return a very large response payload. eBay recommends that the response payload be compressed by passing in the <b>Accept-Encoding</b> request header and setting the value to <code>application/gzip</code>.</span>

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

            GetReturnPoliciesRequest req = new GetReturnPoliciesRequest("placeat") {{
                filter = "voluptatum";
            }};            

            GetReturnPoliciesResponse res = sdk.marketplace.getReturnPolicies(req, new GetReturnPoliciesSecurity("iusto") {{
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
