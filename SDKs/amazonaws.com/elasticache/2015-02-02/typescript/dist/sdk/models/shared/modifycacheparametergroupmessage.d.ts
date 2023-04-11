import { SpeakeasyBase } from "../../../internal/utils";
import { ParameterNameValueList } from "./parameternamevaluelist";
/**
 * Represents the input of a <code>ModifyCacheParameterGroup</code> operation.
 */
export declare class ModifyCacheParameterGroupMessage extends SpeakeasyBase {
    cacheParameterGroupName: string;
    parameterNameValues: ParameterNameValueList[];
}
