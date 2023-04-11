import { SpeakeasyBase } from "../../../internal/utils";
import { ReplicationJob } from "./replicationjob";
/**
 * Success
 */
export declare class GetReplicationJobsResponse extends SpeakeasyBase {
    nextToken?: string;
    replicationJobList?: ReplicationJob[];
}
