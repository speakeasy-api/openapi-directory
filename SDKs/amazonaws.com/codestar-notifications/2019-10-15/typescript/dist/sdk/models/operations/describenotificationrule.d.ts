import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class DescribeNotificationRuleRequestBody extends SpeakeasyBase {
    /**
     * The Amazon Resource Name (ARN) of the notification rule.
     */
    arn: string;
}
export declare class DescribeNotificationRuleRequest extends SpeakeasyBase {
    requestBody: DescribeNotificationRuleRequestBody;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class DescribeNotificationRuleResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    describeNotificationRuleResult?: shared.DescribeNotificationRuleResult;
    /**
     * ResourceNotFoundException
     */
    resourceNotFoundException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * ValidationException
     */
    validationException?: any;
}
