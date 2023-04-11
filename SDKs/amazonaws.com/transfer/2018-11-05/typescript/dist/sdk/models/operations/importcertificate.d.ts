import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum ImportCertificateXAmzTargetEnum {
    TransferServiceImportCertificate = "TransferService.ImportCertificate"
}
export declare class ImportCertificateRequest extends SpeakeasyBase {
    importCertificateRequest: shared.ImportCertificateRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: ImportCertificateXAmzTargetEnum;
}
export declare class ImportCertificateResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    importCertificateResponse?: shared.ImportCertificateResponse;
    /**
     * InternalServiceError
     */
    internalServiceError?: any;
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
}
