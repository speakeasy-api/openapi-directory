import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
/**
 * Contains information about policies that define how a deployment updates components and handles failure.
 */
export declare class CreateDeploymentRequestBodyDeploymentPolicies extends SpeakeasyBase {
    componentUpdatePolicy?: shared.DeploymentComponentUpdatePolicy;
    configurationValidationPolicy?: shared.DeploymentConfigurationValidationPolicy;
    failureHandlingPolicy?: shared.DeploymentFailureHandlingPolicyEnum;
}
/**
 * Contains information about an IoT job configuration.
 */
export declare class CreateDeploymentRequestBodyIotJobConfiguration extends SpeakeasyBase {
    abortConfig?: shared.IoTJobAbortConfig;
    jobExecutionsRolloutConfig?: shared.IoTJobExecutionsRolloutConfig;
    timeoutConfig?: shared.IoTJobTimeoutConfig;
}
export declare class CreateDeploymentRequestBody extends SpeakeasyBase {
    /**
     * A unique, case-sensitive identifier that you can provide to ensure that the request is idempotent. Idempotency means that the request is successfully processed only once, even if you send the request multiple times. When a request succeeds, and you specify the same client token for subsequent successful requests, the IoT Greengrass V2 service returns the successful response that it caches from the previous request. IoT Greengrass V2 caches successful responses for idempotent requests for up to 8 hours.
     */
    clientToken?: string;
    /**
     * The components to deploy. This is a dictionary, where each key is the name of a component, and each key's value is the version and configuration to deploy for that component.
     */
    components?: Record<string, shared.ComponentDeploymentSpecification>;
    /**
     * The name of the deployment.
     */
    deploymentName?: string;
    /**
     * Contains information about policies that define how a deployment updates components and handles failure.
     */
    deploymentPolicies?: CreateDeploymentRequestBodyDeploymentPolicies;
    /**
     * Contains information about an IoT job configuration.
     */
    iotJobConfiguration?: CreateDeploymentRequestBodyIotJobConfiguration;
    /**
     * The parent deployment's target <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">ARN</a> within a subdeployment.
     */
    parentTargetArn?: string;
    /**
     * A list of key-value pairs that contain metadata for the resource. For more information, see <a href="https://docs.aws.amazon.com/greengrass/v2/developerguide/tag-resources.html">Tag your resources</a> in the <i>IoT Greengrass V2 Developer Guide</i>.
     */
    tags?: Record<string, string>;
    /**
     * The <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">ARN</a> of the target IoT thing or thing group. When creating a subdeployment, the targetARN can only be a thing group.
     */
    targetArn: string;
}
export declare class CreateDeploymentRequest extends SpeakeasyBase {
    requestBody: CreateDeploymentRequestBody;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class CreateDeploymentResponse extends SpeakeasyBase {
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
    createDeploymentResponse?: shared.CreateDeploymentResponse;
    /**
     * InternalServerException
     */
    internalServerException?: any;
    /**
     * RequestAlreadyInProgressException
     */
    requestAlreadyInProgressException?: any;
    /**
     * ResourceNotFoundException
     */
    resourceNotFoundException?: any;
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
