import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum DeleteFirewallPolicyXAmzTargetEnum {
    NetworkFirewall20201112DeleteFirewallPolicy = "NetworkFirewall_20201112.DeleteFirewallPolicy"
}
export declare class DeleteFirewallPolicyRequest extends SpeakeasyBase {
    deleteFirewallPolicyRequest: shared.DeleteFirewallPolicyRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DeleteFirewallPolicyXAmzTargetEnum;
}
export declare class DeleteFirewallPolicyResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    deleteFirewallPolicyResponse?: shared.DeleteFirewallPolicyResponse;
    /**
     * InternalServerError
     */
    internalServerError?: any;
    /**
     * InvalidOperationException
     */
    invalidOperationException?: any;
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
    /**
     * UnsupportedOperationException
     */
    unsupportedOperationException?: any;
}
