import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
/**
 * Describes an Amazon DynamoDB data source configuration.
 */
export declare class CreateDataSourceRequestBodyDynamodbConfig extends SpeakeasyBase {
    awsRegion?: string;
    deltaSyncConfig?: shared.DeltaSyncConfig;
    tableName?: string;
    useCallerCredentials?: boolean;
    versioned?: boolean;
}
/**
 * <p>Describes an OpenSearch data source configuration.</p> <p>As of September 2021, Amazon Elasticsearch service is Amazon OpenSearch Service. This configuration is deprecated. For new data sources, use <a>OpenSearchServiceDataSourceConfig</a> to specify an OpenSearch data source.</p>
 */
export declare class CreateDataSourceRequestBodyElasticsearchConfig extends SpeakeasyBase {
    awsRegion?: string;
    endpoint?: string;
}
/**
 * Describes an Amazon EventBridge bus data source configuration.
 */
export declare class CreateDataSourceRequestBodyEventBridgeConfig extends SpeakeasyBase {
    eventBusArn?: string;
}
/**
 * Describes an HTTP data source configuration.
 */
export declare class CreateDataSourceRequestBodyHttpConfig extends SpeakeasyBase {
    authorizationConfig?: shared.AuthorizationConfig;
    endpoint?: string;
}
/**
 * Describes an Lambda data source configuration.
 */
export declare class CreateDataSourceRequestBodyLambdaConfig extends SpeakeasyBase {
    lambdaFunctionArn?: string;
}
/**
 * Describes an OpenSearch data source configuration.
 */
export declare class CreateDataSourceRequestBodyOpenSearchServiceConfig extends SpeakeasyBase {
    awsRegion?: string;
    endpoint?: string;
}
/**
 * Describes a relational database data source configuration.
 */
export declare class CreateDataSourceRequestBodyRelationalDatabaseConfig extends SpeakeasyBase {
    rdsHttpEndpointConfig?: shared.RdsHttpEndpointConfig;
    relationalDatabaseSourceType?: shared.RelationalDatabaseSourceTypeEnum;
}
/**
 * The type of the <code>DataSource</code>.
 */
export declare enum CreateDataSourceRequestBodyTypeEnum {
    AwsLambda = "AWS_LAMBDA",
    AmazonDynamodb = "AMAZON_DYNAMODB",
    AmazonElasticsearch = "AMAZON_ELASTICSEARCH",
    None = "NONE",
    Http = "HTTP",
    RelationalDatabase = "RELATIONAL_DATABASE",
    AmazonOpensearchService = "AMAZON_OPENSEARCH_SERVICE",
    AmazonEventbridge = "AMAZON_EVENTBRIDGE"
}
export declare class CreateDataSourceRequestBody extends SpeakeasyBase {
    /**
     * A description of the <code>DataSource</code>.
     */
    description?: string;
    /**
     * Describes an Amazon DynamoDB data source configuration.
     */
    dynamodbConfig?: CreateDataSourceRequestBodyDynamodbConfig;
    /**
     * <p>Describes an OpenSearch data source configuration.</p> <p>As of September 2021, Amazon Elasticsearch service is Amazon OpenSearch Service. This configuration is deprecated. For new data sources, use <a>OpenSearchServiceDataSourceConfig</a> to specify an OpenSearch data source.</p>
     */
    elasticsearchConfig?: CreateDataSourceRequestBodyElasticsearchConfig;
    /**
     * Describes an Amazon EventBridge bus data source configuration.
     */
    eventBridgeConfig?: CreateDataSourceRequestBodyEventBridgeConfig;
    /**
     * Describes an HTTP data source configuration.
     */
    httpConfig?: CreateDataSourceRequestBodyHttpConfig;
    /**
     * Describes an Lambda data source configuration.
     */
    lambdaConfig?: CreateDataSourceRequestBodyLambdaConfig;
    /**
     * A user-supplied name for the <code>DataSource</code>.
     */
    name: string;
    /**
     * Describes an OpenSearch data source configuration.
     */
    openSearchServiceConfig?: CreateDataSourceRequestBodyOpenSearchServiceConfig;
    /**
     * Describes a relational database data source configuration.
     */
    relationalDatabaseConfig?: CreateDataSourceRequestBodyRelationalDatabaseConfig;
    /**
     * The Identity and Access Management (IAM) service role Amazon Resource Name (ARN) for the data source. The system assumes this role when accessing the data source.
     */
    serviceRoleArn?: string;
    /**
     * The type of the <code>DataSource</code>.
     */
    type: CreateDataSourceRequestBodyTypeEnum;
}
export declare class CreateDataSourceRequest extends SpeakeasyBase {
    requestBody: CreateDataSourceRequestBody;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    /**
     * The API ID for the GraphQL API for the <code>DataSource</code>.
     */
    apiId: string;
}
export declare class CreateDataSourceResponse extends SpeakeasyBase {
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
     * Success
     */
    createDataSourceResponse?: shared.CreateDataSourceResponse;
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
}
