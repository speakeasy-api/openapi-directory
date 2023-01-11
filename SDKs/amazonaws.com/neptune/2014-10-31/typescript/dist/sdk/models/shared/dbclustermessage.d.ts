import { SpeakeasyBase } from "../../../internal/utils";
import { DbClusterList } from "./dbclusterlist";
export declare class DbClusterMessage extends SpeakeasyBase {
    dbClusters?: DbClusterList[];
    marker?: string;
}
