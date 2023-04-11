import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum DeregisterCertificateXAmzTargetEnum {
    DirectoryService20150416DeregisterCertificate = "DirectoryService_20150416.DeregisterCertificate"
}
export declare class DeregisterCertificateRequest extends SpeakeasyBase {
    deregisterCertificateRequest: shared.DeregisterCertificateRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DeregisterCertificateXAmzTargetEnum;
}
export declare class DeregisterCertificateResponse extends SpeakeasyBase {
    /**
     * CertificateDoesNotExistException
     */
    certificateDoesNotExistException?: any;
    /**
     * CertificateInUseException
     */
    certificateInUseException?: any;
    /**
     * ClientException
     */
    clientException?: any;
    contentType: string;
    /**
     * Success
     */
    deregisterCertificateResult?: Record<string, any>;
    /**
     * DirectoryDoesNotExistException
     */
    directoryDoesNotExistException?: any;
    /**
     * DirectoryUnavailableException
     */
    directoryUnavailableException?: any;
    /**
     * InvalidParameterException
     */
    invalidParameterException?: any;
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
