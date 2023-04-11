import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Contains information summarizing an edge deployment plan.
 */
export declare class EdgeDeploymentPlanSummary extends SpeakeasyBase {
    creationTime?: Date;
    deviceFleetName: string;
    edgeDeploymentFailed: number;
    edgeDeploymentPending: number;
    edgeDeploymentPlanArn: string;
    edgeDeploymentPlanName: string;
    edgeDeploymentSuccess: number;
    lastModifiedTime?: Date;
}
