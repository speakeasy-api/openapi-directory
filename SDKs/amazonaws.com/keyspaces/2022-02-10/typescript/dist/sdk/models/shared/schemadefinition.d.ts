import { SpeakeasyBase } from "../../../internal/utils";
import { ClusteringKey } from "./clusteringkey";
import { ColumnDefinition } from "./columndefinition";
import { PartitionKey } from "./partitionkey";
import { StaticColumn } from "./staticcolumn";
/**
 * Describes the schema of the table.
 */
export declare class SchemaDefinition extends SpeakeasyBase {
    allColumns: ColumnDefinition[];
    clusteringKeys?: ClusteringKey[];
    partitionKeys: PartitionKey[];
    staticColumns?: StaticColumn[];
}
