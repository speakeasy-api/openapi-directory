import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum GetFirewallDomainListXAmzTargetEnum {
    Route53ResolverGetFirewallDomainList = "Route53Resolver.GetFirewallDomainList"
}
export declare class GetFirewallDomainListRequest extends SpeakeasyBase {
    getFirewallDomainListRequest: shared.GetFirewallDomainListRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: GetFirewallDomainListXAmzTargetEnum;
}
export declare class GetFirewallDomainListResponse extends SpeakeasyBase {
    /**
     * AccessDeniedException
     */
    accessDeniedException?: any;
    contentType: string;
    /**
     * Success
     */
    getFirewallDomainListResponse?: shared.GetFirewallDomainListResponse;
    /**
     * InternalServiceErrorException
     */
    internalServiceErrorException?: any;
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
}
