import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
/**
 * Specifies the configuration for experiment logging.
 */
export declare class CreateExperimentTemplateRequestBodyLogConfiguration extends SpeakeasyBase {
    cloudWatchLogsConfiguration?: shared.ExperimentTemplateCloudWatchLogsLogConfigurationInput;
    logSchemaVersion?: number;
    s3Configuration?: shared.ExperimentTemplateS3LogConfigurationInput;
}
export declare class CreateExperimentTemplateRequestBody extends SpeakeasyBase {
    /**
     * The actions for the experiment.
     */
    actions: Record<string, shared.CreateExperimentTemplateActionInput>;
    /**
     * Unique, case-sensitive identifier that you provide to ensure the idempotency of the request.
     */
    clientToken: string;
    /**
     * A description for the experiment template.
     */
    description: string;
    /**
     * Specifies the configuration for experiment logging.
     */
    logConfiguration?: CreateExperimentTemplateRequestBodyLogConfiguration;
    /**
     * The Amazon Resource Name (ARN) of an IAM role that grants the FIS service permission to perform service actions on your behalf.
     */
    roleArn: string;
    /**
     * The stop conditions.
     */
    stopConditions: shared.CreateExperimentTemplateStopConditionInput[];
    /**
     * The tags to apply to the experiment template.
     */
    tags?: Record<string, string>;
    /**
     * The targets for the experiment.
     */
    targets?: Record<string, shared.CreateExperimentTemplateTargetInput>;
}
export declare class CreateExperimentTemplateRequest extends SpeakeasyBase {
    requestBody: CreateExperimentTemplateRequestBody;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class CreateExperimentTemplateResponse extends SpeakeasyBase {
    /**
     * ConflictException
     */
    conflictException?: any;
    contentType: string;
    /**
     * Success
     */
    createExperimentTemplateResponse?: shared.CreateExperimentTemplateResponse;
    /**
     * ResourceNotFoundException
     */
    resourceNotFoundException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * ServiceQuotaExceededException
     */
    serviceQuotaExceededException?: any;
    /**
     * ValidationException
     */
    validationException?: any;
}
