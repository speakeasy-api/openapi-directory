import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
/**
 * The registration configuration.
 */
export declare class UpdateCACertificateRequestBodyRegistrationConfig extends SpeakeasyBase {
    roleArn?: string;
    templateBody?: string;
    templateName?: string;
}
export declare class UpdateCACertificateRequestBody extends SpeakeasyBase {
    /**
     * The registration configuration.
     */
    registrationConfig?: UpdateCACertificateRequestBodyRegistrationConfig;
    /**
     * If true, removes auto registration.
     */
    removeAutoRegistration?: boolean;
}
/**
 * The new value for the auto registration status. Valid values are: "ENABLE" or "DISABLE".
 */
export declare enum UpdateCACertificateNewAutoRegistrationStatusEnum {
    Enable = "ENABLE",
    Disable = "DISABLE"
}
/**
 * <p>The updated status of the CA certificate.</p> <p> <b>Note:</b> The status value REGISTER_INACTIVE is deprecated and should not be used.</p>
 */
export declare enum UpdateCACertificateNewStatusEnum {
    Active = "ACTIVE",
    Inactive = "INACTIVE"
}
export declare class UpdateCACertificateRequest extends SpeakeasyBase {
    requestBody: UpdateCACertificateRequestBody;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    /**
     * The CA certificate identifier.
     */
    caCertificateId: string;
    /**
     * The new value for the auto registration status. Valid values are: "ENABLE" or "DISABLE".
     */
    newAutoRegistrationStatus?: UpdateCACertificateNewAutoRegistrationStatusEnum;
    /**
     * <p>The updated status of the CA certificate.</p> <p> <b>Note:</b> The status value REGISTER_INACTIVE is deprecated and should not be used.</p>
     */
    newStatus?: UpdateCACertificateNewStatusEnum;
}
export declare class UpdateCACertificateResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * InternalFailureException
     */
    internalFailureException?: any;
    /**
     * InvalidRequestException
     */
    invalidRequestException?: any;
    /**
     * ResourceNotFoundException
     */
    resourceNotFoundException?: any;
    /**
     * ServiceUnavailableException
     */
    serviceUnavailableException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * ThrottlingException
     */
    throttlingException?: any;
    /**
     * UnauthorizedException
     */
    unauthorizedException?: any;
}
