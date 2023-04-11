import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class BatchPutMessageRequestBody extends SpeakeasyBase {
    /**
     * The name of the channel where the messages are sent.
     */
    channelName: string;
    /**
     * <p>The list of messages to be sent. Each message has the format: { "messageId": "string", "payload": "string"}.</p> <p>The field names of message payloads (data) that you send to IoT Analytics:</p> <ul> <li> <p>Must contain only alphanumeric characters and undescores (_). No other special characters are allowed.</p> </li> <li> <p>Must begin with an alphabetic character or single underscore (_).</p> </li> <li> <p>Cannot contain hyphens (-).</p> </li> <li> <p>In regular expression terms: "^[A-Za-z_]([A-Za-z0-9]*|[A-Za-z0-9][A-Za-z0-9_]*)$". </p> </li> <li> <p>Cannot be more than 255 characters.</p> </li> <li> <p>Are case insensitive. (Fields named foo and FOO in the same payload are considered duplicates.)</p> </li> </ul> <p>For example, {"temp_01": 29} or {"_temp_01": 29} are valid, but {"temp-01": 29}, {"01_temp": 29} or {"__temp_01": 29} are invalid in message payloads. </p>
     */
    messages: shared.Message[];
}
export declare class BatchPutMessageRequest extends SpeakeasyBase {
    requestBody: BatchPutMessageRequestBody;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class BatchPutMessageResponse extends SpeakeasyBase {
    /**
     * Success
     */
    batchPutMessageResponse?: shared.BatchPutMessageResponse;
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
     * ResourceNotFoundException
     */
    resourceNotFoundException?: any;
    /**
     * ServiceUnavailableException
     */
    serviceUnavailableException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * ThrottlingException
     */
    throttlingException?: any;
}
