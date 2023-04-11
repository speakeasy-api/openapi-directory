import { SpeakeasyBase } from "../../../internal/utils";
import { GlobalCluster } from "./globalcluster";
/**
 * Success
 */
export declare class ModifyGlobalClusterResult extends SpeakeasyBase {
    /**
     * <p>Contains the details of an Amazon Neptune global database.</p> <p>This data type is used as a response element for the <a>CreateGlobalCluster</a>, <a>DescribeGlobalClusters</a>, <a>ModifyGlobalCluster</a>, <a>DeleteGlobalCluster</a>, <a>FailoverGlobalCluster</a>, and <a>RemoveFromGlobalCluster</a> actions.</p>
     */
    globalCluster?: GlobalCluster;
}
