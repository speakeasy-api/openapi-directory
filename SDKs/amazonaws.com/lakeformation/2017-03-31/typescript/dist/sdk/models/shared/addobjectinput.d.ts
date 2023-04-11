import { SpeakeasyBase } from "../../../internal/utils";
/**
 * A new object to add to the governed table.
 */
export declare class AddObjectInput extends SpeakeasyBase {
    eTag: string;
    partitionValues?: string[];
    size: number;
    uri: string;
}
