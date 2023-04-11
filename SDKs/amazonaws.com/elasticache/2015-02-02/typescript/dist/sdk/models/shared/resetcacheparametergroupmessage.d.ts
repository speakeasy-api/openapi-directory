import { SpeakeasyBase } from "../../../internal/utils";
import { ParameterNameValueList } from "./parameternamevaluelist";
/**
 * Represents the input of a <code>ResetCacheParameterGroup</code> operation.
 */
export declare class ResetCacheParameterGroupMessage extends SpeakeasyBase {
    cacheParameterGroupName: string;
    parameterNameValues?: ParameterNameValueList[];
    resetAllParameters?: boolean;
}
