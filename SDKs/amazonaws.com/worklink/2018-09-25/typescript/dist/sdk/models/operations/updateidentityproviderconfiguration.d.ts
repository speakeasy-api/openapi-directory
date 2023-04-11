import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
/**
 * The type of identity provider.
 */
export declare enum UpdateIdentityProviderConfigurationRequestBodyIdentityProviderTypeEnum {
    Saml = "SAML"
}
export declare class UpdateIdentityProviderConfigurationRequestBody extends SpeakeasyBase {
    /**
     * The ARN of the fleet.
     */
    fleetArn: string;
    /**
     * The SAML metadata document provided by the customer’s identity provider. The existing IdentityProviderSamlMetadata is unset if null is passed.
     */
    identityProviderSamlMetadata?: string;
    /**
     * The type of identity provider.
     */
    identityProviderType: UpdateIdentityProviderConfigurationRequestBodyIdentityProviderTypeEnum;
}
export declare class UpdateIdentityProviderConfigurationRequest extends SpeakeasyBase {
    requestBody: UpdateIdentityProviderConfigurationRequestBody;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class UpdateIdentityProviderConfigurationResponse extends SpeakeasyBase {
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
     * ResourceNotFoundException
     */
    resourceNotFoundException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * TooManyRequestsException
     */
    tooManyRequestsException?: any;
    /**
     * UnauthorizedException
     */
    unauthorizedException?: any;
    /**
     * Success
     */
    updateIdentityProviderConfigurationResponse?: Record<string, any>;
}
