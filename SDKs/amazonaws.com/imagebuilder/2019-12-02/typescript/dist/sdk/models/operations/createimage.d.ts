import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
/**
 * Configure image tests for your pipeline build. Tests run after building the image, to verify that the AMI or container image is valid before distributing it.
 */
export declare class CreateImageRequestBodyImageTestsConfiguration extends SpeakeasyBase {
    imageTestsEnabled?: boolean;
    timeoutMinutes?: number;
}
export declare class CreateImageRequestBody extends SpeakeasyBase {
    /**
     *  The idempotency token used to make this request idempotent.
     */
    clientToken: string;
    /**
     * The Amazon Resource Name (ARN) of the container recipe that defines how images are configured and tested.
     */
    containerRecipeArn?: string;
    /**
     *  The Amazon Resource Name (ARN) of the distribution configuration that defines and configures the outputs of your pipeline.
     */
    distributionConfigurationArn?: string;
    /**
     *  Collects additional information about the image being created, including the operating system (OS) version and package list. This information is used to enhance the overall experience of using EC2 Image Builder. Enabled by default.
     */
    enhancedImageMetadataEnabled?: boolean;
    /**
     *  The Amazon Resource Name (ARN) of the image recipe that defines how images are configured, tested, and assessed.
     */
    imageRecipeArn?: string;
    /**
     * Configure image tests for your pipeline build. Tests run after building the image, to verify that the AMI or container image is valid before distributing it.
     */
    imageTestsConfiguration?: CreateImageRequestBodyImageTestsConfiguration;
    /**
     *  The Amazon Resource Name (ARN) of the infrastructure configuration that defines the environment in which your image will be built and tested.
     */
    infrastructureConfigurationArn: string;
    /**
     *  The tags of the image.
     */
    tags?: Record<string, string>;
}
export declare class CreateImageRequest extends SpeakeasyBase {
    requestBody: CreateImageRequestBody;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class CreateImageResponse extends SpeakeasyBase {
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
    createImageResponse?: shared.CreateImageResponse;
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
