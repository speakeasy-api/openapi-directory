import { SpeakeasyBase } from "../../../internal/utils";
import { DataSourceTypeEnum } from "./datasourcetypeenum";
import { DynamodbDataSourceConfig } from "./dynamodbdatasourceconfig";
import { ElasticsearchDataSourceConfig } from "./elasticsearchdatasourceconfig";
import { EventBridgeDataSourceConfig } from "./eventbridgedatasourceconfig";
import { HttpDataSourceConfig } from "./httpdatasourceconfig";
import { LambdaDataSourceConfig } from "./lambdadatasourceconfig";
import { OpenSearchServiceDataSourceConfig } from "./opensearchservicedatasourceconfig";
import { RelationalDatabaseDataSourceConfig } from "./relationaldatabasedatasourceconfig";
/**
 * Describes a data source.
 */
export declare class DataSource extends SpeakeasyBase {
    dataSourceArn?: string;
    description?: string;
    dynamodbConfig?: DynamodbDataSourceConfig;
    elasticsearchConfig?: ElasticsearchDataSourceConfig;
    eventBridgeConfig?: EventBridgeDataSourceConfig;
    httpConfig?: HttpDataSourceConfig;
    lambdaConfig?: LambdaDataSourceConfig;
    name?: string;
    openSearchServiceConfig?: OpenSearchServiceDataSourceConfig;
    relationalDatabaseConfig?: RelationalDatabaseDataSourceConfig;
    serviceRoleArn?: string;
    type?: DataSourceTypeEnum;
}
