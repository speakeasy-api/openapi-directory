import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
/**
 * The values of StartJobRun API requests used in job runs started using the job template.
 */
export declare class CreateJobTemplateRequestBodyJobTemplateData extends SpeakeasyBase {
    configurationOverrides?: shared.ParametricConfigurationOverrides;
    executionRoleArn?: string;
    /**
     * Specify the driver that the job runs on. Exactly one of the two available job drivers is required, either sparkSqlJobDriver or sparkSubmitJobDriver.
     */
    jobDriver?: shared.JobDriver;
    jobTags?: Record<string, string>;
    parameterConfiguration?: Record<string, shared.TemplateParameterConfiguration>;
    releaseLabel?: string;
}
export declare class CreateJobTemplateRequestBody extends SpeakeasyBase {
    /**
     * The client token of the job template.
     */
    clientToken: string;
    /**
     * The values of StartJobRun API requests used in job runs started using the job template.
     */
    jobTemplateData: CreateJobTemplateRequestBodyJobTemplateData;
    /**
     * The KMS key ARN used to encrypt the job template.
     */
    kmsKeyArn?: string;
    /**
     * The specified name of the job template.
     */
    name: string;
    /**
     * The tags that are associated with the job template.
     */
    tags?: Record<string, string>;
}
export declare class CreateJobTemplateRequest extends SpeakeasyBase {
    requestBody: CreateJobTemplateRequestBody;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class CreateJobTemplateResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    createJobTemplateResponse?: shared.CreateJobTemplateResponse;
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
     * ValidationException
     */
    validationException?: any;
}
