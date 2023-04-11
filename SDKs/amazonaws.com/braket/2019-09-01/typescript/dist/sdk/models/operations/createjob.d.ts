import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
/**
 * Defines the Amazon Braket job to be created. Specifies the container image the job uses and the paths to the Python scripts used for entry and training.
 */
export declare class CreateJobRequestBodyAlgorithmSpecification extends SpeakeasyBase {
    containerImage?: shared.ContainerImage;
    scriptModeConfig?: shared.ScriptModeConfig;
}
/**
 * Contains information about the output locations for job checkpoint data.
 */
export declare class CreateJobRequestBodyCheckpointConfig extends SpeakeasyBase {
    localPath?: string;
    s3Uri?: string;
}
/**
 * Configures the quantum processing units (QPUs) or simulator used to create and run an Amazon Braket job.
 */
export declare class CreateJobRequestBodyDeviceConfig extends SpeakeasyBase {
    device?: string;
}
/**
 * Configures the resource instances to use while running the Amazon Braket hybrid job on Amazon Braket.
 */
export declare class CreateJobRequestBodyInstanceConfig extends SpeakeasyBase {
    instanceCount?: number;
    instanceType?: shared.InstanceTypeEnum;
    volumeSizeInGb?: number;
}
/**
 * Specifies the path to the S3 location where you want to store job artifacts and the encryption key used to store them.
 */
export declare class CreateJobRequestBodyOutputDataConfig extends SpeakeasyBase {
    kmsKeyId?: string;
    s3Path?: string;
}
/**
 * Specifies limits for how long an Amazon Braket job can run.
 */
export declare class CreateJobRequestBodyStoppingCondition extends SpeakeasyBase {
    maxRuntimeInSeconds?: number;
}
export declare class CreateJobRequestBody extends SpeakeasyBase {
    /**
     * Defines the Amazon Braket job to be created. Specifies the container image the job uses and the paths to the Python scripts used for entry and training.
     */
    algorithmSpecification: CreateJobRequestBodyAlgorithmSpecification;
    /**
     * Contains information about the output locations for job checkpoint data.
     */
    checkpointConfig?: CreateJobRequestBodyCheckpointConfig;
    /**
     * A unique token that guarantees that the call to this API is idempotent.
     */
    clientToken: string;
    /**
     * Configures the quantum processing units (QPUs) or simulator used to create and run an Amazon Braket job.
     */
    deviceConfig: CreateJobRequestBodyDeviceConfig;
    /**
     * Algorithm-specific parameters used by an Amazon Braket job that influence the quality of the training job. The values are set with a string of JSON key:value pairs, where the key is the name of the hyperparameter and the value is the value of th hyperparameter.
     */
    hyperParameters?: Record<string, string>;
    /**
     * A list of parameters that specify the name and type of input data and where it is located.
     */
    inputDataConfig?: shared.InputFileConfig[];
    /**
     * Configures the resource instances to use while running the Amazon Braket hybrid job on Amazon Braket.
     */
    instanceConfig: CreateJobRequestBodyInstanceConfig;
    /**
     * The name of the Amazon Braket job.
     */
    jobName: string;
    /**
     * Specifies the path to the S3 location where you want to store job artifacts and the encryption key used to store them.
     */
    outputDataConfig: CreateJobRequestBodyOutputDataConfig;
    /**
     * The Amazon Resource Name (ARN) of an IAM role that Amazon Braket can assume to perform tasks on behalf of a user. It can access user resources, run an Amazon Braket job container on behalf of user, and output resources to the users' s3 buckets.
     */
    roleArn: string;
    /**
     * Specifies limits for how long an Amazon Braket job can run.
     */
    stoppingCondition?: CreateJobRequestBodyStoppingCondition;
    /**
     * A tag object that consists of a key and an optional value, used to manage metadata for Amazon Braket resources.
     */
    tags?: Record<string, string>;
}
export declare class CreateJobRequest extends SpeakeasyBase {
    requestBody: CreateJobRequestBody;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class CreateJobResponse extends SpeakeasyBase {
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
    createJobResponse?: shared.CreateJobResponse;
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
