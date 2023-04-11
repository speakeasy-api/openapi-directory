import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class ActivateAnomalyDetectorRequestBody extends SpeakeasyBase {
    /**
     * The ARN of the anomaly detector.
     */
    anomalyDetectorArn: string;
}
export declare class ActivateAnomalyDetectorRequest extends SpeakeasyBase {
    requestBody: ActivateAnomalyDetectorRequestBody;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class ActivateAnomalyDetectorResponse extends SpeakeasyBase {
    /**
     * AccessDeniedException
     */
    accessDeniedException?: any;
    /**
     * Success
     */
    activateAnomalyDetectorResponse?: Record<string, any>;
    /**
     * ConflictException
     */
    conflictException?: any;
    contentType: string;
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
     * TooManyRequestsException
     */
    tooManyRequestsException?: any;
    /**
     * ValidationException
     */
    validationException?: any;
}
