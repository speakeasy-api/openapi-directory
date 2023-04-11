import { SpeakeasyBase } from "../../../internal/utils";
import { DeploymentStage } from "./deploymentstage";
export declare class CreateEdgeDeploymentStageRequest extends SpeakeasyBase {
    edgeDeploymentPlanName: string;
    stages: DeploymentStage[];
}
