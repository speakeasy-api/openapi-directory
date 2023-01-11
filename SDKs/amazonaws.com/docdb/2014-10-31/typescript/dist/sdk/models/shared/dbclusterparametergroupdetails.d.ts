import { SpeakeasyBase } from "../../../internal/utils";
import { ParametersList } from "./parameterslist";
/**
 * Represents the output of <a>DBClusterParameterGroup</a>.
**/
export declare class DbClusterParameterGroupDetails extends SpeakeasyBase {
    marker?: string;
    parameters?: ParametersList[];
}
