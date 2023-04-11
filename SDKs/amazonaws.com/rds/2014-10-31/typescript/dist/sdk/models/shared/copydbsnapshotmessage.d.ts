import { SpeakeasyBase } from "../../../internal/utils";
import { TagList } from "./taglist";
/**
 * <p/>
 */
export declare class CopyDBSnapshotMessage extends SpeakeasyBase {
    copyOptionGroup?: boolean;
    copyTags?: boolean;
    kmsKeyId?: string;
    optionGroupName?: string;
    preSignedUrl?: string;
    sourceDBSnapshotIdentifier: string;
    sourceRegion?: string;
    /**
     * A list of tags. For more information, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_Tagging.html">Tagging Amazon RDS Resources</a> in the <i>Amazon RDS User Guide.</i>
     */
    tags?: TagList[];
    targetCustomAvailabilityZone?: string;
    targetDBSnapshotIdentifier: string;
}
