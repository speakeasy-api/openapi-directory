import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum DescribeRuleXAmzTargetEnum {
    AWSEventsDescribeRule = "AWSEvents.DescribeRule"
}
export declare class DescribeRuleRequest extends SpeakeasyBase {
    describeRuleRequest: shared.DescribeRuleRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DescribeRuleXAmzTargetEnum;
}
export declare class DescribeRuleResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    describeRuleResponse?: shared.DescribeRuleResponse;
    /**
     * InternalException
     */
    internalException?: any;
    /**
     * ResourceNotFoundException
     */
    resourceNotFoundException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
