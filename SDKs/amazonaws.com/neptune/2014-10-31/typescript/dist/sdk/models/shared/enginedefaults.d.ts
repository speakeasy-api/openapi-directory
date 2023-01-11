import { SpeakeasyBase } from "../../../internal/utils";
import { ParametersList } from "./parameterslist";
/**
 *  Contains the result of a successful invocation of the <a>DescribeEngineDefaultParameters</a> action.
**/
export declare class EngineDefaults extends SpeakeasyBase {
    dbParameterGroupFamily?: string;
    marker?: string;
    parameters?: ParametersList[];
}
