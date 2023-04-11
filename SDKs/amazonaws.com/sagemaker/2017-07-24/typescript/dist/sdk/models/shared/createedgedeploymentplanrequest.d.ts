import { SpeakeasyBase } from "../../../internal/utils";
import { DeploymentStage } from "./deploymentstage";
import { EdgeDeploymentModelConfig } from "./edgedeploymentmodelconfig";
import { Tag } from "./tag";
export declare class CreateEdgeDeploymentPlanRequest extends SpeakeasyBase {
    deviceFleetName: string;
    edgeDeploymentPlanName: string;
    modelConfigs: EdgeDeploymentModelConfig[];
    stages?: DeploymentStage[];
    tags?: Tag[];
}
