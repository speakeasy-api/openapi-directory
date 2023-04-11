import { SpeakeasyBase } from "../../../internal/utils";
import { TagList } from "./taglist";
export declare class CopyDBClusterParameterGroupMessage extends SpeakeasyBase {
    sourceDBClusterParameterGroupIdentifier: string;
    /**
     * A list of tags. For more information, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_Tagging.html">Tagging Amazon RDS Resources</a> in the <i>Amazon RDS User Guide.</i>
     */
    tags?: TagList[];
    targetDBClusterParameterGroupDescription: string;
    targetDBClusterParameterGroupIdentifier: string;
}
