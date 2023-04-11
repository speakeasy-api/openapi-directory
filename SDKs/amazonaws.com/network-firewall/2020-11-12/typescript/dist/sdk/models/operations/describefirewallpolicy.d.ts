import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum DescribeFirewallPolicyXAmzTargetEnum {
    NetworkFirewall20201112DescribeFirewallPolicy = "NetworkFirewall_20201112.DescribeFirewallPolicy"
}
export declare class DescribeFirewallPolicyRequest extends SpeakeasyBase {
    describeFirewallPolicyRequest: shared.DescribeFirewallPolicyRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DescribeFirewallPolicyXAmzTargetEnum;
}
export declare class DescribeFirewallPolicyResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    describeFirewallPolicyResponse?: shared.DescribeFirewallPolicyResponse;
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
