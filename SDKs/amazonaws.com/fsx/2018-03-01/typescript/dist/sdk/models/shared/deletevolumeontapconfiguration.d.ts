import { SpeakeasyBase } from "../../../internal/utils";
import { Tag } from "./tag";
/**
 * Use to specify skipping a final backup, or to add tags to a final backup.
 */
export declare class DeleteVolumeOntapConfiguration extends SpeakeasyBase {
    /**
     * A list of <code>Tag</code> values, with a maximum of 50 elements.
     */
    finalBackupTags?: Tag[];
    skipFinalBackup?: boolean;
}
