import { SpeakeasyBase } from "../../../internal/utils";
import { DeploymentBranchPolicySettings } from "./deploymentbranchpolicysettings";
import { DeploymentReviewerTypeEnum } from "./deploymentreviewertypeenum";
export declare class EnvironmentProtectionRules3 extends SpeakeasyBase {
    id: number;
    nodeId: string;
    type: string;
}
export declare class EnvironmentProtectionRules2Reviewers extends SpeakeasyBase {
    reviewer?: any;
    /**
     * The type of reviewer.
     */
    type?: DeploymentReviewerTypeEnum;
}
export declare class EnvironmentProtectionRules2 extends SpeakeasyBase {
    id: number;
    nodeId: string;
    /**
     * The people or teams that may approve jobs that reference the environment. You can list up to six users or teams as reviewers. The reviewers must have at least read access to the repository. Only one of the required reviewers needs to approve the job for it to proceed.
     */
    reviewers?: EnvironmentProtectionRules2Reviewers[];
    type: string;
}
export declare class EnvironmentProtectionRules1 extends SpeakeasyBase {
    id: number;
    nodeId: string;
    type: string;
    /**
     * The amount of time to delay a job after the job is initially triggered. The time (in minutes) must be an integer between 0 and 43,200 (30 days).
     */
    waitTimer?: number;
}
/**
 * Details of a deployment environment
 */
export declare class Environment extends SpeakeasyBase {
    /**
     * The time that the environment was created, in ISO 8601 format.
     */
    createdAt: Date;
    /**
     * The type of deployment branch policy for this environment. To allow all branches to deploy, set to `null`.
     */
    deploymentBranchPolicy?: DeploymentBranchPolicySettings;
    htmlUrl: string;
    /**
     * The id of the environment.
     */
    id: number;
    /**
     * The name of the environment.
     */
    name: string;
    nodeId: string;
    protectionRules?: any[];
    /**
     * The time that the environment was last updated, in ISO 8601 format.
     */
    updatedAt: Date;
    url: string;
}
