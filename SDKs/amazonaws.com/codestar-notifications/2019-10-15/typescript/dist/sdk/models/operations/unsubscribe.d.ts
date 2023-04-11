import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class UnsubscribeRequestBody extends SpeakeasyBase {
    /**
     * The Amazon Resource Name (ARN) of the notification rule.
     */
    arn: string;
    /**
     * The ARN of the Chatbot topic to unsubscribe from the notification rule.
     */
    targetAddress: string;
}
export declare class UnsubscribeRequest extends SpeakeasyBase {
    requestBody: UnsubscribeRequestBody;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class UnsubscribeResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Success
     */
    unsubscribeResult?: shared.UnsubscribeResult;
    /**
     * ValidationException
     */
    validationException?: any;
}
