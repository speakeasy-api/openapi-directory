import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum DisassociateResolverEndpointIpAddressXAmzTargetEnum {
    Route53ResolverDisassociateResolverEndpointIpAddress = "Route53Resolver.DisassociateResolverEndpointIpAddress"
}
export declare class DisassociateResolverEndpointIpAddressRequest extends SpeakeasyBase {
    disassociateResolverEndpointIpAddressRequest: shared.DisassociateResolverEndpointIpAddressRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DisassociateResolverEndpointIpAddressXAmzTargetEnum;
}
export declare class DisassociateResolverEndpointIpAddressResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    disassociateResolverEndpointIpAddressResponse?: shared.DisassociateResolverEndpointIpAddressResponse;
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
     * ResourceExistsException
     */
    resourceExistsException?: any;
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
