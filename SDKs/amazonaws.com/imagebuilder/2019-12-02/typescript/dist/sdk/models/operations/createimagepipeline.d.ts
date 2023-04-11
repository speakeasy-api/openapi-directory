import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
/**
 * Configure image tests for your pipeline build. Tests run after building the image, to verify that the AMI or container image is valid before distributing it.
 */
export declare class CreateImagePipelineRequestBodyImageTestsConfiguration extends SpeakeasyBase {
    imageTestsEnabled?: boolean;
    timeoutMinutes?: number;
}
/**
 * A schedule configures how often and when a pipeline will automatically create a new image.
 */
export declare class CreateImagePipelineRequestBodySchedule extends SpeakeasyBase {
    pipelineExecutionStartCondition?: shared.PipelineExecutionStartConditionEnum;
    scheduleExpression?: string;
    timezone?: string;
}
/**
 *  The status of the image pipeline.
 */
export declare enum CreateImagePipelineRequestBodyStatusEnum {
    Disabled = "DISABLED",
    Enabled = "ENABLED"
}
export declare class CreateImagePipelineRequestBody extends SpeakeasyBase {
    /**
     *  The idempotency token used to make this request idempotent.
     */
    clientToken: string;
    /**
     * The Amazon Resource Name (ARN) of the container recipe that is used to configure images created by this container pipeline.
     */
    containerRecipeArn?: string;
    /**
     *  The description of the image pipeline.
     */
    description?: string;
    /**
     *  The Amazon Resource Name (ARN) of the distribution configuration that will be used to configure and distribute images created by this image pipeline.
     */
    distributionConfigurationArn?: string;
    /**
     *  Collects additional information about the image being created, including the operating system (OS) version and package list. This information is used to enhance the overall experience of using EC2 Image Builder. Enabled by default.
     */
    enhancedImageMetadataEnabled?: boolean;
    /**
     *  The Amazon Resource Name (ARN) of the image recipe that will be used to configure images created by this image pipeline.
     */
    imageRecipeArn?: string;
    /**
     * Configure image tests for your pipeline build. Tests run after building the image, to verify that the AMI or container image is valid before distributing it.
     */
    imageTestsConfiguration?: CreateImagePipelineRequestBodyImageTestsConfiguration;
    /**
     *  The Amazon Resource Name (ARN) of the infrastructure configuration that will be used to build images created by this image pipeline.
     */
    infrastructureConfigurationArn: string;
    /**
     *  The name of the image pipeline.
     */
    name: string;
    /**
     * A schedule configures how often and when a pipeline will automatically create a new image.
     */
    schedule?: CreateImagePipelineRequestBodySchedule;
    /**
     *  The status of the image pipeline.
     */
    status?: CreateImagePipelineRequestBodyStatusEnum;
    /**
     *  The tags of the image pipeline.
     */
    tags?: Record<string, string>;
}
export declare class CreateImagePipelineRequest extends SpeakeasyBase {
    requestBody: CreateImagePipelineRequestBody;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class CreateImagePipelineResponse extends SpeakeasyBase {
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
     * Success
     */
    createImagePipelineResponse?: shared.CreateImagePipelineResponse;
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
    /**
     * ResourceAlreadyExistsException
     */
    resourceAlreadyExistsException?: any;
    /**
     * ResourceInUseException
     */
    resourceInUseException?: any;
    /**
     * ServiceException
     */
    serviceException?: any;
    /**
     * ServiceQuotaExceededException
     */
    serviceQuotaExceededException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * ServiceUnavailableException
     */
    serviceUnavailableException?: any;
}
