import { SpeakeasyBase } from "../../../internal/utils";
import { ParametersList } from "./parameterslist";
/**
 * Provides details about a DB cluster parameter group including the parameters in the DB cluster parameter group.
 */
export declare class DBClusterParameterGroupDetails extends SpeakeasyBase {
    marker?: string;
    parameters?: ParametersList[];
}
