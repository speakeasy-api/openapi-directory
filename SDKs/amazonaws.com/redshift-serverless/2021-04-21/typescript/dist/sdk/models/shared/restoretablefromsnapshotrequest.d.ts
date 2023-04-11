import { SpeakeasyBase } from "../../../internal/utils";
export declare class RestoreTableFromSnapshotRequest extends SpeakeasyBase {
    activateCaseSensitiveIdentifier?: boolean;
    namespaceName: string;
    newTableName: string;
    snapshotName: string;
    sourceDatabaseName: string;
    sourceSchemaName?: string;
    sourceTableName: string;
    targetDatabaseName?: string;
    targetSchemaName?: string;
    workgroupName: string;
}
