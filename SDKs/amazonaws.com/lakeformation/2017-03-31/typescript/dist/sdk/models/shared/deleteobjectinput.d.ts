import { SpeakeasyBase } from "../../../internal/utils";
/**
 * An object to delete from the governed table.
 */
export declare class DeleteObjectInput extends SpeakeasyBase {
    eTag?: string;
    partitionValues?: string[];
    uri: string;
}
