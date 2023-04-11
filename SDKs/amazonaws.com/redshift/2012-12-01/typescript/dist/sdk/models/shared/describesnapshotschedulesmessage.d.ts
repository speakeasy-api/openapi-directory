import { SpeakeasyBase } from "../../../internal/utils";
export declare class DescribeSnapshotSchedulesMessage extends SpeakeasyBase {
    clusterIdentifier?: string;
    marker?: string;
    maxRecords?: number;
    scheduleIdentifier?: string;
    tagKeys?: string[];
    tagValues?: string[];
}
