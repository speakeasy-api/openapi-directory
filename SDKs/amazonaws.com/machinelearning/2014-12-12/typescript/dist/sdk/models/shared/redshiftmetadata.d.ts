import { SpeakeasyBase } from "../../../internal/utils";
import { RedshiftDatabase } from "./redshiftdatabase";
/**
 * Describes the <code>DataSource</code> details specific to Amazon Redshift.
 */
export declare class RedshiftMetadata extends SpeakeasyBase {
    /**
     * A username to be used by Amazon Machine Learning (Amazon ML)to connect to a database on an Amazon Redshift cluster. The username should have sufficient permissions to execute the <code>RedshiftSelectSqlQuery</code> query. The username should be valid for an Amazon Redshift <a href="https://docs.aws.amazon.com/redshift/latest/dg/r_CREATE_USER.html">USER</a>.
     */
    databaseUserName?: string;
    /**
     * Describes the database details required to connect to an Amazon Redshift database.
     */
    redshiftDatabase?: RedshiftDatabase;
    selectSqlQuery?: string;
}
