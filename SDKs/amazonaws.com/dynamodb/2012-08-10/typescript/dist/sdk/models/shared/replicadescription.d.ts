import { SpeakeasyBase } from "../../../internal/utils";
import { ProvisionedThroughputOverride } from "./provisionedthroughputoverride";
import { ReplicaGlobalSecondaryIndexDescription } from "./replicaglobalsecondaryindexdescription";
import { ReplicaStatusEnum } from "./replicastatusenum";
import { TableClassSummary } from "./tableclasssummary";
/**
 * Contains the details of the replica.
 */
export declare class ReplicaDescription extends SpeakeasyBase {
    globalSecondaryIndexes?: ReplicaGlobalSecondaryIndexDescription[];
    kmsMasterKeyId?: string;
    provisionedThroughputOverride?: ProvisionedThroughputOverride;
    regionName?: string;
    replicaInaccessibleDateTime?: Date;
    replicaStatus?: ReplicaStatusEnum;
    replicaStatusDescription?: string;
    replicaStatusPercentProgress?: string;
    /**
     * Contains details of the table class.
     */
    replicaTableClassSummary?: TableClassSummary;
}
