import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum GetResolverQueryLogConfigXAmzTargetEnum {
    Route53ResolverGetResolverQueryLogConfig = "Route53Resolver.GetResolverQueryLogConfig"
}
export declare class GetResolverQueryLogConfigRequest extends SpeakeasyBase {
    getResolverQueryLogConfigRequest: shared.GetResolverQueryLogConfigRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: GetResolverQueryLogConfigXAmzTargetEnum;
}
export declare class GetResolverQueryLogConfigResponse extends SpeakeasyBase {
    /**
     * AccessDeniedException
     */
    accessDeniedException?: any;
    contentType: string;
    /**
     * Success
     */
    getResolverQueryLogConfigResponse?: shared.GetResolverQueryLogConfigResponse;
    /**
     * InternalServiceErrorException
     */
    internalServiceErrorException?: any;
    /**
     * InvalidParameterException
     */
    invalidParameterException?: any;
    /**
     * InvalidRequestException
     */
    invalidRequestException?: any;
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
