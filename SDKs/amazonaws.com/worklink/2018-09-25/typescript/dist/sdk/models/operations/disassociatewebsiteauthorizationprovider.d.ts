import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class DisassociateWebsiteAuthorizationProviderRequestBody extends SpeakeasyBase {
    /**
     * A unique identifier for the authorization provider.
     */
    authorizationProviderId: string;
    /**
     * The ARN of the fleet.
     */
    fleetArn: string;
}
export declare class DisassociateWebsiteAuthorizationProviderRequest extends SpeakeasyBase {
    requestBody: DisassociateWebsiteAuthorizationProviderRequestBody;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class DisassociateWebsiteAuthorizationProviderResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    disassociateWebsiteAuthorizationProviderResponse?: Record<string, any>;
    /**
     * InternalServerErrorException
     */
    internalServerErrorException?: any;
    /**
     * InvalidRequestException
     */
    invalidRequestException?: any;
    /**
     * ResourceAlreadyExistsException
     */
    resourceAlreadyExistsException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * ResourceNotFoundException
     */
    resourceNotFoundException?: any;
    /**
     * TooManyRequestsException
     */
    tooManyRequestsException?: any;
    /**
     * UnauthorizedException
     */
    unauthorizedException?: any;
}
