import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Specifies a transform that merges a <code>DynamicFrame</code> with a staging <code>DynamicFrame</code> based on the specified primary keys to identify records. Duplicate records (records with the same primary keys) are not de-duplicated.
 */
export declare class Merge extends SpeakeasyBase {
    inputs: string[];
    name: string;
    primaryKeys: string[][];
    source: string;
}
