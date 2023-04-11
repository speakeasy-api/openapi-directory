import { SpeakeasyBase } from "../../../internal/utils";
import { FilePaths } from "./filepaths";
/**
 * Provides information about the threat detected in a security finding and the file paths that were affected by the threat.
 */
export declare class Threat extends SpeakeasyBase {
    filePaths?: FilePaths[];
    itemCount?: number;
    name?: string;
    severity?: string;
}
