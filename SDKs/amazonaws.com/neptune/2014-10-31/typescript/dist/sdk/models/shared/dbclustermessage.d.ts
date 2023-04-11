import { SpeakeasyBase } from "../../../internal/utils";
import { DBClusterList } from "./dbclusterlist";
/**
 * Success
 */
export declare class DBClusterMessage extends SpeakeasyBase {
    dbClusters?: DBClusterList[];
    marker?: string;
}
