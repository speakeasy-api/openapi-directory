import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
/**
 * Contains information about an Lambda function to import to create a component.
 */
export declare class CreateComponentVersionRequestBodyLambdaFunction extends SpeakeasyBase {
    componentDependencies?: Record<string, shared.ComponentDependencyRequirement>;
    componentLambdaParameters?: shared.LambdaExecutionParameters;
    componentName?: string;
    componentPlatforms?: shared.ComponentPlatform[];
    componentVersion?: string;
    lambdaArn?: string;
}
export declare class CreateComponentVersionRequestBody extends SpeakeasyBase {
    /**
     * A unique, case-sensitive identifier that you can provide to ensure that the request is idempotent. Idempotency means that the request is successfully processed only once, even if you send the request multiple times. When a request succeeds, and you specify the same client token for subsequent successful requests, the IoT Greengrass V2 service returns the successful response that it caches from the previous request. IoT Greengrass V2 caches successful responses for idempotent requests for up to 8 hours.
     */
    clientToken?: string;
    /**
     * <p>The recipe to use to create the component. The recipe defines the component's metadata, parameters, dependencies, lifecycle, artifacts, and platform compatibility.</p> <p>You must specify either <code>inlineRecipe</code> or <code>lambdaFunction</code>.</p>
     */
    inlineRecipe?: string;
    /**
     * Contains information about an Lambda function to import to create a component.
     */
    lambdaFunction?: CreateComponentVersionRequestBodyLambdaFunction;
    /**
     * A list of key-value pairs that contain metadata for the resource. For more information, see <a href="https://docs.aws.amazon.com/greengrass/v2/developerguide/tag-resources.html">Tag your resources</a> in the <i>IoT Greengrass V2 Developer Guide</i>.
     */
    tags?: Record<string, string>;
}
export declare class CreateComponentVersionRequest extends SpeakeasyBase {
    requestBody: CreateComponentVersionRequestBody;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class CreateComponentVersionResponse extends SpeakeasyBase {
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
    createComponentVersionResponse?: shared.CreateComponentVersionResponse;
    /**
     * InternalServerException
     */
    internalServerException?: any;
    /**
     * RequestAlreadyInProgressException
     */
    requestAlreadyInProgressException?: any;
    /**
     * ServiceQuotaExceededException
     */
    serviceQuotaExceededException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * ThrottlingException
     */
    throttlingException?: any;
    /**
     * ValidationException
     */
    validationException?: any;
}
