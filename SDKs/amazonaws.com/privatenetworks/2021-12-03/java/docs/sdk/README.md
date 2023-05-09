# SDK

## Overview

Amazon Web Services Private 5G is a managed service that makes it easy to deploy, operate, and scale your own private mobile network at your on-premises location. Private 5G provides the pre-configured hardware and software for mobile networks, helps automate setup, and scales capacity on demand to support additional devices as needed.

Amazon Web Services documentation
<https://docs.aws.amazon.com/private-networks/>
### Available Operations

* [acknowledgeOrderReceipt](#acknowledgeorderreceipt) - Acknowledges that the specified network order was received.
* [activateDeviceIdentifier](#activatedeviceidentifier) - Activates the specified device identifier.
* [activateNetworkSite](#activatenetworksite) - Activates the specified network site.
* [configureAccessPoint](#configureaccesspoint) - <p>Configures the specified network resource. </p> <p> Use this action to specify the geographic position of the hardware. You must provide Certified Professional Installer (CPI) credentials in the request so that we can obtain spectrum grants. For more information, see <a href="https://docs.aws.amazon.com/private-networks/latest/userguide/radio-units.html">Radio units</a> in the <i>Amazon Web Services Private 5G User Guide</i>. </p>
* [createNetwork](#createnetwork) - Creates a network.
* [createNetworkSite](#createnetworksite) - Creates a network site.
* [deactivateDeviceIdentifier](#deactivatedeviceidentifier) - Deactivates the specified device identifier.
* [deleteNetwork](#deletenetwork) - Deletes the specified network. You must delete network sites before you delete the network. For more information, see <a href="https://docs.aws.amazon.com/private-networks/latest/APIReference/API_DeleteNetworkSite.html">DeleteNetworkSite</a> in the <i>API Reference for Amazon Web Services Private 5G</i>.
* [deleteNetworkSite](#deletenetworksite) - Deletes the specified network site. Return the hardware after you delete the network site. You are responsible for minimum charges. For more information, see <a href="https://docs.aws.amazon.com/private-networks/latest/userguide/hardware-maintenance.html">Hardware returns</a> in the <i>Amazon Web Services Private 5G User Guide</i>. 
* [getDeviceIdentifier](#getdeviceidentifier) - Gets the specified device identifier.
* [getNetwork](#getnetwork) - Gets the specified network.
* [getNetworkResource](#getnetworkresource) - Gets the specified network resource.
* [getNetworkSite](#getnetworksite) - Gets the specified network site.
* [getOrder](#getorder) - Gets the specified order.
* [listDeviceIdentifiers](#listdeviceidentifiers) - <p>Lists device identifiers. Add filters to your request to return a more specific list of results. Use filters to match the Amazon Resource Name (ARN) of an order, the status of device identifiers, or the ARN of the traffic group.</p> <p>If you specify multiple filters, filters are joined with an OR, and the request returns results that match all of the specified filters.</p>
* [listNetworkResources](#listnetworkresources) - <p>Lists network resources. Add filters to your request to return a more specific list of results. Use filters to match the Amazon Resource Name (ARN) of an order or the status of network resources.</p> <p>If you specify multiple filters, filters are joined with an OR, and the request returns results that match all of the specified filters.</p>
* [listNetworkSites](#listnetworksites) - Lists network sites. Add filters to your request to return a more specific list of results. Use filters to match the status of the network site.
* [listNetworks](#listnetworks) - Lists networks. Add filters to your request to return a more specific list of results. Use filters to match the status of the network.
* [listOrders](#listorders) - <p>Lists orders. Add filters to your request to return a more specific list of results. Use filters to match the Amazon Resource Name (ARN) of the network site or the status of the order.</p> <p>If you specify multiple filters, filters are joined with an OR, and the request returns results that match all of the specified filters.</p>
* [listTagsForResource](#listtagsforresource) - Lists the tags for the specified resource.
* [ping](#ping) - Checks the health of the service.
* [startNetworkResourceUpdate](#startnetworkresourceupdate) - <p>Starts an update of the specified network resource.</p> <p>After you submit a request to replace or return a network resource, the status of the network resource is <code>CREATING_SHIPPING_LABEL</code>. The shipping label is available when the status of the network resource is <code>PENDING_RETURN</code>. After the network resource is successfully returned, its status is <code>DELETED</code>. For more information, see <a href="https://docs.aws.amazon.com/private-networks/latest/userguide/radio-units.html#return-radio-unit">Return a radio unit</a>.</p>
* [tagResource](#tagresource) -  Adds tags to the specified resource. 
* [untagResource](#untagresource) - Removes tags from the specified resource.
* [updateNetworkSite](#updatenetworksite) - Updates the specified network site.
* [updateNetworkSitePlan](#updatenetworksiteplan) - Updates the specified network site plan.

## acknowledgeOrderReceipt

Acknowledges that the specified network order was received.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.AcknowledgeOrderReceiptRequest;
import org.openapis.openapi.models.operations.AcknowledgeOrderReceiptRequestBody;
import org.openapis.openapi.models.operations.AcknowledgeOrderReceiptResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("error") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            AcknowledgeOrderReceiptRequest req = new AcknowledgeOrderReceiptRequest(                new AcknowledgeOrderReceiptRequestBody("deserunt");) {{
                xAmzAlgorithm = "suscipit";
                xAmzContentSha256 = "iure";
                xAmzCredential = "magnam";
                xAmzDate = "debitis";
                xAmzSecurityToken = "ipsa";
                xAmzSignature = "delectus";
                xAmzSignedHeaders = "tempora";
            }};            

            AcknowledgeOrderReceiptResponse res = sdk.sdk.acknowledgeOrderReceipt(req);

            if (res.acknowledgeOrderReceiptResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## activateDeviceIdentifier

Activates the specified device identifier.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ActivateDeviceIdentifierRequest;
import org.openapis.openapi.models.operations.ActivateDeviceIdentifierRequestBody;
import org.openapis.openapi.models.operations.ActivateDeviceIdentifierResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("suscipit") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            ActivateDeviceIdentifierRequest req = new ActivateDeviceIdentifierRequest(                new ActivateDeviceIdentifierRequestBody("molestiae") {{
                                clientToken = "minus";
                            }};) {{
                xAmzAlgorithm = "placeat";
                xAmzContentSha256 = "voluptatum";
                xAmzCredential = "iusto";
                xAmzDate = "excepturi";
                xAmzSecurityToken = "nisi";
                xAmzSignature = "recusandae";
                xAmzSignedHeaders = "temporibus";
            }};            

            ActivateDeviceIdentifierResponse res = sdk.sdk.activateDeviceIdentifier(req);

            if (res.activateDeviceIdentifierResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## activateNetworkSite

Activates the specified network site.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ActivateNetworkSiteRequest;
import org.openapis.openapi.models.operations.ActivateNetworkSiteRequestBody;
import org.openapis.openapi.models.operations.ActivateNetworkSiteRequestBodyShippingAddress;
import org.openapis.openapi.models.operations.ActivateNetworkSiteResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("ab") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            ActivateNetworkSiteRequest req = new ActivateNetworkSiteRequest(                new ActivateNetworkSiteRequestBody("quis",                 new ActivateNetworkSiteRequestBodyShippingAddress() {{
                                                city = "veritatis";
                                                company = "deserunt";
                                                country = "perferendis";
                                                name = "ipsam";
                                                phoneNumber = "repellendus";
                                                postalCode = "sapiente";
                                                stateOrProvince = "quo";
                                                street1 = "odit";
                                                street2 = "at";
                                                street3 = "at";
                                            }};) {{
                                clientToken = "maiores";
                            }};) {{
                xAmzAlgorithm = "molestiae";
                xAmzContentSha256 = "quod";
                xAmzCredential = "quod";
                xAmzDate = "esse";
                xAmzSecurityToken = "totam";
                xAmzSignature = "porro";
                xAmzSignedHeaders = "dolorum";
            }};            

            ActivateNetworkSiteResponse res = sdk.sdk.activateNetworkSite(req);

            if (res.activateNetworkSiteResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## configureAccessPoint

<p>Configures the specified network resource. </p> <p> Use this action to specify the geographic position of the hardware. You must provide Certified Professional Installer (CPI) credentials in the request so that we can obtain spectrum grants. For more information, see <a href="https://docs.aws.amazon.com/private-networks/latest/userguide/radio-units.html">Radio units</a> in the <i>Amazon Web Services Private 5G User Guide</i>. </p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ConfigureAccessPointRequest;
import org.openapis.openapi.models.operations.ConfigureAccessPointRequestBody;
import org.openapis.openapi.models.operations.ConfigureAccessPointRequestBodyPosition;
import org.openapis.openapi.models.operations.ConfigureAccessPointResponse;
import org.openapis.openapi.models.shared.ElevationReferenceEnum;
import org.openapis.openapi.models.shared.ElevationUnitEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("dicta") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            ConfigureAccessPointRequest req = new ConfigureAccessPointRequest(                new ConfigureAccessPointRequestBody("nam") {{
                                cpiSecretKey = "officia";
                                cpiUserId = "occaecati";
                                cpiUserPassword = "fugit";
                                cpiUsername = "deleniti";
                                position = new ConfigureAccessPointRequestBodyPosition() {{
                                    elevation = 9446.69;
                                    elevationReference = ElevationReferenceEnum.AMSL;
                                    elevationUnit = ElevationUnitEnum.FEET;
                                    latitude = 5218.48;
                                    longitude = 1059.07;
                                }};;
                            }};) {{
                xAmzAlgorithm = "commodi";
                xAmzContentSha256 = "molestiae";
                xAmzCredential = "modi";
                xAmzDate = "qui";
                xAmzSecurityToken = "impedit";
                xAmzSignature = "cum";
                xAmzSignedHeaders = "esse";
            }};            

            ConfigureAccessPointResponse res = sdk.sdk.configureAccessPoint(req);

            if (res.configureAccessPointResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## createNetwork

Creates a network.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateNetworkRequest;
import org.openapis.openapi.models.operations.CreateNetworkRequestBody;
import org.openapis.openapi.models.operations.CreateNetworkResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("ipsum") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            CreateNetworkRequest req = new CreateNetworkRequest(                new CreateNetworkRequestBody("excepturi") {{
                                clientToken = "aspernatur";
                                description = "perferendis";
                                tags = new java.util.HashMap<String, String>() {{
                                    put("natus", "sed");
                                    put("iste", "dolor");
                                }};
                            }};) {{
                xAmzAlgorithm = "natus";
                xAmzContentSha256 = "laboriosam";
                xAmzCredential = "hic";
                xAmzDate = "saepe";
                xAmzSecurityToken = "fuga";
                xAmzSignature = "in";
                xAmzSignedHeaders = "corporis";
            }};            

            CreateNetworkResponse res = sdk.sdk.createNetwork(req);

            if (res.createNetworkResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## createNetworkSite

Creates a network site.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateNetworkSiteRequest;
import org.openapis.openapi.models.operations.CreateNetworkSiteRequestBody;
import org.openapis.openapi.models.operations.CreateNetworkSiteRequestBodyPendingPlan;
import org.openapis.openapi.models.operations.CreateNetworkSiteResponse;
import org.openapis.openapi.models.shared.NameValuePair;
import org.openapis.openapi.models.shared.NetworkResourceDefinition;
import org.openapis.openapi.models.shared.NetworkResourceDefinitionTypeEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("iste") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            CreateNetworkSiteRequest req = new CreateNetworkSiteRequest(                new CreateNetworkSiteRequestBody("iure", "saepe") {{
                                availabilityZone = "quidem";
                                availabilityZoneId = "architecto";
                                clientToken = "ipsa";
                                description = "reiciendis";
                                pendingPlan = new CreateNetworkSiteRequestBodyPendingPlan() {{
                                    options = new org.openapis.openapi.models.shared.NameValuePair[]{{
                                        add(new NameValuePair("nobis") {{
                                            name = "Cameron Dach";
                                            value = "explicabo";
                                        }}),
                                        add(new NameValuePair("iure") {{
                                            name = "Guadalupe Hickle";
                                            value = "accusantium";
                                        }}),
                                        add(new NameValuePair("consequuntur") {{
                                            name = "Miss Aubrey Williamson";
                                            value = "culpa";
                                        }}),
                                    }};
                                    resourceDefinitions = new org.openapis.openapi.models.shared.NetworkResourceDefinition[]{{
                                        add(new NetworkResourceDefinition(837945L, NetworkResourceDefinitionTypeEnum.DEVICE_IDENTIFIER) {{
                                            count = 653108L;
                                            options = new org.openapis.openapi.models.shared.NameValuePair[]{{
                                                add(new NameValuePair("quia") {{
                                                    name = "Lucy Konopelski";
                                                    value = "error";
                                                }}),
                                                add(new NameValuePair("quo") {{
                                                    name = "Gloria Padberg";
                                                    value = "odit";
                                                }}),
                                                add(new NameValuePair("quasi") {{
                                                    name = "Mandy Hills";
                                                    value = "aut";
                                                }}),
                                            }};
                                            type = NetworkResourceDefinitionTypeEnum.DEVICE_IDENTIFIER;
                                        }}),
                                        add(new NetworkResourceDefinition(508969L, NetworkResourceDefinitionTypeEnum.DEVICE_IDENTIFIER) {{
                                            count = 96098L;
                                            options = new org.openapis.openapi.models.shared.NameValuePair[]{{
                                                add(new NameValuePair("omnis") {{
                                                    name = "Caleb Koss";
                                                    value = "ipsa";
                                                }}),
                                                add(new NameValuePair("dicta") {{
                                                    name = "Ms. Karla Aufderhar";
                                                    value = "maiores";
                                                }}),
                                                add(new NameValuePair("commodi") {{
                                                    name = "Miss Valerie Kshlerin";
                                                    value = "accusamus";
                                                }}),
                                                add(new NameValuePair("pariatur") {{
                                                    name = "Eric Emmerich";
                                                    value = "excepturi";
                                                }}),
                                            }};
                                            type = NetworkResourceDefinitionTypeEnum.RADIO_UNIT;
                                        }}),
                                        add(new NetworkResourceDefinition(842342L, NetworkResourceDefinitionTypeEnum.RADIO_UNIT) {{
                                            count = 916723L;
                                            options = new org.openapis.openapi.models.shared.NameValuePair[]{{
                                                add(new NameValuePair("consequatur") {{
                                                    name = "Kirk Boehm";
                                                    value = "enim";
                                                }}),
                                            }};
                                            type = NetworkResourceDefinitionTypeEnum.DEVICE_IDENTIFIER;
                                        }}),
                                        add(new NetworkResourceDefinition(576157L, NetworkResourceDefinitionTypeEnum.RADIO_UNIT) {{
                                            count = 647174L;
                                            options = new org.openapis.openapi.models.shared.NameValuePair[]{{
                                                add(new NameValuePair("quos") {{
                                                    name = "Francisco Gleason";
                                                    value = "cupiditate";
                                                }}),
                                                add(new NameValuePair("excepturi") {{
                                                    name = "Louise Simonis Sr.";
                                                    value = "dolorum";
                                                }}),
                                                add(new NameValuePair("non") {{
                                                    name = "Olivia Rice";
                                                    value = "eum";
                                                }}),
                                            }};
                                            type = NetworkResourceDefinitionTypeEnum.DEVICE_IDENTIFIER;
                                        }}),
                                    }};
                                }};;
                                tags = new java.util.HashMap<String, String>() {{
                                    put("necessitatibus", "sint");
                                    put("officia", "dolor");
                                    put("debitis", "a");
                                }};
                            }};) {{
                xAmzAlgorithm = "dolorum";
                xAmzContentSha256 = "in";
                xAmzCredential = "in";
                xAmzDate = "illum";
                xAmzSecurityToken = "maiores";
                xAmzSignature = "rerum";
                xAmzSignedHeaders = "dicta";
            }};            

            CreateNetworkSiteResponse res = sdk.sdk.createNetworkSite(req);

            if (res.createNetworkSiteResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## deactivateDeviceIdentifier

Deactivates the specified device identifier.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeactivateDeviceIdentifierRequest;
import org.openapis.openapi.models.operations.DeactivateDeviceIdentifierRequestBody;
import org.openapis.openapi.models.operations.DeactivateDeviceIdentifierResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("magnam") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DeactivateDeviceIdentifierRequest req = new DeactivateDeviceIdentifierRequest(                new DeactivateDeviceIdentifierRequestBody("cumque") {{
                                clientToken = "facere";
                            }};) {{
                xAmzAlgorithm = "ea";
                xAmzContentSha256 = "aliquid";
                xAmzCredential = "laborum";
                xAmzDate = "accusamus";
                xAmzSecurityToken = "non";
                xAmzSignature = "occaecati";
                xAmzSignedHeaders = "enim";
            }};            

            DeactivateDeviceIdentifierResponse res = sdk.sdk.deactivateDeviceIdentifier(req);

            if (res.deactivateDeviceIdentifierResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## deleteNetwork

Deletes the specified network. You must delete network sites before you delete the network. For more information, see <a href="https://docs.aws.amazon.com/private-networks/latest/APIReference/API_DeleteNetworkSite.html">DeleteNetworkSite</a> in the <i>API Reference for Amazon Web Services Private 5G</i>.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteNetworkRequest;
import org.openapis.openapi.models.operations.DeleteNetworkResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("accusamus") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DeleteNetworkRequest req = new DeleteNetworkRequest("delectus") {{
                xAmzAlgorithm = "quidem";
                xAmzContentSha256 = "provident";
                xAmzCredential = "nam";
                xAmzDate = "id";
                xAmzSecurityToken = "blanditiis";
                xAmzSignature = "deleniti";
                xAmzSignedHeaders = "sapiente";
                clientToken = "amet";
            }};            

            DeleteNetworkResponse res = sdk.sdk.deleteNetwork(req);

            if (res.deleteNetworkResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## deleteNetworkSite

Deletes the specified network site. Return the hardware after you delete the network site. You are responsible for minimum charges. For more information, see <a href="https://docs.aws.amazon.com/private-networks/latest/userguide/hardware-maintenance.html">Hardware returns</a> in the <i>Amazon Web Services Private 5G User Guide</i>. 

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteNetworkSiteRequest;
import org.openapis.openapi.models.operations.DeleteNetworkSiteResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("deserunt") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DeleteNetworkSiteRequest req = new DeleteNetworkSiteRequest("nisi") {{
                xAmzAlgorithm = "vel";
                xAmzContentSha256 = "natus";
                xAmzCredential = "omnis";
                xAmzDate = "molestiae";
                xAmzSecurityToken = "perferendis";
                xAmzSignature = "nihil";
                xAmzSignedHeaders = "magnam";
                clientToken = "distinctio";
            }};            

            DeleteNetworkSiteResponse res = sdk.sdk.deleteNetworkSite(req);

            if (res.deleteNetworkSiteResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getDeviceIdentifier

Gets the specified device identifier.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetDeviceIdentifierRequest;
import org.openapis.openapi.models.operations.GetDeviceIdentifierResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("id") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetDeviceIdentifierRequest req = new GetDeviceIdentifierRequest("labore") {{
                xAmzAlgorithm = "labore";
                xAmzContentSha256 = "suscipit";
                xAmzCredential = "natus";
                xAmzDate = "nobis";
                xAmzSecurityToken = "eum";
                xAmzSignature = "vero";
                xAmzSignedHeaders = "aspernatur";
            }};            

            GetDeviceIdentifierResponse res = sdk.sdk.getDeviceIdentifier(req);

            if (res.getDeviceIdentifierResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getNetwork

Gets the specified network.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetNetworkRequest;
import org.openapis.openapi.models.operations.GetNetworkResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("architecto") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetNetworkRequest req = new GetNetworkRequest("magnam") {{
                xAmzAlgorithm = "et";
                xAmzContentSha256 = "excepturi";
                xAmzCredential = "ullam";
                xAmzDate = "provident";
                xAmzSecurityToken = "quos";
                xAmzSignature = "sint";
                xAmzSignedHeaders = "accusantium";
            }};            

            GetNetworkResponse res = sdk.sdk.getNetwork(req);

            if (res.getNetworkResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getNetworkResource

Gets the specified network resource.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetNetworkResourceRequest;
import org.openapis.openapi.models.operations.GetNetworkResourceResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("mollitia") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetNetworkResourceRequest req = new GetNetworkResourceRequest("reiciendis") {{
                xAmzAlgorithm = "mollitia";
                xAmzContentSha256 = "ad";
                xAmzCredential = "eum";
                xAmzDate = "dolor";
                xAmzSecurityToken = "necessitatibus";
                xAmzSignature = "odit";
                xAmzSignedHeaders = "nemo";
            }};            

            GetNetworkResourceResponse res = sdk.sdk.getNetworkResource(req);

            if (res.getNetworkResourceResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getNetworkSite

Gets the specified network site.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetNetworkSiteRequest;
import org.openapis.openapi.models.operations.GetNetworkSiteResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("quasi") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetNetworkSiteRequest req = new GetNetworkSiteRequest("iure") {{
                xAmzAlgorithm = "doloribus";
                xAmzContentSha256 = "debitis";
                xAmzCredential = "eius";
                xAmzDate = "maxime";
                xAmzSecurityToken = "deleniti";
                xAmzSignature = "facilis";
                xAmzSignedHeaders = "in";
            }};            

            GetNetworkSiteResponse res = sdk.sdk.getNetworkSite(req);

            if (res.getNetworkSiteResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getOrder

Gets the specified order.

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
                .setSecurity(new Security("architecto") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetOrderRequest req = new GetOrderRequest("architecto") {{
                xAmzAlgorithm = "repudiandae";
                xAmzContentSha256 = "ullam";
                xAmzCredential = "expedita";
                xAmzDate = "nihil";
                xAmzSecurityToken = "repellat";
                xAmzSignature = "quibusdam";
                xAmzSignedHeaders = "sed";
            }};            

            GetOrderResponse res = sdk.sdk.getOrder(req);

            if (res.getOrderResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listDeviceIdentifiers

<p>Lists device identifiers. Add filters to your request to return a more specific list of results. Use filters to match the Amazon Resource Name (ARN) of an order, the status of device identifiers, or the ARN of the traffic group.</p> <p>If you specify multiple filters, filters are joined with an OR, and the request returns results that match all of the specified filters.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListDeviceIdentifiersRequest;
import org.openapis.openapi.models.operations.ListDeviceIdentifiersRequestBody;
import org.openapis.openapi.models.operations.ListDeviceIdentifiersResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("saepe") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            ListDeviceIdentifiersRequest req = new ListDeviceIdentifiersRequest(                new ListDeviceIdentifiersRequestBody("pariatur") {{
                                filters = new java.util.HashMap<String, String[]>() {{
                                    put("consequuntur", new String[]{{
                                        add("natus"),
                                        add("magni"),
                                        add("sunt"),
                                    }});
                                }};
                                maxResults = 779051L;
                                startToken = "illum";
                            }};) {{
                xAmzAlgorithm = "pariatur";
                xAmzContentSha256 = "maxime";
                xAmzCredential = "ea";
                xAmzDate = "excepturi";
                xAmzSecurityToken = "odit";
                xAmzSignature = "ea";
                xAmzSignedHeaders = "accusantium";
                maxResults = "ab";
                startToken = "maiores";
            }};            

            ListDeviceIdentifiersResponse res = sdk.sdk.listDeviceIdentifiers(req);

            if (res.listDeviceIdentifiersResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listNetworkResources

<p>Lists network resources. Add filters to your request to return a more specific list of results. Use filters to match the Amazon Resource Name (ARN) of an order or the status of network resources.</p> <p>If you specify multiple filters, filters are joined with an OR, and the request returns results that match all of the specified filters.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListNetworkResourcesRequest;
import org.openapis.openapi.models.operations.ListNetworkResourcesRequestBody;
import org.openapis.openapi.models.operations.ListNetworkResourcesResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("quidem") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            ListNetworkResourcesRequest req = new ListNetworkResourcesRequest(                new ListNetworkResourcesRequestBody("ipsam") {{
                                filters = new java.util.HashMap<String, String[]>() {{
                                    put("autem", new String[]{{
                                        add("eaque"),
                                        add("pariatur"),
                                        add("nemo"),
                                    }});
                                    put("voluptatibus", new String[]{{
                                        add("fugiat"),
                                    }});
                                }};
                                maxResults = 230742L;
                                startToken = "aut";
                            }};) {{
                xAmzAlgorithm = "cumque";
                xAmzContentSha256 = "corporis";
                xAmzCredential = "hic";
                xAmzDate = "libero";
                xAmzSecurityToken = "nobis";
                xAmzSignature = "dolores";
                xAmzSignedHeaders = "quis";
                maxResults = "totam";
                startToken = "dignissimos";
            }};            

            ListNetworkResourcesResponse res = sdk.sdk.listNetworkResources(req);

            if (res.listNetworkResourcesResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listNetworkSites

Lists network sites. Add filters to your request to return a more specific list of results. Use filters to match the status of the network site.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListNetworkSitesRequest;
import org.openapis.openapi.models.operations.ListNetworkSitesRequestBody;
import org.openapis.openapi.models.operations.ListNetworkSitesResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("eaque") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            ListNetworkSitesRequest req = new ListNetworkSitesRequest(                new ListNetworkSitesRequestBody("quis") {{
                                filters = new java.util.HashMap<String, String[]>() {{
                                    put("eos", new String[]{{
                                        add("dolores"),
                                    }});
                                }};
                                maxResults = 793698L;
                                startToken = "quam";
                            }};) {{
                xAmzAlgorithm = "dolor";
                xAmzContentSha256 = "vero";
                xAmzCredential = "nostrum";
                xAmzDate = "hic";
                xAmzSecurityToken = "recusandae";
                xAmzSignature = "omnis";
                xAmzSignedHeaders = "facilis";
                maxResults = "perspiciatis";
                startToken = "voluptatem";
            }};            

            ListNetworkSitesResponse res = sdk.sdk.listNetworkSites(req);

            if (res.listNetworkSitesResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listNetworks

Lists networks. Add filters to your request to return a more specific list of results. Use filters to match the status of the network.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListNetworksRequest;
import org.openapis.openapi.models.operations.ListNetworksRequestBody;
import org.openapis.openapi.models.operations.ListNetworksResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("porro") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            ListNetworksRequest req = new ListNetworksRequest(                new ListNetworksRequestBody() {{
                                filters = new java.util.HashMap<String, String[]>() {{
                                    put("blanditiis", new String[]{{
                                        add("eaque"),
                                        add("occaecati"),
                                        add("rerum"),
                                    }});
                                }};
                                maxResults = 237893L;
                                startToken = "asperiores";
                            }};) {{
                xAmzAlgorithm = "earum";
                xAmzContentSha256 = "modi";
                xAmzCredential = "iste";
                xAmzDate = "dolorum";
                xAmzSecurityToken = "deleniti";
                xAmzSignature = "pariatur";
                xAmzSignedHeaders = "provident";
                maxResults = "nobis";
                startToken = "libero";
            }};            

            ListNetworksResponse res = sdk.sdk.listNetworks(req);

            if (res.listNetworksResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listOrders

<p>Lists orders. Add filters to your request to return a more specific list of results. Use filters to match the Amazon Resource Name (ARN) of the network site or the status of the order.</p> <p>If you specify multiple filters, filters are joined with an OR, and the request returns results that match all of the specified filters.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListOrdersRequest;
import org.openapis.openapi.models.operations.ListOrdersRequestBody;
import org.openapis.openapi.models.operations.ListOrdersResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("delectus") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            ListOrdersRequest req = new ListOrdersRequest(                new ListOrdersRequestBody("quaerat") {{
                                filters = new java.util.HashMap<String, String[]>() {{
                                    put("aliquid", new String[]{{
                                        add("dolorem"),
                                    }});
                                    put("dolor", new String[]{{
                                        add("ipsum"),
                                    }});
                                    put("hic", new String[]{{
                                        add("cum"),
                                        add("voluptate"),
                                        add("dignissimos"),
                                    }});
                                }};
                                maxResults = 970237L;
                                startToken = "amet";
                            }};) {{
                xAmzAlgorithm = "dolorum";
                xAmzContentSha256 = "numquam";
                xAmzCredential = "veritatis";
                xAmzDate = "ipsa";
                xAmzSecurityToken = "ipsa";
                xAmzSignature = "iure";
                xAmzSignedHeaders = "odio";
                maxResults = "quaerat";
                startToken = "accusamus";
            }};            

            ListOrdersResponse res = sdk.sdk.listOrders(req);

            if (res.listOrdersResponse != null) {
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
                .setSecurity(new Security("quidem") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            ListTagsForResourceRequest req = new ListTagsForResourceRequest("voluptatibus") {{
                xAmzAlgorithm = "voluptas";
                xAmzContentSha256 = "natus";
                xAmzCredential = "eos";
                xAmzDate = "atque";
                xAmzSecurityToken = "sit";
                xAmzSignature = "fugiat";
                xAmzSignedHeaders = "ab";
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

## ping

Checks the health of the service.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PingRequest;
import org.openapis.openapi.models.operations.PingResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("soluta") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            PingRequest req = new PingRequest() {{
                xAmzAlgorithm = "dolorum";
                xAmzContentSha256 = "iusto";
                xAmzCredential = "voluptate";
                xAmzDate = "dolorum";
                xAmzSecurityToken = "deleniti";
                xAmzSignature = "omnis";
                xAmzSignedHeaders = "necessitatibus";
            }};            

            PingResponse res = sdk.sdk.ping(req);

            if (res.pingResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## startNetworkResourceUpdate

<p>Starts an update of the specified network resource.</p> <p>After you submit a request to replace or return a network resource, the status of the network resource is <code>CREATING_SHIPPING_LABEL</code>. The shipping label is available when the status of the network resource is <code>PENDING_RETURN</code>. After the network resource is successfully returned, its status is <code>DELETED</code>. For more information, see <a href="https://docs.aws.amazon.com/private-networks/latest/userguide/radio-units.html#return-radio-unit">Return a radio unit</a>.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.StartNetworkResourceUpdateRequest;
import org.openapis.openapi.models.operations.StartNetworkResourceUpdateRequestBody;
import org.openapis.openapi.models.operations.StartNetworkResourceUpdateRequestBodyShippingAddress;
import org.openapis.openapi.models.operations.StartNetworkResourceUpdateRequestBodyUpdateTypeEnum;
import org.openapis.openapi.models.operations.StartNetworkResourceUpdateResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("distinctio") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            StartNetworkResourceUpdateRequest req = new StartNetworkResourceUpdateRequest(                new StartNetworkResourceUpdateRequestBody("asperiores", StartNetworkResourceUpdateRequestBodyUpdateTypeEnum.REPLACE) {{
                                returnReason = "ipsum";
                                shippingAddress = new StartNetworkResourceUpdateRequestBodyShippingAddress() {{
                                    city = "voluptate";
                                    company = "id";
                                    country = "saepe";
                                    name = "eius";
                                    phoneNumber = "aspernatur";
                                    postalCode = "perferendis";
                                    stateOrProvince = "amet";
                                    street1 = "optio";
                                    street2 = "accusamus";
                                    street3 = "ad";
                                }};;
                            }};) {{
                xAmzAlgorithm = "saepe";
                xAmzContentSha256 = "suscipit";
                xAmzCredential = "deserunt";
                xAmzDate = "provident";
                xAmzSecurityToken = "minima";
                xAmzSignature = "repellendus";
                xAmzSignedHeaders = "totam";
            }};            

            StartNetworkResourceUpdateResponse res = sdk.sdk.startNetworkResourceUpdate(req);

            if (res.startNetworkResourceUpdateResponse != null) {
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
                .setSecurity(new Security("similique") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            TagResourceRequest req = new TagResourceRequest(                new TagResourceRequestBody(                new java.util.HashMap<String, String>() {{
                                                put("at", "quaerat");
                                            }});, "tempora") {{
                xAmzAlgorithm = "vel";
                xAmzContentSha256 = "quod";
                xAmzCredential = "officiis";
                xAmzDate = "qui";
                xAmzSecurityToken = "dolorum";
                xAmzSignature = "a";
                xAmzSignedHeaders = "esse";
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
                .setSecurity(new Security("harum") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            UntagResourceRequest req = new UntagResourceRequest("iusto",                 new String[]{{
                                add("quisquam"),
                            }}) {{
                xAmzAlgorithm = "tenetur";
                xAmzContentSha256 = "amet";
                xAmzCredential = "tempore";
                xAmzDate = "accusamus";
                xAmzSecurityToken = "numquam";
                xAmzSignature = "enim";
                xAmzSignedHeaders = "dolorem";
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

## updateNetworkSite

Updates the specified network site.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdateNetworkSiteRequest;
import org.openapis.openapi.models.operations.UpdateNetworkSiteRequestBody;
import org.openapis.openapi.models.operations.UpdateNetworkSiteResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("sapiente") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            UpdateNetworkSiteRequest req = new UpdateNetworkSiteRequest(                new UpdateNetworkSiteRequestBody("totam") {{
                                clientToken = "nihil";
                                description = "sit";
                            }};) {{
                xAmzAlgorithm = "expedita";
                xAmzContentSha256 = "neque";
                xAmzCredential = "sed";
                xAmzDate = "vel";
                xAmzSecurityToken = "libero";
                xAmzSignature = "voluptas";
                xAmzSignedHeaders = "deserunt";
            }};            

            UpdateNetworkSiteResponse res = sdk.sdk.updateNetworkSite(req);

            if (res.updateNetworkSiteResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## updateNetworkSitePlan

Updates the specified network site plan.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdateNetworkSitePlanRequest;
import org.openapis.openapi.models.operations.UpdateNetworkSitePlanRequestBody;
import org.openapis.openapi.models.operations.UpdateNetworkSitePlanRequestBodyPendingPlan;
import org.openapis.openapi.models.operations.UpdateNetworkSitePlanResponse;
import org.openapis.openapi.models.shared.NameValuePair;
import org.openapis.openapi.models.shared.NetworkResourceDefinition;
import org.openapis.openapi.models.shared.NetworkResourceDefinitionTypeEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("quam") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            UpdateNetworkSitePlanRequest req = new UpdateNetworkSitePlanRequest(                new UpdateNetworkSitePlanRequestBody("ipsum",                 new UpdateNetworkSitePlanRequestBodyPendingPlan() {{
                                                options = new org.openapis.openapi.models.shared.NameValuePair[]{{
                                                    add(new NameValuePair("laborum") {{
                                                        name = "Shelly Schoen";
                                                        value = "dicta";
                                                    }}),
                                                    add(new NameValuePair("aliquid") {{
                                                        name = "Randall Cole";
                                                        value = "facilis";
                                                    }}),
                                                }};
                                                resourceDefinitions = new org.openapis.openapi.models.shared.NetworkResourceDefinition[]{{
                                                    add(new NetworkResourceDefinition(63038L, NetworkResourceDefinitionTypeEnum.RADIO_UNIT) {{
                                                        count = 565421L;
                                                        options = new org.openapis.openapi.models.shared.NameValuePair[]{{
                                                            add(new NameValuePair("ullam") {{
                                                                name = "Gladys Considine";
                                                                value = "sunt";
                                                            }}),
                                                            add(new NameValuePair("et") {{
                                                                name = "Terrell Bartell";
                                                                value = "nobis";
                                                            }}),
                                                            add(new NameValuePair("cupiditate") {{
                                                                name = "Dale Boehm";
                                                                value = "tempore";
                                                            }}),
                                                            add(new NameValuePair("dolorum") {{
                                                                name = "Dixie Durgan";
                                                                value = "adipisci";
                                                            }}),
                                                        }};
                                                        type = NetworkResourceDefinitionTypeEnum.RADIO_UNIT;
                                                    }}),
                                                    add(new NetworkResourceDefinition(630448L, NetworkResourceDefinitionTypeEnum.DEVICE_IDENTIFIER) {{
                                                        count = 555649L;
                                                        options = new org.openapis.openapi.models.shared.NameValuePair[]{{
                                                            add(new NameValuePair("facilis") {{
                                                                name = "Jodi Skiles";
                                                                value = "ut";
                                                            }}),
                                                            add(new NameValuePair("voluptatibus") {{
                                                                name = "Alan Bergnaum";
                                                                value = "occaecati";
                                                            }}),
                                                            add(new NameValuePair("voluptate") {{
                                                                name = "Ignacio Moen";
                                                                value = "delectus";
                                                            }}),
                                                            add(new NameValuePair("quod") {{
                                                                name = "Meghan Wiegand";
                                                                value = "distinctio";
                                                            }}),
                                                        }};
                                                        type = NetworkResourceDefinitionTypeEnum.RADIO_UNIT;
                                                    }}),
                                                }};
                                            }};) {{
                                clientToken = "vero";
                            }};) {{
                xAmzAlgorithm = "ducimus";
                xAmzContentSha256 = "dolore";
                xAmzCredential = "quibusdam";
                xAmzDate = "illum";
                xAmzSecurityToken = "sequi";
                xAmzSignature = "natus";
                xAmzSignedHeaders = "impedit";
            }};            

            UpdateNetworkSitePlanResponse res = sdk.sdk.updateNetworkSitePlan(req);

            if (res.updateNetworkSiteResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
