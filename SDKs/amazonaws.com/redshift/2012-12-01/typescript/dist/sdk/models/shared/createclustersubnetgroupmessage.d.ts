import { SpeakeasyBase } from "../../../internal/utils";
import { TagList } from "./taglist";
/**
 * <p/>
 */
export declare class CreateClusterSubnetGroupMessage extends SpeakeasyBase {
    clusterSubnetGroupName: string;
    description: string;
    subnetIds: string[];
    tags?: TagList[];
}
