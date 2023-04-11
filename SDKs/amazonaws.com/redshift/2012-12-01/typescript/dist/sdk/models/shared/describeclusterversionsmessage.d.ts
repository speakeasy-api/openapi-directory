import { SpeakeasyBase } from "../../../internal/utils";
/**
 * <p/>
 */
export declare class DescribeClusterVersionsMessage extends SpeakeasyBase {
    clusterParameterGroupFamily?: string;
    clusterVersion?: string;
    marker?: string;
    maxRecords?: number;
}
