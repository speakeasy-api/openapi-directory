import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Specifies a transform that chooses one <code>DynamicFrame</code> from a collection of <code>DynamicFrames</code>. The output is the selected <code>DynamicFrame</code>
 */
export declare class SelectFromCollection extends SpeakeasyBase {
    index: number;
    inputs: string[];
    name: string;
}
