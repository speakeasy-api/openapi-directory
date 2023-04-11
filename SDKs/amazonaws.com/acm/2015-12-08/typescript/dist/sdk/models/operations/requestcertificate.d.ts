import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum RequestCertificateXAmzTargetEnum {
    CertificateManagerRequestCertificate = "CertificateManager.RequestCertificate"
}
export declare class RequestCertificateRequest extends SpeakeasyBase {
    requestCertificateRequest: shared.RequestCertificateRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: RequestCertificateXAmzTargetEnum;
}
export declare class RequestCertificateResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * InvalidArnException
     */
    invalidArnException?: any;
    /**
     * InvalidDomainValidationOptionsException
     */
    invalidDomainValidationOptionsException?: any;
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
     * Success
     */
    requestCertificateResponse?: shared.RequestCertificateResponse;
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
