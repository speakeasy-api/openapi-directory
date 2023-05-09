# SDK

## Overview

The WorkMail Message Flow API provides access to email messages as they are being sent and received by a WorkMail organization.

Amazon Web Services documentation
<https://docs.aws.amazon.com/workmailmessageflow/>
### Available Operations

* [getRawMessageContent](#getrawmessagecontent) - Retrieves the raw content of an in-transit email message, in MIME format.
* [putRawMessageContent](#putrawmessagecontent) - <p>Updates the raw content of an in-transit email message, in MIME format.</p> <p>This example describes how to update in-transit email message. For more information and examples for using this API, see <a href="https://docs.aws.amazon.com/workmail/latest/adminguide/update-with-lambda.html"> Updating message content with AWS Lambda</a>.</p> <note> <p>Updates to an in-transit message only appear when you call <code>PutRawMessageContent</code> from an AWS Lambda function configured with a synchronous <a href="https://docs.aws.amazon.com/workmail/latest/adminguide/lambda.html#synchronous-rules"> Run Lambda</a> rule. If you call <code>PutRawMessageContent</code> on a delivered or sent message, the message remains unchanged, even though <a href="https://docs.aws.amazon.com/workmail/latest/APIReference/API_messageflow_GetRawMessageContent.html">GetRawMessageContent</a> returns an updated message. </p> </note>

## getRawMessageContent

Retrieves the raw content of an in-transit email message, in MIME format.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetRawMessageContentRequest;
import org.openapis.openapi.models.operations.GetRawMessageContentResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("error") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetRawMessageContentRequest req = new GetRawMessageContentRequest("deserunt") {{
                xAmzAlgorithm = "suscipit";
                xAmzContentSha256 = "iure";
                xAmzCredential = "magnam";
                xAmzDate = "debitis";
                xAmzSecurityToken = "ipsa";
                xAmzSignature = "delectus";
                xAmzSignedHeaders = "tempora";
            }};            

            GetRawMessageContentResponse res = sdk.sdk.getRawMessageContent(req);

            if (res.getRawMessageContentResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## putRawMessageContent

<p>Updates the raw content of an in-transit email message, in MIME format.</p> <p>This example describes how to update in-transit email message. For more information and examples for using this API, see <a href="https://docs.aws.amazon.com/workmail/latest/adminguide/update-with-lambda.html"> Updating message content with AWS Lambda</a>.</p> <note> <p>Updates to an in-transit message only appear when you call <code>PutRawMessageContent</code> from an AWS Lambda function configured with a synchronous <a href="https://docs.aws.amazon.com/workmail/latest/adminguide/lambda.html#synchronous-rules"> Run Lambda</a> rule. If you call <code>PutRawMessageContent</code> on a delivered or sent message, the message remains unchanged, even though <a href="https://docs.aws.amazon.com/workmail/latest/APIReference/API_messageflow_GetRawMessageContent.html">GetRawMessageContent</a> returns an updated message. </p> </note>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PutRawMessageContentRequest;
import org.openapis.openapi.models.operations.PutRawMessageContentRequestBody;
import org.openapis.openapi.models.operations.PutRawMessageContentRequestBodyContent;
import org.openapis.openapi.models.operations.PutRawMessageContentResponse;
import org.openapis.openapi.models.shared.S3Reference;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("suscipit") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            PutRawMessageContentRequest req = new PutRawMessageContentRequest(                new PutRawMessageContentRequestBody(                new PutRawMessageContentRequestBodyContent() {{
                                                s3Reference = new S3Reference("molestiae", "minus") {{
                                                    objectVersion = "placeat";
                                                }};;
                                            }};);, "voluptatum") {{
                xAmzAlgorithm = "iusto";
                xAmzContentSha256 = "excepturi";
                xAmzCredential = "nisi";
                xAmzDate = "recusandae";
                xAmzSecurityToken = "temporibus";
                xAmzSignature = "ab";
                xAmzSignedHeaders = "quis";
            }};            

            PutRawMessageContentResponse res = sdk.sdk.putRawMessageContent(req);

            if (res.putRawMessageContentResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
