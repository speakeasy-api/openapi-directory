import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum DeleteResolverQueryLogConfigXAmzTargetEnum {
    Route53ResolverDeleteResolverQueryLogConfig = "Route53Resolver.DeleteResolverQueryLogConfig"
}
export declare class DeleteResolverQueryLogConfigRequest extends SpeakeasyBase {
    deleteResolverQueryLogConfigRequest: shared.DeleteResolverQueryLogConfigRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DeleteResolverQueryLogConfigXAmzTargetEnum;
}
export declare class DeleteResolverQueryLogConfigResponse extends SpeakeasyBase {
    /**
     * AccessDeniedException
     */
    accessDeniedException?: any;
    contentType: string;
    /**
     * Success
     */
    deleteResolverQueryLogConfigResponse?: shared.DeleteResolverQueryLogConfigResponse;
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
