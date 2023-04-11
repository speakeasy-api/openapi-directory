import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum CreateFirewallPolicyXAmzTargetEnum {
    NetworkFirewall20201112CreateFirewallPolicy = "NetworkFirewall_20201112.CreateFirewallPolicy"
}
export declare class CreateFirewallPolicyRequest extends SpeakeasyBase {
    createFirewallPolicyRequest: shared.CreateFirewallPolicyRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: CreateFirewallPolicyXAmzTargetEnum;
}
export declare class CreateFirewallPolicyResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    createFirewallPolicyResponse?: shared.CreateFirewallPolicyResponse;
    /**
     * InsufficientCapacityException
     */
    insufficientCapacityException?: any;
    /**
     * InternalServerError
     */
    internalServerError?: any;
    /**
     * InvalidRequestException
     */
    invalidRequestException?: any;
    /**
     * LimitExceededException
     */
    limitExceededException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * ThrottlingException
     */
    throttlingException?: any;
}
