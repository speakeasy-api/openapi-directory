import { SpeakeasyBase } from "../../../internal/utils";
import { ReplicationStatusType } from "./replicationstatustype";
/**
 * Success
 */
export declare class RemoveRegionsFromReplicationResponse extends SpeakeasyBase {
    arn?: string;
    replicationStatus?: ReplicationStatusType[];
}
