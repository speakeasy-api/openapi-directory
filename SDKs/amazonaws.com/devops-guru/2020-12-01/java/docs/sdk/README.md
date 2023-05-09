# SDK

## Overview

<p> Amazon DevOps Guru is a fully managed service that helps you identify anomalous behavior in business critical operational applications. You specify the Amazon Web Services resources that you want DevOps Guru to cover, then the Amazon CloudWatch metrics and Amazon Web Services CloudTrail events related to those resources are analyzed. When anomalous behavior is detected, DevOps Guru creates an <i>insight</i> that includes recommendations, related events, and related metrics that can help you improve your operational applications. For more information, see <a href="https://docs.aws.amazon.com/devops-guru/latest/userguide/welcome.html">What is Amazon DevOps Guru</a>. </p> <p> You can specify 1 or 2 Amazon Simple Notification Service topics so you are notified every time a new insight is created. You can also enable DevOps Guru to generate an OpsItem in Amazon Web Services Systems Manager for each insight to help you manage and track your work addressing insights. </p> <p> To learn about the DevOps Guru workflow, see <a href="https://docs.aws.amazon.com/devops-guru/latest/userguide/welcome.html#how-it-works">How DevOps Guru works</a>. To learn about DevOps Guru concepts, see <a href="https://docs.aws.amazon.com/devops-guru/latest/userguide/concepts.html">Concepts in DevOps Guru</a>. </p>

Amazon Web Services documentation
<https://docs.aws.amazon.com/devops-guru/>
### Available Operations

