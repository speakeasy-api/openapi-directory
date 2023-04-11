import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum ImportCertificateXAmzTargetEnum {
    CertificateManagerImportCertificate = "CertificateManager.ImportCertificate"
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
     * InvalidArnException
     */
    invalidArnException?: any;
    /**
     * InvalidParameterException
     */
    invalidParameterException?: any;
    /**
     * InvalidTagException
     */
    invalidTagException?: any;
    /**
     * LimitExceededException
     */
    limitExceededException?: any;
    /**
     * ResourceNotFoundException
     */
    resourceNotFoundException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * TagPolicyException
     */
    tagPolicyException?: any;
    /**
     * TooManyTagsException
     */
    tooManyTagsException?: any;
}
