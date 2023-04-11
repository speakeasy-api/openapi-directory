import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum CreateFirewallDomainListXAmzTargetEnum {
    Route53ResolverCreateFirewallDomainList = "Route53Resolver.CreateFirewallDomainList"
}
export declare class CreateFirewallDomainListRequest extends SpeakeasyBase {
    createFirewallDomainListRequest: shared.CreateFirewallDomainListRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: CreateFirewallDomainListXAmzTargetEnum;
}
export declare class CreateFirewallDomainListResponse extends SpeakeasyBase {
    /**
     * AccessDeniedException
     */
    accessDeniedException?: any;
    contentType: string;
    /**
     * Success
     */
    createFirewallDomainListResponse?: shared.CreateFirewallDomainListResponse;
    /**
     * InternalServiceErrorException
     */
    internalServiceErrorException?: any;
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
    /**
     * ValidationException
     */
    validationException?: any;
}
