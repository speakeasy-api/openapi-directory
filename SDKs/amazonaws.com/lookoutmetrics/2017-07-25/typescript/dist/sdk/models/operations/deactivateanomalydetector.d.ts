import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class DeactivateAnomalyDetectorRequestBody extends SpeakeasyBase {
    /**
     * The Amazon Resource Name (ARN) of the anomaly detector.
     */
    anomalyDetectorArn: string;
}
export declare class DeactivateAnomalyDetectorRequest extends SpeakeasyBase {
    requestBody: DeactivateAnomalyDetectorRequestBody;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class DeactivateAnomalyDetectorResponse extends SpeakeasyBase {
    /**
     * AccessDeniedException
     */
    accessDeniedException?: any;
    /**
     * ConflictException
     */
    conflictException?: any;
    contentType: string;
    /**
     * Success
     */
    deactivateAnomalyDetectorResponse?: Record<string, any>;
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
