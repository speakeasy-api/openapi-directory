import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum GetCertificateAuthorityCertificateXAmzTargetEnum {
    ACMPrivateCAGetCertificateAuthorityCertificate = "ACMPrivateCA.GetCertificateAuthorityCertificate"
}
export declare class GetCertificateAuthorityCertificateRequest extends SpeakeasyBase {
    getCertificateAuthorityCertificateRequest: shared.GetCertificateAuthorityCertificateRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: GetCertificateAuthorityCertificateXAmzTargetEnum;
}
export declare class GetCertificateAuthorityCertificateResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    getCertificateAuthorityCertificateResponse?: shared.GetCertificateAuthorityCertificateResponse;
    /**
     * InvalidArnException
     */
    invalidArnException?: any;
    /**
     * InvalidStateException
     */
    invalidStateException?: any;
    /**
     * ResourceNotFoundException
     */
    resourceNotFoundException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
