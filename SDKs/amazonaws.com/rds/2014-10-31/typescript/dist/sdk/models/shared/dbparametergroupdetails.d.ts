import { SpeakeasyBase } from "../../../internal/utils";
import { ParametersList } from "./parameterslist";
/**
 * Contains the result of a successful invocation of the <code>DescribeDBParameters</code> action.
 */
export declare class DBParameterGroupDetails extends SpeakeasyBase {
    marker?: string;
    parameters?: ParametersList[];
}
