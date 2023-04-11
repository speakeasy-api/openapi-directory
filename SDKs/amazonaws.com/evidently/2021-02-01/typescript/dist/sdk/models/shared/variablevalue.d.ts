import { SpeakeasyBase } from "../../../internal/utils";
/**
 * The value assigned to a feature variation. This structure must contain exactly one field. It can be <code>boolValue</code>, <code>doubleValue</code>, <code>longValue</code>, or <code>stringValue</code>.
 */
export declare class VariableValue extends SpeakeasyBase {
    boolValue?: boolean;
    doubleValue?: number;
    longValue?: number;
    stringValue?: string;
}
