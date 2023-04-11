import { SpeakeasyBase } from "../../../internal/utils";
/**
 *  The connector-specific profile properties when using Amazon Redshift.
 */
export declare class RedshiftConnectorProfileProperties extends SpeakeasyBase {
    bucketName: string;
    bucketPrefix?: string;
    clusterIdentifier?: string;
    dataApiRoleArn?: string;
    databaseName?: string;
    databaseUrl?: string;
    isRedshiftServerless?: boolean;
    roleArn: string;
    workgroupName?: string;
}
