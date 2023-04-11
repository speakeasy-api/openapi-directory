import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Contains information about a table restore request.
 */
export declare class TableRestoreStatus extends SpeakeasyBase {
    message?: string;
    namespaceName?: string;
    newTableName?: string;
    progressInMegaBytes?: number;
    requestTime?: Date;
    snapshotName?: string;
    sourceDatabaseName?: string;
    sourceSchemaName?: string;
    sourceTableName?: string;
    status?: string;
    tableRestoreRequestId?: string;
    targetDatabaseName?: string;
    targetSchemaName?: string;
    totalDataInMegaBytes?: number;
    workgroupName?: string;
}
