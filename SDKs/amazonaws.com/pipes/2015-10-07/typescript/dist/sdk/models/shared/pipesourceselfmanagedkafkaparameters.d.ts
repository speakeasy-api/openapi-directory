import { SpeakeasyBase } from "../../../internal/utils";
import { SelfManagedKafkaAccessConfigurationCredentials } from "./selfmanagedkafkaaccessconfigurationcredentials";
import { SelfManagedKafkaAccessConfigurationVpc } from "./selfmanagedkafkaaccessconfigurationvpc";
import { SelfManagedKafkaStartPositionEnum } from "./selfmanagedkafkastartpositionenum";
/**
 * The parameters for using a self-managed Apache Kafka stream as a source.
 */
export declare class PipeSourceSelfManagedKafkaParameters extends SpeakeasyBase {
    additionalBootstrapServers?: string[];
    batchSize?: number;
    consumerGroupID?: string;
    credentials?: SelfManagedKafkaAccessConfigurationCredentials;
    maximumBatchingWindowInSeconds?: number;
    serverRootCaCertificate?: string;
    startingPosition?: SelfManagedKafkaStartPositionEnum;
    topicName: string;
    vpc?: SelfManagedKafkaAccessConfigurationVpc;
}
