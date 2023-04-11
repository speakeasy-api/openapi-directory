import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
/**
 * Configure image tests for your pipeline build. Tests run after building the image, to verify that the AMI or container image is valid before distributing it.
 */
export declare class UpdateImagePipelineRequestBodyImageTestsConfiguration extends SpeakeasyBase {
    imageTestsEnabled?: boolean;
    timeoutMinutes?: number;
}
/**
 * A schedule configures how often and when a pipeline will automatically create a new image.
 */
export declare class UpdateImagePipelineRequestBodySchedule extends SpeakeasyBase {
    pipelineExecutionStartCondition?: shared.PipelineExecutionStartConditionEnum;
    scheduleExpression?: string;
    timezone?: string;
}
/**
 * The status of the image pipeline.
 */
export declare enum UpdateImagePipelineRequestBodyStatusEnum {
    Disabled = "DISABLED",
    Enabled = "ENABLED"
}
export declare class UpdateImagePipelineRequestBody extends SpeakeasyBase {
    /**
     * The idempotency token used to make this request idempotent.
     */
    clientToken: string;
    /**
     * The Amazon Resource Name (ARN) of the container pipeline to update.
     */
    containerRecipeArn?: string;
    /**
     * The description of the image pipeline.
     */
    description?: string;
    /**
     * The Amazon Resource Name (ARN) of the distribution configuration that will be used to configure and distribute images updated by this image pipeline.
     */
    distributionConfigurationArn?: string;
    /**
     *  Collects additional information about the image being created, including the operating system (OS) version and package list. This information is used to enhance the overall experience of using EC2 Image Builder. Enabled by default.
     */
    enhancedImageMetadataEnabled?: boolean;
    /**
     * The Amazon Resource Name (ARN) of the image pipeline that you want to update.
     */
    imagePipelineArn: string;
    /**
     * The Amazon Resource Name (ARN) of the image recipe that will be used to configure images updated by this image pipeline.
     */
    imageRecipeArn?: string;
    /**
     * Configure image tests for your pipeline build. Tests run after building the image, to verify that the AMI or container image is valid before distributing it.
     */
    imageTestsConfiguration?: UpdateImagePipelineRequestBodyImageTestsConfiguration;
    /**
     * The Amazon Resource Name (ARN) of the infrastructure configuration that will be used to build images updated by this image pipeline.
     */
    infrastructureConfigurationArn: string;
    /**
     * A schedule configures how often and when a pipeline will automatically create a new image.
     */
    schedule?: UpdateImagePipelineRequestBodySchedule;
    /**
     * The status of the image pipeline.
     */
    status?: UpdateImagePipelineRequestBodyStatusEnum;
}
export declare class UpdateImagePipelineRequest extends SpeakeasyBase {
    requestBody: UpdateImagePipelineRequestBody;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class UpdateImagePipelineResponse extends SpeakeasyBase {
    /**
     * CallRateLimitExceededException
     */
    callRateLimitExceededException?: any;
    /**
     * ClientException
     */
    clientException?: any;
    contentType: string;
    /**
     * ForbiddenException
     */
    forbiddenException?: any;
    /**
     * IdempotentParameterMismatchException
     */
    idempotentParameterMismatchException?: any;
    /**
     * InvalidRequestException
     */
    invalidRequestException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * ResourceInUseException
     */
    resourceInUseException?: any;
    /**
     * ServiceException
     */
    serviceException?: any;
    /**
     * ServiceUnavailableException
     */
    serviceUnavailableException?: any;
    /**
     * Success
     */
    updateImagePipelineResponse?: shared.UpdateImagePipelineResponse;
}
