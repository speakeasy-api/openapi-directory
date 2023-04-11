import { SpeakeasyBase } from "../../../internal/utils";
import { TagList } from "./taglist";
/**
 * <p/>
 */
export declare class CreateClusterSecurityGroupMessage extends SpeakeasyBase {
    clusterSecurityGroupName: string;
    description: string;
    tags?: TagList[];
}
