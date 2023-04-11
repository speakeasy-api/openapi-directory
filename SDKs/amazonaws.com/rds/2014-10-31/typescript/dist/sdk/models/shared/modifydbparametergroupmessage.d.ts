import { SpeakeasyBase } from "../../../internal/utils";
import { ParametersList } from "./parameterslist";
/**
 * <p/>
 */
export declare class ModifyDBParameterGroupMessage extends SpeakeasyBase {
    dbParameterGroupName: string;
    parameters: ParametersList[];
}
