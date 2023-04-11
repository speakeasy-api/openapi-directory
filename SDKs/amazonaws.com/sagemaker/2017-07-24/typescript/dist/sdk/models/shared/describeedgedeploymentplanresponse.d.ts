import { SpeakeasyBase } from "../../../internal/utils";
import { DeploymentStageStatusSummary } from "./deploymentstagestatussummary";
import { EdgeDeploymentModelConfig } from "./edgedeploymentmodelconfig";
/**
 * Success
 */
export declare class DescribeEdgeDeploymentPlanResponse extends SpeakeasyBase {
    creationTime?: Date;
    deviceFleetName: string;
    edgeDeploymentFailed?: number;
    edgeDeploymentPending?: number;
    edgeDeploymentPlanArn: string;
    edgeDeploymentPlanName: string;
    edgeDeploymentSuccess?: number;
    lastModifiedTime?: Date;
    modelConfigs: EdgeDeploymentModelConfig[];
    nextToken?: string;
    stages: DeploymentStageStatusSummary[];
}
