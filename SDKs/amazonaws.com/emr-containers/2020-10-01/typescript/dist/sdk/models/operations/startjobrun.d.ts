import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
/**
 * A configuration specification to be used to override existing configurations.
 */
export declare class StartJobRunRequestBodyConfigurationOverrides extends SpeakeasyBase {
    applicationConfiguration?: shared.Configuration[];
    monitoringConfiguration?: shared.MonitoringConfiguration;
}
/**
 * Specify the driver that the job runs on. Exactly one of the two available job drivers is required, either sparkSqlJobDriver or sparkSubmitJobDriver.
 */
export declare class StartJobRunRequestBodyJobDriver extends SpeakeasyBase {
    sparkSqlJobDriver?: shared.SparkSqlJobDriver;
    sparkSubmitJobDriver?: shared.SparkSubmitJobDriver;
}
/**
 * The configuration of the retry policy that the job runs on.
 */
export declare class StartJobRunRequestBodyRetryPolicyConfiguration extends SpeakeasyBase {
    maxAttempts?: number;
}
export declare class StartJobRunRequestBody extends SpeakeasyBase {
    /**
     * The client idempotency token of the job run request.
     */
    clientToken: string;
    /**
     * A configuration specification to be used to override existing configurations.
     */
    configurationOverrides?: StartJobRunRequestBodyConfigurationOverrides;
    /**
     * The execution role ARN for the job run.
     */
    executionRoleArn?: string;
    /**
     * Specify the driver that the job runs on. Exactly one of the two available job drivers is required, either sparkSqlJobDriver or sparkSubmitJobDriver.
     */
    jobDriver?: StartJobRunRequestBodyJobDriver;
    /**
     * The job template ID to be used to start the job run.
     */
    jobTemplateId?: string;
    /**
     * The values of job template parameters to start a job run.
     */
    jobTemplateParameters?: Record<string, string>;
    /**
     * The name of the job run.
     */
    name?: string;
    /**
     * The Amazon EMR release version to use for the job run.
     */
    releaseLabel?: string;
    /**
     * The configuration of the retry policy that the job runs on.
     */
    retryPolicyConfiguration?: StartJobRunRequestBodyRetryPolicyConfiguration;
    /**
     * The tags assigned to job runs.
     */
    tags?: Record<string, string>;
}
export declare class StartJobRunRequest extends SpeakeasyBase {
    requestBody: StartJobRunRequestBody;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    /**
     * The virtual cluster ID for which the job run request is submitted.
     */
    virtualClusterId: string;
}
export declare class StartJobRunResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * InternalServerException
     */
    internalServerException?: any;
    /**
     * ResourceNotFoundException
     */
    resourceNotFoundException?: any;
    /**
     * Success
     */
    startJobRunResponse?: shared.StartJobRunResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * ValidationException
     */
    validationException?: any;
}
