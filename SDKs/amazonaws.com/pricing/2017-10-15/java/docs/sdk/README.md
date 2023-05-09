# SDK

## Overview

<p>Amazon Web Services Price List API is a centralized and convenient way to programmatically query Amazon Web Services for services, products, and pricing information. The Amazon Web Services Price List uses standardized product attributes such as <code>Location</code>, <code>Storage Class</code>, and <code>Operating System</code>, and provides prices at the SKU level. You can use the Amazon Web Services Price List to build cost control and scenario planning tools, reconcile billing data, forecast future spend for budgeting purposes, and provide cost benefit analysis that compare your internal workloads with Amazon Web Services.</p> <p>Use <code>GetServices</code> without a service code to retrieve the service codes for all AWS services, then <code>GetServices</code> with a service code to retrieve the attribute names for that service. After you have the service code and attribute names, you can use <code>GetAttributeValues</code> to see what values are available for an attribute. With the service code and an attribute name and value, you can use <code>GetProducts</code> to find specific products that you're interested in, such as an <code>AmazonEC2</code> instance, with a <code>Provisioned IOPS</code> <code>volumeType</code>.</p> <p>Service Endpoint</p> <p>Amazon Web Services Price List service API provides the following two endpoints:</p> <ul> <li> <p>https://api.pricing.us-east-1.amazonaws.com</p> </li> <li> <p>https://api.pricing.ap-south-1.amazonaws.com</p> </li> </ul>

Amazon Web Services documentation
<https://docs.aws.amazon.com/pricing/>
### Available Operations

