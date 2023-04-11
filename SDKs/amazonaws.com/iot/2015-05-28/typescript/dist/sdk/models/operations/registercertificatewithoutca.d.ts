import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
/**
 * The status of the register certificate request.
 */
export declare enum RegisterCertificateWithoutCARequestBodyStatusEnum {
    Active = "ACTIVE",
    Inactive = "INACTIVE",
    Revoked = "REVOKED",
    PendingTransfer = "PENDING_TRANSFER",
    RegisterInactive = "REGISTER_INACTIVE",
    PendingActivation = "PENDING_ACTIVATION"
}
export declare class RegisterCertificateWithoutCARequestBody extends SpeakeasyBase {
    /**
     * The PEM of a certificate.
     */
    certificatePem: string;
    /**
     * The status of the register certificate request.
     */
    status?: RegisterCertificateWithoutCARequestBodyStatusEnum;
}
export declare class RegisterCertificateWithoutCARequest extends SpeakeasyBase {
    requestBody: RegisterCertificateWithoutCARequestBody;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class RegisterCertificateWithoutCAResponse extends SpeakeasyBase {
    /**
     * CertificateStateException
     */
    certificateStateException?: any;
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
    /**
     * Success
     */
    registerCertificateWithoutCAResponse?: shared.RegisterCertificateWithoutCAResponse;
    /**
     * ResourceAlreadyExistsException
     */
    resourceAlreadyExistsException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
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
}
