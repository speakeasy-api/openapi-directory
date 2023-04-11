import { SpeakeasyBase } from "../../../internal/utils";
import { FieldValue } from "./fieldvalue";
/**
 * A filter for fields. Only one value can be provided.
 */
export declare class FieldFilter extends SpeakeasyBase {
    contains?: FieldValue;
    equalTo?: FieldValue;
    greaterThan?: FieldValue;
    greaterThanOrEqualTo?: FieldValue;
    lessThan?: FieldValue;
    lessThanOrEqualTo?: FieldValue;
}
