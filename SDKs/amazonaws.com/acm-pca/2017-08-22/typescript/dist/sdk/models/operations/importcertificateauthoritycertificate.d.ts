import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum ImportCertificateAuthorityCertificateXAmzTargetEnum {
    ACMPrivateCAImportCertificateAuthorityCertificate = "ACMPrivateCA.ImportCertificateAuthorityCertificate"
}
export declare class ImportCertificateAuthorityCertificateRequest extends SpeakeasyBase {
    importCertificateAuthorityCertificateRequest: shared.ImportCertificateAuthorityCertificateRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: ImportCertificateAuthorityCertificateXAmzTargetEnum;
}
export declare class ImportCertificateAuthorityCertificateResponse extends SpeakeasyBase {
    /**
     * CertificateMismatchException
     */
    certificateMismatchException?: any;
    /**
     * ConcurrentModificationException
     */
    concurrentModificationException?: any;
    contentType: string;
    /**
     * InvalidArnException
     */
    invalidArnException?: any;
    /**
     * InvalidRequestException
     */
    invalidRequestException?: any;
    /**
     * InvalidStateException
     */
    invalidStateException?: any;
    /**
     * MalformedCertificateException
     */
    malformedCertificateException?: any;
    /**
     * RequestFailedException
     */
    requestFailedException?: any;
    /**
     * RequestInProgressException
     */
    requestInProgressException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * ResourceNotFoundException
     */
    resourceNotFoundException?: any;
}
