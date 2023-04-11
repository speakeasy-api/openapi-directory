import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum UpdateFirewallConfigXAmzTargetEnum {
    Route53ResolverUpdateFirewallConfig = "Route53Resolver.UpdateFirewallConfig"
}
export declare class UpdateFirewallConfigRequest extends SpeakeasyBase {
    updateFirewallConfigRequest: shared.UpdateFirewallConfigRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: UpdateFirewallConfigXAmzTargetEnum;
}
export declare class UpdateFirewallConfigResponse extends SpeakeasyBase {
    /**
     * AccessDeniedException
     */
    accessDeniedException?: any;
    contentType: string;
    /**
     * InternalServiceErrorException
     */
    internalServiceErrorException?: any;
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
     * Success
     */
    updateFirewallConfigResponse?: shared.UpdateFirewallConfigResponse;
    /**
     * ValidationException
     */
    validationException?: any;
}
