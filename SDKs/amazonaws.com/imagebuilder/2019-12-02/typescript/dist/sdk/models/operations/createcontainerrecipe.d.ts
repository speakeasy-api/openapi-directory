import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
/**
 * The type of container to create.
 */
export declare enum CreateContainerRecipeRequestBodyContainerTypeEnum {
    Docker = "DOCKER"
}
/**
 * Defines a custom base AMI and block device mapping configurations of an instance used for building and testing container images.
 */
export declare class CreateContainerRecipeRequestBodyInstanceConfiguration extends SpeakeasyBase {
    blockDeviceMappings?: shared.InstanceBlockDeviceMapping[];
    image?: string;
}
/**
 * Specifies the operating system platform when you use a custom base image.
 */
export declare enum CreateContainerRecipeRequestBodyPlatformOverrideEnum {
    Windows = "Windows",
    Linux = "Linux"
}
/**
 * The container repository where the output container image is stored.
 */
export declare class CreateContainerRecipeRequestBodyTargetRepository extends SpeakeasyBase {
    repositoryName?: string;
    service?: shared.ContainerRepositoryServiceEnum;
}
export declare class CreateContainerRecipeRequestBody extends SpeakeasyBase {
    /**
     * The client token used to make this request idempotent.
     */
    clientToken: string;
    /**
     * Components for build and test that are included in the container recipe. Recipes require a minimum of one build component, and can have a maximum of 20 build and test components in any combination.
     */
    components: shared.ComponentConfiguration[];
    /**
     * The type of container to create.
     */
    containerType: CreateContainerRecipeRequestBodyContainerTypeEnum;
    /**
     * The description of the container recipe.
     */
    description?: string;
    /**
     * The Dockerfile template used to build your image as an inline data blob.
     */
    dockerfileTemplateData?: string;
    /**
     * The Amazon S3 URI for the Dockerfile that will be used to build your container image.
     */
    dockerfileTemplateUri?: string;
    /**
     * Specifies the operating system version for the base image.
     */
    imageOsVersionOverride?: string;
    /**
     * Defines a custom base AMI and block device mapping configurations of an instance used for building and testing container images.
     */
    instanceConfiguration?: CreateContainerRecipeRequestBodyInstanceConfiguration;
    /**
     * Identifies which KMS key is used to encrypt the container image.
     */
    kmsKeyId?: string;
    /**
     * The name of the container recipe.
     */
    name: string;
    /**
     * The base image for the container recipe.
     */
    parentImage: string;
    /**
     * Specifies the operating system platform when you use a custom base image.
     */
    platformOverride?: CreateContainerRecipeRequestBodyPlatformOverrideEnum;
    /**
     * <p>The semantic version of the container recipe. This version follows the semantic version syntax.</p> <note> <p>The semantic version has four nodes: &lt;major&gt;.&lt;minor&gt;.&lt;patch&gt;/&lt;build&gt;. You can assign values for the first three, and can filter on all of them.</p> <p> <b>Assignment:</b> For the first three nodes you can assign any positive integer value, including zero, with an upper limit of 2^30-1, or 1073741823 for each node. Image Builder automatically assigns the build number to the fourth node.</p> <p> <b>Patterns:</b> You can use any numeric pattern that adheres to the assignment requirements for the nodes that you can assign. For example, you might choose a software version pattern, such as 1.0.0, or a date, such as 2021.01.01.</p> </note>
     */
    semanticVersion: string;
    /**
     * Tags that are attached to the container recipe.
     */
    tags?: Record<string, string>;
    /**
     * The container repository where the output container image is stored.
     */
    targetRepository: CreateContainerRecipeRequestBodyTargetRepository;
    /**
     * The working directory for use during build and test workflows.
     */
    workingDirectory?: string;
}
export declare class CreateContainerRecipeRequest extends SpeakeasyBase {
    requestBody: CreateContainerRecipeRequestBody;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class CreateContainerRecipeResponse extends SpeakeasyBase {
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
    createContainerRecipeResponse?: shared.CreateContainerRecipeResponse;
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
     * InvalidVersionNumberException
     */
    invalidVersionNumberException?: any;
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
