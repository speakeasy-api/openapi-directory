import { SpeakeasyBase } from "../../../internal/utils";
import { FileVersion } from "./fileversion";
import { Range } from "./range";
/**
 * List of File Versions
 */
export declare class FileVersionList extends SpeakeasyBase {
    /**
     * List of file versions
     */
    items: FileVersion[];
    /**
     * Range information
     */
    range: Range;
}
