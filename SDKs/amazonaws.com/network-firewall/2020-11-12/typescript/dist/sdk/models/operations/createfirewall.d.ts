import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum CreateFirewallXAmzTargetEnum {
    NetworkFirewall20201112CreateFirewall = "NetworkFirewall_20201112.CreateFirewall"
}
export declare class CreateFirewallRequest extends SpeakeasyBase {
    createFirewallRequest: shared.CreateFirewallRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: CreateFirewallXAmzTargetEnum;
}
export declare class CreateFirewallResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    createFirewallResponse?: shared.CreateFirewallResponse;
    /**
     * InsufficientCapacityException
     */
    insufficientCapacityException?: any;
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
