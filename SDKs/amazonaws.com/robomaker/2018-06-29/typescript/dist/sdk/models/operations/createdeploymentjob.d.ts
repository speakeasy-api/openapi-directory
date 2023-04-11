import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
/**
 * Information about a deployment configuration.
 */
export declare class CreateDeploymentJobRequestBodyDeploymentConfig extends SpeakeasyBase {
    concurrentDeploymentPercentage?: number;
    downloadConditionFile?: shared.S3Object;
    failureThresholdPercentage?: number;
    robotDeploymentTimeoutInSeconds?: number;
}
export declare class CreateDeploymentJobRequestBody extends SpeakeasyBase {
    /**
     * Unique, case-sensitive identifier that you provide to ensure the idempotency of the request.
     */
    clientRequestToken: string;
    /**
     * The deployment application configuration.
     */
    deploymentApplicationConfigs: shared.DeploymentApplicationConfig[];
    /**
     * Information about a deployment configuration.
     */
    deploymentConfig?: CreateDeploymentJobRequestBodyDeploymentConfig;
    /**
     * The Amazon Resource Name (ARN) of the fleet to deploy.
     */
    fleet: string;
    /**
     * A map that contains tag keys and tag values that are attached to the deployment job.
     */
    tags?: Record<string, string>;
}
export declare class CreateDeploymentJobRequest extends SpeakeasyBase {
    requestBody: CreateDeploymentJobRequestBody;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class CreateDeploymentJobResponse extends SpeakeasyBase {
    /**
     * ConcurrentDeploymentException
     */
    concurrentDeploymentException?: any;
    contentType: string;
    /**
     * Success
     */
    createDeploymentJobResponse?: shared.CreateDeploymentJobResponse;
    /**
     * IdempotentParameterMismatchException
     */
    idempotentParameterMismatchException?: any;
    /**
     * InternalServerException
     */
    internalServerException?: any;
    /**
     * InvalidParameterException
     */
    invalidParameterException?: any;
    /**
     * LimitExceededException
     */
    limitExceededException?: any;
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
}
