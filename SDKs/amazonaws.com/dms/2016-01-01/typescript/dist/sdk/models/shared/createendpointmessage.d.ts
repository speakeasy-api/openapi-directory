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
import { Tag } from "./tag";
/**
 * <p/>
 */
export declare class CreateEndpointMessage extends SpeakeasyBase {
    certificateArn?: string;
    databaseName?: string;
    dmsTransferSettings?: DmsTransferSettings;
    /**
     * Provides information that defines a DocumentDB endpoint.
     */
    docDbSettings?: DocDbSettings;
    dynamoDbSettings?: DynamoDbSettings;
    elasticsearchSettings?: ElasticsearchSettings;
    endpointIdentifier: string;
    endpointType: ReplicationEndpointTypeValueEnum;
    engineName: string;
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
    password?: string;
    port?: number;
    postgreSQLSettings?: PostgreSQLSettings;
    redisSettings?: RedisSettings;
    /**
     * Provides information that defines an Amazon Redshift endpoint.
     */
    redshiftSettings?: RedshiftSettings;
    resourceIdentifier?: string;
    s3Settings?: S3Settings;
    serverName?: string;
    serviceAccessRoleArn?: string;
    sslMode?: DmsSslModeValueEnum;
    sybaseSettings?: SybaseSettings;
    tags?: Tag[];
    username?: string;
}
