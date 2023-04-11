import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
/**
 * The verification state of the violation.
 */
export declare enum PutVerificationStateOnViolationRequestBodyVerificationStateEnum {
    FalsePositive = "FALSE_POSITIVE",
    BenignPositive = "BENIGN_POSITIVE",
    TruePositive = "TRUE_POSITIVE",
    Unknown = "UNKNOWN"
}
export declare class PutVerificationStateOnViolationRequestBody extends SpeakeasyBase {
    /**
     * The verification state of the violation.
     */
    verificationState: PutVerificationStateOnViolationRequestBodyVerificationStateEnum;
    /**
     * The description of the verification state of the violation (detect alarm).
     */
    verificationStateDescription?: string;
}
export declare class PutVerificationStateOnViolationRequest extends SpeakeasyBase {
    requestBody: PutVerificationStateOnViolationRequestBody;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    /**
     * The violation ID.
     */
    violationId: string;
}
export declare class PutVerificationStateOnViolationResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * InternalFailureException
     */
    internalFailureException?: any;
    /**
     * InvalidRequestException
     */
    invalidRequestException?: any;
    /**
     * Success
     */
    putVerificationStateOnViolationResponse?: Record<string, any>;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * ThrottlingException
     */
    throttlingException?: any;
}
