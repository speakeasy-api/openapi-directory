import { SpeakeasyBase } from "../../../internal/utils";
import { ContextKeyTypeEnumEnum } from "./contextkeytypeenumenum";
/**
 * <p>Contains information about a condition context key. It includes the name of the key and specifies the value (or values, if the context key supports multiple values) to use in the simulation. This information is used when evaluating the <code>Condition</code> elements of the input policies.</p> <p>This data type is used as an input parameter to <a>SimulateCustomPolicy</a> and <a>SimulatePrincipalPolicy</a>.</p>
 */
export declare class ContextEntry extends SpeakeasyBase {
    contextKeyName?: string;
    contextKeyType?: ContextKeyTypeEnumEnum;
    contextKeyValues?: string[];
}
