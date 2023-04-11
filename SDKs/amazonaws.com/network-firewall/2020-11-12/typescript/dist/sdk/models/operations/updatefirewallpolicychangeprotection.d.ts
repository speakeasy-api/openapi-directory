import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum UpdateFirewallPolicyChangeProtectionXAmzTargetEnum {
    NetworkFirewall20201112UpdateFirewallPolicyChangeProtection = "NetworkFirewall_20201112.UpdateFirewallPolicyChangeProtection"
}
export declare class UpdateFirewallPolicyChangeProtectionRequest extends SpeakeasyBase {
    updateFirewallPolicyChangeProtectionRequest: shared.UpdateFirewallPolicyChangeProtectionRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: UpdateFirewallPolicyChangeProtectionXAmzTargetEnum;
}
export declare class UpdateFirewallPolicyChangeProtectionResponse extends SpeakeasyBase {
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
     * ResourceOwnerCheckException
     */
    resourceOwnerCheckException?: any;
    /**
     * ThrottlingException
     */
    throttlingException?: any;
    /**
     * Success
     */
    updateFirewallPolicyChangeProtectionResponse?: shared.UpdateFirewallPolicyChangeProtectionResponse;
}
