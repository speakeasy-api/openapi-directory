import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum GetCertificateXAmzTargetEnum {
    CertificateManagerGetCertificate = "CertificateManager.GetCertificate"
}
export declare class GetCertificateRequest extends SpeakeasyBase {
    getCertificateRequest: shared.GetCertificateRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: GetCertificateXAmzTargetEnum;
}
export declare class GetCertificateResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    getCertificateResponse?: shared.GetCertificateResponse;
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
