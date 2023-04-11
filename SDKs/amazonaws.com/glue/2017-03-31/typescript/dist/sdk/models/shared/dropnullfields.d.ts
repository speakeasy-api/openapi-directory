import { SpeakeasyBase } from "../../../internal/utils";
import { NullCheckBoxList } from "./nullcheckboxlist";
import { NullValueField } from "./nullvaluefield";
/**
 * Specifies a transform that removes columns from the dataset if all values in the column are 'null'. By default, Glue Studio will recognize null objects, but some values such as empty strings, strings that are "null", -1 integers or other placeholders such as zeros, are not automatically recognized as nulls.
 */
export declare class DropNullFields extends SpeakeasyBase {
    inputs: string[];
    name: string;
    nullCheckBoxList?: NullCheckBoxList;
    nullTextList?: NullValueField[];
}
