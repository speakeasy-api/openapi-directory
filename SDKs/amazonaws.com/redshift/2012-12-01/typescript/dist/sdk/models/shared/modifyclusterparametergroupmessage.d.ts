import { SpeakeasyBase } from "../../../internal/utils";
import { ParametersList } from "./parameterslist";
/**
 * Describes a modify cluster parameter group operation.
 */
export declare class ModifyClusterParameterGroupMessage extends SpeakeasyBase {
    parameterGroupName: string;
    parameters: ParametersList[];
}
