import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class PublishRequestBody extends SpeakeasyBase {
    /**
     * <p>The message body. MQTT accepts text, binary, and empty (null) message payloads.</p> <p>Publishing an empty (null) payload with <b>retain</b> = <code>true</code> deletes the retained message identified by <b>topic</b> from Amazon Web Services IoT Core.</p>
     */
    payload?: string;
}
/**
 * An <code>Enum</code> string value that indicates whether the payload is formatted as UTF-8. <code>payloadFormatIndicator</code> is an HTTP header value in the API.
 */
export declare enum PublishXAmzMqtt5PayloadFormatIndicatorEnum {
    UnspecifiedBytes = "UNSPECIFIED_BYTES",
    Utf8Data = "UTF8_DATA"
}
export declare class PublishRequest extends SpeakeasyBase {
    requestBody: PublishRequestBody;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    /**
     * A UTF-8 encoded string that describes the content of the publishing message.
     */
    contentType?: string;
    /**
     * A user-defined integer value that represents the message expiry interval in seconds. If absent, the message doesn't expire. For more information about the limits of <code>messageExpiry</code>, see <a href="https://docs.aws.amazon.com/general/latest/gr/iot-core.html#message-broker-limits">Amazon Web Services IoT Core message broker and protocol limits and quotas </a> from the Amazon Web Services Reference Guide.
     */
    messageExpiry?: number;
    /**
     * The Quality of Service (QoS) level. The default QoS level is 0.
     */
    qos?: number;
    /**
     * A UTF-8 encoded string that's used as the topic name for a response message. The response topic is used to describe the topic which the receiver should publish to as part of the request-response flow. The topic must not contain wildcard characters.
     */
    responseTopic?: string;
    /**
     * <p>A Boolean value that determines whether to set the RETAIN flag when the message is published.</p> <p>Setting the RETAIN flag causes the message to be retained and sent to new subscribers to the topic.</p> <p>Valid values: <code>true</code> | <code>false</code> </p> <p>Default value: <code>false</code> </p>
     */
    retain?: boolean;
    /**
     * The name of the MQTT topic.
     */
    topic: string;
    /**
     * The base64-encoded binary data used by the sender of the request message to identify which request the response message is for when it's received. <code>correlationData</code> is an HTTP header value in the API.
     */
    xAmzMqtt5CorrelationData?: string;
    /**
     * An <code>Enum</code> string value that indicates whether the payload is formatted as UTF-8. <code>payloadFormatIndicator</code> is an HTTP header value in the API.
     */
    xAmzMqtt5PayloadFormatIndicator?: PublishXAmzMqtt5PayloadFormatIndicatorEnum;
    /**
     * <p>A JSON string that contains an array of JSON objects. If you don’t use Amazon Web Services SDK or CLI, you must encode the JSON string to base64 format before adding it to the HTTP header. <code>userProperties</code> is an HTTP header value in the API.</p> <p>The following example <code>userProperties</code> parameter is a JSON string which represents two User Properties. Note that it needs to be base64-encoded:</p> <p> <code>[{"deviceName": "alpha"}, {"deviceCnt": "45"}]</code> </p>
     */
    xAmzMqtt5UserProperties?: string;
}
export declare class PublishResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * InternalFailureException
     */
    internalFailureException?: any;
    /**
     * InvalidRequestException
     */
    invalidRequestException?: any;
    /**
     * MethodNotAllowedException
     */
    methodNotAllowedException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * ThrottlingException
     */
    throttlingException?: any;
    /**
     * UnauthorizedException
     */
    unauthorizedException?: any;
}
