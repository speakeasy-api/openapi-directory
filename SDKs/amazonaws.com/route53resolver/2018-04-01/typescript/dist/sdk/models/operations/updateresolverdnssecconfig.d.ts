import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum UpdateResolverDnssecConfigXAmzTargetEnum {
    Route53ResolverUpdateResolverDnssecConfig = "Route53Resolver.UpdateResolverDnssecConfig"
}
export declare class UpdateResolverDnssecConfigRequest extends SpeakeasyBase {
    updateResolverDnssecConfigRequest: shared.UpdateResolverDnssecConfigRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: UpdateResolverDnssecConfigXAmzTargetEnum;
}
export declare class UpdateResolverDnssecConfigResponse extends SpeakeasyBase {
    /**
     * AccessDeniedException
     */
    accessDeniedException?: any;
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
     * ResourceNotFoundException
     */
    resourceNotFoundException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * ThrottlingException
     */
    throttlingException?: any;
    /**
     * Success
     */
    updateResolverDnssecConfigResponse?: shared.UpdateResolverDnssecConfigResponse;
}
