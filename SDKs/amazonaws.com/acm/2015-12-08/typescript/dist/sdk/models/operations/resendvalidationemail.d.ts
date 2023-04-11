import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum ResendValidationEmailXAmzTargetEnum {
    CertificateManagerResendValidationEmail = "CertificateManager.ResendValidationEmail"
}
export declare class ResendValidationEmailRequest extends SpeakeasyBase {
    resendValidationEmailRequest: shared.ResendValidationEmailRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: ResendValidationEmailXAmzTargetEnum;
}
export declare class ResendValidationEmailResponse extends SpeakeasyBase {
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
