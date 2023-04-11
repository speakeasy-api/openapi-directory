import { SpeakeasyBase } from "../../../internal/utils";
import { ReplicationStatusType } from "./replicationstatustype";
/**
 * Success
 */
export declare class ReplicateSecretToRegionsResponse extends SpeakeasyBase {
    arn?: string;
    replicationStatus?: ReplicationStatusType[];
}
