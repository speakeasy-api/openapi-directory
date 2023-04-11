import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum CreateResolverQueryLogConfigXAmzTargetEnum {
    Route53ResolverCreateResolverQueryLogConfig = "Route53Resolver.CreateResolverQueryLogConfig"
}
export declare class CreateResolverQueryLogConfigRequest extends SpeakeasyBase {
    createResolverQueryLogConfigRequest: shared.CreateResolverQueryLogConfigRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: CreateResolverQueryLogConfigXAmzTargetEnum;
}
export declare class CreateResolverQueryLogConfigResponse extends SpeakeasyBase {
    /**
     * AccessDeniedException
     */
    accessDeniedException?: any;
    contentType: string;
    /**
     * Success
     */
    createResolverQueryLogConfigResponse?: shared.CreateResolverQueryLogConfigResponse;
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
     * LimitExceededException
     */
    limitExceededException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * ResourceExistsException
     */
    resourceExistsException?: any;
    /**
     * ResourceNotFoundException
     */
    resourceNotFoundException?: any;
    /**
     * ThrottlingException
     */
    throttlingException?: any;
}
