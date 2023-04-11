import { SpeakeasyBase } from "../../../internal/utils";
import { ParametersList } from "./parameterslist";
export declare class ResetDBClusterParameterGroupMessage extends SpeakeasyBase {
    dbClusterParameterGroupName: string;
    parameters?: ParametersList[];
    resetAllParameters?: boolean;
}
