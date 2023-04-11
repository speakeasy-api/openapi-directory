import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum GetCertificateXAmzTargetEnum {
    ACMPrivateCAGetCertificate = "ACMPrivateCA.GetCertificate"
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
