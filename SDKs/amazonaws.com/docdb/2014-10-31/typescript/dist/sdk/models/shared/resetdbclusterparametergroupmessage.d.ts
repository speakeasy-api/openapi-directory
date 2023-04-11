import { SpeakeasyBase } from "../../../internal/utils";
import { ParametersList } from "./parameterslist";
/**
 * Represents the input to <a>ResetDBClusterParameterGroup</a>.
 */
export declare class ResetDBClusterParameterGroupMessage extends SpeakeasyBase {
    dbClusterParameterGroupName: string;
    parameters?: ParametersList[];
    resetAllParameters?: boolean;
}
