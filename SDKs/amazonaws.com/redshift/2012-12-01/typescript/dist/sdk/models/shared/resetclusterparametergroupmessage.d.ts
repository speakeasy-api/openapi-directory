import { SpeakeasyBase } from "../../../internal/utils";
import { ParametersList } from "./parameterslist";
/**
 * <p/>
 */
export declare class ResetClusterParameterGroupMessage extends SpeakeasyBase {
    parameterGroupName: string;
    parameters?: ParametersList[];
    resetAllParameters?: boolean;
}
