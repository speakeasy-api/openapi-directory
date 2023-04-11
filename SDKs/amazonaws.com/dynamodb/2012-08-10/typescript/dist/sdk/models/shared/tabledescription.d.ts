import { SpeakeasyBase } from "../../../internal/utils";
import { ArchivalSummary } from "./archivalsummary";
import { AttributeDefinition } from "./attributedefinition";
import { BillingModeSummary } from "./billingmodesummary";
import { GlobalSecondaryIndexDescription } from "./globalsecondaryindexdescription";
import { KeySchemaElement } from "./keyschemaelement";
import { LocalSecondaryIndexDescription } from "./localsecondaryindexdescription";
import { ProvisionedThroughputDescription } from "./provisionedthroughputdescription";
import { ReplicaDescription } from "./replicadescription";
import { RestoreSummary } from "./restoresummary";
import { SSEDescription } from "./ssedescription";
import { StreamSpecification } from "./streamspecification";
import { TableClassSummary } from "./tableclasssummary";
import { TableStatusEnum } from "./tablestatusenum";
/**
 * Represents the properties of a table.
 */
export declare class TableDescription extends SpeakeasyBase {
    archivalSummary?: ArchivalSummary;
    attributeDefinitions?: AttributeDefinition[];
    billingModeSummary?: BillingModeSummary;
    creationDateTime?: Date;
    deletionProtectionEnabled?: boolean;
    globalSecondaryIndexes?: GlobalSecondaryIndexDescription[];
    globalTableVersion?: string;
    itemCount?: number;
    keySchema?: KeySchemaElement[];
    latestStreamArn?: string;
    latestStreamLabel?: string;
    localSecondaryIndexes?: LocalSecondaryIndexDescription[];
    provisionedThroughput?: ProvisionedThroughputDescription;
    replicas?: ReplicaDescription[];
    restoreSummary?: RestoreSummary;
    sseDescription?: SSEDescription;
    streamSpecification?: StreamSpecification;
    tableArn?: string;
    tableClassSummary?: TableClassSummary;
    tableId?: string;
    tableName?: string;
    tableSizeBytes?: number;
    tableStatus?: TableStatusEnum;
}
