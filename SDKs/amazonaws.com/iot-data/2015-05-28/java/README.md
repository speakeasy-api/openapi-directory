# openapisdk

<!-- Start SDK Installation -->
## SDK Installation

### Gradle

```groovy
implementation 'openapisdk:openapisdk:0.0.1'
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->
```java
package hello.world;

import openapisdk.SDK;
import openapisdk.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK.Builder builder = SDK.builder();

            builder.setSecurity(
                new Security() {{
                    hmac = new SchemeHmac() {{
                        apiKey = "YOUR_API_KEY_HERE";
                    }};
                }}
            );

            SDK sdk = builder.build();

            DeleteThingShadowRequest req = new DeleteThingShadowRequest() {{
                pathParams = new DeleteThingShadowPathParams() {{
                    thingName = "aliquam";
                }};
                queryParams = new DeleteThingShadowQueryParams() {{
                    name = "quos";
                }};
                headers = new DeleteThingShadowHeaders() {{
                    xAmzAlgorithm = "omnis";
                    xAmzContentSha256 = "illum";
                    xAmzCredential = "repellat";
                    xAmzDate = "id";
                    xAmzSecurityToken = "blanditiis";
                    xAmzSignature = "possimus";
                    xAmzSignedHeaders = "eius";
                }};
            }};

            DeleteThingShadowResponse res = sdk.deleteThingShadow(req);

            if (res.deleteThingShadowResponse.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## SDK Available Operations

### SDK SDK

* `deleteThingShadow` - <p>Deletes the shadow for the specified thing.</p> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">DeleteThingShadow</a> action.</p> <p>For more information, see <a href="http://docs.aws.amazon.com/iot/latest/developerguide/API_DeleteThingShadow.html">DeleteThingShadow</a> in the IoT Developer Guide.</p>
* `getRetainedMessage` - <p>Gets the details of a single retained message for the specified topic.</p> <p>This action returns the message payload of the retained message, which can incur messaging costs. To list only the topic names of the retained messages, call <a href="/iot/latest/developerguide/API_iotdata_ListRetainedMessages.html">ListRetainedMessages</a>.</p> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiotfleethubfordevicemanagement.html#awsiotfleethubfordevicemanagement-actions-as-permissions">GetRetainedMessage</a> action.</p> <p>For more information about messaging costs, see <a href="http://aws.amazon.com/iot-core/pricing/#Messaging">IoT Core pricing - Messaging</a>.</p>
* `getThingShadow` - <p>Gets the shadow for the specified thing.</p> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">GetThingShadow</a> action.</p> <p>For more information, see <a href="http://docs.aws.amazon.com/iot/latest/developerguide/API_GetThingShadow.html">GetThingShadow</a> in the IoT Developer Guide.</p>
* `listNamedShadowsForThing` - <p>Lists the shadows for the specified thing.</p> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">ListNamedShadowsForThing</a> action.</p>
* `listRetainedMessages` - <p>Lists summary information about the retained messages stored for the account.</p> <p>This action returns only the topic names of the retained messages. It doesn't return any message payloads. Although this action doesn't return a message payload, it can still incur messaging costs.</p> <p>To get the message payload of a retained message, call <a href="https://docs.aws.amazon.com/iot/latest/developerguide/API_iotdata_GetRetainedMessage.html">GetRetainedMessage</a> with the topic name of the retained message.</p> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiotfleethubfordevicemanagement.html#awsiotfleethubfordevicemanagement-actions-as-permissions">ListRetainedMessages</a> action.</p> <p>For more information about messaging costs, see <a href="http://aws.amazon.com/iot-core/pricing/#Messaging">IoT Core pricing - Messaging</a>.</p>
* `publish` - <p>Publishes an MQTT message.</p> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">Publish</a> action.</p> <p>For more information about MQTT messages, see <a href="http://docs.aws.amazon.com/iot/latest/developerguide/mqtt.html">MQTT Protocol</a> in the IoT Developer Guide.</p> <p>For more information about messaging costs, see <a href="http://aws.amazon.com/iot-core/pricing/#Messaging">IoT Core pricing - Messaging</a>.</p>
* `updateThingShadow` - <p>Updates the shadow for the specified thing.</p> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">UpdateThingShadow</a> action.</p> <p>For more information, see <a href="http://docs.aws.amazon.com/iot/latest/developerguide/API_UpdateThingShadow.html">UpdateThingShadow</a> in the IoT Developer Guide.</p>

<!-- End SDK Available Operations -->

### SDK Generated by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
