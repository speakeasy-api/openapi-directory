import { SpeakeasyBase } from "../../../internal/utils";
import { File } from "./file";
/**
 * Files List
 */
export declare class FileList extends SpeakeasyBase {
    /**
     * List of files.
     */
    files: File[];
    /**
     * Total sum of items in the list.
     */
    sum: number;
}
