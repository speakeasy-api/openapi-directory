import { SpeakeasyBase } from "../../../internal/utils";
import { ParametersList } from "./parameterslist";
export declare class ResetDBParameterGroupMessage extends SpeakeasyBase {
    dbParameterGroupName: string;
    parameters?: ParametersList[];
    resetAllParameters?: boolean;
}
