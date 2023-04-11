import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum DisassociateResolverQueryLogConfigXAmzTargetEnum {
    Route53ResolverDisassociateResolverQueryLogConfig = "Route53Resolver.DisassociateResolverQueryLogConfig"
}
export declare class DisassociateResolverQueryLogConfigRequest extends SpeakeasyBase {
    disassociateResolverQueryLogConfigRequest: shared.DisassociateResolverQueryLogConfigRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DisassociateResolverQueryLogConfigXAmzTargetEnum;
}
export declare class DisassociateResolverQueryLogConfigResponse extends SpeakeasyBase {
    /**
     * AccessDeniedException
     */
    accessDeniedException?: any;
    contentType: string;
    /**
     * Success
     */
    disassociateResolverQueryLogConfigResponse?: shared.DisassociateResolverQueryLogConfigResponse;
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
