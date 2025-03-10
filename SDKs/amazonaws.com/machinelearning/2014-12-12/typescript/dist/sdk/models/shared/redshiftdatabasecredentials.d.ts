import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Describes the database credentials for connecting to a database on an Amazon Redshift cluster.
 */
export declare class RedshiftDatabaseCredentials extends SpeakeasyBase {
    /**
     * A password to be used by Amazon ML to connect to a database on an Amazon Redshift cluster. The password should have sufficient permissions to execute a <code>RedshiftSelectSqlQuery</code> query. The password should be valid for an Amazon Redshift <a href="https://docs.aws.amazon.com/redshift/latest/dg/r_CREATE_USER.html">USER</a>.
     */
    password: string;
    /**
     * A username to be used by Amazon Machine Learning (Amazon ML)to connect to a database on an Amazon Redshift cluster. The username should have sufficient permissions to execute the <code>RedshiftSelectSqlQuery</code> query. The username should be valid for an Amazon Redshift <a href="https://docs.aws.amazon.com/redshift/latest/dg/r_CREATE_USER.html">USER</a>.
     */
    username: string;
}
