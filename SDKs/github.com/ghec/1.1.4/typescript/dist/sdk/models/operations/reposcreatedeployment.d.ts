import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class ReposCreateDeploymentRequestBody extends SpeakeasyBase {
    /**
     * Attempts to automatically merge the default branch into the requested ref, if it's behind the default branch.
     */
    autoMerge?: boolean;
    /**
     * Short description of the deployment.
     */
    description?: string;
    /**
     * Name for the target deployment environment (e.g., `production`, `staging`, `qa`).
     */
    environment?: string;
    payload?: any;
    /**
     * Specifies if the given environment is one that end-users directly interact with. Default: `true` when `environment` is `production` and `false` otherwise.
     */
    productionEnvironment?: boolean;
    /**
     * The ref to deploy. This can be a branch, tag, or SHA.
     */
    ref: string;
    /**
     * The [status](https://docs.github.com/enterprise-cloud@latest//rest/commits/statuses) contexts to verify against commit status checks. If you omit this parameter, GitHub verifies all unique contexts before creating a deployment. To bypass checking entirely, pass an empty array. Defaults to all unique contexts.
     */
    requiredContexts?: string[];
    /**
     * Specifies a task to execute (e.g., `deploy` or `deploy:migrations`).
     */
    task?: string;
    /**
     * Specifies if the given environment is specific to the deployment and will no longer exist at some point in the future. Default: `false`
     */
    transientEnvironment?: boolean;
}
export declare class ReposCreateDeploymentRequest extends SpeakeasyBase {
    requestBody: ReposCreateDeploymentRequestBody;
    /**
     * The account owner of the repository. The name is not case sensitive.
     */
    owner: string;
    /**
     * The name of the repository. The name is not case sensitive.
     */
    repo: string;
}
/**
 * Merged branch response
 */
export declare class ReposCreateDeployment202ApplicationJSON extends SpeakeasyBase {
    message?: string;
}
export declare class ReposCreateDeploymentResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Response
     */
    deployment?: shared.Deployment;
    /**
     * Merged branch response
     */
    reposCreateDeployment202ApplicationJSONObject?: ReposCreateDeployment202ApplicationJSON;
    /**
     * Validation failed, or the endpoint has been spammed.
     */
    validationError?: shared.ValidationError;
}
