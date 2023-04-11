import { SpeakeasyBase } from "../../../internal/utils";
import { Mapping } from "./mapping";
/**
 * Specifies a transform that maps data property keys in the data source to data property keys in the data target. You can rename keys, modify the data types for keys, and choose which keys to drop from the dataset.
 */
export declare class ApplyMapping extends SpeakeasyBase {
    inputs: string[];
    mapping: Mapping[];
    name: string;
}
