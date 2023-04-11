import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum RegisterCertificateXAmzTargetEnum {
    DirectoryService20150416RegisterCertificate = "DirectoryService_20150416.RegisterCertificate"
}
export declare class RegisterCertificateRequest extends SpeakeasyBase {
    registerCertificateRequest: shared.RegisterCertificateRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: RegisterCertificateXAmzTargetEnum;
}
export declare class RegisterCertificateResponse extends SpeakeasyBase {
    /**
     * CertificateAlreadyExistsException
     */
    certificateAlreadyExistsException?: any;
    /**
     * CertificateLimitExceededException
     */
    certificateLimitExceededException?: any;
    /**
     * ClientException
     */
    clientException?: any;
    contentType: string;
    /**
     * DirectoryDoesNotExistException
     */
    directoryDoesNotExistException?: any;
    /**
     * DirectoryUnavailableException
     */
    directoryUnavailableException?: any;
    /**
     * InvalidCertificateException
     */
    invalidCertificateException?: any;
    /**
     * InvalidParameterException
     */
    invalidParameterException?: any;
    /**
     * Success
     */
    registerCertificateResult?: shared.RegisterCertificateResult;
    /**
     * ServiceException
     */
    serviceException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * UnsupportedOperationException
     */
    unsupportedOperationException?: any;
}
