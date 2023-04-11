import { SpeakeasyBase } from "../../../internal/utils";
import { AttributeDefinition } from "./attributedefinition";
import { BillingModeEnum } from "./billingmodeenum";
import { GlobalSecondaryIndexUpdate } from "./globalsecondaryindexupdate";
import { ProvisionedThroughput } from "./provisionedthroughput";
import { ReplicationGroupUpdate } from "./replicationgroupupdate";
import { SSESpecification } from "./ssespecification";
import { StreamSpecification } from "./streamspecification";
import { TableClassEnum } from "./tableclassenum";
/**
 * Represents the input of an <code>UpdateTable</code> operation.
 */
export declare class UpdateTableInput extends SpeakeasyBase {
    attributeDefinitions?: AttributeDefinition[];
    billingMode?: BillingModeEnum;
    deletionProtectionEnabled?: boolean;
    globalSecondaryIndexUpdates?: GlobalSecondaryIndexUpdate[];
    provisionedThroughput?: ProvisionedThroughput;
    replicaUpdates?: ReplicationGroupUpdate[];
    sseSpecification?: SSESpecification;
    streamSpecification?: StreamSpecification;
    tableClass?: TableClassEnum;
    tableName: string;
}
