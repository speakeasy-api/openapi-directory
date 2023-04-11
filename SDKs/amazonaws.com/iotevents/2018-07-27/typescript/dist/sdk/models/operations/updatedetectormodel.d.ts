import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
/**
 * Information that defines how a detector operates.
 */
export declare class UpdateDetectorModelRequestBodyDetectorModelDefinition extends SpeakeasyBase {
    initialStateName?: string;
    states?: shared.State[];
}
/**
 * Information about the order in which events are evaluated and how actions are executed.
 */
export declare enum UpdateDetectorModelRequestBodyEvaluationMethodEnum {
    Batch = "BATCH",
    Serial = "SERIAL"
}
export declare class UpdateDetectorModelRequestBody extends SpeakeasyBase {
    /**
     * Information that defines how a detector operates.
     */
    detectorModelDefinition: UpdateDetectorModelRequestBodyDetectorModelDefinition;
    /**
     * A brief description of the detector model.
     */
    detectorModelDescription?: string;
    /**
     * Information about the order in which events are evaluated and how actions are executed.
     */
    evaluationMethod?: UpdateDetectorModelRequestBodyEvaluationMethodEnum;
    /**
     * The ARN of the role that grants permission to AWS IoT Events to perform its operations.
     */
    roleArn: string;
}
export declare class UpdateDetectorModelRequest extends SpeakeasyBase {
    requestBody: UpdateDetectorModelRequestBody;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    /**
     * The name of the detector model that is updated.
     */
    detectorModelName: string;
}
export declare class UpdateDetectorModelResponse extends SpeakeasyBase {
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
     * ResourceInUseException
     */
    resourceInUseException?: any;
    /**
     * ResourceNotFoundException
     */
    resourceNotFoundException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * ServiceUnavailableException
     */
    serviceUnavailableException?: any;
    /**
     * ThrottlingException
     */
    throttlingException?: any;
    /**
     * Success
     */
    updateDetectorModelResponse?: shared.UpdateDetectorModelResponse;
}
