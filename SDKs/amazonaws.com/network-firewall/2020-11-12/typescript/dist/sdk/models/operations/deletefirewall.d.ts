import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum DeleteFirewallXAmzTargetEnum {
    NetworkFirewall20201112DeleteFirewall = "NetworkFirewall_20201112.DeleteFirewall"
}
export declare class DeleteFirewallRequest extends SpeakeasyBase {
    deleteFirewallRequest: shared.DeleteFirewallRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DeleteFirewallXAmzTargetEnum;
}
export declare class DeleteFirewallResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    deleteFirewallResponse?: shared.DeleteFirewallResponse;
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
