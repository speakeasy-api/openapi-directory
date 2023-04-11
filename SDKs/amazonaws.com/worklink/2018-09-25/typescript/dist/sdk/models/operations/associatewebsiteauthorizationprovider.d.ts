import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
/**
 * The authorization provider type.
 */
export declare enum AssociateWebsiteAuthorizationProviderRequestBodyAuthorizationProviderTypeEnum {
    Saml = "SAML"
}
export declare class AssociateWebsiteAuthorizationProviderRequestBody extends SpeakeasyBase {
    /**
     * The authorization provider type.
     */
    authorizationProviderType: AssociateWebsiteAuthorizationProviderRequestBodyAuthorizationProviderTypeEnum;
    /**
     * The domain name of the authorization provider. This applies only to SAML-based authorization providers.
     */
    domainName?: string;
    /**
     * The ARN of the fleet.
     */
    fleetArn: string;
}
export declare class AssociateWebsiteAuthorizationProviderRequest extends SpeakeasyBase {
    requestBody: AssociateWebsiteAuthorizationProviderRequestBody;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class AssociateWebsiteAuthorizationProviderResponse extends SpeakeasyBase {
    /**
     * Success
     */
    associateWebsiteAuthorizationProviderResponse?: shared.AssociateWebsiteAuthorizationProviderResponse;
    contentType: string;
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
