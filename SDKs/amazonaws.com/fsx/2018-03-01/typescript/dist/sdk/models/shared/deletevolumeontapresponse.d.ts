import { SpeakeasyBase } from "../../../internal/utils";
import { Tag } from "./tag";
/**
 * The response object for the Amazon FSx for NetApp ONTAP volume being deleted in the <code>DeleteVolume</code> operation.
 */
export declare class DeleteVolumeOntapResponse extends SpeakeasyBase {
    /**
     * The ID of the source backup. Specifies the backup that you are copying.
     */
    finalBackupId?: string;
    /**
     * A list of <code>Tag</code> values, with a maximum of 50 elements.
     */
    finalBackupTags?: Tag[];
}
