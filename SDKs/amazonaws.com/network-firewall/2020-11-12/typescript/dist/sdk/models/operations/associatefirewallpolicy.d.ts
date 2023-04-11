import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum AssociateFirewallPolicyXAmzTargetEnum {
    NetworkFirewall20201112AssociateFirewallPolicy = "NetworkFirewall_20201112.AssociateFirewallPolicy"
}
export declare class AssociateFirewallPolicyRequest extends SpeakeasyBase {
    associateFirewallPolicyRequest: shared.AssociateFirewallPolicyRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: AssociateFirewallPolicyXAmzTargetEnum;
}
export declare class AssociateFirewallPolicyResponse extends SpeakeasyBase {
    /**
     * Success
     */
    associateFirewallPolicyResponse?: shared.AssociateFirewallPolicyResponse;
    contentType: string;
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
    /**
     * InvalidTokenException
     */
    invalidTokenException?: any;
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
