import { SpeakeasyBase } from "../../../internal/utils";
import { FieldItem } from "./fielditem";
/**
 * Object for a group of fields and associated properties.
 */
export declare class FieldGroup extends SpeakeasyBase {
    fields: FieldItem[];
    name?: string;
}
