# SDK

## Overview

<p>Amazon Augmented AI (Amazon A2I) adds the benefit of human judgment to any machine learning application. When an AI application can't evaluate data with a high degree of confidence, human reviewers can take over. This human review is called a human review workflow. To create and start a human review workflow, you need three resources: a <i>worker task template</i>, a <i>flow definition</i>, and a <i>human loop</i>.</p> <p>For information about these resources and prerequisites for using Amazon A2I, see <a href="https://docs.aws.amazon.com/sagemaker/latest/dg/a2i-getting-started.html">Get Started with Amazon Augmented AI</a> in the Amazon SageMaker Developer Guide.</p> <p>This API reference includes information about API actions and data types that you can use to interact with Amazon A2I programmatically. Use this guide to:</p> <ul> <li> <p>Start a human loop with the <code>StartHumanLoop</code> operation when using Amazon A2I with a <i>custom task type</i>. To learn more about the difference between custom and built-in task types, see <a href="https://docs.aws.amazon.com/sagemaker/latest/dg/a2i-task-types-general.html">Use Task Types </a>. To learn how to start a human loop using this API, see <a href="https://docs.aws.amazon.com/sagemaker/latest/dg/a2i-start-human-loop.html#a2i-instructions-starthumanloop">Create and Start a Human Loop for a Custom Task Type </a> in the Amazon SageMaker Developer Guide.</p> </li> <li> <p>Manage your human loops. You can list all human loops that you have created, describe individual human loops, and stop and delete human loops. To learn more, see <a href="https://docs.aws.amazon.com/sagemaker/latest/dg/a2i-monitor-humanloop-results.html">Monitor and Manage Your Human Loop </a> in the Amazon SageMaker Developer Guide.</p> </li> </ul> <p>Amazon A2I integrates APIs from various AWS services to create and start human review workflows for those services. To learn how Amazon A2I uses these APIs, see <a href="https://docs.aws.amazon.com/sagemaker/latest/dg/a2i-api-references.html">Use APIs in Amazon A2I</a> in the Amazon SageMaker Developer Guide.</p>

Amazon Web Services documentation
<https://docs.aws.amazon.com/sagemaker/>
### Available Operations

