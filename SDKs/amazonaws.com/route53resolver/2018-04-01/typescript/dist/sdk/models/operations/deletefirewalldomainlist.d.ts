import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum DeleteFirewallDomainListXAmzTargetEnum {
    Route53ResolverDeleteFirewallDomainList = "Route53Resolver.DeleteFirewallDomainList"
}
export declare class DeleteFirewallDomainListRequest extends SpeakeasyBase {
    deleteFirewallDomainListRequest: shared.DeleteFirewallDomainListRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DeleteFirewallDomainListXAmzTargetEnum;
}
export declare class DeleteFirewallDomainListResponse extends SpeakeasyBase {
    /**
     * AccessDeniedException
     */
    accessDeniedException?: any;
    /**
     * ConflictException
     */
    conflictException?: any;
    contentType: string;
    /**
     * Success
     */
    deleteFirewallDomainListResponse?: shared.DeleteFirewallDomainListResponse;
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
