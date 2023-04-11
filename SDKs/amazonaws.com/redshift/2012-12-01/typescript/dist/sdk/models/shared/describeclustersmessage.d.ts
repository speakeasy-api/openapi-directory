import { SpeakeasyBase } from "../../../internal/utils";
/**
 * <p/>
 */
export declare class DescribeClustersMessage extends SpeakeasyBase {
    clusterIdentifier?: string;
    marker?: string;
    maxRecords?: number;
    tagKeys?: string[];
    tagValues?: string[];
}
