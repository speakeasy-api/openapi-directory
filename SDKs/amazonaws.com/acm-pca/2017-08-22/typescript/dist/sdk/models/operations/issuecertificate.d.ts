import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum IssueCertificateXAmzTargetEnum {
    ACMPrivateCAIssueCertificate = "ACMPrivateCA.IssueCertificate"
}
export declare class IssueCertificateRequest extends SpeakeasyBase {
    issueCertificateRequest: shared.IssueCertificateRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: IssueCertificateXAmzTargetEnum;
}
export declare class IssueCertificateResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * InvalidArgsException
     */
    invalidArgsException?: any;
    /**
     * InvalidArnException
     */
    invalidArnException?: any;
    /**
     * InvalidStateException
     */
    invalidStateException?: any;
    /**
     * Success
     */
    issueCertificateResponse?: shared.IssueCertificateResponse;
    /**
     * LimitExceededException
     */
    limitExceededException?: any;
    /**
     * MalformedCSRException
     */
    malformedCSRException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * ResourceNotFoundException
     */
    resourceNotFoundException?: any;
}
