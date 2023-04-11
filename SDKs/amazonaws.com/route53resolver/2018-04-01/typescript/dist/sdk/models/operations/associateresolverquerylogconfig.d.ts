import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum AssociateResolverQueryLogConfigXAmzTargetEnum {
    Route53ResolverAssociateResolverQueryLogConfig = "Route53Resolver.AssociateResolverQueryLogConfig"
}
export declare class AssociateResolverQueryLogConfigRequest extends SpeakeasyBase {
    associateResolverQueryLogConfigRequest: shared.AssociateResolverQueryLogConfigRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: AssociateResolverQueryLogConfigXAmzTargetEnum;
}
export declare class AssociateResolverQueryLogConfigResponse extends SpeakeasyBase {
    /**
     * AccessDeniedException
     */
    accessDeniedException?: any;
    /**
     * Success
     */
    associateResolverQueryLogConfigResponse?: shared.AssociateResolverQueryLogConfigResponse;
    contentType: string;
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
