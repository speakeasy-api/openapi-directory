# SDK

## Overview

Amazon Web Services Outposts is a fully managed service that extends Amazon Web Services infrastructure, APIs, and tools to customer premises. By providing local access to Amazon Web Services managed infrastructure, Amazon Web Services Outposts enables customers to build and run applications on premises using the same programming interfaces as in Amazon Web Services Regions, while using local compute and storage resources for lower latency and local data processing needs.

Amazon Web Services documentation
<https://docs.aws.amazon.com/outposts/>
### Available Operations

* [cancelOrder](#cancelorder) - Cancels the specified order for an Outpost.
* [createOrder](#createorder) - Creates an order for an Outpost.
* [createOutpost](#createoutpost) - <p>Creates an Outpost.</p> <p>You can specify either an Availability one or an AZ ID.</p>
* [createSite](#createsite) -  Creates a site for an Outpost. 
* [deleteOutpost](#deleteoutpost) - Deletes the specified Outpost.
* [deleteSite](#deletesite) - Deletes the specified site.
* [getCatalogItem](#getcatalogitem) - Gets information about the specified catalog item.
* [getConnection](#getconnection) - <note> <p> Amazon Web Services uses this action to install Outpost servers.</p> </note> <p> Gets information about the specified connection. </p> <p> Use CloudTrail to monitor this action or Amazon Web Services managed policy for Amazon Web Services Outposts to secure it. For more information, see <a href="https://docs.aws.amazon.com/outposts/latest/userguide/security-iam-awsmanpol.html"> Amazon Web Services managed policies for Amazon Web Services Outposts</a> and <a href="https://docs.aws.amazon.com/outposts/latest/userguide/logging-using-cloudtrail.html"> Logging Amazon Web Services Outposts API calls with Amazon Web Services CloudTrail</a> in the <i>Amazon Web Services Outposts User Guide</i>. </p>
* [getOrder](#getorder) - Gets information about the specified order.
* [getOutpost](#getoutpost) - Gets information about the specified Outpost.
* [getOutpostInstanceTypes](#getoutpostinstancetypes) - Gets the instance types for the specified Outpost.
* [getSite](#getsite) - Gets information about the specified Outpost site.
* [getSiteAddress](#getsiteaddress) -  Gets the site address of the specified site. 
* [listAssets](#listassets) - <p>Lists the hardware assets for the specified Outpost.</p> <p>Use filters to return specific results. If you specify multiple filters, the results include only the resources that match all of the specified filters. For a filter where you can specify multiple values, the results include items that match any of the values that you specify for the filter.</p>
* [listCatalogItems](#listcatalogitems) - <p>Lists the items in the catalog.</p> <p>Use filters to return specific results. If you specify multiple filters, the results include only the resources that match all of the specified filters. For a filter where you can specify multiple values, the results include items that match any of the values that you specify for the filter.</p>
* [listOrders](#listorders) - Lists the Outpost orders for your Amazon Web Services account.
* [listOutposts](#listoutposts) - <p>Lists the Outposts for your Amazon Web Services account.</p> <p>Use filters to return specific results. If you specify multiple filters, the results include only the resources that match all of the specified filters. For a filter where you can specify multiple values, the results include items that match any of the values that you specify for the filter.</p>
* [listSites](#listsites) - <p>Lists the Outpost sites for your Amazon Web Services account. Use filters to return specific results.</p> <p>Use filters to return specific results. If you specify multiple filters, the results include only the resources that match all of the specified filters. For a filter where you can specify multiple values, the results include items that match any of the values that you specify for the filter.</p>
* [listTagsForResource](#listtagsforresource) - Lists the tags for the specified resource.
* [startConnection](#startconnection) - <note> <p> Amazon Web Services uses this action to install Outpost servers.</p> </note> <p> Starts the connection required for Outpost server installation. </p> <p> Use CloudTrail to monitor this action or Amazon Web Services managed policy for Amazon Web Services Outposts to secure it. For more information, see <a href="https://docs.aws.amazon.com/outposts/latest/userguide/security-iam-awsmanpol.html"> Amazon Web Services managed policies for Amazon Web Services Outposts</a> and <a href="https://docs.aws.amazon.com/outposts/latest/userguide/logging-using-cloudtrail.html"> Logging Amazon Web Services Outposts API calls with Amazon Web Services CloudTrail</a> in the <i>Amazon Web Services Outposts User Guide</i>. </p>
* [tagResource](#tagresource) - Adds tags to the specified resource.
* [untagResource](#untagresource) - Removes tags from the specified resource.
* [updateOutpost](#updateoutpost) -  Updates an Outpost. 
* [updateSite](#updatesite) - Updates the specified site.
* [updateSiteAddress](#updatesiteaddress) - <p>Updates the address of the specified site.</p> <p>You can't update a site address if there is an order in progress. You must wait for the order to complete or cancel the order.</p> <p>You can update the operating address before you place an order at the site, or after all Outposts that belong to the site have been deactivated.</p>
* [updateSiteRackPhysicalProperties](#updatesiterackphysicalproperties) - <p>Update the physical and logistical details for a rack at a site. For more information about hardware requirements for racks, see <a href="https://docs.aws.amazon.com/outposts/latest/userguide/outposts-requirements.html#checklist">Network readiness checklist</a> in the Amazon Web Services Outposts User Guide. </p> <p>To update a rack at a site with an order of <code>IN_PROGRESS</code>, you must wait for the order to complete or cancel the order.</p>

## cancelOrder

Cancels the specified order for an Outpost.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CancelOrderRequest;
import org.openapis.openapi.models.operations.CancelOrderResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("error") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            CancelOrderRequest req = new CancelOrderRequest("deserunt") {{
                xAmzAlgorithm = "suscipit";
                xAmzContentSha256 = "iure";
                xAmzCredential = "magnam";
                xAmzDate = "debitis";
                xAmzSecurityToken = "ipsa";
                xAmzSignature = "delectus";
                xAmzSignedHeaders = "tempora";
            }};            

            CancelOrderResponse res = sdk.sdk.cancelOrder(req);

            if (res.cancelOrderOutput != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## createOrder

Creates an order for an Outpost.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateOrderRequest;
import org.openapis.openapi.models.operations.CreateOrderRequestBody;
import org.openapis.openapi.models.operations.CreateOrderRequestBodyPaymentOptionEnum;
import org.openapis.openapi.models.operations.CreateOrderRequestBodyPaymentTermEnum;
import org.openapis.openapi.models.operations.CreateOrderResponse;
import org.openapis.openapi.models.shared.LineItemRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("suscipit") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            CreateOrderRequest req = new CreateOrderRequest(                new CreateOrderRequestBody(                new org.openapis.openapi.models.shared.LineItemRequest[]{{
                                                add(new LineItemRequest() {{
                                                    catalogItemId = "minus";
                                                    quantity = 812169L;
                                                }}),
                                                add(new LineItemRequest() {{
                                                    catalogItemId = "voluptatum";
                                                    quantity = 479977L;
                                                }}),
                                            }}, "excepturi", CreateOrderRequestBodyPaymentOptionEnum.NO_UPFRONT) {{
                                paymentTerm = CreateOrderRequestBodyPaymentTermEnum.ONE_YEAR;
                            }};) {{
                xAmzAlgorithm = "temporibus";
                xAmzContentSha256 = "ab";
                xAmzCredential = "quis";
                xAmzDate = "veritatis";
                xAmzSecurityToken = "deserunt";
                xAmzSignature = "perferendis";
                xAmzSignedHeaders = "ipsam";
            }};            

            CreateOrderResponse res = sdk.sdk.createOrder(req);

            if (res.createOrderOutput != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## createOutpost

<p>Creates an Outpost.</p> <p>You can specify either an Availability one or an AZ ID.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateOutpostRequest;
import org.openapis.openapi.models.operations.CreateOutpostRequestBody;
import org.openapis.openapi.models.operations.CreateOutpostRequestBodySupportedHardwareTypeEnum;
import org.openapis.openapi.models.operations.CreateOutpostResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("repellendus") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            CreateOutpostRequest req = new CreateOutpostRequest(                new CreateOutpostRequestBody("sapiente", "quo") {{
                                availabilityZone = "odit";
                                availabilityZoneId = "at";
                                description = "at";
                                supportedHardwareType = CreateOutpostRequestBodySupportedHardwareTypeEnum.SERVER;
                                tags = new java.util.HashMap<String, String>() {{
                                    put("quod", "quod");
                                    put("esse", "totam");
                                }};
                            }};) {{
                xAmzAlgorithm = "porro";
                xAmzContentSha256 = "dolorum";
                xAmzCredential = "dicta";
                xAmzDate = "nam";
                xAmzSecurityToken = "officia";
                xAmzSignature = "occaecati";
                xAmzSignedHeaders = "fugit";
            }};            

            CreateOutpostResponse res = sdk.sdk.createOutpost(req);

            if (res.createOutpostOutput != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## createSite

 Creates a site for an Outpost. 

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateSiteRequest;
import org.openapis.openapi.models.operations.CreateSiteRequestBody;
import org.openapis.openapi.models.operations.CreateSiteRequestBodyOperatingAddress;
import org.openapis.openapi.models.operations.CreateSiteRequestBodyRackPhysicalProperties;
import org.openapis.openapi.models.operations.CreateSiteRequestBodyShippingAddress;
import org.openapis.openapi.models.operations.CreateSiteResponse;
import org.openapis.openapi.models.shared.FiberOpticCableTypeEnum;
import org.openapis.openapi.models.shared.MaximumSupportedWeightLbsEnum;
import org.openapis.openapi.models.shared.OpticalStandardEnum;
import org.openapis.openapi.models.shared.PowerConnectorEnum;
import org.openapis.openapi.models.shared.PowerDrawKvaEnum;
import org.openapis.openapi.models.shared.PowerFeedDropEnum;
import org.openapis.openapi.models.shared.PowerPhaseEnum;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.UplinkCountEnum;
import org.openapis.openapi.models.shared.UplinkGbpsEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("deleniti") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            CreateSiteRequest req = new CreateSiteRequest(                new CreateSiteRequestBody("hic") {{
                                description = "optio";
                                notes = "totam";
                                operatingAddress = new CreateSiteRequestBodyOperatingAddress() {{
                                    addressLine1 = "beatae";
                                    addressLine2 = "commodi";
                                    addressLine3 = "molestiae";
                                    city = "East Ona";
                                    contactName = "cum";
                                    contactPhoneNumber = "esse";
                                    countryCode = "CX";
                                    districtOrCounty = "excepturi";
                                    municipality = "aspernatur";
                                    postalCode = "36162";
                                    stateOrRegion = "natus";
                                }};;
                                rackPhysicalProperties = new CreateSiteRequestBodyRackPhysicalProperties() {{
                                    fiberOpticCableType = FiberOpticCableTypeEnum.SINGLE_MODE;
                                    maximumSupportedWeightLbs = MaximumSupportedWeightLbsEnum.MAX2000_LBS;
                                    opticalStandard = OpticalStandardEnum.OPTIC1000_BASE_LX;
                                    powerConnector = PowerConnectorEnum.AH530_P7_W;
                                    powerDrawKva = PowerDrawKvaEnum.POWER10_KVA;
                                    powerFeedDrop = PowerFeedDropEnum.ABOVE_RACK;
                                    powerPhase = PowerPhaseEnum.THREE_PHASE;
                                    uplinkCount = UplinkCountEnum.UPLINK_COUNT5;
                                    uplinkGbps = UplinkGbpsEnum.UPLINK100_G;
                                }};;
                                shippingAddress = new CreateSiteRequestBodyShippingAddress() {{
                                    addressLine1 = "quidem";
                                    addressLine2 = "architecto";
                                    addressLine3 = "ipsa";
                                    city = "Parma";
                                    contactName = "mollitia";
                                    contactPhoneNumber = "laborum";
                                    countryCode = "CH";
                                    districtOrCounty = "dolorem";
                                    municipality = "corporis";
                                    postalCode = "73633";
                                    stateOrRegion = "excepturi";
                                }};;
                                tags = new java.util.HashMap<String, String>() {{
                                    put("iure", "culpa");
                                }};
                            }};) {{
                xAmzAlgorithm = "doloribus";
                xAmzContentSha256 = "sapiente";
                xAmzCredential = "architecto";
                xAmzDate = "mollitia";
                xAmzSecurityToken = "dolorem";
                xAmzSignature = "culpa";
                xAmzSignedHeaders = "consequuntur";
            }};            

            CreateSiteResponse res = sdk.sdk.createSite(req);

            if (res.createSiteOutput != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## deleteOutpost

Deletes the specified Outpost.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteOutpostRequest;
import org.openapis.openapi.models.operations.DeleteOutpostResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("repellat") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DeleteOutpostRequest req = new DeleteOutpostRequest("mollitia") {{
                xAmzAlgorithm = "occaecati";
                xAmzContentSha256 = "numquam";
                xAmzCredential = "commodi";
                xAmzDate = "quam";
                xAmzSecurityToken = "molestiae";
                xAmzSignature = "velit";
                xAmzSignedHeaders = "error";
            }};            

            DeleteOutpostResponse res = sdk.sdk.deleteOutpost(req);

            if (res.deleteOutpostOutput != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## deleteSite

Deletes the specified site.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteSiteRequest;
import org.openapis.openapi.models.operations.DeleteSiteResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("quia") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DeleteSiteRequest req = new DeleteSiteRequest("quis") {{
                xAmzAlgorithm = "vitae";
                xAmzContentSha256 = "laborum";
                xAmzCredential = "animi";
                xAmzDate = "enim";
                xAmzSecurityToken = "odit";
                xAmzSignature = "quo";
                xAmzSignedHeaders = "sequi";
            }};            

            DeleteSiteResponse res = sdk.sdk.deleteSite(req);

            if (res.deleteSiteOutput != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getCatalogItem

Gets information about the specified catalog item.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetCatalogItemRequest;
import org.openapis.openapi.models.operations.GetCatalogItemResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("tenetur") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetCatalogItemRequest req = new GetCatalogItemRequest("ipsam") {{
                xAmzAlgorithm = "id";
                xAmzContentSha256 = "possimus";
                xAmzCredential = "aut";
                xAmzDate = "quasi";
                xAmzSecurityToken = "error";
                xAmzSignature = "temporibus";
                xAmzSignedHeaders = "laborum";
            }};            

            GetCatalogItemResponse res = sdk.sdk.getCatalogItem(req);

            if (res.getCatalogItemOutput != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getConnection

<note> <p> Amazon Web Services uses this action to install Outpost servers.</p> </note> <p> Gets information about the specified connection. </p> <p> Use CloudTrail to monitor this action or Amazon Web Services managed policy for Amazon Web Services Outposts to secure it. For more information, see <a href="https://docs.aws.amazon.com/outposts/latest/userguide/security-iam-awsmanpol.html"> Amazon Web Services managed policies for Amazon Web Services Outposts</a> and <a href="https://docs.aws.amazon.com/outposts/latest/userguide/logging-using-cloudtrail.html"> Logging Amazon Web Services Outposts API calls with Amazon Web Services CloudTrail</a> in the <i>Amazon Web Services Outposts User Guide</i>. </p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetConnectionRequest;
import org.openapis.openapi.models.operations.GetConnectionResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("quasi") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetConnectionRequest req = new GetConnectionRequest("reiciendis") {{
                xAmzAlgorithm = "voluptatibus";
                xAmzContentSha256 = "vero";
                xAmzCredential = "nihil";
                xAmzDate = "praesentium";
                xAmzSecurityToken = "voluptatibus";
                xAmzSignature = "ipsa";
                xAmzSignedHeaders = "omnis";
            }};            

            GetConnectionResponse res = sdk.sdk.getConnection(req);

            if (res.getConnectionResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getOrder

Gets information about the specified order.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetOrderRequest;
import org.openapis.openapi.models.operations.GetOrderResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("voluptate") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetOrderRequest req = new GetOrderRequest("cum") {{
                xAmzAlgorithm = "perferendis";
                xAmzContentSha256 = "doloremque";
                xAmzCredential = "reprehenderit";
                xAmzDate = "ut";
                xAmzSecurityToken = "maiores";
                xAmzSignature = "dicta";
                xAmzSignedHeaders = "corporis";
            }};            

            GetOrderResponse res = sdk.sdk.getOrder(req);

            if (res.getOrderOutput != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getOutpost

Gets information about the specified Outpost.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetOutpostRequest;
import org.openapis.openapi.models.operations.GetOutpostResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("dolore") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetOutpostRequest req = new GetOutpostRequest("iusto") {{
                xAmzAlgorithm = "dicta";
                xAmzContentSha256 = "harum";
                xAmzCredential = "enim";
                xAmzDate = "accusamus";
                xAmzSecurityToken = "commodi";
                xAmzSignature = "repudiandae";
                xAmzSignedHeaders = "quae";
            }};            

            GetOutpostResponse res = sdk.sdk.getOutpost(req);

            if (res.getOutpostOutput != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getOutpostInstanceTypes

Gets the instance types for the specified Outpost.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetOutpostInstanceTypesRequest;
import org.openapis.openapi.models.operations.GetOutpostInstanceTypesResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("ipsum") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetOutpostInstanceTypesRequest req = new GetOutpostInstanceTypesRequest("quidem") {{
                maxResults = 565189L;
                nextToken = "excepturi";
                xAmzAlgorithm = "pariatur";
                xAmzContentSha256 = "modi";
                xAmzCredential = "praesentium";
                xAmzDate = "rem";
                xAmzSecurityToken = "voluptates";
                xAmzSignature = "quasi";
                xAmzSignedHeaders = "repudiandae";
            }};            

            GetOutpostInstanceTypesResponse res = sdk.sdk.getOutpostInstanceTypes(req);

            if (res.getOutpostInstanceTypesOutput != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getSite

Gets information about the specified Outpost site.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetSiteRequest;
import org.openapis.openapi.models.operations.GetSiteResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("sint") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetSiteRequest req = new GetSiteRequest("veritatis") {{
                xAmzAlgorithm = "itaque";
                xAmzContentSha256 = "incidunt";
                xAmzCredential = "enim";
                xAmzDate = "consequatur";
                xAmzSecurityToken = "est";
                xAmzSignature = "quibusdam";
                xAmzSignedHeaders = "explicabo";
            }};            

            GetSiteResponse res = sdk.sdk.getSite(req);

            if (res.getSiteOutput != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getSiteAddress

 Gets the site address of the specified site. 

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetSiteAddressAddressTypeEnum;
import org.openapis.openapi.models.operations.GetSiteAddressRequest;
import org.openapis.openapi.models.operations.GetSiteAddressResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("deserunt") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetSiteAddressRequest req = new GetSiteAddressRequest(GetSiteAddressAddressTypeEnum.OPERATING_ADDRESS, "quibusdam") {{
                xAmzAlgorithm = "labore";
                xAmzContentSha256 = "modi";
                xAmzCredential = "qui";
                xAmzDate = "aliquid";
                xAmzSecurityToken = "cupiditate";
                xAmzSignature = "quos";
                xAmzSignedHeaders = "perferendis";
            }};            

            GetSiteAddressResponse res = sdk.sdk.getSiteAddress(req);

            if (res.getSiteAddressOutput != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listAssets

<p>Lists the hardware assets for the specified Outpost.</p> <p>Use filters to return specific results. If you specify multiple filters, the results include only the resources that match all of the specified filters. For a filter where you can specify multiple values, the results include items that match any of the values that you specify for the filter.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListAssetsRequest;
import org.openapis.openapi.models.operations.ListAssetsResponse;
import org.openapis.openapi.models.shared.AssetStateEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("magni") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            ListAssetsRequest req = new ListAssetsRequest("assumenda") {{
                hostIdFilter = new String[]{{
                    add("alias"),
                    add("fugit"),
                }};
                maxResults = 677817L;
                nextToken = "excepturi";
                statusFilter = new org.openapis.openapi.models.shared.AssetStateEnum[]{{
                    add(AssetStateEnum.RETIRING),
                    add(AssetStateEnum.RETIRING),
                }};
                xAmzAlgorithm = "labore";
                xAmzContentSha256 = "delectus";
                xAmzCredential = "eum";
                xAmzDate = "non";
                xAmzSecurityToken = "eligendi";
                xAmzSignature = "sint";
                xAmzSignedHeaders = "aliquid";
            }};            

            ListAssetsResponse res = sdk.sdk.listAssets(req);

            if (res.listAssetsOutput != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listCatalogItems

<p>Lists the items in the catalog.</p> <p>Use filters to return specific results. If you specify multiple filters, the results include only the resources that match all of the specified filters. For a filter where you can specify multiple values, the results include items that match any of the values that you specify for the filter.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListCatalogItemsRequest;
import org.openapis.openapi.models.operations.ListCatalogItemsResponse;
import org.openapis.openapi.models.shared.CatalogItemClassEnum;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.SupportedStorageEnumEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("provident") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            ListCatalogItemsRequest req = new ListCatalogItemsRequest() {{
                ec2FamilyFilter = new String[]{{
                    add("sint"),
                    add("officia"),
                    add("dolor"),
                    add("debitis"),
                }};
                itemClassFilter = new org.openapis.openapi.models.shared.CatalogItemClassEnum[]{{
                    add(CatalogItemClassEnum.SERVER),
                    add(CatalogItemClassEnum.RACK),
                    add(CatalogItemClassEnum.RACK),
                    add(CatalogItemClassEnum.SERVER),
                }};
                maxResults = 978571L;
                nextToken = "rerum";
                supportedStorageFilter = new org.openapis.openapi.models.shared.SupportedStorageEnumEnum[]{{
                    add(SupportedStorageEnumEnum.EBS),
                }};
                xAmzAlgorithm = "cumque";
                xAmzContentSha256 = "facere";
                xAmzCredential = "ea";
                xAmzDate = "aliquid";
                xAmzSecurityToken = "laborum";
                xAmzSignature = "accusamus";
                xAmzSignedHeaders = "non";
            }};            

            ListCatalogItemsResponse res = sdk.sdk.listCatalogItems(req);

            if (res.listCatalogItemsOutput != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listOrders

Lists the Outpost orders for your Amazon Web Services account.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListOrdersRequest;
import org.openapis.openapi.models.operations.ListOrdersResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("occaecati") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            ListOrdersRequest req = new ListOrdersRequest() {{
                maxResults = 313218L;
                nextToken = "accusamus";
                outpostIdentifierFilter = "delectus";
                xAmzAlgorithm = "quidem";
                xAmzContentSha256 = "provident";
                xAmzCredential = "nam";
                xAmzDate = "id";
                xAmzSecurityToken = "blanditiis";
                xAmzSignature = "deleniti";
                xAmzSignedHeaders = "sapiente";
            }};            

            ListOrdersResponse res = sdk.sdk.listOrders(req);

            if (res.listOrdersOutput != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listOutposts

<p>Lists the Outposts for your Amazon Web Services account.</p> <p>Use filters to return specific results. If you specify multiple filters, the results include only the resources that match all of the specified filters. For a filter where you can specify multiple values, the results include items that match any of the values that you specify for the filter.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListOutpostsRequest;
import org.openapis.openapi.models.operations.ListOutpostsResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("amet") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            ListOutpostsRequest req = new ListOutpostsRequest() {{
                availabilityZoneFilter = new String[]{{
                    add("nisi"),
                    add("vel"),
                    add("natus"),
                }};
                availabilityZoneIdFilter = new String[]{{
                    add("molestiae"),
                    add("perferendis"),
                    add("nihil"),
                }};
                lifeCycleStatusFilter = new String[]{{
                    add("distinctio"),
                    add("id"),
                }};
                maxResults = 287991L;
                nextToken = "labore";
                xAmzAlgorithm = "suscipit";
                xAmzContentSha256 = "natus";
                xAmzCredential = "nobis";
                xAmzDate = "eum";
                xAmzSecurityToken = "vero";
                xAmzSignature = "aspernatur";
                xAmzSignedHeaders = "architecto";
            }};            

            ListOutpostsResponse res = sdk.sdk.listOutposts(req);

            if (res.listOutpostsOutput != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listSites

<p>Lists the Outpost sites for your Amazon Web Services account. Use filters to return specific results.</p> <p>Use filters to return specific results. If you specify multiple filters, the results include only the resources that match all of the specified filters. For a filter where you can specify multiple values, the results include items that match any of the values that you specify for the filter.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListSitesRequest;
import org.openapis.openapi.models.operations.ListSitesResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("magnam") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            ListSitesRequest req = new ListSitesRequest() {{
                maxResults = 92373L;
                nextToken = "excepturi";
                operatingAddressCityFilter = new String[]{{
                    add("provident"),
                    add("quos"),
                }};
                operatingAddressCountryCodeFilter = new String[]{{
                    add("accusantium"),
                    add("mollitia"),
                    add("reiciendis"),
                }};
                operatingAddressStateOrRegionFilter = new String[]{{
                    add("ad"),
                    add("eum"),
                    add("dolor"),
                }};
                xAmzAlgorithm = "necessitatibus";
                xAmzContentSha256 = "odit";
                xAmzCredential = "nemo";
                xAmzDate = "quasi";
                xAmzSecurityToken = "iure";
                xAmzSignature = "doloribus";
                xAmzSignedHeaders = "debitis";
            }};            

            ListSitesResponse res = sdk.sdk.listSites(req);

            if (res.listSitesOutput != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listTagsForResource

Lists the tags for the specified resource.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListTagsForResourceRequest;
import org.openapis.openapi.models.operations.ListTagsForResourceResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("eius") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            ListTagsForResourceRequest req = new ListTagsForResourceRequest("maxime") {{
                xAmzAlgorithm = "deleniti";
                xAmzContentSha256 = "facilis";
                xAmzCredential = "in";
                xAmzDate = "architecto";
                xAmzSecurityToken = "architecto";
                xAmzSignature = "repudiandae";
                xAmzSignedHeaders = "ullam";
            }};            

            ListTagsForResourceResponse res = sdk.sdk.listTagsForResource(req);

            if (res.listTagsForResourceResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## startConnection

<note> <p> Amazon Web Services uses this action to install Outpost servers.</p> </note> <p> Starts the connection required for Outpost server installation. </p> <p> Use CloudTrail to monitor this action or Amazon Web Services managed policy for Amazon Web Services Outposts to secure it. For more information, see <a href="https://docs.aws.amazon.com/outposts/latest/userguide/security-iam-awsmanpol.html"> Amazon Web Services managed policies for Amazon Web Services Outposts</a> and <a href="https://docs.aws.amazon.com/outposts/latest/userguide/logging-using-cloudtrail.html"> Logging Amazon Web Services Outposts API calls with Amazon Web Services CloudTrail</a> in the <i>Amazon Web Services Outposts User Guide</i>. </p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.StartConnectionRequest;
import org.openapis.openapi.models.operations.StartConnectionRequestBody;
import org.openapis.openapi.models.operations.StartConnectionResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("expedita") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            StartConnectionRequest req = new StartConnectionRequest(                new StartConnectionRequestBody("nihil", "repellat", "quibusdam", 149448L);) {{
                xAmzAlgorithm = "saepe";
                xAmzContentSha256 = "pariatur";
                xAmzCredential = "accusantium";
                xAmzDate = "consequuntur";
                xAmzSecurityToken = "praesentium";
                xAmzSignature = "natus";
                xAmzSignedHeaders = "magni";
            }};            

            StartConnectionResponse res = sdk.sdk.startConnection(req);

            if (res.startConnectionResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## tagResource

Adds tags to the specified resource.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.TagResourceRequest;
import org.openapis.openapi.models.operations.TagResourceRequestBody;
import org.openapis.openapi.models.operations.TagResourceResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("sunt") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            TagResourceRequest req = new TagResourceRequest(                new TagResourceRequestBody(                new java.util.HashMap<String, String>() {{
                                                put("illum", "pariatur");
                                                put("maxime", "ea");
                                                put("excepturi", "odit");
                                                put("ea", "accusantium");
                                            }});, "ab") {{
                xAmzAlgorithm = "maiores";
                xAmzContentSha256 = "quidem";
                xAmzCredential = "ipsam";
                xAmzDate = "voluptate";
                xAmzSecurityToken = "autem";
                xAmzSignature = "nam";
                xAmzSignedHeaders = "eaque";
            }};            

            TagResourceResponse res = sdk.sdk.tagResource(req);

            if (res.tagResourceResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## untagResource

Removes tags from the specified resource.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UntagResourceRequest;
import org.openapis.openapi.models.operations.UntagResourceResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("pariatur") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            UntagResourceRequest req = new UntagResourceRequest("nemo",                 new String[]{{
                                add("perferendis"),
                                add("fugiat"),
                                add("amet"),
                                add("aut"),
                            }}) {{
                xAmzAlgorithm = "cumque";
                xAmzContentSha256 = "corporis";
                xAmzCredential = "hic";
                xAmzDate = "libero";
                xAmzSecurityToken = "nobis";
                xAmzSignature = "dolores";
                xAmzSignedHeaders = "quis";
            }};            

            UntagResourceResponse res = sdk.sdk.untagResource(req);

            if (res.untagResourceResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## updateOutpost

 Updates an Outpost. 

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdateOutpostRequest;
import org.openapis.openapi.models.operations.UpdateOutpostRequestBody;
import org.openapis.openapi.models.operations.UpdateOutpostRequestBodySupportedHardwareTypeEnum;
import org.openapis.openapi.models.operations.UpdateOutpostResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("totam") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            UpdateOutpostRequest req = new UpdateOutpostRequest("dignissimos",                 new UpdateOutpostRequestBody() {{
                                description = "eaque";
                                name = "Mr. Robin Daugherty";
                                supportedHardwareType = UpdateOutpostRequestBodySupportedHardwareTypeEnum.RACK;
                            }};) {{
                xAmzAlgorithm = "dolor";
                xAmzContentSha256 = "vero";
                xAmzCredential = "nostrum";
                xAmzDate = "hic";
                xAmzSecurityToken = "recusandae";
                xAmzSignature = "omnis";
                xAmzSignedHeaders = "facilis";
            }};            

            UpdateOutpostResponse res = sdk.sdk.updateOutpost(req);

            if (res.updateOutpostOutput != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## updateSite

Updates the specified site.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdateSiteRequest;
import org.openapis.openapi.models.operations.UpdateSiteRequestBody;
import org.openapis.openapi.models.operations.UpdateSiteResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("perspiciatis") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            UpdateSiteRequest req = new UpdateSiteRequest(                new UpdateSiteRequestBody() {{
                                description = "voluptatem";
                                name = "Bobby Kutch V";
                                notes = "rerum";
                            }};, "adipisci") {{
                xAmzAlgorithm = "asperiores";
                xAmzContentSha256 = "earum";
                xAmzCredential = "modi";
                xAmzDate = "iste";
                xAmzSecurityToken = "dolorum";
                xAmzSignature = "deleniti";
                xAmzSignedHeaders = "pariatur";
            }};            

            UpdateSiteResponse res = sdk.sdk.updateSite(req);

            if (res.updateSiteOutput != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## updateSiteAddress

<p>Updates the address of the specified site.</p> <p>You can't update a site address if there is an order in progress. You must wait for the order to complete or cancel the order.</p> <p>You can update the operating address before you place an order at the site, or after all Outposts that belong to the site have been deactivated.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdateSiteAddressRequest;
import org.openapis.openapi.models.operations.UpdateSiteAddressRequestBody;
import org.openapis.openapi.models.operations.UpdateSiteAddressRequestBodyAddress;
import org.openapis.openapi.models.operations.UpdateSiteAddressRequestBodyAddressTypeEnum;
import org.openapis.openapi.models.operations.UpdateSiteAddressResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("provident") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            UpdateSiteAddressRequest req = new UpdateSiteAddressRequest(                new UpdateSiteAddressRequestBody(                new UpdateSiteAddressRequestBodyAddress() {{
                                                addressLine1 = "nobis";
                                                addressLine2 = "libero";
                                                addressLine3 = "delectus";
                                                city = "New Granville";
                                                contactName = "dolorem";
                                                contactPhoneNumber = "dolorem";
                                                countryCode = "CZ";
                                                districtOrCounty = "qui";
                                                municipality = "ipsum";
                                                postalCode = "57449-2620";
                                                stateOrRegion = "ipsa";
                                            }};, UpdateSiteAddressRequestBodyAddressTypeEnum.SHIPPING_ADDRESS);, "iure") {{
                xAmzAlgorithm = "odio";
                xAmzContentSha256 = "quaerat";
                xAmzCredential = "accusamus";
                xAmzDate = "quidem";
                xAmzSecurityToken = "voluptatibus";
                xAmzSignature = "voluptas";
                xAmzSignedHeaders = "natus";
            }};            

            UpdateSiteAddressResponse res = sdk.sdk.updateSiteAddress(req);

            if (res.updateSiteAddressOutput != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## updateSiteRackPhysicalProperties

<p>Update the physical and logistical details for a rack at a site. For more information about hardware requirements for racks, see <a href="https://docs.aws.amazon.com/outposts/latest/userguide/outposts-requirements.html#checklist">Network readiness checklist</a> in the Amazon Web Services Outposts User Guide. </p> <p>To update a rack at a site with an order of <code>IN_PROGRESS</code>, you must wait for the order to complete or cancel the order.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdateSiteRackPhysicalPropertiesRequest;
import org.openapis.openapi.models.operations.UpdateSiteRackPhysicalPropertiesRequestBody;
import org.openapis.openapi.models.operations.UpdateSiteRackPhysicalPropertiesRequestBodyFiberOpticCableTypeEnum;
import org.openapis.openapi.models.operations.UpdateSiteRackPhysicalPropertiesRequestBodyMaximumSupportedWeightLbsEnum;
import org.openapis.openapi.models.operations.UpdateSiteRackPhysicalPropertiesRequestBodyOpticalStandardEnum;
import org.openapis.openapi.models.operations.UpdateSiteRackPhysicalPropertiesRequestBodyPowerConnectorEnum;
import org.openapis.openapi.models.operations.UpdateSiteRackPhysicalPropertiesRequestBodyPowerDrawKvaEnum;
import org.openapis.openapi.models.operations.UpdateSiteRackPhysicalPropertiesRequestBodyPowerFeedDropEnum;
import org.openapis.openapi.models.operations.UpdateSiteRackPhysicalPropertiesRequestBodyPowerPhaseEnum;
import org.openapis.openapi.models.operations.UpdateSiteRackPhysicalPropertiesRequestBodyUplinkCountEnum;
import org.openapis.openapi.models.operations.UpdateSiteRackPhysicalPropertiesRequestBodyUplinkGbpsEnum;
import org.openapis.openapi.models.operations.UpdateSiteRackPhysicalPropertiesResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("eos") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            UpdateSiteRackPhysicalPropertiesRequest req = new UpdateSiteRackPhysicalPropertiesRequest(                new UpdateSiteRackPhysicalPropertiesRequestBody() {{
                                fiberOpticCableType = UpdateSiteRackPhysicalPropertiesRequestBodyFiberOpticCableTypeEnum.MULTI_MODE;
                                maximumSupportedWeightLbs = UpdateSiteRackPhysicalPropertiesRequestBodyMaximumSupportedWeightLbsEnum.NO_LIMIT;
                                opticalStandard = UpdateSiteRackPhysicalPropertiesRequestBodyOpticalStandardEnum.OPTIC1000_BASE_LX;
                                powerConnector = UpdateSiteRackPhysicalPropertiesRequestBodyPowerConnectorEnum.L630_P;
                                powerDrawKva = UpdateSiteRackPhysicalPropertiesRequestBodyPowerDrawKvaEnum.POWER15_KVA;
                                powerFeedDrop = UpdateSiteRackPhysicalPropertiesRequestBodyPowerFeedDropEnum.BELOW_RACK;
                                powerPhase = UpdateSiteRackPhysicalPropertiesRequestBodyPowerPhaseEnum.SINGLE_PHASE;
                                uplinkCount = UpdateSiteRackPhysicalPropertiesRequestBodyUplinkCountEnum.UPLINK_COUNT5;
                                uplinkGbps = UpdateSiteRackPhysicalPropertiesRequestBodyUplinkGbpsEnum.UPLINK40_G;
                            }};, "deleniti") {{
                xAmzAlgorithm = "omnis";
                xAmzContentSha256 = "necessitatibus";
                xAmzCredential = "distinctio";
                xAmzDate = "asperiores";
                xAmzSecurityToken = "nihil";
                xAmzSignature = "ipsum";
                xAmzSignedHeaders = "voluptate";
            }};            

            UpdateSiteRackPhysicalPropertiesResponse res = sdk.sdk.updateSiteRackPhysicalProperties(req);

            if (res.updateSiteRackPhysicalPropertiesOutput != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
