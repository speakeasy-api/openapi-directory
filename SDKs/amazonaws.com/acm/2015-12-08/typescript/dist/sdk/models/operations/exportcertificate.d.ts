import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum ExportCertificateXAmzTargetEnum {
    CertificateManagerExportCertificate = "CertificateManager.ExportCertificate"
}
export declare class ExportCertificateRequest extends SpeakeasyBase {
    exportCertificateRequest: shared.ExportCertificateRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: ExportCertificateXAmzTargetEnum;
}
export declare class ExportCertificateResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    exportCertificateResponse?: shared.ExportCertificateResponse;
    /**
     * InvalidArnException
     */
    invalidArnException?: any;
    /**
     * RequestInProgressException
     */
    requestInProgressException?: any;
    /**
     * ResourceNotFoundException
     */
    resourceNotFoundException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
