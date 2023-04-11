import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum UpdateFirewallDescriptionXAmzTargetEnum {
    NetworkFirewall20201112UpdateFirewallDescription = "NetworkFirewall_20201112.UpdateFirewallDescription"
}
export declare class UpdateFirewallDescriptionRequest extends SpeakeasyBase {
    updateFirewallDescriptionRequest: shared.UpdateFirewallDescriptionRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: UpdateFirewallDescriptionXAmzTargetEnum;
}
export declare class UpdateFirewallDescriptionResponse extends SpeakeasyBase {
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
    updateFirewallDescriptionResponse?: shared.UpdateFirewallDescriptionResponse;
}
