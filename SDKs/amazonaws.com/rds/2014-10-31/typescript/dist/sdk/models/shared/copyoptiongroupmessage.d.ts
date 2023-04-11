import { SpeakeasyBase } from "../../../internal/utils";
import { TagList } from "./taglist";
/**
 * <p/>
 */
export declare class CopyOptionGroupMessage extends SpeakeasyBase {
    sourceOptionGroupIdentifier: string;
    /**
     * A list of tags. For more information, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_Tagging.html">Tagging Amazon RDS Resources</a> in the <i>Amazon RDS User Guide.</i>
     */
    tags?: TagList[];
    targetOptionGroupDescription: string;
    targetOptionGroupIdentifier: string;
}
