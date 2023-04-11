import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class ReposCreateOrUpdateEnvironmentRequestBodyReviewers extends SpeakeasyBase {
    /**
     * The id of the user or team who can review the deployment
     */
    id?: number;
    /**
     * The type of reviewer.
     */
    type?: shared.DeploymentReviewerTypeEnum;
}
export declare class ReposCreateOrUpdateEnvironmentRequestBody extends SpeakeasyBase {
    /**
     * The type of deployment branch policy for this environment. To allow all branches to deploy, set to `null`.
     */
    deploymentBranchPolicy?: shared.DeploymentBranchPolicySettings;
    /**
     * The people or teams that may review jobs that reference the environment. You can list up to six users or teams as reviewers. The reviewers must have at least read access to the repository. Only one of the required reviewers needs to approve the job for it to proceed.
     */
    reviewers?: ReposCreateOrUpdateEnvironmentRequestBodyReviewers[];
    /**
     * The amount of time to delay a job after the job is initially triggered. The time (in minutes) must be an integer between 0 and 43,200 (30 days).
     */
    waitTimer?: number;
}
export declare class ReposCreateOrUpdateEnvironmentRequest extends SpeakeasyBase {
    requestBody?: ReposCreateOrUpdateEnvironmentRequestBody;
    /**
     * The name of the environment.
     */
    environmentName: string;
    /**
     * The account owner of the repository. The name is not case sensitive.
     */
    owner: string;
    /**
     * The name of the repository. The name is not case sensitive.
     */
    repo: string;
}
export declare class ReposCreateOrUpdateEnvironmentResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Validation error when the environment name is invalid or when `protected_branches` and `custom_branch_policies` in `deployment_branch_policy` are set to the same value
     */
    basicError?: shared.BasicError;
    /**
     * Response
     */
    environment?: shared.Environment;
}
