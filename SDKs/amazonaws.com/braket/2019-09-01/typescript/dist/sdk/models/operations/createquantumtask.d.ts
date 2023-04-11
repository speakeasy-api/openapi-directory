import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class CreateQuantumTaskRequestBody extends SpeakeasyBase {
    /**
     * The action associated with the task.
     */
    action: string;
    /**
     * The client token associated with the request.
     */
    clientToken: string;
    /**
     * The ARN of the device to run the task on.
     */
    deviceArn: string;
    /**
     * The parameters for the device to run the task on.
     */
    deviceParameters?: string;
    /**
     * The token for an Amazon Braket job that associates it with the quantum task.
     */
    jobToken?: string;
    /**
     * The S3 bucket to store task result files in.
     */
    outputS3Bucket: string;
    /**
     * The key prefix for the location in the S3 bucket to store task results in.
     */
    outputS3KeyPrefix: string;
    /**
     * The number of shots to use for the task.
     */
    shots: number;
    /**
     * Tags to be added to the quantum task you're creating.
     */
    tags?: Record<string, string>;
}
export declare class CreateQuantumTaskRequest extends SpeakeasyBase {
    requestBody: CreateQuantumTaskRequestBody;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class CreateQuantumTaskResponse extends SpeakeasyBase {
    /**
     * AccessDeniedException
     */
    accessDeniedException?: any;
    contentType: string;
    /**
     * Success
     */
    createQuantumTaskResponse?: shared.CreateQuantumTaskResponse;
    /**
     * DeviceOfflineException
     */
    deviceOfflineException?: any;
    /**
     * DeviceRetiredException
     */
    deviceRetiredException?: any;
    /**
     * InternalServiceException
     */
    internalServiceException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * ServiceQuotaExceededException
     */
    serviceQuotaExceededException?: any;
    /**
     * ThrottlingException
     */
    throttlingException?: any;
    /**
     * ValidationException
     */
    validationException?: any;
}
