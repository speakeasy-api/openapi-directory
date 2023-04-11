import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class DeleteNotificationRuleRequestBody extends SpeakeasyBase {
    /**
     * The Amazon Resource Name (ARN) of the notification rule you want to delete.
     */
    arn: string;
}
export declare class DeleteNotificationRuleRequest extends SpeakeasyBase {
    requestBody: DeleteNotificationRuleRequestBody;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class DeleteNotificationRuleResponse extends SpeakeasyBase {
    /**
     * ConcurrentModificationException
     */
    concurrentModificationException?: any;
    contentType: string;
    /**
     * Success
     */
    deleteNotificationRuleResult?: shared.DeleteNotificationRuleResult;
    /**
     * LimitExceededException
     */
    limitExceededException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * ValidationException
     */
    validationException?: any;
}
