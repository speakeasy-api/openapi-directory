import { SpeakeasyBase } from "../../../internal/utils";
import { RDSDatabase } from "./rdsdatabase";
/**
 * The datasource details that are specific to Amazon RDS.
 */
export declare class RDSMetadata extends SpeakeasyBase {
    dataPipelineId?: string;
    database?: RDSDatabase;
    /**
     * The username to be used by Amazon ML to connect to database on an Amazon RDS instance. The username should have sufficient permissions to execute an <code>RDSSelectSqlQuery</code> query.
     */
    databaseUserName?: string;
    resourceRole?: string;
    selectSqlQuery?: string;
    serviceRole?: string;
}