* [describeServices](#describeservices) - Returns the metadata for one service or a list of the metadata for all services. Use this without a service code to get the service codes for all services. Use it with a service code, such as <code>AmazonEC2</code>, to get information specific to that service, such as the attribute names available for that service. For example, some of the attribute names available for EC2 are <code>volumeType</code>, <code>maxIopsVolume</code>, <code>operation</code>, <code>locationType</code>, and <code>instanceCapacity10xlarge</code>.
* [getAttributeValues](#getattributevalues) - Returns a list of attribute values. Attributes are similar to the details in a Price List API offer file. For a list of available attributes, see <a href="https://docs.aws.amazon.com/awsaccountbilling/latest/aboutv2/reading-an-offer.html#pps-defs">Offer File Definitions</a> in the <a href="https://docs.aws.amazon.com/awsaccountbilling/latest/aboutv2/billing-what-is.html">Billing and Cost Management User Guide</a>.
* [getPriceListFileUrl](#getpricelistfileurl) - <p> <i> <b>This feature is in preview release and is subject to change. Your use of Amazon Web Services Price List API is subject to the Beta Service Participation terms of the <a href="https://aws.amazon.com/service-terms/">Amazon Web Services Service Terms</a> (Section 1.10).</b> </i> </p> <p>This returns the URL that you can retrieve your Price List file from. This URL is based on the <code>PriceListArn</code> and <code>FileFormat</code> that you retrieve from the <a href="https://docs.aws.amazon.com/aws-cost-management/latest/APIReference/API_pricing_ListPriceLists.html"> <code>ListPriceLists</code> </a> response. </p>
* [getProducts](#getproducts) - Returns a list of all products that match the filter criteria.
* [listPriceLists](#listpricelists) - <p> <i> <b>This feature is in preview release and is subject to change. Your use of Amazon Web Services Price List API is subject to the Beta Service Participation terms of the <a href="https://aws.amazon.com/service-terms/">Amazon Web Services Service Terms</a> (Section 1.10).</b> </i> </p> <p>This returns a list of Price List references that the requester if authorized to view, given a <code>ServiceCode</code>, <code>CurrencyCode</code>, and an <code>EffectiveDate</code>. Use without a <code>RegionCode</code> filter to list Price List references from all available Amazon Web Services Regions. Use with a <code>RegionCode</code> filter to get the Price List reference that's specific to a specific Amazon Web Services Region. You can use the <code>PriceListArn</code> from the response to get your preferred Price List files through the <a href="https://docs.aws.amazon.com/aws-cost-management/latest/APIReference/API_pricing_GetPriceListFileUrl.html"> <code>GetPriceListFileUrl</code> </a> API.</p>

## describeServices

Returns the metadata for one service or a list of the metadata for all services. Use this without a service code to get the service codes for all services. Use it with a service code, such as <code>AmazonEC2</code>, to get information specific to that service, such as the attribute names available for that service. For example, some of the attribute names available for EC2 are <code>volumeType</code>, <code>maxIopsVolume</code>, <code>operation</code>, <code>locationType</code>, and <code>instanceCapacity10xlarge</code>.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DescribeServicesRequest;
import org.openapis.openapi.models.operations.DescribeServicesResponse;
import org.openapis.openapi.models.operations.DescribeServicesXAmzTargetEnum;
import org.openapis.openapi.models.shared.DescribeServicesRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("debitis") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DescribeServicesRequest req = new DescribeServicesRequest(                new DescribeServicesRequest() {{
                                formatVersion = "ipsa";
                                maxResults = 963663L;
                                nextToken = "tempora";
                                serviceCode = "suscipit";
                            }};, DescribeServicesXAmzTargetEnum.AWS_PRICE_LIST_SERVICE_DESCRIBE_SERVICES) {{
                maxResults = "molestiae";
                nextToken = "minus";
                xAmzAlgorithm = "placeat";
                xAmzContentSha256 = "voluptatum";
                xAmzCredential = "iusto";
                xAmzDate = "excepturi";
                xAmzSecurityToken = "nisi";
                xAmzSignature = "recusandae";
                xAmzSignedHeaders = "temporibus";
            }};            

            DescribeServicesResponse res = sdk.sdk.describeServices(req);

            if (res.describeServicesResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getAttributeValues

Returns a list of attribute values. Attributes are similar to the details in a Price List API offer file. For a list of available attributes, see <a href="https://docs.aws.amazon.com/awsaccountbilling/latest/aboutv2/reading-an-offer.html#pps-defs">Offer File Definitions</a> in the <a href="https://docs.aws.amazon.com/awsaccountbilling/latest/aboutv2/billing-what-is.html">Billing and Cost Management User Guide</a>.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetAttributeValuesRequest;
import org.openapis.openapi.models.operations.GetAttributeValuesResponse;
import org.openapis.openapi.models.operations.GetAttributeValuesXAmzTargetEnum;
import org.openapis.openapi.models.shared.GetAttributeValuesRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("ab") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetAttributeValuesRequest req = new GetAttributeValuesRequest(                new GetAttributeValuesRequest("quis", "veritatis") {{
                                maxResults = 648172L;
                                nextToken = "perferendis";
                            }};, GetAttributeValuesXAmzTargetEnum.AWS_PRICE_LIST_SERVICE_GET_ATTRIBUTE_VALUES) {{
                maxResults = "ipsam";
                nextToken = "repellendus";
                xAmzAlgorithm = "sapiente";
                xAmzContentSha256 = "quo";
                xAmzCredential = "odit";
                xAmzDate = "at";
                xAmzSecurityToken = "at";
                xAmzSignature = "maiores";
                xAmzSignedHeaders = "molestiae";
            }};            

            GetAttributeValuesResponse res = sdk.sdk.getAttributeValues(req);

            if (res.getAttributeValuesResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getPriceListFileUrl

<p> <i> <b>This feature is in preview release and is subject to change. Your use of Amazon Web Services Price List API is subject to the Beta Service Participation terms of the <a href="https://aws.amazon.com/service-terms/">Amazon Web Services Service Terms</a> (Section 1.10).</b> </i> </p> <p>This returns the URL that you can retrieve your Price List file from. This URL is based on the <code>PriceListArn</code> and <code>FileFormat</code> that you retrieve from the <a href="https://docs.aws.amazon.com/aws-cost-management/latest/APIReference/API_pricing_ListPriceLists.html"> <code>ListPriceLists</code> </a> response. </p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetPriceListFileUrlRequest;
import org.openapis.openapi.models.operations.GetPriceListFileUrlResponse;
import org.openapis.openapi.models.operations.GetPriceListFileUrlXAmzTargetEnum;
import org.openapis.openapi.models.shared.GetPriceListFileUrlRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("quod") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetPriceListFileUrlRequest req = new GetPriceListFileUrlRequest(                new GetPriceListFileUrlRequest("quod", "esse");, GetPriceListFileUrlXAmzTargetEnum.AWS_PRICE_LIST_SERVICE_GET_PRICE_LIST_FILE_URL) {{
                xAmzAlgorithm = "totam";
                xAmzContentSha256 = "porro";
                xAmzCredential = "dolorum";
                xAmzDate = "dicta";
                xAmzSecurityToken = "nam";
                xAmzSignature = "officia";
                xAmzSignedHeaders = "occaecati";
            }};            

            GetPriceListFileUrlResponse res = sdk.sdk.getPriceListFileUrl(req);

            if (res.getPriceListFileUrlResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getProducts

Returns a list of all products that match the filter criteria.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetProductsRequest;
import org.openapis.openapi.models.operations.GetProductsResponse;
import org.openapis.openapi.models.operations.GetProductsXAmzTargetEnum;
import org.openapis.openapi.models.shared.Filter;
import org.openapis.openapi.models.shared.FilterTypeEnum;
import org.openapis.openapi.models.shared.GetProductsRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("fugit") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetProductsRequest req = new GetProductsRequest(                new GetProductsRequest("deleniti") {{
                                filters = new org.openapis.openapi.models.shared.Filter[]{{
                                    add(new Filter("beatae", FilterTypeEnum.TERM_MATCH, "commodi") {{
                                        field = "optio";
                                        type = FilterTypeEnum.TERM_MATCH;
                                        value = "totam";
                                    }}),
                                    add(new Filter("qui", FilterTypeEnum.TERM_MATCH, "impedit") {{
                                        field = "molestiae";
                                        type = FilterTypeEnum.TERM_MATCH;
                                        value = "modi";
                                    }}),
                                    add(new Filter("ipsum", FilterTypeEnum.TERM_MATCH, "excepturi") {{
                                        field = "cum";
                                        type = FilterTypeEnum.TERM_MATCH;
                                        value = "esse";
                                    }}),
                                    add(new Filter("ad", FilterTypeEnum.TERM_MATCH, "natus") {{
                                        field = "aspernatur";
                                        type = FilterTypeEnum.TERM_MATCH;
                                        value = "perferendis";
                                    }}),
                                }};
                                formatVersion = "sed";
                                maxResults = 612096L;
                                nextToken = "dolor";
                            }};, GetProductsXAmzTargetEnum.AWS_PRICE_LIST_SERVICE_GET_PRODUCTS) {{
                maxResults = "natus";
                nextToken = "laboriosam";
                xAmzAlgorithm = "hic";
                xAmzContentSha256 = "saepe";
                xAmzCredential = "fuga";
                xAmzDate = "in";
                xAmzSecurityToken = "corporis";
                xAmzSignature = "iste";
                xAmzSignedHeaders = "iure";
            }};            

            GetProductsResponse res = sdk.sdk.getProducts(req);

            if (res.getProductsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listPriceLists

<p> <i> <b>This feature is in preview release and is subject to change. Your use of Amazon Web Services Price List API is subject to the Beta Service Participation terms of the <a href="https://aws.amazon.com/service-terms/">Amazon Web Services Service Terms</a> (Section 1.10).</b> </i> </p> <p>This returns a list of Price List references that the requester if authorized to view, given a <code>ServiceCode</code>, <code>CurrencyCode</code>, and an <code>EffectiveDate</code>. Use without a <code>RegionCode</code> filter to list Price List references from all available Amazon Web Services Regions. Use with a <code>RegionCode</code> filter to get the Price List reference that's specific to a specific Amazon Web Services Region. You can use the <code>PriceListArn</code> from the response to get your preferred Price List files through the <a href="https://docs.aws.amazon.com/aws-cost-management/latest/APIReference/API_pricing_GetPriceListFileUrl.html"> <code>GetPriceListFileUrl</code> </a> API.</p>

### Example Usage

```java
package hello.world;

import java.time.OffsetDateTime;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListPriceListsRequest;
import org.openapis.openapi.models.operations.ListPriceListsResponse;
import org.openapis.openapi.models.operations.ListPriceListsXAmzTargetEnum;
import org.openapis.openapi.models.shared.ListPriceListsRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("saepe") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            ListPriceListsRequest req = new ListPriceListsRequest(                new ListPriceListsRequest("quidem", OffsetDateTime.parse("2022-12-10T00:25:28.749Z"), "reiciendis") {{
                                maxResults = 666767L;
                                nextToken = "mollitia";
                                regionCode = "laborum";
                            }};, ListPriceListsXAmzTargetEnum.AWS_PRICE_LIST_SERVICE_LIST_PRICE_LISTS) {{
                maxResults = "dolores";
                nextToken = "dolorem";
                xAmzAlgorithm = "corporis";
                xAmzContentSha256 = "explicabo";
                xAmzCredential = "nobis";
                xAmzDate = "enim";
                xAmzSecurityToken = "omnis";
                xAmzSignature = "nemo";
                xAmzSignedHeaders = "minima";
            }};            

            ListPriceListsResponse res = sdk.sdk.listPriceLists(req);

            if (res.listPriceListsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
