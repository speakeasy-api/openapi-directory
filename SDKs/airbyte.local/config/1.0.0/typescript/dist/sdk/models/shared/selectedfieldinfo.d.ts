import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Path to a field/column/property in a stream to be selected. For example, if the field to be selected is a database column called "foo", this will be ["foo"]. Use multiple path elements for nested schemas.
 */
export declare class SelectedFieldInfo extends SpeakeasyBase {
    fieldPath?: string[];
}
