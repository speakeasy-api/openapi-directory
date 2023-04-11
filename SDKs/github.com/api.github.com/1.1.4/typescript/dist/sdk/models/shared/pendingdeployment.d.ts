import { SpeakeasyBase } from "../../../internal/utils";
import { DeploymentReviewerTypeEnum } from "./deploymentreviewertypeenum";
export declare class PendingDeploymentEnvironment extends SpeakeasyBase {
    htmlUrl?: string;
    /**
     * The id of the environment.
     */
    id?: number;
    /**
     * The name of the environment.
     */
    name?: string;
    nodeId?: string;
    url?: string;
}
export declare class PendingDeploymentReviewers extends SpeakeasyBase {
    reviewer?: any;
    /**
     * The type of reviewer.
     */
    type?: DeploymentReviewerTypeEnum;
}
/**
 * Details of a deployment that is waiting for protection rules to pass
 */
export declare class PendingDeployment extends SpeakeasyBase {
    /**
     * Whether the currently authenticated user can approve the deployment
     */
    currentUserCanApprove: boolean;
    environment: PendingDeploymentEnvironment;
    /**
     * The people or teams that may approve jobs that reference the environment. You can list up to six users or teams as reviewers. The reviewers must have at least read access to the repository. Only one of the required reviewers needs to approve the job for it to proceed.
     */
    reviewers: PendingDeploymentReviewers[];
    /**
     * The set duration of the wait timer
     */
    waitTimer: number;
    /**
     * The time that the wait timer began.
     */
    waitTimerStartedAt: Date;
}
