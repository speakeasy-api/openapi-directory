import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum GetResolverDnssecConfigXAmzTargetEnum {
    Route53ResolverGetResolverDnssecConfig = "Route53Resolver.GetResolverDnssecConfig"
}
export declare class GetResolverDnssecConfigRequest extends SpeakeasyBase {
    getResolverDnssecConfigRequest: shared.GetResolverDnssecConfigRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: GetResolverDnssecConfigXAmzTargetEnum;
}
export declare class GetResolverDnssecConfigResponse extends SpeakeasyBase {
    /**
     * AccessDeniedException
     */
    accessDeniedException?: any;
    contentType: string;
    /**
     * Success
     */
    getResolverDnssecConfigResponse?: shared.GetResolverDnssecConfigResponse;
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
}