* [addNotificationChannel](#addnotificationchannel) - <p> Adds a notification channel to DevOps Guru. A notification channel is used to notify you about important DevOps Guru events, such as when an insight is generated. </p> <p>If you use an Amazon SNS topic in another account, you must attach a policy to it that grants DevOps Guru permission to it notifications. DevOps Guru adds the required policy on your behalf to send notifications using Amazon SNS in your account. DevOps Guru only supports standard SNS topics. For more information, see <a href="https://docs.aws.amazon.com/devops-guru/latest/userguide/sns-required-permissions.html">Permissions for cross account Amazon SNS topics</a>.</p> <p>If you use an Amazon SNS topic in another account, you must attach a policy to it that grants DevOps Guru permission to it notifications. DevOps Guru adds the required policy on your behalf to send notifications using Amazon SNS in your account. For more information, see Permissions for cross account Amazon SNS topics.</p> <p>If you use an Amazon SNS topic that is encrypted by an Amazon Web Services Key Management Service customer-managed key (CMK), then you must add permissions to the CMK. For more information, see <a href="https://docs.aws.amazon.com/devops-guru/latest/userguide/sns-kms-permissions.html">Permissions for Amazon Web Services KMS–encrypted Amazon SNS topics</a>.</p>
* [deleteInsight](#deleteinsight) - Deletes the insight along with the associated anomalies, events and recommendations.
* [describeAccountHealth](#describeaccounthealth) -  Returns the number of open reactive insights, the number of open proactive insights, and the number of metrics analyzed in your Amazon Web Services account. Use these numbers to gauge the health of operations in your Amazon Web Services account. 
* [describeAccountOverview](#describeaccountoverview) -  For the time range passed in, returns the number of open reactive insight that were created, the number of open proactive insights that were created, and the Mean Time to Recover (MTTR) for all closed reactive insights. 
* [describeAnomaly](#describeanomaly) -  Returns details about an anomaly that you specify using its ID. 
* [describeEventSourcesConfig](#describeeventsourcesconfig) - Returns the integration status of services that are integrated with DevOps Guru as Consumer via EventBridge. The one service that can be integrated with DevOps Guru is Amazon CodeGuru Profiler, which can produce proactive recommendations which can be stored and viewed in DevOps Guru.
* [describeFeedback](#describefeedback) -  Returns the most recent feedback submitted in the current Amazon Web Services account and Region. 
* [describeInsight](#describeinsight) -  Returns details about an insight that you specify using its ID. 
* [describeOrganizationHealth](#describeorganizationhealth) - Returns active insights, predictive insights, and resource hours analyzed in last hour.
* [describeOrganizationOverview](#describeorganizationoverview) - Returns an overview of your organization's history based on the specified time range. The overview includes the total reactive and proactive insights.
* [describeOrganizationResourceCollectionHealth](#describeorganizationresourcecollectionhealth) - Provides an overview of your system's health. If additional member accounts are part of your organization, you can filter those accounts using the <code>AccountIds</code> field.
* [describeResourceCollectionHealth](#describeresourcecollectionhealth) -  Returns the number of open proactive insights, open reactive insights, and the Mean Time to Recover (MTTR) for all closed insights in resource collections in your account. You specify the type of Amazon Web Services resources collection. The two types of Amazon Web Services resource collections supported are Amazon Web Services CloudFormation stacks and Amazon Web Services resources that contain the same Amazon Web Services tag. DevOps Guru can be configured to analyze the Amazon Web Services resources that are defined in the stacks or that are tagged using the same tag <i>key</i>. You can specify up to 500 Amazon Web Services CloudFormation stacks. 
* [describeServiceIntegration](#describeserviceintegration) -  Returns the integration status of services that are integrated with DevOps Guru. The one service that can be integrated with DevOps Guru is Amazon Web Services Systems Manager, which can be used to create an OpsItem for each generated insight. 
* [getCostEstimation](#getcostestimation) - Returns an estimate of the monthly cost for DevOps Guru to analyze your Amazon Web Services resources. For more information, see <a href="https://docs.aws.amazon.com/devops-guru/latest/userguide/cost-estimate.html">Estimate your Amazon DevOps Guru costs</a> and <a href="http://aws.amazon.com/devops-guru/pricing/">Amazon DevOps Guru pricing</a>.
* [getResourceCollection](#getresourcecollection) -  Returns lists Amazon Web Services resources that are of the specified resource collection type. The two types of Amazon Web Services resource collections supported are Amazon Web Services CloudFormation stacks and Amazon Web Services resources that contain the same Amazon Web Services tag. DevOps Guru can be configured to analyze the Amazon Web Services resources that are defined in the stacks or that are tagged using the same tag <i>key</i>. You can specify up to 500 Amazon Web Services CloudFormation stacks. 
* [listAnomaliesForInsight](#listanomaliesforinsight) -  Returns a list of the anomalies that belong to an insight that you specify using its ID. 
* [listAnomalousLogGroups](#listanomalousloggroups) -  Returns the list of log groups that contain log anomalies. 
* [listEvents](#listevents) -  Returns a list of the events emitted by the resources that are evaluated by DevOps Guru. You can use filters to specify which events are returned. 
* [listInsights](#listinsights) -  Returns a list of insights in your Amazon Web Services account. You can specify which insights are returned by their start time and status (<code>ONGOING</code>, <code>CLOSED</code>, or <code>ANY</code>). 
* [listMonitoredResources](#listmonitoredresources) -  Returns the list of all log groups that are being monitored and tagged by DevOps Guru. 
* [listNotificationChannels](#listnotificationchannels) -  Returns a list of notification channels configured for DevOps Guru. Each notification channel is used to notify you when DevOps Guru generates an insight that contains information about how to improve your operations. The one supported notification channel is Amazon Simple Notification Service (Amazon SNS). 
* [listOrganizationInsights](#listorganizationinsights) - Returns a list of insights associated with the account or OU Id.
* [listRecommendations](#listrecommendations) -  Returns a list of a specified insight's recommendations. Each recommendation includes a list of related metrics and a list of related events. 
* [putFeedback](#putfeedback) -  Collects customer feedback about the specified insight. 
* [removeNotificationChannel](#removenotificationchannel) -  Removes a notification channel from DevOps Guru. A notification channel is used to notify you when DevOps Guru generates an insight that contains information about how to improve your operations. 
* [searchInsights](#searchinsights) - <p> Returns a list of insights in your Amazon Web Services account. You can specify which insights are returned by their start time, one or more statuses (<code>ONGOING</code> or <code>CLOSED</code>), one or more severities (<code>LOW</code>, <code>MEDIUM</code>, and <code>HIGH</code>), and type (<code>REACTIVE</code> or <code>PROACTIVE</code>). </p> <p> Use the <code>Filters</code> parameter to specify status and severity search parameters. Use the <code>Type</code> parameter to specify <code>REACTIVE</code> or <code>PROACTIVE</code> in your search. </p>
* [searchOrganizationInsights](#searchorganizationinsights) - <p> Returns a list of insights in your organization. You can specify which insights are returned by their start time, one or more statuses (<code>ONGOING</code>, <code>CLOSED</code>, and <code>CLOSED</code>), one or more severities (<code>LOW</code>, <code>MEDIUM</code>, and <code>HIGH</code>), and type (<code>REACTIVE</code> or <code>PROACTIVE</code>). </p> <p> Use the <code>Filters</code> parameter to specify status and severity search parameters. Use the <code>Type</code> parameter to specify <code>REACTIVE</code> or <code>PROACTIVE</code> in your search. </p>
* [startCostEstimation](#startcostestimation) - Starts the creation of an estimate of the monthly cost to analyze your Amazon Web Services resources.
* [updateEventSourcesConfig](#updateeventsourcesconfig) - Enables or disables integration with a service that can be integrated with DevOps Guru. The one service that can be integrated with DevOps Guru is Amazon CodeGuru Profiler, which can produce proactive recommendations which can be stored and viewed in DevOps Guru.
* [updateResourceCollection](#updateresourcecollection) -  Updates the collection of resources that DevOps Guru analyzes. The two types of Amazon Web Services resource collections supported are Amazon Web Services CloudFormation stacks and Amazon Web Services resources that contain the same Amazon Web Services tag. DevOps Guru can be configured to analyze the Amazon Web Services resources that are defined in the stacks or that are tagged using the same tag <i>key</i>. You can specify up to 500 Amazon Web Services CloudFormation stacks. This method also creates the IAM role required for you to use DevOps Guru. 
* [updateServiceIntegration](#updateserviceintegration) -  Enables or disables integration with a service that can be integrated with DevOps Guru. The one service that can be integrated with DevOps Guru is Amazon Web Services Systems Manager, which can be used to create an OpsItem for each generated insight. 

## addNotificationChannel

<p> Adds a notification channel to DevOps Guru. A notification channel is used to notify you about important DevOps Guru events, such as when an insight is generated. </p> <p>If you use an Amazon SNS topic in another account, you must attach a policy to it that grants DevOps Guru permission to it notifications. DevOps Guru adds the required policy on your behalf to send notifications using Amazon SNS in your account. DevOps Guru only supports standard SNS topics. For more information, see <a href="https://docs.aws.amazon.com/devops-guru/latest/userguide/sns-required-permissions.html">Permissions for cross account Amazon SNS topics</a>.</p> <p>If you use an Amazon SNS topic in another account, you must attach a policy to it that grants DevOps Guru permission to it notifications. DevOps Guru adds the required policy on your behalf to send notifications using Amazon SNS in your account. For more information, see Permissions for cross account Amazon SNS topics.</p> <p>If you use an Amazon SNS topic that is encrypted by an Amazon Web Services Key Management Service customer-managed key (CMK), then you must add permissions to the CMK. For more information, see <a href="https://docs.aws.amazon.com/devops-guru/latest/userguide/sns-kms-permissions.html">Permissions for Amazon Web Services KMS–encrypted Amazon SNS topics</a>.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.AddNotificationChannelRequest;
import org.openapis.openapi.models.operations.AddNotificationChannelRequestBody;
import org.openapis.openapi.models.operations.AddNotificationChannelRequestBodyConfig;
import org.openapis.openapi.models.operations.AddNotificationChannelResponse;
import org.openapis.openapi.models.shared.InsightSeverityEnum;
import org.openapis.openapi.models.shared.NotificationFilterConfig;
import org.openapis.openapi.models.shared.NotificationMessageTypeEnum;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.SnsChannelConfig;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("suscipit") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            AddNotificationChannelRequest req = new AddNotificationChannelRequest(                new AddNotificationChannelRequestBody(                new AddNotificationChannelRequestBodyConfig() {{
                                                filters = new NotificationFilterConfig() {{
                                                    messageTypes = new org.openapis.openapi.models.shared.NotificationMessageTypeEnum[]{{
                                                        add(NotificationMessageTypeEnum.SEVERITY_UPGRADED),
                                                        add(NotificationMessageTypeEnum.NEW_RECOMMENDATION),
                                                    }};
                                                    severities = new org.openapis.openapi.models.shared.InsightSeverityEnum[]{{
                                                        add(InsightSeverityEnum.MEDIUM),
                                                        add(InsightSeverityEnum.MEDIUM),
                                                        add(InsightSeverityEnum.MEDIUM),
                                                    }};
                                                }};;
                                                sns = new SnsChannelConfig() {{
                                                    topicArn = "recusandae";
                                                }};;
                                            }};);) {{
                xAmzAlgorithm = "temporibus";
                xAmzContentSha256 = "ab";
                xAmzCredential = "quis";
                xAmzDate = "veritatis";
                xAmzSecurityToken = "deserunt";
                xAmzSignature = "perferendis";
                xAmzSignedHeaders = "ipsam";
            }};            

            AddNotificationChannelResponse res = sdk.sdk.addNotificationChannel(req);

            if (res.addNotificationChannelResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## deleteInsight

Deletes the insight along with the associated anomalies, events and recommendations.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteInsightRequest;
import org.openapis.openapi.models.operations.DeleteInsightResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("repellendus") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DeleteInsightRequest req = new DeleteInsightRequest("sapiente") {{
                xAmzAlgorithm = "quo";
                xAmzContentSha256 = "odit";
                xAmzCredential = "at";
                xAmzDate = "at";
                xAmzSecurityToken = "maiores";
                xAmzSignature = "molestiae";
                xAmzSignedHeaders = "quod";
            }};            

            DeleteInsightResponse res = sdk.sdk.deleteInsight(req);

            if (res.deleteInsightResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## describeAccountHealth

 Returns the number of open reactive insights, the number of open proactive insights, and the number of metrics analyzed in your Amazon Web Services account. Use these numbers to gauge the health of operations in your Amazon Web Services account. 

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DescribeAccountHealthRequest;
import org.openapis.openapi.models.operations.DescribeAccountHealthResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("quod") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DescribeAccountHealthRequest req = new DescribeAccountHealthRequest() {{
                xAmzAlgorithm = "esse";
                xAmzContentSha256 = "totam";
                xAmzCredential = "porro";
                xAmzDate = "dolorum";
                xAmzSecurityToken = "dicta";
                xAmzSignature = "nam";
                xAmzSignedHeaders = "officia";
            }};            

            DescribeAccountHealthResponse res = sdk.sdk.describeAccountHealth(req);

            if (res.describeAccountHealthResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## describeAccountOverview

 For the time range passed in, returns the number of open reactive insight that were created, the number of open proactive insights that were created, and the Mean Time to Recover (MTTR) for all closed reactive insights. 

### Example Usage

```java
package hello.world;

import java.time.OffsetDateTime;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DescribeAccountOverviewRequest;
import org.openapis.openapi.models.operations.DescribeAccountOverviewRequestBody;
import org.openapis.openapi.models.operations.DescribeAccountOverviewResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("occaecati") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DescribeAccountOverviewRequest req = new DescribeAccountOverviewRequest(                new DescribeAccountOverviewRequestBody(OffsetDateTime.parse("2022-06-18T20:36:37.412Z")) {{
                                toTime = OffsetDateTime.parse("2020-09-22T07:34:53.140Z");
                            }};) {{
                xAmzAlgorithm = "totam";
                xAmzContentSha256 = "beatae";
                xAmzCredential = "commodi";
                xAmzDate = "molestiae";
                xAmzSecurityToken = "modi";
                xAmzSignature = "qui";
                xAmzSignedHeaders = "impedit";
            }};            

            DescribeAccountOverviewResponse res = sdk.sdk.describeAccountOverview(req);

            if (res.describeAccountOverviewResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## describeAnomaly

 Returns details about an anomaly that you specify using its ID. 

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DescribeAnomalyRequest;
import org.openapis.openapi.models.operations.DescribeAnomalyResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("cum") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DescribeAnomalyRequest req = new DescribeAnomalyRequest("esse") {{
                accountId = "ipsum";
                xAmzAlgorithm = "excepturi";
                xAmzContentSha256 = "aspernatur";
                xAmzCredential = "perferendis";
                xAmzDate = "ad";
                xAmzSecurityToken = "natus";
                xAmzSignature = "sed";
                xAmzSignedHeaders = "iste";
            }};            

            DescribeAnomalyResponse res = sdk.sdk.describeAnomaly(req);

            if (res.describeAnomalyResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## describeEventSourcesConfig

Returns the integration status of services that are integrated with DevOps Guru as Consumer via EventBridge. The one service that can be integrated with DevOps Guru is Amazon CodeGuru Profiler, which can produce proactive recommendations which can be stored and viewed in DevOps Guru.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DescribeEventSourcesConfigRequest;
import org.openapis.openapi.models.operations.DescribeEventSourcesConfigResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("dolor") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DescribeEventSourcesConfigRequest req = new DescribeEventSourcesConfigRequest() {{
                xAmzAlgorithm = "natus";
                xAmzContentSha256 = "laboriosam";
                xAmzCredential = "hic";
                xAmzDate = "saepe";
                xAmzSecurityToken = "fuga";
                xAmzSignature = "in";
                xAmzSignedHeaders = "corporis";
            }};            

            DescribeEventSourcesConfigResponse res = sdk.sdk.describeEventSourcesConfig(req);

            if (res.describeEventSourcesConfigResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## describeFeedback

 Returns the most recent feedback submitted in the current Amazon Web Services account and Region. 

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DescribeFeedbackRequest;
import org.openapis.openapi.models.operations.DescribeFeedbackRequestBody;
import org.openapis.openapi.models.operations.DescribeFeedbackResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("iste") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DescribeFeedbackRequest req = new DescribeFeedbackRequest(                new DescribeFeedbackRequestBody() {{
                                insightId = "iure";
                            }};) {{
                xAmzAlgorithm = "saepe";
                xAmzContentSha256 = "quidem";
                xAmzCredential = "architecto";
                xAmzDate = "ipsa";
                xAmzSecurityToken = "reiciendis";
                xAmzSignature = "est";
                xAmzSignedHeaders = "mollitia";
            }};            

            DescribeFeedbackResponse res = sdk.sdk.describeFeedback(req);

            if (res.describeFeedbackResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## describeInsight

 Returns details about an insight that you specify using its ID. 

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DescribeInsightRequest;
import org.openapis.openapi.models.operations.DescribeInsightResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("laborum") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DescribeInsightRequest req = new DescribeInsightRequest("dolores") {{
                accountId = "dolorem";
                xAmzAlgorithm = "corporis";
                xAmzContentSha256 = "explicabo";
                xAmzCredential = "nobis";
                xAmzDate = "enim";
                xAmzSecurityToken = "omnis";
                xAmzSignature = "nemo";
                xAmzSignedHeaders = "minima";
            }};            

            DescribeInsightResponse res = sdk.sdk.describeInsight(req);

            if (res.describeInsightResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## describeOrganizationHealth

Returns active insights, predictive insights, and resource hours analyzed in last hour.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DescribeOrganizationHealthRequest;
import org.openapis.openapi.models.operations.DescribeOrganizationHealthRequestBody;
import org.openapis.openapi.models.operations.DescribeOrganizationHealthResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("excepturi") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DescribeOrganizationHealthRequest req = new DescribeOrganizationHealthRequest(                new DescribeOrganizationHealthRequestBody() {{
                                accountIds = new String[]{{
                                    add("iure"),
                                }};
                                organizationalUnitIds = new String[]{{
                                    add("doloribus"),
                                    add("sapiente"),
                                    add("architecto"),
                                }};
                            }};) {{
                xAmzAlgorithm = "mollitia";
                xAmzContentSha256 = "dolorem";
                xAmzCredential = "culpa";
                xAmzDate = "consequuntur";
                xAmzSecurityToken = "repellat";
                xAmzSignature = "mollitia";
                xAmzSignedHeaders = "occaecati";
            }};            

            DescribeOrganizationHealthResponse res = sdk.sdk.describeOrganizationHealth(req);

            if (res.describeOrganizationHealthResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## describeOrganizationOverview

Returns an overview of your organization's history based on the specified time range. The overview includes the total reactive and proactive insights.

### Example Usage

```java
package hello.world;

import java.time.OffsetDateTime;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DescribeOrganizationOverviewRequest;
import org.openapis.openapi.models.operations.DescribeOrganizationOverviewRequestBody;
import org.openapis.openapi.models.operations.DescribeOrganizationOverviewResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("numquam") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DescribeOrganizationOverviewRequest req = new DescribeOrganizationOverviewRequest(                new DescribeOrganizationOverviewRequestBody(OffsetDateTime.parse("2022-07-14T19:07:02.935Z")) {{
                                accountIds = new String[]{{
                                    add("velit"),
                                    add("error"),
                                }};
                                organizationalUnitIds = new String[]{{
                                    add("quis"),
                                }};
                                toTime = OffsetDateTime.parse("2022-04-29T17:10:10.440Z");
                            }};) {{
                xAmzAlgorithm = "animi";
                xAmzContentSha256 = "enim";
                xAmzCredential = "odit";
                xAmzDate = "quo";
                xAmzSecurityToken = "sequi";
                xAmzSignature = "tenetur";
                xAmzSignedHeaders = "ipsam";
            }};            

            DescribeOrganizationOverviewResponse res = sdk.sdk.describeOrganizationOverview(req);

            if (res.describeOrganizationOverviewResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## describeOrganizationResourceCollectionHealth

Provides an overview of your system's health. If additional member accounts are part of your organization, you can filter those accounts using the <code>AccountIds</code> field.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DescribeOrganizationResourceCollectionHealthRequest;
import org.openapis.openapi.models.operations.DescribeOrganizationResourceCollectionHealthRequestBody;
import org.openapis.openapi.models.operations.DescribeOrganizationResourceCollectionHealthRequestBodyOrganizationResourceCollectionTypeEnum;
import org.openapis.openapi.models.operations.DescribeOrganizationResourceCollectionHealthResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("id") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DescribeOrganizationResourceCollectionHealthRequest req = new DescribeOrganizationResourceCollectionHealthRequest(                new DescribeOrganizationResourceCollectionHealthRequestBody(DescribeOrganizationResourceCollectionHealthRequestBodyOrganizationResourceCollectionTypeEnum.AWS_TAGS) {{
                                accountIds = new String[]{{
                                    add("quasi"),
                                }};
                                maxResults = 622846L;
                                nextToken = "temporibus";
                                organizationalUnitIds = new String[]{{
                                    add("quasi"),
                                    add("reiciendis"),
                                    add("voluptatibus"),
                                }};
                            }};) {{
                nextToken = "vero";
                xAmzAlgorithm = "nihil";
                xAmzContentSha256 = "praesentium";
                xAmzCredential = "voluptatibus";
                xAmzDate = "ipsa";
                xAmzSecurityToken = "omnis";
                xAmzSignature = "voluptate";
                xAmzSignedHeaders = "cum";
            }};            

            DescribeOrganizationResourceCollectionHealthResponse res = sdk.sdk.describeOrganizationResourceCollectionHealth(req);

            if (res.describeOrganizationResourceCollectionHealthResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## describeResourceCollectionHealth

 Returns the number of open proactive insights, open reactive insights, and the Mean Time to Recover (MTTR) for all closed insights in resource collections in your account. You specify the type of Amazon Web Services resources collection. The two types of Amazon Web Services resource collections supported are Amazon Web Services CloudFormation stacks and Amazon Web Services resources that contain the same Amazon Web Services tag. DevOps Guru can be configured to analyze the Amazon Web Services resources that are defined in the stacks or that are tagged using the same tag <i>key</i>. You can specify up to 500 Amazon Web Services CloudFormation stacks. 

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DescribeResourceCollectionHealthRequest;
import org.openapis.openapi.models.operations.DescribeResourceCollectionHealthResourceCollectionTypeEnum;
import org.openapis.openapi.models.operations.DescribeResourceCollectionHealthResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("perferendis") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DescribeResourceCollectionHealthRequest req = new DescribeResourceCollectionHealthRequest(DescribeResourceCollectionHealthResourceCollectionTypeEnum.AWS_CLOUD_FORMATION) {{
                nextToken = "reprehenderit";
                xAmzAlgorithm = "ut";
                xAmzContentSha256 = "maiores";
                xAmzCredential = "dicta";
                xAmzDate = "corporis";
                xAmzSecurityToken = "dolore";
                xAmzSignature = "iusto";
                xAmzSignedHeaders = "dicta";
            }};            

            DescribeResourceCollectionHealthResponse res = sdk.sdk.describeResourceCollectionHealth(req);

            if (res.describeResourceCollectionHealthResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## describeServiceIntegration

 Returns the integration status of services that are integrated with DevOps Guru. The one service that can be integrated with DevOps Guru is Amazon Web Services Systems Manager, which can be used to create an OpsItem for each generated insight. 

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DescribeServiceIntegrationRequest;
import org.openapis.openapi.models.operations.DescribeServiceIntegrationResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("harum") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DescribeServiceIntegrationRequest req = new DescribeServiceIntegrationRequest() {{
                xAmzAlgorithm = "enim";
                xAmzContentSha256 = "accusamus";
                xAmzCredential = "commodi";
                xAmzDate = "repudiandae";
                xAmzSecurityToken = "quae";
                xAmzSignature = "ipsum";
                xAmzSignedHeaders = "quidem";
            }};            

            DescribeServiceIntegrationResponse res = sdk.sdk.describeServiceIntegration(req);

            if (res.describeServiceIntegrationResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getCostEstimation

Returns an estimate of the monthly cost for DevOps Guru to analyze your Amazon Web Services resources. For more information, see <a href="https://docs.aws.amazon.com/devops-guru/latest/userguide/cost-estimate.html">Estimate your Amazon DevOps Guru costs</a> and <a href="http://aws.amazon.com/devops-guru/pricing/">Amazon DevOps Guru pricing</a>.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetCostEstimationRequest;
import org.openapis.openapi.models.operations.GetCostEstimationResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("molestias") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetCostEstimationRequest req = new GetCostEstimationRequest() {{
                nextToken = "excepturi";
                xAmzAlgorithm = "pariatur";
                xAmzContentSha256 = "modi";
                xAmzCredential = "praesentium";
                xAmzDate = "rem";
                xAmzSecurityToken = "voluptates";
                xAmzSignature = "quasi";
                xAmzSignedHeaders = "repudiandae";
            }};            

            GetCostEstimationResponse res = sdk.sdk.getCostEstimation(req);

            if (res.getCostEstimationResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getResourceCollection

 Returns lists Amazon Web Services resources that are of the specified resource collection type. The two types of Amazon Web Services resource collections supported are Amazon Web Services CloudFormation stacks and Amazon Web Services resources that contain the same Amazon Web Services tag. DevOps Guru can be configured to analyze the Amazon Web Services resources that are defined in the stacks or that are tagged using the same tag <i>key</i>. You can specify up to 500 Amazon Web Services CloudFormation stacks. 

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetResourceCollectionRequest;
import org.openapis.openapi.models.operations.GetResourceCollectionResourceCollectionTypeEnum;
import org.openapis.openapi.models.operations.GetResourceCollectionResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("sint") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetResourceCollectionRequest req = new GetResourceCollectionRequest(GetResourceCollectionResourceCollectionTypeEnum.AWS_CLOUD_FORMATION) {{
                nextToken = "itaque";
                xAmzAlgorithm = "incidunt";
                xAmzContentSha256 = "enim";
                xAmzCredential = "consequatur";
                xAmzDate = "est";
                xAmzSecurityToken = "quibusdam";
                xAmzSignature = "explicabo";
                xAmzSignedHeaders = "deserunt";
            }};            

            GetResourceCollectionResponse res = sdk.sdk.getResourceCollection(req);

            if (res.getResourceCollectionResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listAnomaliesForInsight

 Returns a list of the anomalies that belong to an insight that you specify using its ID. 

### Example Usage

```java
package hello.world;

import java.time.OffsetDateTime;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListAnomaliesForInsightRequest;
import org.openapis.openapi.models.operations.ListAnomaliesForInsightRequestBody;
import org.openapis.openapi.models.operations.ListAnomaliesForInsightRequestBodyFilters;
import org.openapis.openapi.models.operations.ListAnomaliesForInsightRequestBodyStartTimeRange;
import org.openapis.openapi.models.operations.ListAnomaliesForInsightResponse;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.ServiceCollection;
import org.openapis.openapi.models.shared.ServiceNameEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("distinctio") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            ListAnomaliesForInsightRequest req = new ListAnomaliesForInsightRequest("quibusdam",                 new ListAnomaliesForInsightRequestBody() {{
                                accountId = "labore";
                                filters = new ListAnomaliesForInsightRequestBodyFilters() {{
                                    serviceCollection = new ServiceCollection() {{
                                        serviceNames = new org.openapis.openapi.models.shared.ServiceNameEnum[]{{
                                            add(ServiceNameEnum.DYNAMO_DB),
                                            add(ServiceNameEnum.ELASTI_CACHE),
                                        }};
                                    }};;
                                }};;
                                maxResults = 586513L;
                                nextToken = "quos";
                                startTimeRange = new ListAnomaliesForInsightRequestBodyStartTimeRange() {{
                                    fromTime = OffsetDateTime.parse("2022-11-01T19:07:16.800Z");
                                    toTime = OffsetDateTime.parse("2021-11-22T01:26:35.048Z");
                                }};;
                            }};) {{
                maxResults = "alias";
                nextToken = "fugit";
                xAmzAlgorithm = "dolorum";
                xAmzContentSha256 = "excepturi";
                xAmzCredential = "tempora";
                xAmzDate = "facilis";
                xAmzSecurityToken = "tempore";
                xAmzSignature = "labore";
                xAmzSignedHeaders = "delectus";
            }};            

            ListAnomaliesForInsightResponse res = sdk.sdk.listAnomaliesForInsight(req);

            if (res.listAnomaliesForInsightResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listAnomalousLogGroups

 Returns the list of log groups that contain log anomalies. 

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListAnomalousLogGroupsRequest;
import org.openapis.openapi.models.operations.ListAnomalousLogGroupsRequestBody;
import org.openapis.openapi.models.operations.ListAnomalousLogGroupsResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("eum") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            ListAnomalousLogGroupsRequest req = new ListAnomalousLogGroupsRequest(                new ListAnomalousLogGroupsRequestBody("non") {{
                                maxResults = 756107L;
                                nextToken = "sint";
                            }};) {{
                maxResults = "aliquid";
                nextToken = "provident";
                xAmzAlgorithm = "necessitatibus";
                xAmzContentSha256 = "sint";
                xAmzCredential = "officia";
                xAmzDate = "dolor";
                xAmzSecurityToken = "debitis";
                xAmzSignature = "a";
                xAmzSignedHeaders = "dolorum";
            }};            

            ListAnomalousLogGroupsResponse res = sdk.sdk.listAnomalousLogGroups(req);

            if (res.listAnomalousLogGroupsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listEvents

 Returns a list of the events emitted by the resources that are evaluated by DevOps Guru. You can use filters to specify which events are returned. 

### Example Usage

```java
package hello.world;

import java.time.OffsetDateTime;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListEventsRequest;
import org.openapis.openapi.models.operations.ListEventsRequestBody;
import org.openapis.openapi.models.operations.ListEventsRequestBodyFilters;
import org.openapis.openapi.models.operations.ListEventsResponse;
import org.openapis.openapi.models.shared.CloudFormationCollection;
import org.openapis.openapi.models.shared.EventClassEnum;
import org.openapis.openapi.models.shared.EventDataSourceEnum;
import org.openapis.openapi.models.shared.EventTimeRange;
import org.openapis.openapi.models.shared.ResourceCollection;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.TagCollection;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("in") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            ListEventsRequest req = new ListEventsRequest(                new ListEventsRequestBody(                new ListEventsRequestBodyFilters() {{
                                                dataSource = EventDataSourceEnum.AWS_CLOUD_TRAIL;
                                                eventClass = EventClassEnum.SCHEMA_CHANGE;
                                                eventSource = "maiores";
                                                eventTimeRange = new EventTimeRange(OffsetDateTime.parse("2022-10-08T04:08:32.252Z"), OffsetDateTime.parse("2022-03-27T00:52:20.281Z"));;
                                                insightId = "facere";
                                                resourceCollection = new ResourceCollection() {{
                                                    cloudFormation = new CloudFormationCollection() {{
                                                        stackNames = new String[]{{
                                                            add("aliquid"),
                                                            add("laborum"),
                                                        }};
                                                    }};;
                                                    tags = new org.openapis.openapi.models.shared.TagCollection[]{{
                                                        add(new TagCollection("quidem",                 new String[]{{
                                                                            add("nam"),
                                                                            add("id"),
                                                                            add("blanditiis"),
                                                                        }}) {{
                                                            appBoundaryKey = "non";
                                                            tagValues = new String[]{{
                                                                add("enim"),
                                                                add("accusamus"),
                                                                add("delectus"),
                                                            }};
                                                        }}),
                                                        add(new TagCollection("natus",                 new String[]{{
                                                                            add("molestiae"),
                                                                            add("perferendis"),
                                                                            add("nihil"),
                                                                        }}) {{
                                                            appBoundaryKey = "deleniti";
                                                            tagValues = new String[]{{
                                                                add("amet"),
                                                                add("deserunt"),
                                                                add("nisi"),
                                                                add("vel"),
                                                            }};
                                                        }}),
                                                        add(new TagCollection("suscipit",                 new String[]{{
                                                                            add("nobis"),
                                                                            add("eum"),
                                                                            add("vero"),
                                                                        }}) {{
                                                            appBoundaryKey = "magnam";
                                                            tagValues = new String[]{{
                                                                add("id"),
                                                                add("labore"),
                                                                add("labore"),
                                                            }};
                                                        }}),
                                                        add(new TagCollection("et",                 new String[]{{
                                                                            add("ullam"),
                                                                            add("provident"),
                                                                            add("quos"),
                                                                        }}) {{
                                                            appBoundaryKey = "aspernatur";
                                                            tagValues = new String[]{{
                                                                add("magnam"),
                                                            }};
                                                        }}),
                                                    }};
                                                }};;
                                            }};) {{
                                accountId = "sint";
                                maxResults = 33625L;
                                nextToken = "mollitia";
                            }};) {{
                maxResults = "reiciendis";
                nextToken = "mollitia";
                xAmzAlgorithm = "ad";
                xAmzContentSha256 = "eum";
                xAmzCredential = "dolor";
                xAmzDate = "necessitatibus";
                xAmzSecurityToken = "odit";
                xAmzSignature = "nemo";
                xAmzSignedHeaders = "quasi";
            }};            

            ListEventsResponse res = sdk.sdk.listEvents(req);

            if (res.listEventsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listInsights

 Returns a list of insights in your Amazon Web Services account. You can specify which insights are returned by their start time and status (<code>ONGOING</code>, <code>CLOSED</code>, or <code>ANY</code>). 

### Example Usage

```java
package hello.world;

import java.time.OffsetDateTime;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListInsightsRequest;
import org.openapis.openapi.models.operations.ListInsightsRequestBody;
import org.openapis.openapi.models.operations.ListInsightsRequestBodyStatusFilter;
import org.openapis.openapi.models.operations.ListInsightsResponse;
import org.openapis.openapi.models.shared.EndTimeRange;
import org.openapis.openapi.models.shared.InsightTypeEnum;
import org.openapis.openapi.models.shared.ListInsightsAnyStatusFilter;
import org.openapis.openapi.models.shared.ListInsightsClosedStatusFilter;
import org.openapis.openapi.models.shared.ListInsightsOngoingStatusFilter;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.StartTimeRange;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("iure") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            ListInsightsRequest req = new ListInsightsRequest(                new ListInsightsRequestBody(                new ListInsightsRequestBodyStatusFilter() {{
                                                any = new ListInsightsAnyStatusFilter(                new StartTimeRange() {{
                                                                    fromTime = OffsetDateTime.parse("2020-04-29T08:15:14.819Z");
                                                                    toTime = OffsetDateTime.parse("2022-03-12T17:44:26.081Z");
                                                                }};, InsightTypeEnum.PROACTIVE);;
                                                closed = new ListInsightsClosedStatusFilter(                new EndTimeRange() {{
                                                                    fromTime = OffsetDateTime.parse("2022-02-08T00:19:59.821Z");
                                                                    toTime = OffsetDateTime.parse("2022-11-25T15:46:28.441Z");
                                                                }};, InsightTypeEnum.PROACTIVE);;
                                                ongoing = new ListInsightsOngoingStatusFilter(InsightTypeEnum.REACTIVE);;
                                            }};) {{
                                maxResults = 714242L;
                                nextToken = "nihil";
                            }};) {{
                maxResults = "repellat";
                nextToken = "quibusdam";
                xAmzAlgorithm = "sed";
                xAmzContentSha256 = "saepe";
                xAmzCredential = "pariatur";
                xAmzDate = "accusantium";
                xAmzSecurityToken = "consequuntur";
                xAmzSignature = "praesentium";
                xAmzSignedHeaders = "natus";
            }};            

            ListInsightsResponse res = sdk.sdk.listInsights(req);

            if (res.listInsightsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listMonitoredResources

 Returns the list of all log groups that are being monitored and tagged by DevOps Guru. 

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListMonitoredResourcesRequest;
import org.openapis.openapi.models.operations.ListMonitoredResourcesRequestBody;
import org.openapis.openapi.models.operations.ListMonitoredResourcesRequestBodyFilters;
import org.openapis.openapi.models.operations.ListMonitoredResourcesResponse;
import org.openapis.openapi.models.shared.ResourcePermissionEnum;
import org.openapis.openapi.models.shared.ResourceTypeFilterEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("magni") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            ListMonitoredResourcesRequest req = new ListMonitoredResourcesRequest(                new ListMonitoredResourcesRequestBody() {{
                                filters = new ListMonitoredResourcesRequestBodyFilters() {{
                                    resourcePermission = ResourcePermissionEnum.FULL_PERMISSION;
                                    resourceTypeFilters = new org.openapis.openapi.models.shared.ResourceTypeFilterEnum[]{{
                                        add(ResourceTypeFilterEnum.SAGEMAKER_ENDPOINT),
                                        add(ResourceTypeFilterEnum.SNS_TOPIC),
                                        add(ResourceTypeFilterEnum.S3_BUCKET),
                                        add(ResourceTypeFilterEnum.ELASTICACHE_CACHE_CLUSTER),
                                    }};
                                }};;
                                maxResults = 569101L;
                                nextToken = "odit";
                            }};) {{
                maxResults = "ea";
                nextToken = "accusantium";
                xAmzAlgorithm = "ab";
                xAmzContentSha256 = "maiores";
                xAmzCredential = "quidem";
                xAmzDate = "ipsam";
                xAmzSecurityToken = "voluptate";
                xAmzSignature = "autem";
                xAmzSignedHeaders = "nam";
            }};            

            ListMonitoredResourcesResponse res = sdk.sdk.listMonitoredResources(req);

            if (res.listMonitoredResourcesResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listNotificationChannels

 Returns a list of notification channels configured for DevOps Guru. Each notification channel is used to notify you when DevOps Guru generates an insight that contains information about how to improve your operations. The one supported notification channel is Amazon Simple Notification Service (Amazon SNS). 

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListNotificationChannelsRequest;
import org.openapis.openapi.models.operations.ListNotificationChannelsRequestBody;
import org.openapis.openapi.models.operations.ListNotificationChannelsResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("eaque") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            ListNotificationChannelsRequest req = new ListNotificationChannelsRequest(                new ListNotificationChannelsRequestBody() {{
                                nextToken = "pariatur";
                            }};) {{
                nextToken = "nemo";
                xAmzAlgorithm = "voluptatibus";
                xAmzContentSha256 = "perferendis";
                xAmzCredential = "fugiat";
                xAmzDate = "amet";
                xAmzSecurityToken = "aut";
                xAmzSignature = "cumque";
                xAmzSignedHeaders = "corporis";
            }};            

            ListNotificationChannelsResponse res = sdk.sdk.listNotificationChannels(req);

            if (res.listNotificationChannelsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listOrganizationInsights

Returns a list of insights associated with the account or OU Id.

### Example Usage

```java
package hello.world;

import java.time.OffsetDateTime;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListOrganizationInsightsRequest;
import org.openapis.openapi.models.operations.ListOrganizationInsightsRequestBody;
import org.openapis.openapi.models.operations.ListOrganizationInsightsRequestBodyStatusFilter;
import org.openapis.openapi.models.operations.ListOrganizationInsightsResponse;
import org.openapis.openapi.models.shared.EndTimeRange;
import org.openapis.openapi.models.shared.InsightTypeEnum;
import org.openapis.openapi.models.shared.ListInsightsAnyStatusFilter;
import org.openapis.openapi.models.shared.ListInsightsClosedStatusFilter;
import org.openapis.openapi.models.shared.ListInsightsOngoingStatusFilter;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.StartTimeRange;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("hic") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            ListOrganizationInsightsRequest req = new ListOrganizationInsightsRequest(                new ListOrganizationInsightsRequestBody(                new ListOrganizationInsightsRequestBodyStatusFilter() {{
                                                any = new ListInsightsAnyStatusFilter(                new StartTimeRange() {{
                                                                    fromTime = OffsetDateTime.parse("2021-07-02T12:00:47.197Z");
                                                                    toTime = OffsetDateTime.parse("2022-08-30T02:49:20.597Z");
                                                                }};, InsightTypeEnum.PROACTIVE);;
                                                closed = new ListInsightsClosedStatusFilter(                new EndTimeRange() {{
                                                                    fromTime = OffsetDateTime.parse("2022-12-12T03:59:56.327Z");
                                                                    toTime = OffsetDateTime.parse("2022-10-20T00:01:48.775Z");
                                                                }};, InsightTypeEnum.REACTIVE);;
                                                ongoing = new ListInsightsOngoingStatusFilter(InsightTypeEnum.REACTIVE);;
                                            }};) {{
                                accountIds = new String[]{{
                                    add("minus"),
                                }};
                                maxResults = 463451L;
                                nextToken = "dolor";
                                organizationalUnitIds = new String[]{{
                                    add("nostrum"),
                                    add("hic"),
                                    add("recusandae"),
                                    add("omnis"),
                                }};
                            }};) {{
                maxResults = "facilis";
                nextToken = "perspiciatis";
                xAmzAlgorithm = "voluptatem";
                xAmzContentSha256 = "porro";
                xAmzCredential = "consequuntur";
                xAmzDate = "blanditiis";
                xAmzSecurityToken = "error";
                xAmzSignature = "eaque";
                xAmzSignedHeaders = "occaecati";
            }};            

            ListOrganizationInsightsResponse res = sdk.sdk.listOrganizationInsights(req);

            if (res.listOrganizationInsightsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listRecommendations

 Returns a list of a specified insight's recommendations. Each recommendation includes a list of related metrics and a list of related events. 

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListRecommendationsRequest;
import org.openapis.openapi.models.operations.ListRecommendationsRequestBody;
import org.openapis.openapi.models.operations.ListRecommendationsRequestBodyLocaleEnum;
import org.openapis.openapi.models.operations.ListRecommendationsResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("rerum") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            ListRecommendationsRequest req = new ListRecommendationsRequest(                new ListRecommendationsRequestBody("adipisci") {{
                                accountId = "asperiores";
                                locale = ListRecommendationsRequestBodyLocaleEnum.ZH_TW;
                                nextToken = "modi";
                            }};) {{
                nextToken = "iste";
                xAmzAlgorithm = "dolorum";
                xAmzContentSha256 = "deleniti";
                xAmzCredential = "pariatur";
                xAmzDate = "provident";
                xAmzSecurityToken = "nobis";
                xAmzSignature = "libero";
                xAmzSignedHeaders = "delectus";
            }};            

            ListRecommendationsResponse res = sdk.sdk.listRecommendations(req);

            if (res.listRecommendationsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## putFeedback

 Collects customer feedback about the specified insight. 

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PutFeedbackRequest;
import org.openapis.openapi.models.operations.PutFeedbackRequestBody;
import org.openapis.openapi.models.operations.PutFeedbackRequestBodyInsightFeedback;
import org.openapis.openapi.models.operations.PutFeedbackResponse;
import org.openapis.openapi.models.shared.InsightFeedbackOptionEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("quaerat") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            PutFeedbackRequest req = new PutFeedbackRequest(                new PutFeedbackRequestBody() {{
                                insightFeedback = new PutFeedbackRequestBodyInsightFeedback() {{
                                    feedback = InsightFeedbackOptionEnum.ALERT_TOO_SENSITIVE;
                                    id = "633323f9-b77f-43a4-9006-74ebf69280d1";
                                }};;
                            }};) {{
                xAmzAlgorithm = "soluta";
                xAmzContentSha256 = "dolorum";
                xAmzCredential = "iusto";
                xAmzDate = "voluptate";
                xAmzSecurityToken = "dolorum";
                xAmzSignature = "deleniti";
                xAmzSignedHeaders = "omnis";
            }};            

            PutFeedbackResponse res = sdk.sdk.putFeedback(req);

            if (res.putFeedbackResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## removeNotificationChannel

 Removes a notification channel from DevOps Guru. A notification channel is used to notify you when DevOps Guru generates an insight that contains information about how to improve your operations. 

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.RemoveNotificationChannelRequest;
import org.openapis.openapi.models.operations.RemoveNotificationChannelResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("necessitatibus") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            RemoveNotificationChannelRequest req = new RemoveNotificationChannelRequest("distinctio") {{
                xAmzAlgorithm = "asperiores";
                xAmzContentSha256 = "nihil";
                xAmzCredential = "ipsum";
                xAmzDate = "voluptate";
                xAmzSecurityToken = "id";
                xAmzSignature = "saepe";
                xAmzSignedHeaders = "eius";
            }};            

            RemoveNotificationChannelResponse res = sdk.sdk.removeNotificationChannel(req);

            if (res.removeNotificationChannelResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## searchInsights

<p> Returns a list of insights in your Amazon Web Services account. You can specify which insights are returned by their start time, one or more statuses (<code>ONGOING</code> or <code>CLOSED</code>), one or more severities (<code>LOW</code>, <code>MEDIUM</code>, and <code>HIGH</code>), and type (<code>REACTIVE</code> or <code>PROACTIVE</code>). </p> <p> Use the <code>Filters</code> parameter to specify status and severity search parameters. Use the <code>Type</code> parameter to specify <code>REACTIVE</code> or <code>PROACTIVE</code> in your search. </p>

### Example Usage

```java
package hello.world;

import java.time.OffsetDateTime;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.SearchInsightsRequest;
import org.openapis.openapi.models.operations.SearchInsightsRequestBody;
import org.openapis.openapi.models.operations.SearchInsightsRequestBodyFilters;
import org.openapis.openapi.models.operations.SearchInsightsRequestBodyStartTimeRange;
import org.openapis.openapi.models.operations.SearchInsightsRequestBodyTypeEnum;
import org.openapis.openapi.models.operations.SearchInsightsResponse;
import org.openapis.openapi.models.shared.CloudFormationCollection;
import org.openapis.openapi.models.shared.InsightSeverityEnum;
import org.openapis.openapi.models.shared.InsightStatusEnum;
import org.openapis.openapi.models.shared.ResourceCollection;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.ServiceCollection;
import org.openapis.openapi.models.shared.ServiceNameEnum;
import org.openapis.openapi.models.shared.TagCollection;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("aspernatur") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            SearchInsightsRequest req = new SearchInsightsRequest(                new SearchInsightsRequestBody(                new SearchInsightsRequestBodyStartTimeRange() {{
                                                fromTime = OffsetDateTime.parse("2022-10-09T08:02:18.659Z");
                                                toTime = OffsetDateTime.parse("2020-05-10T15:56:07.975Z");
                                            }};, SearchInsightsRequestBodyTypeEnum.REACTIVE) {{
                                filters = new SearchInsightsRequestBodyFilters() {{
                                    resourceCollection = new ResourceCollection() {{
                                        cloudFormation = new CloudFormationCollection() {{
                                            stackNames = new String[]{{
                                                add("suscipit"),
                                                add("deserunt"),
                                                add("provident"),
                                                add("minima"),
                                            }};
                                        }};;
                                        tags = new org.openapis.openapi.models.shared.TagCollection[]{{
                                            add(new TagCollection("tempora",                 new String[]{{
                                                                add("quod"),
                                                                add("officiis"),
                                                            }}) {{
                                                appBoundaryKey = "totam";
                                                tagValues = new String[]{{
                                                    add("alias"),
                                                    add("at"),
                                                    add("quaerat"),
                                                }};
                                            }}),
                                            add(new TagCollection("iusto",                 new String[]{{
                                                                add("quisquam"),
                                                            }}) {{
                                                appBoundaryKey = "qui";
                                                tagValues = new String[]{{
                                                    add("a"),
                                                    add("esse"),
                                                    add("harum"),
                                                }};
                                            }}),
                                            add(new TagCollection("accusamus",                 new String[]{{
                                                                add("enim"),
                                                                add("dolorem"),
                                                            }}) {{
                                                appBoundaryKey = "tenetur";
                                                tagValues = new String[]{{
                                                    add("tempore"),
                                                }};
                                            }}),
                                            add(new TagCollection("neque",                 new String[]{{
                                                                add("vel"),
                                                            }}) {{
                                                appBoundaryKey = "sapiente";
                                                tagValues = new String[]{{
                                                    add("nihil"),
                                                    add("sit"),
                                                    add("expedita"),
                                                }};
                                            }}),
                                        }};
                                    }};;
                                    serviceCollection = new ServiceCollection() {{
                                        serviceNames = new org.openapis.openapi.models.shared.ServiceNameEnum[]{{
                                            add(ServiceNameEnum.ELASTI_CACHE),
                                            add(ServiceNameEnum.RDS),
                                            add(ServiceNameEnum.ES),
                                        }};
                                    }};;
                                    severities = new org.openapis.openapi.models.shared.InsightSeverityEnum[]{{
                                        add(InsightSeverityEnum.LOW),
                                    }};
                                    statuses = new org.openapis.openapi.models.shared.InsightStatusEnum[]{{
                                        add(InsightStatusEnum.CLOSED),
                                    }};
                                }};;
                                maxResults = 807581L;
                                nextToken = "pariatur";
                            }};) {{
                maxResults = "soluta";
                nextToken = "dicta";
                xAmzAlgorithm = "laborum";
                xAmzContentSha256 = "totam";
                xAmzCredential = "incidunt";
                xAmzDate = "aspernatur";
                xAmzSecurityToken = "dolores";
                xAmzSignature = "distinctio";
                xAmzSignedHeaders = "facilis";
            }};            

            SearchInsightsResponse res = sdk.sdk.searchInsights(req);

            if (res.searchInsightsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## searchOrganizationInsights

<p> Returns a list of insights in your organization. You can specify which insights are returned by their start time, one or more statuses (<code>ONGOING</code>, <code>CLOSED</code>, and <code>CLOSED</code>), one or more severities (<code>LOW</code>, <code>MEDIUM</code>, and <code>HIGH</code>), and type (<code>REACTIVE</code> or <code>PROACTIVE</code>). </p> <p> Use the <code>Filters</code> parameter to specify status and severity search parameters. Use the <code>Type</code> parameter to specify <code>REACTIVE</code> or <code>PROACTIVE</code> in your search. </p>

### Example Usage

```java
package hello.world;

import java.time.OffsetDateTime;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.SearchOrganizationInsightsRequest;
import org.openapis.openapi.models.operations.SearchOrganizationInsightsRequestBody;
import org.openapis.openapi.models.operations.SearchOrganizationInsightsRequestBodyFilters;
import org.openapis.openapi.models.operations.SearchOrganizationInsightsRequestBodyStartTimeRange;
import org.openapis.openapi.models.operations.SearchOrganizationInsightsRequestBodyTypeEnum;
import org.openapis.openapi.models.operations.SearchOrganizationInsightsResponse;
import org.openapis.openapi.models.shared.CloudFormationCollection;
import org.openapis.openapi.models.shared.InsightSeverityEnum;
import org.openapis.openapi.models.shared.InsightStatusEnum;
import org.openapis.openapi.models.shared.ResourceCollection;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.ServiceCollection;
import org.openapis.openapi.models.shared.ServiceNameEnum;
import org.openapis.openapi.models.shared.TagCollection;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("aliquid") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            SearchOrganizationInsightsRequest req = new SearchOrganizationInsightsRequest(                new SearchOrganizationInsightsRequestBody(                new String[]{{
                                                add("molestias"),
                                                add("temporibus"),
                                            }},                 new SearchOrganizationInsightsRequestBodyStartTimeRange() {{
                                                fromTime = OffsetDateTime.parse("2022-10-18T05:22:32.548Z");
                                                toTime = OffsetDateTime.parse("2022-11-01T18:57:36.196Z");
                                            }};, SearchOrganizationInsightsRequestBodyTypeEnum.REACTIVE) {{
                                filters = new SearchOrganizationInsightsRequestBodyFilters() {{
                                    resourceCollection = new ResourceCollection() {{
                                        cloudFormation = new CloudFormationCollection() {{
                                            stackNames = new String[]{{
                                                add("ullam"),
                                            }};
                                        }};;
                                        tags = new org.openapis.openapi.models.shared.TagCollection[]{{
                                            add(new TagCollection("soluta",                 new String[]{{
                                                                add("et"),
                                                                add("saepe"),
                                                                add("ipsum"),
                                                            }}) {{
                                                appBoundaryKey = "hic";
                                                tagValues = new String[]{{
                                                    add("cumque"),
                                                }};
                                            }}),
                                            add(new TagCollection("aperiam",                 new String[]{{
                                                                add("dolorem"),
                                                                add("dolore"),
                                                                add("labore"),
                                                                add("adipisci"),
                                                            }}) {{
                                                appBoundaryKey = "veritatis";
                                                tagValues = new String[]{{
                                                    add("quos"),
                                                    add("tempore"),
                                                    add("cupiditate"),
                                                }};
                                            }}),
                                            add(new TagCollection("aut",                 new String[]{{
                                                                add("itaque"),
                                                                add("consequatur"),
                                                                add("est"),
                                                            }}) {{
                                                appBoundaryKey = "dolorum";
                                                tagValues = new String[]{{
                                                    add("quae"),
                                                }};
                                            }}),
                                        }};
                                    }};;
                                    serviceCollection = new ServiceCollection() {{
                                        serviceNames = new org.openapis.openapi.models.shared.ServiceNameEnum[]{{
                                            add(ServiceNameEnum.S3),
                                            add(ServiceNameEnum.SWF),
                                            add(ServiceNameEnum.EKS),
                                            add(ServiceNameEnum.REDSHIFT),
                                        }};
                                    }};;
                                    severities = new org.openapis.openapi.models.shared.InsightSeverityEnum[]{{
                                        add(InsightSeverityEnum.LOW),
                                        add(InsightSeverityEnum.LOW),
                                        add(InsightSeverityEnum.MEDIUM),
                                    }};
                                    statuses = new org.openapis.openapi.models.shared.InsightStatusEnum[]{{
                                        add(InsightStatusEnum.CLOSED),
                                        add(InsightStatusEnum.CLOSED),
                                    }};
                                }};;
                                maxResults = 787542L;
                                nextToken = "vero";
                            }};) {{
                maxResults = "omnis";
                nextToken = "quis";
                xAmzAlgorithm = "ipsum";
                xAmzContentSha256 = "delectus";
                xAmzCredential = "voluptate";
                xAmzDate = "consectetur";
                xAmzSecurityToken = "vero";
                xAmzSignature = "tenetur";
                xAmzSignedHeaders = "dignissimos";
            }};            

            SearchOrganizationInsightsResponse res = sdk.sdk.searchOrganizationInsights(req);

            if (res.searchOrganizationInsightsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## startCostEstimation

Starts the creation of an estimate of the monthly cost to analyze your Amazon Web Services resources.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.StartCostEstimationRequest;
import org.openapis.openapi.models.operations.StartCostEstimationRequestBody;
import org.openapis.openapi.models.operations.StartCostEstimationRequestBodyResourceCollection;
import org.openapis.openapi.models.operations.StartCostEstimationResponse;
import org.openapis.openapi.models.shared.CloudFormationCostEstimationResourceCollectionFilter;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.TagCostEstimationResourceCollectionFilter;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("hic") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            StartCostEstimationRequest req = new StartCostEstimationRequest(                new StartCostEstimationRequestBody(                new StartCostEstimationRequestBodyResourceCollection() {{
                                                cloudFormation = new CloudFormationCostEstimationResourceCollectionFilter() {{
                                                    stackNames = new String[]{{
                                                        add("quod"),
                                                        add("odio"),
                                                        add("similique"),
                                                    }};
                                                }};;
                                                tags = new org.openapis.openapi.models.shared.TagCostEstimationResourceCollectionFilter[]{{
                                                    add(new TagCostEstimationResourceCollectionFilter("illum",                 new String[]{{
                                                                        add("natus"),
                                                                    }}) {{
                                                        appBoundaryKey = "vero";
                                                        tagValues = new String[]{{
                                                            add("dolore"),
                                                            add("quibusdam"),
                                                        }};
                                                    }}),
                                                    add(new TagCostEstimationResourceCollectionFilter("exercitationem",                 new String[]{{
                                                                        add("fugit"),
                                                                        add("porro"),
                                                                        add("maiores"),
                                                                        add("doloribus"),
                                                                    }}) {{
                                                        appBoundaryKey = "impedit";
                                                        tagValues = new String[]{{
                                                            add("voluptatibus"),
                                                        }};
                                                    }}),
                                                    add(new TagCostEstimationResourceCollectionFilter("ipsam",                 new String[]{{
                                                                        add("aspernatur"),
                                                                        add("vel"),
                                                                    }}) {{
                                                        appBoundaryKey = "iusto";
                                                        tagValues = new String[]{{
                                                            add("ducimus"),
                                                            add("alias"),
                                                            add("officia"),
                                                            add("tempora"),
                                                        }};
                                                    }}),
                                                }};
                                            }};) {{
                                clientToken = "possimus";
                            }};) {{
                xAmzAlgorithm = "magnam";
                xAmzContentSha256 = "ratione";
                xAmzCredential = "ex";
                xAmzDate = "laudantium";
                xAmzSecurityToken = "dicta";
                xAmzSignature = "dolor";
                xAmzSignedHeaders = "maiores";
            }};            

            StartCostEstimationResponse res = sdk.sdk.startCostEstimation(req);

            if (res.startCostEstimationResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## updateEventSourcesConfig

Enables or disables integration with a service that can be integrated with DevOps Guru. The one service that can be integrated with DevOps Guru is Amazon CodeGuru Profiler, which can produce proactive recommendations which can be stored and viewed in DevOps Guru.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdateEventSourcesConfigRequest;
import org.openapis.openapi.models.operations.UpdateEventSourcesConfigRequestBody;
import org.openapis.openapi.models.operations.UpdateEventSourcesConfigRequestBodyEventSources;
import org.openapis.openapi.models.operations.UpdateEventSourcesConfigResponse;
import org.openapis.openapi.models.shared.AmazonCodeGuruProfilerIntegration;
import org.openapis.openapi.models.shared.EventSourceOptInStatusEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("quasi") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            UpdateEventSourcesConfigRequest req = new UpdateEventSourcesConfigRequest(                new UpdateEventSourcesConfigRequestBody() {{
                                eventSources = new UpdateEventSourcesConfigRequestBodyEventSources() {{
                                    amazonCodeGuruProfiler = new AmazonCodeGuruProfilerIntegration() {{
                                        status = EventSourceOptInStatusEnum.ENABLED;
                                    }};;
                                }};;
                            }};) {{
                xAmzAlgorithm = "nulla";
                xAmzContentSha256 = "excepturi";
                xAmzCredential = "voluptatibus";
                xAmzDate = "nostrum";
                xAmzSecurityToken = "sapiente";
                xAmzSignature = "quisquam";
                xAmzSignedHeaders = "saepe";
            }};            

            UpdateEventSourcesConfigResponse res = sdk.sdk.updateEventSourcesConfig(req);

            if (res.updateEventSourcesConfigResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## updateResourceCollection

 Updates the collection of resources that DevOps Guru analyzes. The two types of Amazon Web Services resource collections supported are Amazon Web Services CloudFormation stacks and Amazon Web Services resources that contain the same Amazon Web Services tag. DevOps Guru can be configured to analyze the Amazon Web Services resources that are defined in the stacks or that are tagged using the same tag <i>key</i>. You can specify up to 500 Amazon Web Services CloudFormation stacks. This method also creates the IAM role required for you to use DevOps Guru. 

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdateResourceCollectionRequest;
import org.openapis.openapi.models.operations.UpdateResourceCollectionRequestBody;
import org.openapis.openapi.models.operations.UpdateResourceCollectionRequestBodyActionEnum;
import org.openapis.openapi.models.operations.UpdateResourceCollectionRequestBodyResourceCollection;
import org.openapis.openapi.models.operations.UpdateResourceCollectionResponse;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.UpdateCloudFormationCollectionFilter;
import org.openapis.openapi.models.shared.UpdateTagCollectionFilter;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("ea") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            UpdateResourceCollectionRequest req = new UpdateResourceCollectionRequest(                new UpdateResourceCollectionRequestBody(UpdateResourceCollectionRequestBodyActionEnum.REMOVE,                 new UpdateResourceCollectionRequestBodyResourceCollection() {{
                                                cloudFormation = new UpdateCloudFormationCollectionFilter() {{
                                                    stackNames = new String[]{{
                                                        add("veniam"),
                                                        add("aliquid"),
                                                    }};
                                                }};;
                                                tags = new org.openapis.openapi.models.shared.UpdateTagCollectionFilter[]{{
                                                    add(new UpdateTagCollectionFilter("recusandae",                 new String[]{{
                                                                        add("minima"),
                                                                    }}) {{
                                                        appBoundaryKey = "magnam";
                                                        tagValues = new String[]{{
                                                            add("quo"),
                                                            add("consectetur"),
                                                        }};
                                                    }}),
                                                }};
                                            }};);) {{
                xAmzAlgorithm = "eaque";
                xAmzContentSha256 = "a";
                xAmzCredential = "libero";
                xAmzDate = "aut";
                xAmzSecurityToken = "aut";
                xAmzSignature = "deleniti";
                xAmzSignedHeaders = "impedit";
            }};            

            UpdateResourceCollectionResponse res = sdk.sdk.updateResourceCollection(req);

            if (res.updateResourceCollectionResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## updateServiceIntegration

 Enables or disables integration with a service that can be integrated with DevOps Guru. The one service that can be integrated with DevOps Guru is Amazon Web Services Systems Manager, which can be used to create an OpsItem for each generated insight. 

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdateServiceIntegrationRequest;
import org.openapis.openapi.models.operations.UpdateServiceIntegrationRequestBody;
import org.openapis.openapi.models.operations.UpdateServiceIntegrationRequestBodyServiceIntegration;
import org.openapis.openapi.models.operations.UpdateServiceIntegrationResponse;
import org.openapis.openapi.models.shared.LogsAnomalyDetectionIntegrationConfig;
import org.openapis.openapi.models.shared.OpsCenterIntegrationConfig;
import org.openapis.openapi.models.shared.OptInStatusEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("aliquam") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            UpdateServiceIntegrationRequest req = new UpdateServiceIntegrationRequest(                new UpdateServiceIntegrationRequestBody(                new UpdateServiceIntegrationRequestBodyServiceIntegration() {{
                                                logsAnomalyDetection = new LogsAnomalyDetectionIntegrationConfig() {{
                                                    optInStatus = OptInStatusEnum.ENABLED;
                                                }};;
                                                opsCenter = new OpsCenterIntegrationConfig() {{
                                                    optInStatus = OptInStatusEnum.DISABLED;
                                                }};;
                                            }};);) {{
                xAmzAlgorithm = "inventore";
                xAmzContentSha256 = "non";
                xAmzCredential = "et";
                xAmzDate = "dolorum";
                xAmzSecurityToken = "laborum";
                xAmzSignature = "placeat";
                xAmzSignedHeaders = "velit";
            }};            

            UpdateServiceIntegrationResponse res = sdk.sdk.updateServiceIntegration(req);

            if (res.updateServiceIntegrationResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
