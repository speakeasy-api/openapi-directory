import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare enum GETRestoreTableFromClusterSnapshotActionEnum {
    RestoreTableFromClusterSnapshot = "RestoreTableFromClusterSnapshot"
}
export declare enum GETRestoreTableFromClusterSnapshotVersionEnum {
    TwoThousandAndTwelve1201 = "2012-12-01"
}
export declare class GETRestoreTableFromClusterSnapshotRequest extends SpeakeasyBase {
    action: GETRestoreTableFromClusterSnapshotActionEnum;
    /**
     * The identifier of the Amazon Redshift cluster to restore the table to.
     */
    clusterIdentifier: string;
    /**
     * Indicates whether name identifiers for database, schema, and table are case sensitive. If <code>true</code>, the names are case sensitive. If <code>false</code> (default), the names are not case sensitive.
     */
    enableCaseSensitiveIdentifier?: boolean;
    /**
     * The name of the table to create as a result of the current request.
     */
    newTableName: string;
    /**
     * The identifier of the snapshot to restore the table from. This snapshot must have been created from the Amazon Redshift cluster specified by the <code>ClusterIdentifier</code> parameter.
     */
    snapshotIdentifier: string;
    /**
     * The name of the source database that contains the table to restore from.
     */
    sourceDatabaseName: string;
    /**
     * The name of the source schema that contains the table to restore from. If you do not specify a <code>SourceSchemaName</code> value, the default is <code>public</code>.
     */
    sourceSchemaName?: string;
    /**
     * The name of the source table to restore from.
     */
    sourceTableName: string;
    /**
     * The name of the database to restore the table to.
     */
    targetDatabaseName?: string;
    /**
     * The name of the schema to restore the table to.
     */
    targetSchemaName?: string;
    version: GETRestoreTableFromClusterSnapshotVersionEnum;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GETRestoreTableFromClusterSnapshotResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
