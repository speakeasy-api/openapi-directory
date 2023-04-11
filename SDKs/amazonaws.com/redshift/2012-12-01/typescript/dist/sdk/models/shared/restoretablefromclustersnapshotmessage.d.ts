import { SpeakeasyBase } from "../../../internal/utils";
/**
 * <p/>
 */
export declare class RestoreTableFromClusterSnapshotMessage extends SpeakeasyBase {
    clusterIdentifier: string;
    enableCaseSensitiveIdentifier?: boolean;
    newTableName: string;
    snapshotIdentifier: string;
    sourceDatabaseName: string;
    sourceSchemaName?: string;
    sourceTableName: string;
    targetDatabaseName?: string;
    targetSchemaName?: string;
}
