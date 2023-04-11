import { SpeakeasyBase } from "../../../internal/utils";
import { RedshiftDatabase } from "./redshiftdatabase";
import { RedshiftDatabaseCredentials } from "./redshiftdatabasecredentials";
/**
 * Describes the data specification of an Amazon Redshift <code>DataSource</code>.
 */
export declare class RedshiftDataSpec extends SpeakeasyBase {
    dataRearrangement?: string;
    dataSchema?: string;
    dataSchemaUri?: string;
    databaseCredentials: RedshiftDatabaseCredentials;
    databaseInformation: RedshiftDatabase;
    s3StagingLocation: string;
    selectSqlQuery: string;
}
