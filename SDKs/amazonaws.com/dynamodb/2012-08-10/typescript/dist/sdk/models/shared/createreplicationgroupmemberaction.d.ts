import { SpeakeasyBase } from "../../../internal/utils";
import { ProvisionedThroughputOverride } from "./provisionedthroughputoverride";
import { ReplicaGlobalSecondaryIndex } from "./replicaglobalsecondaryindex";
import { TableClassEnum } from "./tableclassenum";
/**
 * Represents a replica to be created.
 */
export declare class CreateReplicationGroupMemberAction extends SpeakeasyBase {
    globalSecondaryIndexes?: ReplicaGlobalSecondaryIndex[];
    kmsMasterKeyId?: string;
    provisionedThroughputOverride?: ProvisionedThroughputOverride;
    regionName: string;
    tableClassOverride?: TableClassEnum;
}
