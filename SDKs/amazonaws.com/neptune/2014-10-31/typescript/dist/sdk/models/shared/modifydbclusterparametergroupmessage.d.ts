import { SpeakeasyBase } from "../../../internal/utils";
import { ParametersList } from "./parameterslist";
export declare class ModifyDBClusterParameterGroupMessage extends SpeakeasyBase {
    dbClusterParameterGroupName: string;
    parameters: ParametersList[];
}
