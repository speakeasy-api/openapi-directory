import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum ImportCertificateXAmzTargetEnum {
    AmazonDMSv20160101ImportCertificate = "AmazonDMSv20160101.ImportCertificate"
}
export declare class ImportCertificateRequest extends SpeakeasyBase {
    importCertificateMessage: shared.ImportCertificateMessage;
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
     * InvalidCertificateFault
     */
    invalidCertificateFault?: any;
    /**
     * ResourceAlreadyExistsFault
     */
    resourceAlreadyExistsFault?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * ResourceQuotaExceededFault
     */
    resourceQuotaExceededFault?: any;
}
