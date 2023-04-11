import { SpeakeasyBase } from "../../../internal/utils";
import { TagList } from "./taglist";
export declare class CreateCustomDBEngineVersionMessage extends SpeakeasyBase {
    databaseInstallationFilesS3BucketName?: string;
    databaseInstallationFilesS3Prefix?: string;
    description?: string;
    engine: string;
    engineVersion: string;
    imageId?: string;
    kmsKeyId?: string;
    manifest?: string;
    /**
     * A list of tags. For more information, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_Tagging.html">Tagging Amazon RDS Resources</a> in the <i>Amazon RDS User Guide.</i>
     */
    tags?: TagList[];
}
