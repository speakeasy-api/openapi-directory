import { SpeakeasyBase } from "../../../internal/utils";
import { ParametersList } from "./parameterslist";
/**
 * Represents the input to <a>ModifyDBClusterParameterGroup</a>.
 */
export declare class ModifyDBClusterParameterGroupMessage extends SpeakeasyBase {
    dbClusterParameterGroupName: string;
    parameters: ParametersList[];
}
