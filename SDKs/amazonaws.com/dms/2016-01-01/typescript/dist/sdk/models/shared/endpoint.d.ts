import { SpeakeasyBase } from "../../../internal/utils";
import { DmsSslModeValueEnum } from "./dmssslmodevalueenum";
import { DmsTransferSettings } from "./dmstransfersettings";
import { DocDbSettings } from "./docdbsettings";
import { DynamoDbSettings } from "./dynamodbsettings";
import { ElasticsearchSettings } from "./elasticsearchsettings";
import { GcpMySQLSettings } from "./gcpmysqlsettings";
import { IBMDb2Settings } from "./ibmdb2settings";
import { KafkaSettings } from "./kafkasettings";
import { KinesisSettings } from "./kinesissettings";
import { MicrosoftSQLServerSettings } from "./microsoftsqlserversettings";
import { MongoDbSettings } from "./mongodbsettings";
import { MySQLSettings } from "./mysqlsettings";
import { NeptuneSettings } from "./neptunesettings";
import { OracleSettings } from "./oraclesettings";
import { PostgreSQLSettings } from "./postgresqlsettings";
import { RedisSettings } from "./redissettings";
import { RedshiftSettings } from "./redshiftsettings";
import { ReplicationEndpointTypeValueEnum } from "./replicationendpointtypevalueenum";
import { S3Settings } from "./s3settings";
import { SybaseSettings } from "./sybasesettings";
/**
 * <p>Describes an endpoint of a database instance in response to operations such as the following:</p> <ul> <li> <p> <code>CreateEndpoint</code> </p> </li> <li> <p> <code>DescribeEndpoint</code> </p> </li> <li> <p> <code>ModifyEndpoint</code> </p> </li> </ul>
 */
export declare class Endpoint extends SpeakeasyBase {
    certificateArn?: string;
    databaseName?: string;
    dmsTransferSettings?: DmsTransferSettings;
    /**
     * Provides information that defines a DocumentDB endpoint.
     */
    docDbSettings?: DocDbSettings;
    dynamoDbSettings?: DynamoDbSettings;
    elasticsearchSettings?: ElasticsearchSettings;
    endpointArn?: string;
    endpointIdentifier?: string;
    endpointType?: ReplicationEndpointTypeValueEnum;
    engineDisplayName?: string;
    engineName?: string;
    externalId?: string;
    externalTableDefinition?: string;
    extraConnectionAttributes?: string;
    gcpMySQLSettings?: GcpMySQLSettings;
    ibmDb2Settings?: IBMDb2Settings;
    kafkaSettings?: KafkaSettings;
    kinesisSettings?: KinesisSettings;
    kmsKeyId?: string;
    microsoftSQLServerSettings?: MicrosoftSQLServerSettings;
    mongoDbSettings?: MongoDbSettings;
    mySQLSettings?: MySQLSettings;
    neptuneSettings?: NeptuneSettings;
    oracleSettings?: OracleSettings;
    port?: number;
    postgreSQLSettings?: PostgreSQLSettings;
    redisSettings?: RedisSettings;
    redshiftSettings?: RedshiftSettings;
    s3Settings?: S3Settings;
    serverName?: string;
    serviceAccessRoleArn?: string;
    sslMode?: DmsSslModeValueEnum;
    status?: string;
    sybaseSettings?: SybaseSettings;
    username?: string;
}
