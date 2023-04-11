import { SpeakeasyBase } from "../../../internal/utils";
import { ValueTypeEnum } from "./valuetypeenum";
/**
 * Contains information relating to dates in a document, including the type of value, and the value.
 */
export declare class NormalizedValue extends SpeakeasyBase {
    value?: string;
    valueType?: ValueTypeEnum;
}
