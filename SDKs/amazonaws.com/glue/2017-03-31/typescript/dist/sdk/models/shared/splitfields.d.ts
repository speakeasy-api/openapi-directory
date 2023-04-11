import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Specifies a transform that splits data property keys into two <code>DynamicFrames</code>. The output is a collection of <code>DynamicFrames</code>: one with selected data property keys, and one with the remaining data property keys.
 */
export declare class SplitFields extends SpeakeasyBase {
    inputs: string[];
    name: string;
    paths: string[][];
}
