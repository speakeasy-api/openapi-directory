import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Returns the name of the specified table, the keyspace it is stored in, and the unique identifier in the format of an Amazon Resource Name (ARN).
 */
export declare class TableSummary extends SpeakeasyBase {
    keyspaceName: string;
    resourceArn: string;
    tableName: string;
}
