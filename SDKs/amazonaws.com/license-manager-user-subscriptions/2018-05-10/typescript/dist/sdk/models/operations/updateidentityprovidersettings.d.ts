import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
/**
 * Details about an identity provider.
 */
export declare class UpdateIdentityProviderSettingsRequestBodyIdentityProvider extends SpeakeasyBase {
    activeDirectoryIdentityProvider?: shared.ActiveDirectoryIdentityProvider;
}
/**
 * Updates the registered identity provider’s product related configuration settings such as the subnets to provision VPC endpoints.
 */
export declare class UpdateIdentityProviderSettingsRequestBodyUpdateSettings extends SpeakeasyBase {
    addSubnets?: string[];
    removeSubnets?: string[];
    securityGroupId?: string;
}
export declare class UpdateIdentityProviderSettingsRequestBody extends SpeakeasyBase {
    /**
     * Details about an identity provider.
     */
    identityProvider: UpdateIdentityProviderSettingsRequestBodyIdentityProvider;
    /**
     * The name of the user-based subscription product.
     */
    product: string;
    /**
     * Updates the registered identity provider’s product related configuration settings such as the subnets to provision VPC endpoints.
     */
    updateSettings: UpdateIdentityProviderSettingsRequestBodyUpdateSettings;
}
export declare class UpdateIdentityProviderSettingsRequest extends SpeakeasyBase {
    requestBody: UpdateIdentityProviderSettingsRequestBody;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class UpdateIdentityProviderSettingsResponse extends SpeakeasyBase {
    /**
     * AccessDeniedException
     */
    accessDeniedException?: any;
    contentType: string;
    /**
     * InternalServerException
     */
    internalServerException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * ThrottlingException
     */
    throttlingException?: any;
    /**
     * Success
     */
    updateIdentityProviderSettingsResponse?: shared.UpdateIdentityProviderSettingsResponse;
    /**
     * ValidationException
     */
    validationException?: any;
}
