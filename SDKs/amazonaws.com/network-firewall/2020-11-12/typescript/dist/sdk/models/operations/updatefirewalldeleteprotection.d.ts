import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum UpdateFirewallDeleteProtectionXAmzTargetEnum {
    NetworkFirewall20201112UpdateFirewallDeleteProtection = "NetworkFirewall_20201112.UpdateFirewallDeleteProtection"
}
export declare class UpdateFirewallDeleteProtectionRequest extends SpeakeasyBase {
    updateFirewallDeleteProtectionRequest: shared.UpdateFirewallDeleteProtectionRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: UpdateFirewallDeleteProtectionXAmzTargetEnum;
}
export declare class UpdateFirewallDeleteProtectionResponse extends SpeakeasyBase {
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
    updateFirewallDeleteProtectionResponse?: shared.UpdateFirewallDeleteProtectionResponse;
}
