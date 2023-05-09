# SDK

## Overview

Savings Plans are a pricing model that offer significant savings on AWS usage (for example, on Amazon EC2 instances). You commit to a consistent amount of usage, in USD per hour, for a term of 1 or 3 years, and receive a lower price for that usage. For more information, see the <a href="https://docs.aws.amazon.com/savingsplans/latest/userguide/">AWS Savings Plans User Guide</a>.

Amazon Web Services documentation
<https://docs.aws.amazon.com/savingsplans/>
### Available Operations

* [createSavingsPlan](#createsavingsplan) - Creates a Savings Plan.
* [deleteQueuedSavingsPlan](#deletequeuedsavingsplan) - Deletes the queued purchase for the specified Savings Plan.
* [describeSavingsPlanRates](#describesavingsplanrates) - Describes the specified Savings Plans rates.
* [describeSavingsPlans](#describesavingsplans) - Describes the specified Savings Plans.
* [describeSavingsPlansOfferingRates](#describesavingsplansofferingrates) - Describes the specified Savings Plans offering rates.
* [describeSavingsPlansOfferings](#describesavingsplansofferings) - Describes the specified Savings Plans offerings.
* [listTagsForResource](#listtagsforresource) - Lists the tags for the specified resource.
* [tagResource](#tagresource) - Adds the specified tags to the specified resource.
* [untagResource](#untagresource) - Removes the specified tags from the specified resource.

## createSavingsPlan

Creates a Savings Plan.

### Example Usage

```java
package hello.world;

import java.time.OffsetDateTime;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateSavingsPlanRequest;
import org.openapis.openapi.models.operations.CreateSavingsPlanRequestBody;
import org.openapis.openapi.models.operations.CreateSavingsPlanResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("placeat") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            CreateSavingsPlanRequest req = new CreateSavingsPlanRequest(                new CreateSavingsPlanRequestBody("voluptatum", "iusto") {{
                                clientToken = "excepturi";
                                purchaseTime = OffsetDateTime.parse("2022-01-28T03:46:24.500Z");
                                tags = new java.util.HashMap<String, String>() {{
                                    put("ab", "quis");
                                    put("veritatis", "deserunt");
                                    put("perferendis", "ipsam");
                                    put("repellendus", "sapiente");
                                }};
                                upfrontPaymentAmount = "quo";
                            }};) {{
                xAmzAlgorithm = "odit";
                xAmzContentSha256 = "at";
                xAmzCredential = "at";
                xAmzDate = "maiores";
                xAmzSecurityToken = "molestiae";
                xAmzSignature = "quod";
                xAmzSignedHeaders = "quod";
            }};            

            CreateSavingsPlanResponse res = sdk.sdk.createSavingsPlan(req);

            if (res.createSavingsPlanResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## deleteQueuedSavingsPlan

Deletes the queued purchase for the specified Savings Plan.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteQueuedSavingsPlanRequest;
import org.openapis.openapi.models.operations.DeleteQueuedSavingsPlanRequestBody;
import org.openapis.openapi.models.operations.DeleteQueuedSavingsPlanResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("esse") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DeleteQueuedSavingsPlanRequest req = new DeleteQueuedSavingsPlanRequest(                new DeleteQueuedSavingsPlanRequestBody("totam");) {{
                xAmzAlgorithm = "porro";
                xAmzContentSha256 = "dolorum";
                xAmzCredential = "dicta";
                xAmzDate = "nam";
                xAmzSecurityToken = "officia";
                xAmzSignature = "occaecati";
                xAmzSignedHeaders = "fugit";
            }};            

            DeleteQueuedSavingsPlanResponse res = sdk.sdk.deleteQueuedSavingsPlan(req);

            if (res.deleteQueuedSavingsPlanResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## describeSavingsPlanRates

Describes the specified Savings Plans rates.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DescribeSavingsPlanRatesRequest;
import org.openapis.openapi.models.operations.DescribeSavingsPlanRatesRequestBody;
import org.openapis.openapi.models.operations.DescribeSavingsPlanRatesResponse;
import org.openapis.openapi.models.shared.SavingsPlanRateFilter;
import org.openapis.openapi.models.shared.SavingsPlanRateFilterNameEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("deleniti") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DescribeSavingsPlanRatesRequest req = new DescribeSavingsPlanRatesRequest(                new DescribeSavingsPlanRatesRequestBody("hic") {{
                                filters = new org.openapis.openapi.models.shared.SavingsPlanRateFilter[]{{
                                    add(new SavingsPlanRateFilter() {{
                                        name = SavingsPlanRateFilterNameEnum.PRODUCT_TYPE;
                                        values = new String[]{{
                                            add("commodi"),
                                        }};
                                    }}),
                                    add(new SavingsPlanRateFilter() {{
                                        name = SavingsPlanRateFilterNameEnum.TENANCY;
                                        values = new String[]{{
                                            add("qui"),
                                            add("impedit"),
                                        }};
                                    }}),
                                    add(new SavingsPlanRateFilter() {{
                                        name = SavingsPlanRateFilterNameEnum.SERVICE_CODE;
                                        values = new String[]{{
                                            add("ipsum"),
                                            add("excepturi"),
                                        }};
                                    }}),
                                    add(new SavingsPlanRateFilter() {{
                                        name = SavingsPlanRateFilterNameEnum.INSTANCE_TYPE;
                                        values = new String[]{{
                                            add("ad"),
                                        }};
                                    }}),
                                }};
                                maxResults = 617636L;
                                nextToken = "sed";
                            }};) {{
                xAmzAlgorithm = "iste";
                xAmzContentSha256 = "dolor";
                xAmzCredential = "natus";
                xAmzDate = "laboriosam";
                xAmzSecurityToken = "hic";
                xAmzSignature = "saepe";
                xAmzSignedHeaders = "fuga";
            }};            

            DescribeSavingsPlanRatesResponse res = sdk.sdk.describeSavingsPlanRates(req);

            if (res.describeSavingsPlanRatesResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## describeSavingsPlans

Describes the specified Savings Plans.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DescribeSavingsPlansRequest;
import org.openapis.openapi.models.operations.DescribeSavingsPlansRequestBody;
import org.openapis.openapi.models.operations.DescribeSavingsPlansResponse;
import org.openapis.openapi.models.shared.SavingsPlanFilter;
import org.openapis.openapi.models.shared.SavingsPlanStateEnum;
import org.openapis.openapi.models.shared.SavingsPlansFilterNameEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("in") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DescribeSavingsPlansRequest req = new DescribeSavingsPlansRequest(                new DescribeSavingsPlansRequestBody() {{
                                filters = new org.openapis.openapi.models.shared.SavingsPlanFilter[]{{
                                    add(new SavingsPlanFilter() {{
                                        name = SavingsPlansFilterNameEnum.SAVINGS_PLAN_TYPE;
                                        values = new String[]{{
                                            add("saepe"),
                                            add("quidem"),
                                        }};
                                    }}),
                                    add(new SavingsPlanFilter() {{
                                        name = SavingsPlansFilterNameEnum.REGION;
                                        values = new String[]{{
                                            add("reiciendis"),
                                        }};
                                    }}),
                                }};
                                maxResults = 666767L;
                                nextToken = "mollitia";
                                savingsPlanArns = new String[]{{
                                    add("dolores"),
                                    add("dolorem"),
                                    add("corporis"),
                                }};
                                savingsPlanIds = new String[]{{
                                    add("nobis"),
                                }};
                                states = new org.openapis.openapi.models.shared.SavingsPlanStateEnum[]{{
                                    add(SavingsPlanStateEnum.RETIRED),
                                    add(SavingsPlanStateEnum.ACTIVE),
                                }};
                            }};) {{
                xAmzAlgorithm = "minima";
                xAmzContentSha256 = "excepturi";
                xAmzCredential = "accusantium";
                xAmzDate = "iure";
                xAmzSecurityToken = "culpa";
                xAmzSignature = "doloribus";
                xAmzSignedHeaders = "sapiente";
            }};            

            DescribeSavingsPlansResponse res = sdk.sdk.describeSavingsPlans(req);

            if (res.describeSavingsPlansResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## describeSavingsPlansOfferingRates

Describes the specified Savings Plans offering rates.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DescribeSavingsPlansOfferingRatesRequest;
import org.openapis.openapi.models.operations.DescribeSavingsPlansOfferingRatesRequestBody;
import org.openapis.openapi.models.operations.DescribeSavingsPlansOfferingRatesResponse;
import org.openapis.openapi.models.shared.SavingsPlanOfferingRateFilterElement;
import org.openapis.openapi.models.shared.SavingsPlanPaymentOptionEnum;
import org.openapis.openapi.models.shared.SavingsPlanProductTypeEnum;
import org.openapis.openapi.models.shared.SavingsPlanRateFilterAttributeEnum;
import org.openapis.openapi.models.shared.SavingsPlanRateServiceCodeEnum;
import org.openapis.openapi.models.shared.SavingsPlanTypeEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("architecto") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DescribeSavingsPlansOfferingRatesRequest req = new DescribeSavingsPlansOfferingRatesRequest(                new DescribeSavingsPlansOfferingRatesRequestBody() {{
                                filters = new org.openapis.openapi.models.shared.SavingsPlanOfferingRateFilterElement[]{{
                                    add(new SavingsPlanOfferingRateFilterElement() {{
                                        name = SavingsPlanRateFilterAttributeEnum.INSTANCE_FAMILY;
                                        values = new String[]{{
                                            add("consequuntur"),
                                            add("repellat"),
                                            add("mollitia"),
                                        }};
                                    }}),
                                    add(new SavingsPlanOfferingRateFilterElement() {{
                                        name = SavingsPlanRateFilterAttributeEnum.PRODUCT_DESCRIPTION;
                                        values = new String[]{{
                                            add("commodi"),
                                            add("quam"),
                                        }};
                                    }}),
                                    add(new SavingsPlanOfferingRateFilterElement() {{
                                        name = SavingsPlanRateFilterAttributeEnum.INSTANCE_TYPE;
                                        values = new String[]{{
                                            add("error"),
                                        }};
                                    }}),
                                }};
                                maxResults = 158969L;
                                nextToken = "quis";
                                operations = new String[]{{
                                    add("laborum"),
                                }};
                                products = new org.openapis.openapi.models.shared.SavingsPlanProductTypeEnum[]{{
                                    add(SavingsPlanProductTypeEnum.FARGATE),
                                    add(SavingsPlanProductTypeEnum.EC2),
                                    add(SavingsPlanProductTypeEnum.SAGE_MAKER),
                                }};
                                savingsPlanOfferingIds = new String[]{{
                                    add("tenetur"),
                                }};
                                savingsPlanPaymentOptions = new org.openapis.openapi.models.shared.SavingsPlanPaymentOptionEnum[]{{
                                    add(SavingsPlanPaymentOptionEnum.PARTIAL_UPFRONT),
                                    add(SavingsPlanPaymentOptionEnum.NO_UPFRONT),
                                }};
                                savingsPlanTypes = new org.openapis.openapi.models.shared.SavingsPlanTypeEnum[]{{
                                    add(SavingsPlanTypeEnum.COMPUTE),
                                }};
                                serviceCodes = new org.openapis.openapi.models.shared.SavingsPlanRateServiceCodeEnum[]{{
                                    add(SavingsPlanRateServiceCodeEnum.AMAZON_SAGE_MAKER),
                                    add(SavingsPlanRateServiceCodeEnum.AWS_LAMBDA),
                                    add(SavingsPlanRateServiceCodeEnum.AMAZON_EC2),
                                }};
                                usageTypes = new String[]{{
                                    add("voluptatibus"),
                                    add("vero"),
                                    add("nihil"),
                                    add("praesentium"),
                                }};
                            }};) {{
                xAmzAlgorithm = "voluptatibus";
                xAmzContentSha256 = "ipsa";
                xAmzCredential = "omnis";
                xAmzDate = "voluptate";
                xAmzSecurityToken = "cum";
                xAmzSignature = "perferendis";
                xAmzSignedHeaders = "doloremque";
            }};            

            DescribeSavingsPlansOfferingRatesResponse res = sdk.sdk.describeSavingsPlansOfferingRates(req);

            if (res.describeSavingsPlansOfferingRatesResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## describeSavingsPlansOfferings

Describes the specified Savings Plans offerings.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DescribeSavingsPlansOfferingsRequest;
import org.openapis.openapi.models.operations.DescribeSavingsPlansOfferingsRequestBody;
import org.openapis.openapi.models.operations.DescribeSavingsPlansOfferingsRequestBodyProductTypeEnum;
import org.openapis.openapi.models.operations.DescribeSavingsPlansOfferingsResponse;
import org.openapis.openapi.models.shared.CurrencyCodeEnum;
import org.openapis.openapi.models.shared.SavingsPlanOfferingFilterAttributeEnum;
import org.openapis.openapi.models.shared.SavingsPlanOfferingFilterElement;
import org.openapis.openapi.models.shared.SavingsPlanPaymentOptionEnum;
import org.openapis.openapi.models.shared.SavingsPlanTypeEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("reprehenderit") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DescribeSavingsPlansOfferingsRequest req = new DescribeSavingsPlansOfferingsRequest(                new DescribeSavingsPlansOfferingsRequestBody() {{
                                currencies = new org.openapis.openapi.models.shared.CurrencyCodeEnum[]{{
                                    add(CurrencyCodeEnum.USD),
                                    add(CurrencyCodeEnum.CNY),
                                }};
                                descriptions = new String[]{{
                                    add("dolore"),
                                    add("iusto"),
                                }};
                                durations = new Long[]{{
                                    add(688661L),
                                }};
                                filters = new org.openapis.openapi.models.shared.SavingsPlanOfferingFilterElement[]{{
                                    add(new SavingsPlanOfferingFilterElement() {{
                                        name = SavingsPlanOfferingFilterAttributeEnum.INSTANCE_FAMILY;
                                        values = new String[]{{
                                            add("repudiandae"),
                                            add("quae"),
                                        }};
                                    }}),
                                    add(new SavingsPlanOfferingFilterElement() {{
                                        name = SavingsPlanOfferingFilterAttributeEnum.REGION;
                                        values = new String[]{{
                                            add("molestias"),
                                            add("excepturi"),
                                            add("pariatur"),
                                        }};
                                    }}),
                                }};
                                maxResults = 265389L;
                                nextToken = "praesentium";
                                offeringIds = new String[]{{
                                    add("voluptates"),
                                    add("quasi"),
                                    add("repudiandae"),
                                }};
                                operations = new String[]{{
                                    add("veritatis"),
                                    add("itaque"),
                                    add("incidunt"),
                                }};
                                paymentOptions = new org.openapis.openapi.models.shared.SavingsPlanPaymentOptionEnum[]{{
                                    add(SavingsPlanPaymentOptionEnum.ALL_UPFRONT),
                                    add(SavingsPlanPaymentOptionEnum.NO_UPFRONT),
                                }};
                                planTypes = new org.openapis.openapi.models.shared.SavingsPlanTypeEnum[]{{
                                    add(SavingsPlanTypeEnum.COMPUTE),
                                    add(SavingsPlanTypeEnum.EC2_INSTANCE),
                                    add(SavingsPlanTypeEnum.SAGE_MAKER),
                                    add(SavingsPlanTypeEnum.SAGE_MAKER),
                                }};
                                productType = DescribeSavingsPlansOfferingsRequestBodyProductTypeEnum.FARGATE;
                                serviceCodes = new String[]{{
                                    add("qui"),
                                    add("aliquid"),
                                }};
                                usageTypes = new String[]{{
                                    add("quos"),
                                    add("perferendis"),
                                    add("magni"),
                                }};
                            }};) {{
                xAmzAlgorithm = "assumenda";
                xAmzContentSha256 = "ipsam";
                xAmzCredential = "alias";
                xAmzDate = "fugit";
                xAmzSecurityToken = "dolorum";
                xAmzSignature = "excepturi";
                xAmzSignedHeaders = "tempora";
            }};            

            DescribeSavingsPlansOfferingsResponse res = sdk.sdk.describeSavingsPlansOfferings(req);

            if (res.describeSavingsPlansOfferingsResponse != null) {
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
import org.openapis.openapi.models.operations.ListTagsForResourceRequestBody;
import org.openapis.openapi.models.operations.ListTagsForResourceResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("facilis") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            ListTagsForResourceRequest req = new ListTagsForResourceRequest(                new ListTagsForResourceRequestBody("tempore");) {{
                xAmzAlgorithm = "labore";
                xAmzContentSha256 = "delectus";
                xAmzCredential = "eum";
                xAmzDate = "non";
                xAmzSecurityToken = "eligendi";
                xAmzSignature = "sint";
                xAmzSignedHeaders = "aliquid";
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

## tagResource

Adds the specified tags to the specified resource.

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
                .setSecurity(new Security("provident") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            TagResourceRequest req = new TagResourceRequest(                new TagResourceRequestBody("necessitatibus",                 new java.util.HashMap<String, String>() {{
                                                put("officia", "dolor");
                                                put("debitis", "a");
                                                put("dolorum", "in");
                                            }});) {{
                xAmzAlgorithm = "in";
                xAmzContentSha256 = "illum";
                xAmzCredential = "maiores";
                xAmzDate = "rerum";
                xAmzSecurityToken = "dicta";
                xAmzSignature = "magnam";
                xAmzSignedHeaders = "cumque";
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

Removes the specified tags from the specified resource.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UntagResourceRequest;
import org.openapis.openapi.models.operations.UntagResourceRequestBody;
import org.openapis.openapi.models.operations.UntagResourceResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("facere") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            UntagResourceRequest req = new UntagResourceRequest(                new UntagResourceRequestBody("ea",                 new String[]{{
                                                add("laborum"),
                                                add("accusamus"),
                                            }});) {{
                xAmzAlgorithm = "non";
                xAmzContentSha256 = "occaecati";
                xAmzCredential = "enim";
                xAmzDate = "accusamus";
                xAmzSecurityToken = "delectus";
                xAmzSignature = "quidem";
                xAmzSignedHeaders = "provident";
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
