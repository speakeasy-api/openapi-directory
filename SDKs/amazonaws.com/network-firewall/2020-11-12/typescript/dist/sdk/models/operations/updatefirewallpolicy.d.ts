import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum UpdateFirewallPolicyXAmzTargetEnum {
    NetworkFirewall20201112UpdateFirewallPolicy = "NetworkFirewall_20201112.UpdateFirewallPolicy"
}
export declare class UpdateFirewallPolicyRequest extends SpeakeasyBase {
    updateFirewallPolicyRequest: shared.UpdateFirewallPolicyRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: UpdateFirewallPolicyXAmzTargetEnum;
}
export declare class UpdateFirewallPolicyResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * InternalServerError
     */
    internalServerError?: any;
    /**
     * InvalidRequestException
     */
    invalidRequestException?: any;
    /**
     * InvalidTokenException
     */
    invalidTokenException?: any;
    /**
     * ResourceNotFoundException
     */
    resourceNotFoundException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * ThrottlingException
     */
    throttlingException?: any;
    /**
     * Success
     */
    updateFirewallPolicyResponse?: shared.UpdateFirewallPolicyResponse;
}
