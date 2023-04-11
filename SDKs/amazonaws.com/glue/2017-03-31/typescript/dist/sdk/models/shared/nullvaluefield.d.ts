import { SpeakeasyBase } from "../../../internal/utils";
import { Datatype } from "./datatype";
/**
 * Represents a custom null value such as a zeros or other value being used as a null placeholder unique to the dataset.
 */
export declare class NullValueField extends SpeakeasyBase {
    datatype: Datatype;
    value: string;
}
