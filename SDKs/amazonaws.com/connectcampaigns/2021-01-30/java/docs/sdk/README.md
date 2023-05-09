# SDK

## Overview

Provide APIs to create and manage Amazon Connect Campaigns.

Amazon Web Services documentation
<https://docs.aws.amazon.com/connect-campaigns/>
### Available Operations

* [createCampaign](#createcampaign) - Creates a campaign for the specified Amazon Connect account. This API is idempotent.
* [deleteCampaign](#deletecampaign) - Deletes a campaign from the specified Amazon Connect account.
* [deleteConnectInstanceConfig](#deleteconnectinstanceconfig) - Deletes a connect instance config from the specified AWS account.
* [deleteInstanceOnboardingJob](#deleteinstanceonboardingjob) - Delete the Connect Campaigns onboarding job for the specified Amazon Connect instance.
* [describeCampaign](#describecampaign) - Describes the specific campaign.
* [getCampaignState](#getcampaignstate) - Get state of a campaign for the specified Amazon Connect account.
* [getCampaignStateBatch](#getcampaignstatebatch) - Get state of campaigns for the specified Amazon Connect account.
* [getConnectInstanceConfig](#getconnectinstanceconfig) - Get the specific Connect instance config.
* [getInstanceOnboardingJobStatus](#getinstanceonboardingjobstatus) - Get the specific instance onboarding job status.
* [listCampaigns](#listcampaigns) - Provides summary information about the campaigns under the specified Amazon Connect account.
* [listTagsForResource](#listtagsforresource) - List tags for a resource.
* [pauseCampaign](#pausecampaign) - Pauses a campaign for the specified Amazon Connect account.
* [putDialRequestBatch](#putdialrequestbatch) - Creates dials requests for the specified campaign Amazon Connect account. This API is idempotent.
* [resumeCampaign](#resumecampaign) - Stops a campaign for the specified Amazon Connect account.
* [startCampaign](#startcampaign) - Starts a campaign for the specified Amazon Connect account.
* [startInstanceOnboardingJob](#startinstanceonboardingjob) - Onboard the specific Amazon Connect instance to Connect Campaigns.
* [stopCampaign](#stopcampaign) - Stops a campaign for the specified Amazon Connect account.
* [tagResource](#tagresource) - Tag a resource.
* [untagResource](#untagresource) - Untag a resource.
* [updateCampaignDialerConfig](#updatecampaigndialerconfig) - Updates the dialer config of a campaign. This API is idempotent.
* [updateCampaignName](#updatecampaignname) - Updates the name of a campaign. This API is idempotent.
* [updateCampaignOutboundCallConfig](#updatecampaignoutboundcallconfig) - Updates the outbound call config of a campaign. This API is idempotent.

## createCampaign

Creates a campaign for the specified Amazon Connect account. This API is idempotent.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateCampaignRequest;
import org.openapis.openapi.models.operations.CreateCampaignRequestBody;
import org.openapis.openapi.models.operations.CreateCampaignRequestBodyDialerConfig;
import org.openapis.openapi.models.operations.CreateCampaignRequestBodyOutboundCallConfig;
import org.openapis.openapi.models.operations.CreateCampaignResponse;
import org.openapis.openapi.models.shared.AnswerMachineDetectionConfig;
import org.openapis.openapi.models.shared.PredictiveDialerConfig;
import org.openapis.openapi.models.shared.ProgressiveDialerConfig;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("minus") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            CreateCampaignRequest req = new CreateCampaignRequest(                new CreateCampaignRequestBody("placeat",                 new CreateCampaignRequestBodyDialerConfig() {{
                                                predictiveDialerConfig = new PredictiveDialerConfig(5288.95);;
                                                progressiveDialerConfig = new ProgressiveDialerConfig(4799.77);;
                                            }};, "excepturi",                 new CreateCampaignRequestBodyOutboundCallConfig() {{
                                                answerMachineDetectionConfig = new AnswerMachineDetectionConfig(false);;
                                                connectContactFlowId = "nisi";
                                                connectQueueId = "recusandae";
                                                connectSourcePhoneNumber = "temporibus";
                                            }};) {{
                                tags = new java.util.HashMap<String, String>() {{
                                    put("quis", "veritatis");
                                }};
                            }};) {{
                xAmzAlgorithm = "deserunt";
                xAmzContentSha256 = "perferendis";
                xAmzCredential = "ipsam";
                xAmzDate = "repellendus";
                xAmzSecurityToken = "sapiente";
                xAmzSignature = "quo";
                xAmzSignedHeaders = "odit";
            }};            

            CreateCampaignResponse res = sdk.sdk.createCampaign(req);

            if (res.createCampaignResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## deleteCampaign

Deletes a campaign from the specified Amazon Connect account.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteCampaignRequest;
import org.openapis.openapi.models.operations.DeleteCampaignResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("at") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DeleteCampaignRequest req = new DeleteCampaignRequest("at") {{
                xAmzAlgorithm = "maiores";
                xAmzContentSha256 = "molestiae";
                xAmzCredential = "quod";
                xAmzDate = "quod";
                xAmzSecurityToken = "esse";
                xAmzSignature = "totam";
                xAmzSignedHeaders = "porro";
            }};            

            DeleteCampaignResponse res = sdk.sdk.deleteCampaign(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## deleteConnectInstanceConfig

Deletes a connect instance config from the specified AWS account.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteConnectInstanceConfigRequest;
import org.openapis.openapi.models.operations.DeleteConnectInstanceConfigResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("dolorum") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DeleteConnectInstanceConfigRequest req = new DeleteConnectInstanceConfigRequest("dicta") {{
                xAmzAlgorithm = "nam";
                xAmzContentSha256 = "officia";
                xAmzCredential = "occaecati";
                xAmzDate = "fugit";
                xAmzSecurityToken = "deleniti";
                xAmzSignature = "hic";
                xAmzSignedHeaders = "optio";
            }};            

            DeleteConnectInstanceConfigResponse res = sdk.sdk.deleteConnectInstanceConfig(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## deleteInstanceOnboardingJob

Delete the Connect Campaigns onboarding job for the specified Amazon Connect instance.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteInstanceOnboardingJobRequest;
import org.openapis.openapi.models.operations.DeleteInstanceOnboardingJobResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("totam") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DeleteInstanceOnboardingJobRequest req = new DeleteInstanceOnboardingJobRequest("beatae") {{
                xAmzAlgorithm = "commodi";
                xAmzContentSha256 = "molestiae";
                xAmzCredential = "modi";
                xAmzDate = "qui";
                xAmzSecurityToken = "impedit";
                xAmzSignature = "cum";
                xAmzSignedHeaders = "esse";
            }};            

            DeleteInstanceOnboardingJobResponse res = sdk.sdk.deleteInstanceOnboardingJob(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## describeCampaign

Describes the specific campaign.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DescribeCampaignRequest;
import org.openapis.openapi.models.operations.DescribeCampaignResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("ipsum") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DescribeCampaignRequest req = new DescribeCampaignRequest("excepturi") {{
                xAmzAlgorithm = "aspernatur";
                xAmzContentSha256 = "perferendis";
                xAmzCredential = "ad";
                xAmzDate = "natus";
                xAmzSecurityToken = "sed";
                xAmzSignature = "iste";
                xAmzSignedHeaders = "dolor";
            }};            

            DescribeCampaignResponse res = sdk.sdk.describeCampaign(req);

            if (res.describeCampaignResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getCampaignState

Get state of a campaign for the specified Amazon Connect account.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetCampaignStateRequest;
import org.openapis.openapi.models.operations.GetCampaignStateResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("natus") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetCampaignStateRequest req = new GetCampaignStateRequest("laboriosam") {{
                xAmzAlgorithm = "hic";
                xAmzContentSha256 = "saepe";
                xAmzCredential = "fuga";
                xAmzDate = "in";
                xAmzSecurityToken = "corporis";
                xAmzSignature = "iste";
                xAmzSignedHeaders = "iure";
            }};            

            GetCampaignStateResponse res = sdk.sdk.getCampaignState(req);

            if (res.getCampaignStateResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getCampaignStateBatch

Get state of campaigns for the specified Amazon Connect account.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetCampaignStateBatchRequest;
import org.openapis.openapi.models.operations.GetCampaignStateBatchRequestBody;
import org.openapis.openapi.models.operations.GetCampaignStateBatchResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("saepe") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetCampaignStateBatchRequest req = new GetCampaignStateBatchRequest(                new GetCampaignStateBatchRequestBody(                new String[]{{
                                                add("architecto"),
                                                add("ipsa"),
                                                add("reiciendis"),
                                            }});) {{
                xAmzAlgorithm = "est";
                xAmzContentSha256 = "mollitia";
                xAmzCredential = "laborum";
                xAmzDate = "dolores";
                xAmzSecurityToken = "dolorem";
                xAmzSignature = "corporis";
                xAmzSignedHeaders = "explicabo";
            }};            

            GetCampaignStateBatchResponse res = sdk.sdk.getCampaignStateBatch(req);

            if (res.getCampaignStateBatchResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getConnectInstanceConfig

Get the specific Connect instance config.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetConnectInstanceConfigRequest;
import org.openapis.openapi.models.operations.GetConnectInstanceConfigResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("nobis") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetConnectInstanceConfigRequest req = new GetConnectInstanceConfigRequest("enim") {{
                xAmzAlgorithm = "omnis";
                xAmzContentSha256 = "nemo";
                xAmzCredential = "minima";
                xAmzDate = "excepturi";
                xAmzSecurityToken = "accusantium";
                xAmzSignature = "iure";
                xAmzSignedHeaders = "culpa";
            }};            

            GetConnectInstanceConfigResponse res = sdk.sdk.getConnectInstanceConfig(req);

            if (res.getConnectInstanceConfigResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getInstanceOnboardingJobStatus

Get the specific instance onboarding job status.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetInstanceOnboardingJobStatusRequest;
import org.openapis.openapi.models.operations.GetInstanceOnboardingJobStatusResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("doloribus") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetInstanceOnboardingJobStatusRequest req = new GetInstanceOnboardingJobStatusRequest("sapiente") {{
                xAmzAlgorithm = "architecto";
                xAmzContentSha256 = "mollitia";
                xAmzCredential = "dolorem";
                xAmzDate = "culpa";
                xAmzSecurityToken = "consequuntur";
                xAmzSignature = "repellat";
                xAmzSignedHeaders = "mollitia";
            }};            

            GetInstanceOnboardingJobStatusResponse res = sdk.sdk.getInstanceOnboardingJobStatus(req);

            if (res.getInstanceOnboardingJobStatusResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listCampaigns

Provides summary information about the campaigns under the specified Amazon Connect account.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListCampaignsRequest;
import org.openapis.openapi.models.operations.ListCampaignsRequestBody;
import org.openapis.openapi.models.operations.ListCampaignsRequestBodyFilters;
import org.openapis.openapi.models.operations.ListCampaignsResponse;
import org.openapis.openapi.models.shared.InstanceIdFilter;
import org.openapis.openapi.models.shared.InstanceIdFilterOperatorEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("occaecati") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            ListCampaignsRequest req = new ListCampaignsRequest(                new ListCampaignsRequestBody() {{
                                filters = new ListCampaignsRequestBodyFilters() {{
                                    instanceIdFilter = new InstanceIdFilter(InstanceIdFilterOperatorEnum.EQ, "numquam");;
                                }};;
                                maxResults = 414369L;
                                nextToken = "quam";
                            }};) {{
                xAmzAlgorithm = "molestiae";
                xAmzContentSha256 = "velit";
                xAmzCredential = "error";
                xAmzDate = "quia";
                xAmzSecurityToken = "quis";
                xAmzSignature = "vitae";
                xAmzSignedHeaders = "laborum";
                maxResults = "animi";
                nextToken = "enim";
            }};            

            ListCampaignsResponse res = sdk.sdk.listCampaigns(req);

            if (res.listCampaignsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listTagsForResource

List tags for a resource.

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
                .setSecurity(new Security("odit") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            ListTagsForResourceRequest req = new ListTagsForResourceRequest("quo") {{
                xAmzAlgorithm = "sequi";
                xAmzContentSha256 = "tenetur";
                xAmzCredential = "ipsam";
                xAmzDate = "id";
                xAmzSecurityToken = "possimus";
                xAmzSignature = "aut";
                xAmzSignedHeaders = "quasi";
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

## pauseCampaign

Pauses a campaign for the specified Amazon Connect account.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PauseCampaignRequest;
import org.openapis.openapi.models.operations.PauseCampaignResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("error") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            PauseCampaignRequest req = new PauseCampaignRequest("temporibus") {{
                xAmzAlgorithm = "laborum";
                xAmzContentSha256 = "quasi";
                xAmzCredential = "reiciendis";
                xAmzDate = "voluptatibus";
                xAmzSecurityToken = "vero";
                xAmzSignature = "nihil";
                xAmzSignedHeaders = "praesentium";
            }};            

            PauseCampaignResponse res = sdk.sdk.pauseCampaign(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## putDialRequestBatch

Creates dials requests for the specified campaign Amazon Connect account. This API is idempotent.

### Example Usage

```java
package hello.world;

import java.time.OffsetDateTime;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PutDialRequestBatchRequest;
import org.openapis.openapi.models.operations.PutDialRequestBatchRequestBody;
import org.openapis.openapi.models.operations.PutDialRequestBatchResponse;
import org.openapis.openapi.models.shared.DialRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("voluptatibus") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            PutDialRequestBatchRequest req = new PutDialRequestBatchRequest(                new PutDialRequestBatchRequestBody(                new org.openapis.openapi.models.shared.DialRequest[]{{
                                                add(new DialRequest(                new java.util.HashMap<String, String>() {{
                                                                    put("dicta", "harum");
                                                                    put("enim", "accusamus");
                                                                }}, "commodi", OffsetDateTime.parse("2022-10-22T18:12:12.288Z"), "ipsum") {{
                                                    attributes = new java.util.HashMap<String, String>() {{
                                                        put("voluptate", "cum");
                                                        put("perferendis", "doloremque");
                                                        put("reprehenderit", "ut");
                                                    }};
                                                    clientToken = "maiores";
                                                    expirationTime = OffsetDateTime.parse("2022-08-22T19:15:58.586Z");
                                                    phoneNumber = "dolore";
                                                }}),
                                            }});, "quidem") {{
                xAmzAlgorithm = "molestias";
                xAmzContentSha256 = "excepturi";
                xAmzCredential = "pariatur";
                xAmzDate = "modi";
                xAmzSecurityToken = "praesentium";
                xAmzSignature = "rem";
                xAmzSignedHeaders = "voluptates";
            }};            

            PutDialRequestBatchResponse res = sdk.sdk.putDialRequestBatch(req);

            if (res.putDialRequestBatchResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## resumeCampaign

Stops a campaign for the specified Amazon Connect account.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ResumeCampaignRequest;
import org.openapis.openapi.models.operations.ResumeCampaignResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("quasi") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            ResumeCampaignRequest req = new ResumeCampaignRequest("repudiandae") {{
                xAmzAlgorithm = "sint";
                xAmzContentSha256 = "veritatis";
                xAmzCredential = "itaque";
                xAmzDate = "incidunt";
                xAmzSecurityToken = "enim";
                xAmzSignature = "consequatur";
                xAmzSignedHeaders = "est";
            }};            

            ResumeCampaignResponse res = sdk.sdk.resumeCampaign(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## startCampaign

Starts a campaign for the specified Amazon Connect account.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.StartCampaignRequest;
import org.openapis.openapi.models.operations.StartCampaignResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("quibusdam") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            StartCampaignRequest req = new StartCampaignRequest("explicabo") {{
                xAmzAlgorithm = "deserunt";
                xAmzContentSha256 = "distinctio";
                xAmzCredential = "quibusdam";
                xAmzDate = "labore";
                xAmzSecurityToken = "modi";
                xAmzSignature = "qui";
                xAmzSignedHeaders = "aliquid";
            }};            

            StartCampaignResponse res = sdk.sdk.startCampaign(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## startInstanceOnboardingJob

Onboard the specific Amazon Connect instance to Connect Campaigns.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.StartInstanceOnboardingJobRequest;
import org.openapis.openapi.models.operations.StartInstanceOnboardingJobRequestBody;
import org.openapis.openapi.models.operations.StartInstanceOnboardingJobRequestBodyEncryptionConfig;
import org.openapis.openapi.models.operations.StartInstanceOnboardingJobResponse;
import org.openapis.openapi.models.shared.EncryptionTypeEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("cupiditate") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            StartInstanceOnboardingJobRequest req = new StartInstanceOnboardingJobRequest(                new StartInstanceOnboardingJobRequestBody(                new StartInstanceOnboardingJobRequestBodyEncryptionConfig() {{
                                                enabled = false;
                                                encryptionType = EncryptionTypeEnum.KMS;
                                                keyArn = "quos";
                                            }};);, "perferendis") {{
                xAmzAlgorithm = "magni";
                xAmzContentSha256 = "assumenda";
                xAmzCredential = "ipsam";
                xAmzDate = "alias";
                xAmzSecurityToken = "fugit";
                xAmzSignature = "dolorum";
                xAmzSignedHeaders = "excepturi";
            }};            

            StartInstanceOnboardingJobResponse res = sdk.sdk.startInstanceOnboardingJob(req);

            if (res.startInstanceOnboardingJobResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## stopCampaign

Stops a campaign for the specified Amazon Connect account.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.StopCampaignRequest;
import org.openapis.openapi.models.operations.StopCampaignResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("tempora") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            StopCampaignRequest req = new StopCampaignRequest("facilis") {{
                xAmzAlgorithm = "tempore";
                xAmzContentSha256 = "labore";
                xAmzCredential = "delectus";
                xAmzDate = "eum";
                xAmzSecurityToken = "non";
                xAmzSignature = "eligendi";
                xAmzSignedHeaders = "sint";
            }};            

            StopCampaignResponse res = sdk.sdk.stopCampaign(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## tagResource

Tag a resource.

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
                .setSecurity(new Security("aliquid") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            TagResourceRequest req = new TagResourceRequest(                new TagResourceRequestBody(                new java.util.HashMap<String, String>() {{
                                                put("necessitatibus", "sint");
                                                put("officia", "dolor");
                                                put("debitis", "a");
                                            }});, "dolorum") {{
                xAmzAlgorithm = "in";
                xAmzContentSha256 = "in";
                xAmzCredential = "illum";
                xAmzDate = "maiores";
                xAmzSecurityToken = "rerum";
                xAmzSignature = "dicta";
                xAmzSignedHeaders = "magnam";
            }};            

            TagResourceResponse res = sdk.sdk.tagResource(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## untagResource

Untag a resource.

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
                .setSecurity(new Security("cumque") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            UntagResourceRequest req = new UntagResourceRequest("facere",                 new String[]{{
                                add("aliquid"),
                                add("laborum"),
                            }}) {{
                xAmzAlgorithm = "accusamus";
                xAmzContentSha256 = "non";
                xAmzCredential = "occaecati";
                xAmzDate = "enim";
                xAmzSecurityToken = "accusamus";
                xAmzSignature = "delectus";
                xAmzSignedHeaders = "quidem";
            }};            

            UntagResourceResponse res = sdk.sdk.untagResource(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## updateCampaignDialerConfig

Updates the dialer config of a campaign. This API is idempotent.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdateCampaignDialerConfigRequest;
import org.openapis.openapi.models.operations.UpdateCampaignDialerConfigRequestBody;
import org.openapis.openapi.models.operations.UpdateCampaignDialerConfigRequestBodyDialerConfig;
import org.openapis.openapi.models.operations.UpdateCampaignDialerConfigResponse;
import org.openapis.openapi.models.shared.PredictiveDialerConfig;
import org.openapis.openapi.models.shared.ProgressiveDialerConfig;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("provident") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            UpdateCampaignDialerConfigRequest req = new UpdateCampaignDialerConfigRequest(                new UpdateCampaignDialerConfigRequestBody(                new UpdateCampaignDialerConfigRequestBodyDialerConfig() {{
                                                predictiveDialerConfig = new PredictiveDialerConfig(7252.55);;
                                                progressiveDialerConfig = new ProgressiveDialerConfig(6596.69);;
                                            }};);, "blanditiis") {{
                xAmzAlgorithm = "deleniti";
                xAmzContentSha256 = "sapiente";
                xAmzCredential = "amet";
                xAmzDate = "deserunt";
                xAmzSecurityToken = "nisi";
                xAmzSignature = "vel";
                xAmzSignedHeaders = "natus";
            }};            

            UpdateCampaignDialerConfigResponse res = sdk.sdk.updateCampaignDialerConfig(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## updateCampaignName

Updates the name of a campaign. This API is idempotent.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdateCampaignNameRequest;
import org.openapis.openapi.models.operations.UpdateCampaignNameRequestBody;
import org.openapis.openapi.models.operations.UpdateCampaignNameResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("omnis") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            UpdateCampaignNameRequest req = new UpdateCampaignNameRequest(                new UpdateCampaignNameRequestBody("molestiae");, "perferendis") {{
                xAmzAlgorithm = "nihil";
                xAmzContentSha256 = "magnam";
                xAmzCredential = "distinctio";
                xAmzDate = "id";
                xAmzSecurityToken = "labore";
                xAmzSignature = "labore";
                xAmzSignedHeaders = "suscipit";
            }};            

            UpdateCampaignNameResponse res = sdk.sdk.updateCampaignName(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## updateCampaignOutboundCallConfig

Updates the outbound call config of a campaign. This API is idempotent.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdateCampaignOutboundCallConfigRequest;
import org.openapis.openapi.models.operations.UpdateCampaignOutboundCallConfigRequestBody;
import org.openapis.openapi.models.operations.UpdateCampaignOutboundCallConfigRequestBodyAnswerMachineDetectionConfig;
import org.openapis.openapi.models.operations.UpdateCampaignOutboundCallConfigResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("natus") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            UpdateCampaignOutboundCallConfigRequest req = new UpdateCampaignOutboundCallConfigRequest(                new UpdateCampaignOutboundCallConfigRequestBody() {{
                                answerMachineDetectionConfig = new UpdateCampaignOutboundCallConfigRequestBodyAnswerMachineDetectionConfig() {{
                                    enableAnswerMachineDetection = false;
                                }};;
                                connectContactFlowId = "nobis";
                                connectSourcePhoneNumber = "eum";
                            }};, "vero") {{
                xAmzAlgorithm = "aspernatur";
                xAmzContentSha256 = "architecto";
                xAmzCredential = "magnam";
                xAmzDate = "et";
                xAmzSecurityToken = "excepturi";
                xAmzSignature = "ullam";
                xAmzSignedHeaders = "provident";
            }};            

            UpdateCampaignOutboundCallConfigResponse res = sdk.sdk.updateCampaignOutboundCallConfig(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
