import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Describes the database details required to connect to an Amazon Redshift database.
 */
export declare class RedshiftDatabase extends SpeakeasyBase {
    /**
     * The ID of an Amazon Redshift cluster.
     */
    clusterIdentifier: string;
    /**
     * The name of a database hosted on an Amazon Redshift cluster.
     */
    databaseName: string;
}
