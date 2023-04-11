import { SpeakeasyBase } from "../../../internal/utils";
import { ClusterDbRevisionsList } from "./clusterdbrevisionslist";
/**
 * Success
 */
export declare class ClusterDbRevisionsMessage extends SpeakeasyBase {
    clusterDbRevisions?: ClusterDbRevisionsList[];
    marker?: string;
}
