import { SpeakeasyBase } from "../../../internal/utils";
/**
 * The database credentials to connect to a database on an RDS DB instance.
 */
export declare class RDSDatabaseCredentials extends SpeakeasyBase {
    /**
     * The password to be used by Amazon ML to connect to a database on an RDS DB instance. The password should have sufficient permissions to execute the <code>RDSSelectQuery</code> query.
     */
    password: string;
    /**
     * The username to be used by Amazon ML to connect to database on an Amazon RDS instance. The username should have sufficient permissions to execute an <code>RDSSelectSqlQuery</code> query.
     */
    username: string;
}
