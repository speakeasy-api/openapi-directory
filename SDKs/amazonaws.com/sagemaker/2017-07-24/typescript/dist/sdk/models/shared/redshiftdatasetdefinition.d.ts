import { SpeakeasyBase } from "../../../internal/utils";
import { RedshiftResultCompressionTypeEnum } from "./redshiftresultcompressiontypeenum";
import { RedshiftResultFormatEnum } from "./redshiftresultformatenum";
/**
 * Configuration for Redshift Dataset Definition input.
 */
export declare class RedshiftDatasetDefinition extends SpeakeasyBase {
    /**
     * The Redshift cluster Identifier.
     */
    clusterId: string;
    clusterRoleArn: string;
    /**
     * The name of the Redshift database used in Redshift query execution.
     */
    database: string;
    /**
     * The database user name used in Redshift query execution.
     */
    dbUser: string;
    kmsKeyId?: string;
    /**
     * The compression used for Redshift query results.
     */
    outputCompression?: RedshiftResultCompressionTypeEnum;
    /**
     * The data storage format for Redshift query results.
     */
    outputFormat: RedshiftResultFormatEnum;
    outputS3Uri: string;
    /**
     * The SQL query statements to be executed.
     */
    queryString: string;
}
