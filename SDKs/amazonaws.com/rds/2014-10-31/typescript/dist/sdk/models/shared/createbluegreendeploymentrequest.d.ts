import { SpeakeasyBase } from "../../../internal/utils";
import { TagList } from "./taglist";
export declare class CreateBlueGreenDeploymentRequest extends SpeakeasyBase {
    blueGreenDeploymentName: string;
    source: string;
    tags?: TagList[];
    targetDBClusterParameterGroupName?: string;
    targetDBParameterGroupName?: string;
    targetEngineVersion?: string;
}
