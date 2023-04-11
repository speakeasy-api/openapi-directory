import { SpeakeasyBase } from "../../../internal/utils";
import { ReplicationStatusEnum } from "./replicationstatusenum";
/**
 * The status of the replication process for an image.
 */
export declare class ImageReplicationStatus extends SpeakeasyBase {
    failureCode?: string;
    region?: string;
    registryId?: string;
    status?: ReplicationStatusEnum;
}
