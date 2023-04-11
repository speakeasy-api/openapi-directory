import { SpeakeasyBase } from "../../../internal/utils";
import { ReplicationInstanceTaskLog } from "./replicationinstancetasklog";
/**
 * Success
 */
export declare class DescribeReplicationInstanceTaskLogsResponse extends SpeakeasyBase {
    marker?: string;
    replicationInstanceArn?: string;
    replicationInstanceTaskLogs?: ReplicationInstanceTaskLog[];
}
