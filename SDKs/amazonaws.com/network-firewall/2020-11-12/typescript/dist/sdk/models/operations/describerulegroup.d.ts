import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum DescribeRuleGroupXAmzTargetEnum {
    NetworkFirewall20201112DescribeRuleGroup = "NetworkFirewall_20201112.DescribeRuleGroup"
}
export declare class DescribeRuleGroupRequest extends SpeakeasyBase {
    describeRuleGroupRequest: shared.DescribeRuleGroupRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DescribeRuleGroupXAmzTargetEnum;
}
export declare class DescribeRuleGroupResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    describeRuleGroupResponse?: shared.DescribeRuleGroupResponse;
    /**
     * InternalServerError
     */
    internalServerError?: any;
    /**
     * InvalidRequestException
     */
    invalidRequestException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * ResourceNotFoundException
     */
    resourceNotFoundException?: any;
    /**
     * ThrottlingException
     */
    throttlingException?: any;
}
