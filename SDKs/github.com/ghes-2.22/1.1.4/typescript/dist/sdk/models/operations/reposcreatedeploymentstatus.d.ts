import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
/**
 * Name for the target deployment environment, which can be changed when setting a deploy status. For example, `production`, `staging`, or `qa`.
 */
export declare enum ReposCreateDeploymentStatusRequestBodyEnvironmentEnum {
    Production = "production",
    Staging = "staging",
    Qa = "qa"
}
/**
 * The state of the status. Can be one of `error`, `failure`, `inactive`, `in_progress`, `queued` `pending`, or `success`. **Note:** To use the `inactive` state, you must provide the [`application/vnd.github.ant-man-preview+json`](https://docs.github.com/enterprise-server@2.22/rest/overview/api-previews#enhanced-deployments) custom media type. When you set a transient deployment to `inactive`, the deployment will be shown as `destroyed` in GitHub.
 */
export declare enum ReposCreateDeploymentStatusRequestBodyStateEnum {
    Error = "error",
    Failure = "failure",
    Inactive = "inactive",
    InProgress = "in_progress",
    Queued = "queued",
    Pending = "pending",
    Success = "success"
}
export declare class ReposCreateDeploymentStatusRequestBody extends SpeakeasyBase {
    /**
     * Adds a new `inactive` status to all prior non-transient, non-production environment deployments with the same repository and `environment` name as the created status's deployment. An `inactive` status is only added to deployments that had a `success` state. Default: `true`
     *
     * @remarks
     * **Note:** This parameter requires you to use the [`application/vnd.github.ant-man-preview+json`](https://docs.github.com/enterprise-server@2.22/rest/overview/api-previews#enhanced-deployments) custom media type.
     */
    autoInactive?: boolean;
    /**
     * A short description of the status. The maximum description length is 140 characters.
     */
    description?: string;
    /**
     * Name for the target deployment environment, which can be changed when setting a deploy status. For example, `production`, `staging`, or `qa`.
     */
    environment?: ReposCreateDeploymentStatusRequestBodyEnvironmentEnum;
    /**
     * Sets the URL for accessing your environment. Default: `""`
     *
     * @remarks
     * **Note:** This parameter requires you to use the [`application/vnd.github.ant-man-preview+json`](https://docs.github.com/enterprise-server@2.22/rest/overview/api-previews#enhanced-deployments) custom media type.
     */
    environmentUrl?: string;
    /**
     * The full URL of the deployment's output. This parameter replaces `target_url`. We will continue to accept `target_url` to support legacy uses, but we recommend replacing `target_url` with `log_url`. Setting `log_url` will automatically set `target_url` to the same value. Default: `""`
     *
     * @remarks
     * **Note:** This parameter requires you to use the [`application/vnd.github.ant-man-preview+json`](https://docs.github.com/enterprise-server@2.22/rest/overview/api-previews#enhanced-deployments) custom media type.
     */
    logUrl?: string;
    /**
     * The state of the status. Can be one of `error`, `failure`, `inactive`, `in_progress`, `queued` `pending`, or `success`. **Note:** To use the `inactive` state, you must provide the [`application/vnd.github.ant-man-preview+json`](https://docs.github.com/enterprise-server@2.22/rest/overview/api-previews#enhanced-deployments) custom media type. When you set a transient deployment to `inactive`, the deployment will be shown as `destroyed` in GitHub.
     */
    state: ReposCreateDeploymentStatusRequestBodyStateEnum;
    /**
     * The target URL to associate with this status. This URL should contain output to keep the user updated while the task is running or serve as historical information for what happened in the deployment. **Note:** It's recommended to use the `log_url` parameter, which replaces `target_url`.
     */
    targetUrl?: string;
}
export declare class ReposCreateDeploymentStatusRequest extends SpeakeasyBase {
    requestBody: ReposCreateDeploymentStatusRequestBody;
    /**
     * deployment_id parameter
     */
    deploymentId: number;
    owner: string;
    repo: string;
}
export declare class ReposCreateDeploymentStatusResponse extends SpeakeasyBase {
    contentType: string;
    headers?: Record<string, string[]>;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Response
     */
    deploymentStatus?: shared.DeploymentStatus;
    /**
     * Validation failed
     */
    validationError?: shared.ValidationError;
}
