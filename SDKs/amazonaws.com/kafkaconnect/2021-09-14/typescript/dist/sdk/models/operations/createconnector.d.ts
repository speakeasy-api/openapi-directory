import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
/**
 * Information about the capacity of the connector, whether it is auto scaled or provisioned.
 */
export declare class CreateConnectorRequestBodyCapacity extends SpeakeasyBase {
    autoScaling?: shared.AutoScaling;
    provisionedCapacity?: shared.ProvisionedCapacity;
}
/**
 * The details of the Apache Kafka cluster to which the connector is connected.
 */
export declare class CreateConnectorRequestBodyKafkaCluster extends SpeakeasyBase {
    apacheKafkaCluster?: shared.ApacheKafkaCluster;
}
/**
 * The client authentication information used in order to authenticate with the Apache Kafka cluster.
 */
export declare class CreateConnectorRequestBodyKafkaClusterClientAuthentication extends SpeakeasyBase {
    authenticationType?: shared.KafkaClusterClientAuthenticationTypeEnum;
}
/**
 * Details of encryption in transit to the Apache Kafka cluster.
 */
export declare class CreateConnectorRequestBodyKafkaClusterEncryptionInTransit extends SpeakeasyBase {
    encryptionType?: shared.KafkaClusterEncryptionInTransitTypeEnum;
}
/**
 * Details about log delivery.
 */
export declare class CreateConnectorRequestBodyLogDelivery extends SpeakeasyBase {
    workerLogDelivery?: shared.WorkerLogDelivery;
}
/**
 * The configuration of the workers, which are the processes that run the connector logic.
 */
export declare class CreateConnectorRequestBodyWorkerConfiguration extends SpeakeasyBase {
    revision?: number;
    workerConfigurationArn?: string;
}
export declare class CreateConnectorRequestBody extends SpeakeasyBase {
    /**
     * Information about the capacity of the connector, whether it is auto scaled or provisioned.
     */
    capacity: CreateConnectorRequestBodyCapacity;
    /**
     * A map of keys to values that represent the configuration for the connector.
     */
    connectorConfiguration: Record<string, string>;
    /**
     * A summary description of the connector.
     */
    connectorDescription?: string;
    /**
     * The name of the connector.
     */
    connectorName: string;
    /**
     * The details of the Apache Kafka cluster to which the connector is connected.
     */
    kafkaCluster: CreateConnectorRequestBodyKafkaCluster;
    /**
     * The client authentication information used in order to authenticate with the Apache Kafka cluster.
     */
    kafkaClusterClientAuthentication: CreateConnectorRequestBodyKafkaClusterClientAuthentication;
    /**
     * Details of encryption in transit to the Apache Kafka cluster.
     */
    kafkaClusterEncryptionInTransit: CreateConnectorRequestBodyKafkaClusterEncryptionInTransit;
    /**
     * The version of Kafka Connect. It has to be compatible with both the Apache Kafka cluster's version and the plugins.
     */
    kafkaConnectVersion: string;
    /**
     * Details about log delivery.
     */
    logDelivery?: CreateConnectorRequestBodyLogDelivery;
    /**
     * Specifies which plugins to use for the connector.
     */
    plugins: shared.Plugin[];
    /**
     * The Amazon Resource Name (ARN) of the IAM role used by the connector to access the Amazon Web Services resources that it needs. The types of resources depends on the logic of the connector. For example, a connector that has Amazon S3 as a destination must have permissions that allow it to write to the S3 destination bucket.
     */
    serviceExecutionRoleArn: string;
    /**
     * The configuration of the workers, which are the processes that run the connector logic.
     */
    workerConfiguration?: CreateConnectorRequestBodyWorkerConfiguration;
}
export declare class CreateConnectorRequest extends SpeakeasyBase {
    requestBody: CreateConnectorRequestBody;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class CreateConnectorResponse extends SpeakeasyBase {
    /**
     * BadRequestException
     */
    badRequestException?: any;
    /**
     * ConflictException
     */
    conflictException?: any;
    contentType: string;
    /**
     * Success
     */
    createConnectorResponse?: shared.CreateConnectorResponse;
    /**
     * ForbiddenException
     */
    forbiddenException?: any;
    /**
     * InternalServerErrorException
     */
    internalServerErrorException?: any;
    /**
     * NotFoundException
     */
    notFoundException?: any;
    /**
     * ServiceUnavailableException
     */
    serviceUnavailableException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * TooManyRequestsException
     */
    tooManyRequestsException?: any;
    /**
     * UnauthorizedException
     */
    unauthorizedException?: any;
}
