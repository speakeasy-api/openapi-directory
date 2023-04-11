import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
/**
 * Information that defines how a detector operates.
 */
export declare class CreateDetectorModelRequestBodyDetectorModelDefinition extends SpeakeasyBase {
    initialStateName?: string;
    states?: shared.State[];
}
/**
 * Information about the order in which events are evaluated and how actions are executed.
 */
export declare enum CreateDetectorModelRequestBodyEvaluationMethodEnum {
    Batch = "BATCH",
    Serial = "SERIAL"
}
export declare class CreateDetectorModelRequestBody extends SpeakeasyBase {
    /**
     * Information that defines how a detector operates.
     */
    detectorModelDefinition: CreateDetectorModelRequestBodyDetectorModelDefinition;
    /**
     * A brief description of the detector model.
     */
    detectorModelDescription?: string;
    /**
     * The name of the detector model.
     */
    detectorModelName: string;
    /**
     * Information about the order in which events are evaluated and how actions are executed.
     */
    evaluationMethod?: CreateDetectorModelRequestBodyEvaluationMethodEnum;
    /**
     * The input attribute key used to identify a device or system to create a detector (an instance of the detector model) and then to route each input received to the appropriate detector (instance). This parameter uses a JSON-path expression in the message payload of each input to specify the attribute-value pair that is used to identify the device associated with the input.
     */
    key?: string;
    /**
     * The ARN of the role that grants permission to AWS IoT Events to perform its operations.
     */
    roleArn: string;
    /**
     * Metadata that can be used to manage the detector model.
     */
    tags?: shared.Tag[];
}
export declare class CreateDetectorModelRequest extends SpeakeasyBase {
    requestBody: CreateDetectorModelRequestBody;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class CreateDetectorModelResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    createDetectorModelResponse?: shared.CreateDetectorModelResponse;
    /**
     * InternalFailureException
     */
    internalFailureException?: any;
    /**
     * InvalidRequestException
     */
    invalidRequestException?: any;
    /**
     * LimitExceededException
     */
    limitExceededException?: any;
    /**
     * ResourceAlreadyExistsException
     */
    resourceAlreadyExistsException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * ResourceInUseException
     */
    resourceInUseException?: any;
    /**
     * ServiceUnavailableException
     */
    serviceUnavailableException?: any;
    /**
     * ThrottlingException
     */
    throttlingException?: any;
}
