import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
/**
 * Contains information about a detector's configuration.
 */
export declare class UpdateAnomalyDetectorRequestBodyAnomalyDetectorConfig extends SpeakeasyBase {
    anomalyDetectorFrequency?: shared.FrequencyEnum;
}
export declare class UpdateAnomalyDetectorRequestBody extends SpeakeasyBase {
    /**
     * The ARN of the detector to update.
     */
    anomalyDetectorArn: string;
    /**
     * Contains information about a detector's configuration.
     */
    anomalyDetectorConfig?: UpdateAnomalyDetectorRequestBodyAnomalyDetectorConfig;
    /**
     * The updated detector description.
     */
    anomalyDetectorDescription?: string;
    /**
     * The Amazon Resource Name (ARN) of an AWS KMS encryption key.
     */
    kmsKeyArn?: string;
}
export declare class UpdateAnomalyDetectorRequest extends SpeakeasyBase {
    requestBody: UpdateAnomalyDetectorRequestBody;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class UpdateAnomalyDetectorResponse extends SpeakeasyBase {
    /**
     * AccessDeniedException
     */
    accessDeniedException?: any;
    contentType: string;
    /**
     * InternalServerException
     */
    internalServerException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * ResourceNotFoundException
     */
    resourceNotFoundException?: any;
    /**
     * TooManyRequestsException
     */
    tooManyRequestsException?: any;
    /**
     * Success
     */
    updateAnomalyDetectorResponse?: shared.UpdateAnomalyDetectorResponse;
    /**
     * ValidationException
     */
    validationException?: any;
}
