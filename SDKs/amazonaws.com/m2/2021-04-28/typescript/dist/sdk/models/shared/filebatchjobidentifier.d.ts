import { SpeakeasyBase } from "../../../internal/utils";
/**
 * A batch job identifier in which the batch job to run is identified by the file name and the relative path to the file name.
 */
export declare class FileBatchJobIdentifier extends SpeakeasyBase {
    fileName: string;
    folderPath?: string;
}
