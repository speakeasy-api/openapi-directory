import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
/**
 * Describes an Amazon DynamoDB data source configuration.
 */
export declare class UpdateDataSourceRequestBodyDynamodbConfig extends SpeakeasyBase {
    awsRegion?: string;
    deltaSyncConfig?: shared.DeltaSyncConfig;
    tableName?: string;
    useCallerCredentials?: boolean;
    versioned?: boolean;
}
/**
 * <p>Describes an OpenSearch data source configuration.</p> <p>As of September 2021, Amazon Elasticsearch service is Amazon OpenSearch Service. This configuration is deprecated. For new data sources, use <a>OpenSearchServiceDataSourceConfig</a> to specify an OpenSearch data source.</p>
 */
export declare class UpdateDataSourceRequestBodyElasticsearchConfig extends SpeakeasyBase {
    awsRegion?: string;
    endpoint?: string;
}
/**
 * Describes an Amazon EventBridge bus data source configuration.
 */
export declare class UpdateDataSourceRequestBodyEventBridgeConfig extends SpeakeasyBase {
    eventBusArn?: string;
}
/**
 * Describes an HTTP data source configuration.
 */
export declare class UpdateDataSourceRequestBodyHttpConfig extends SpeakeasyBase {
    authorizationConfig?: shared.AuthorizationConfig;
    endpoint?: string;
}
/**
 * Describes an Lambda data source configuration.
 */
export declare class UpdateDataSourceRequestBodyLambdaConfig extends SpeakeasyBase {
    lambdaFunctionArn?: string;
}
/**
 * Describes an OpenSearch data source configuration.
 */
export declare class UpdateDataSourceRequestBodyOpenSearchServiceConfig extends SpeakeasyBase {
    awsRegion?: string;
    endpoint?: string;
}
/**
 * Describes a relational database data source configuration.
 */
export declare class UpdateDataSourceRequestBodyRelationalDatabaseConfig extends SpeakeasyBase {
    rdsHttpEndpointConfig?: shared.RdsHttpEndpointConfig;
    relationalDatabaseSourceType?: shared.RelationalDatabaseSourceTypeEnum;
}
/**
 * The new data source type.
 */
export declare enum UpdateDataSourceRequestBodyTypeEnum {
    AwsLambda = "AWS_LAMBDA",
    AmazonDynamodb = "AMAZON_DYNAMODB",
    AmazonElasticsearch = "AMAZON_ELASTICSEARCH",
    None = "NONE",
    Http = "HTTP",
    RelationalDatabase = "RELATIONAL_DATABASE",
    AmazonOpensearchService = "AMAZON_OPENSEARCH_SERVICE",
    AmazonEventbridge = "AMAZON_EVENTBRIDGE"
}
export declare class UpdateDataSourceRequestBody extends SpeakeasyBase {
    /**
     * The new description for the data source.
     */
    description?: string;
    /**
     * Describes an Amazon DynamoDB data source configuration.
     */
    dynamodbConfig?: UpdateDataSourceRequestBodyDynamodbConfig;
    /**
     * <p>Describes an OpenSearch data source configuration.</p> <p>As of September 2021, Amazon Elasticsearch service is Amazon OpenSearch Service. This configuration is deprecated. For new data sources, use <a>OpenSearchServiceDataSourceConfig</a> to specify an OpenSearch data source.</p>
     */
    elasticsearchConfig?: UpdateDataSourceRequestBodyElasticsearchConfig;
    /**
     * Describes an Amazon EventBridge bus data source configuration.
     */
    eventBridgeConfig?: UpdateDataSourceRequestBodyEventBridgeConfig;
    /**
     * Describes an HTTP data source configuration.
     */
    httpConfig?: UpdateDataSourceRequestBodyHttpConfig;
    /**
     * Describes an Lambda data source configuration.
     */
    lambdaConfig?: UpdateDataSourceRequestBodyLambdaConfig;
    /**
     * Describes an OpenSearch data source configuration.
     */
    openSearchServiceConfig?: UpdateDataSourceRequestBodyOpenSearchServiceConfig;
    /**
     * Describes a relational database data source configuration.
     */
    relationalDatabaseConfig?: UpdateDataSourceRequestBodyRelationalDatabaseConfig;
    /**
     * The new service role Amazon Resource Name (ARN) for the data source.
     */
    serviceRoleArn?: string;
    /**
     * The new data source type.
     */
    type: UpdateDataSourceRequestBodyTypeEnum;
}
export declare class UpdateDataSourceRequest extends SpeakeasyBase {
    requestBody: UpdateDataSourceRequestBody;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    /**
     * The API ID.
     */
    apiId: string;
    /**
     * The new name for the data source.
     */
    name: string;
}
export declare class UpdateDataSourceResponse extends SpeakeasyBase {
    /**
     * BadRequestException
     */
    badRequestException?: any;
    /**
     * ConcurrentModificationException
     */
    concurrentModificationException?: any;
    contentType: string;
    /**
     * InternalFailureException
     */
    internalFailureException?: any;
    /**
     * NotFoundException
     */
    notFoundException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * UnauthorizedException
     */
    unauthorizedException?: any;
    /**
     * Success
     */
    updateDataSourceResponse?: shared.UpdateDataSourceResponse;
}