* [deleteHumanLoop](#deletehumanloop) - <p>Deletes the specified human loop for a flow definition.</p> <p>If the human loop was deleted, this operation will return a <code>ResourceNotFoundException</code>. </p>
* [describeHumanLoop](#describehumanloop) - Returns information about the specified human loop. If the human loop was deleted, this operation will return a <code>ResourceNotFoundException</code> error. 
* [listHumanLoops](#listhumanloops) - Returns information about human loops, given the specified parameters. If a human loop was deleted, it will not be included.
* [startHumanLoop](#starthumanloop) - Starts a human loop, provided that at least one activation condition is met.
* [stopHumanLoop](#stophumanloop) - Stops the specified human loop.

## deleteHumanLoop

<p>Deletes the specified human loop for a flow definition.</p> <p>If the human loop was deleted, this operation will return a <code>ResourceNotFoundException</code>. </p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteHumanLoopRequest;
import org.openapis.openapi.models.operations.DeleteHumanLoopResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("error") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DeleteHumanLoopRequest req = new DeleteHumanLoopRequest("deserunt") {{
                xAmzAlgorithm = "suscipit";
                xAmzContentSha256 = "iure";
                xAmzCredential = "magnam";
                xAmzDate = "debitis";
                xAmzSecurityToken = "ipsa";
                xAmzSignature = "delectus";
                xAmzSignedHeaders = "tempora";
            }};            

            DeleteHumanLoopResponse res = sdk.sdk.deleteHumanLoop(req);

            if (res.deleteHumanLoopResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## describeHumanLoop

Returns information about the specified human loop. If the human loop was deleted, this operation will return a <code>ResourceNotFoundException</code> error. 

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DescribeHumanLoopRequest;
import org.openapis.openapi.models.operations.DescribeHumanLoopResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("suscipit") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DescribeHumanLoopRequest req = new DescribeHumanLoopRequest("molestiae") {{
                xAmzAlgorithm = "minus";
                xAmzContentSha256 = "placeat";
                xAmzCredential = "voluptatum";
                xAmzDate = "iusto";
                xAmzSecurityToken = "excepturi";
                xAmzSignature = "nisi";
                xAmzSignedHeaders = "recusandae";
            }};            

            DescribeHumanLoopResponse res = sdk.sdk.describeHumanLoop(req);

            if (res.describeHumanLoopResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listHumanLoops

Returns information about human loops, given the specified parameters. If a human loop was deleted, it will not be included.

### Example Usage

```java
package hello.world;

import java.time.OffsetDateTime;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListHumanLoopsRequest;
import org.openapis.openapi.models.operations.ListHumanLoopsResponse;
import org.openapis.openapi.models.operations.ListHumanLoopsSortOrderEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("temporibus") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            ListHumanLoopsRequest req = new ListHumanLoopsRequest("ab") {{
                creationTimeAfter = OffsetDateTime.parse("2022-11-30T04:44:49.578Z");
                creationTimeBefore = OffsetDateTime.parse("2022-12-17T05:46:24.151Z");
                maxResults = 368241L;
                nextToken = "repellendus";
                sortOrder = ListHumanLoopsSortOrderEnum.DESCENDING;
                xAmzAlgorithm = "quo";
                xAmzContentSha256 = "odit";
                xAmzCredential = "at";
                xAmzDate = "at";
                xAmzSecurityToken = "maiores";
                xAmzSignature = "molestiae";
                xAmzSignedHeaders = "quod";
            }};            

            ListHumanLoopsResponse res = sdk.sdk.listHumanLoops(req);

            if (res.listHumanLoopsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## startHumanLoop

Starts a human loop, provided that at least one activation condition is met.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.StartHumanLoopRequest;
import org.openapis.openapi.models.operations.StartHumanLoopRequestBody;
import org.openapis.openapi.models.operations.StartHumanLoopRequestBodyDataAttributes;
import org.openapis.openapi.models.operations.StartHumanLoopRequestBodyHumanLoopInput;
import org.openapis.openapi.models.operations.StartHumanLoopResponse;
import org.openapis.openapi.models.shared.ContentClassifierEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("quod") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            StartHumanLoopRequest req = new StartHumanLoopRequest(                new StartHumanLoopRequestBody("esse",                 new StartHumanLoopRequestBodyHumanLoopInput() {{
                                                inputContent = "totam";
                                            }};, "porro") {{
                                dataAttributes = new StartHumanLoopRequestBodyDataAttributes() {{
                                    contentClassifiers = new org.openapis.openapi.models.shared.ContentClassifierEnum[]{{
                                        add(ContentClassifierEnum.FREE_OF_PERSONALLY_IDENTIFIABLE_INFORMATION),
                                        add(ContentClassifierEnum.FREE_OF_ADULT_CONTENT),
                                        add(ContentClassifierEnum.FREE_OF_ADULT_CONTENT),
                                    }};
                                }};;
                            }};) {{
                xAmzAlgorithm = "occaecati";
                xAmzContentSha256 = "fugit";
                xAmzCredential = "deleniti";
                xAmzDate = "hic";
                xAmzSecurityToken = "optio";
                xAmzSignature = "totam";
                xAmzSignedHeaders = "beatae";
            }};            

            StartHumanLoopResponse res = sdk.sdk.startHumanLoop(req);

            if (res.startHumanLoopResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## stopHumanLoop

Stops the specified human loop.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.StopHumanLoopRequest;
import org.openapis.openapi.models.operations.StopHumanLoopRequestBody;
import org.openapis.openapi.models.operations.StopHumanLoopResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("commodi") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            StopHumanLoopRequest req = new StopHumanLoopRequest(                new StopHumanLoopRequestBody("molestiae");) {{
                xAmzAlgorithm = "modi";
                xAmzContentSha256 = "qui";
                xAmzCredential = "impedit";
                xAmzDate = "cum";
                xAmzSecurityToken = "esse";
                xAmzSignature = "ipsum";
                xAmzSignedHeaders = "excepturi";
            }};            

            StopHumanLoopResponse res = sdk.sdk.stopHumanLoop(req);

            if (res.stopHumanLoopResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
