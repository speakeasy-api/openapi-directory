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
 * The driver that the job runs on.
 */
export declare class StartJobRunRequestBodyJobDriver extends SpeakeasyBase {
    hive?: shared.Hive;
    sparkSubmit?: shared.SparkSubmit;
}
export declare class StartJobRunRequestBody extends SpeakeasyBase {
    /**
     * The client idempotency token of the job run to start. Its value must be unique for each request.
     */
    clientToken: string;
    /**
     * A configuration specification to be used to override existing configurations.
     */
    configurationOverrides?: StartJobRunRequestBodyConfigurationOverrides;
    /**
     * The execution role ARN for the job run.
     */
    executionRoleArn: string;
    /**
     * The maximum duration for the job run to run. If the job run runs beyond this duration, it will be automatically cancelled.
     */
    executionTimeoutMinutes?: number;
    /**
     * The driver that the job runs on.
     */
    jobDriver?: StartJobRunRequestBodyJobDriver;
    /**
     * The optional job run name. This doesn't have to be unique.
     */
    name?: string;
    /**
     * The tags assigned to the job run.
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
     * The ID of the application on which to run the job.
     */
    applicationId: string;
}
export declare class StartJobRunResponse extends SpeakeasyBase {
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
