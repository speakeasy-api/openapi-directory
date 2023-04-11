import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
/**
 * Specifies the configuration for experiment logging.
 */
export declare class UpdateExperimentTemplateRequestBodyLogConfiguration extends SpeakeasyBase {
    cloudWatchLogsConfiguration?: shared.ExperimentTemplateCloudWatchLogsLogConfigurationInput;
    logSchemaVersion?: number;
    s3Configuration?: shared.ExperimentTemplateS3LogConfigurationInput;
}
export declare class UpdateExperimentTemplateRequestBody extends SpeakeasyBase {
    /**
     * The actions for the experiment.
     */
    actions?: Record<string, shared.UpdateExperimentTemplateActionInputItem>;
    /**
     * A description for the template.
     */
    description?: string;
    /**
     * Specifies the configuration for experiment logging.
     */
    logConfiguration?: UpdateExperimentTemplateRequestBodyLogConfiguration;
    /**
     * The Amazon Resource Name (ARN) of an IAM role that grants the FIS service permission to perform service actions on your behalf.
     */
    roleArn?: string;
    /**
     * The stop conditions for the experiment.
     */
    stopConditions?: shared.UpdateExperimentTemplateStopConditionInput[];
    /**
     * The targets for the experiment.
     */
    targets?: Record<string, shared.UpdateExperimentTemplateTargetInput>;
}
export declare class UpdateExperimentTemplateRequest extends SpeakeasyBase {
    requestBody: UpdateExperimentTemplateRequestBody;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    /**
     * The ID of the experiment template.
     */
    id: string;
}
export declare class UpdateExperimentTemplateResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * ResourceNotFoundException
     */
    resourceNotFoundException?: any;
    /**
     * ServiceQuotaExceededException
     */
    serviceQuotaExceededException?: any;
    /**
     * Success
     */
    updateExperimentTemplateResponse?: shared.UpdateExperimentTemplateResponse;
    /**
     * ValidationException
     */
    validationException?: any;
}
