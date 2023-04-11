import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum DescribeFraudsterRegistrationJobXAmzTargetEnum {
    VoiceIDDescribeFraudsterRegistrationJob = "VoiceID.DescribeFraudsterRegistrationJob"
}
export declare class DescribeFraudsterRegistrationJobRequest extends SpeakeasyBase {
    describeFraudsterRegistrationJobRequest: shared.DescribeFraudsterRegistrationJobRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DescribeFraudsterRegistrationJobXAmzTargetEnum;
}
export declare class DescribeFraudsterRegistrationJobResponse extends SpeakeasyBase {
    /**
     * AccessDeniedException
     */
    accessDeniedException?: any;
    contentType: string;
    /**
     * Success
     */
    describeFraudsterRegistrationJobResponse?: shared.DescribeFraudsterRegistrationJobResponse;
    /**
     * InternalServerException
     */
    internalServerException?: any;
    /**
     * ResourceNotFoundException
     */
    resourceNotFoundException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * ThrottlingException
     */
    throttlingException?: any;
    /**
     * ValidationException
     */
    validationException?: any;
}
