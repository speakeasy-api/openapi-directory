import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
/**
 * An object that specifies the authorization service for a domain.
 */
export declare class UpdateDomainConfigurationRequestBodyAuthorizerConfig extends SpeakeasyBase {
    allowAuthorizerOverride?: boolean;
    defaultAuthorizerName?: string;
}
/**
 * The status to which the domain configuration should be updated.
 */
export declare enum UpdateDomainConfigurationRequestBodyDomainConfigurationStatusEnum {
    Enabled = "ENABLED",
    Disabled = "DISABLED"
}
export declare class UpdateDomainConfigurationRequestBody extends SpeakeasyBase {
    /**
     * An object that specifies the authorization service for a domain.
     */
    authorizerConfig?: UpdateDomainConfigurationRequestBodyAuthorizerConfig;
    /**
     * The status to which the domain configuration should be updated.
     */
    domainConfigurationStatus?: UpdateDomainConfigurationRequestBodyDomainConfigurationStatusEnum;
    /**
     * Removes the authorization configuration from a domain.
     */
    removeAuthorizerConfig?: boolean;
}
export declare class UpdateDomainConfigurationRequest extends SpeakeasyBase {
    requestBody: UpdateDomainConfigurationRequestBody;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    /**
     * The name of the domain configuration to be updated.
     */
    domainConfigurationName: string;
}
export declare class UpdateDomainConfigurationResponse extends SpeakeasyBase {
    /**
     * CertificateValidationException
     */
    certificateValidationException?: any;
    contentType: string;
    /**
     * InternalFailureException
     */
    internalFailureException?: any;
    /**
     * InvalidRequestException
     */
    invalidRequestException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * ResourceNotFoundException
     */
    resourceNotFoundException?: any;
    /**
     * ServiceUnavailableException
     */
    serviceUnavailableException?: any;
    /**
     * ThrottlingException
     */
    throttlingException?: any;
    /**
     * UnauthorizedException
     */
    unauthorizedException?: any;
    /**
     * Success
     */
    updateDomainConfigurationResponse?: shared.UpdateDomainConfigurationResponse;
}
