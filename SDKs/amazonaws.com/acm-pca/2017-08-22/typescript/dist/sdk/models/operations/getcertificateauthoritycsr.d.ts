import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum GetCertificateAuthorityCsrXAmzTargetEnum {
    ACMPrivateCAGetCertificateAuthorityCsr = "ACMPrivateCA.GetCertificateAuthorityCsr"
}
export declare class GetCertificateAuthorityCsrRequest extends SpeakeasyBase {
    getCertificateAuthorityCsrRequest: shared.GetCertificateAuthorityCsrRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: GetCertificateAuthorityCsrXAmzTargetEnum;
}
export declare class GetCertificateAuthorityCsrResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    getCertificateAuthorityCsrResponse?: shared.GetCertificateAuthorityCsrResponse;
    /**
     * InvalidArnException
     */
    invalidArnException?: any;
    /**
     * InvalidStateException
     */
    invalidStateException?: any;
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
