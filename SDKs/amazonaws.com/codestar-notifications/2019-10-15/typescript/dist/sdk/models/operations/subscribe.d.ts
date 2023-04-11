import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
/**
 * Information about the Chatbot topics or Chatbot clients associated with a notification rule.
 */
export declare class SubscribeRequestBodyTarget extends SpeakeasyBase {
    targetAddress?: string;
    targetType?: string;
}
export declare class SubscribeRequestBody extends SpeakeasyBase {
    /**
     * The Amazon Resource Name (ARN) of the notification rule for which you want to create the association.
     */
    arn: string;
    /**
     * An enumeration token that, when provided in a request, returns the next batch of the results.
     */
    clientRequestToken?: string;
    /**
     * Information about the Chatbot topics or Chatbot clients associated with a notification rule.
     */
    target: SubscribeRequestBodyTarget;
}
export declare class SubscribeRequest extends SpeakeasyBase {
    requestBody: SubscribeRequestBody;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class SubscribeResponse extends SpeakeasyBase {
    /**
     * ConfigurationException
     */
    configurationException?: any;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * ResourceNotFoundException
     */
    resourceNotFoundException?: any;
    /**
     * Success
     */
    subscribeResult?: shared.SubscribeResult;
    /**
     * ValidationException
     */
    validationException?: any;
}
