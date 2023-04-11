import { SpeakeasyBase } from "../../../internal/utils";
import { SelfManagedKafkaAccessConfigurationCredentials } from "./selfmanagedkafkaaccessconfigurationcredentials";
import { SelfManagedKafkaAccessConfigurationVpc } from "./selfmanagedkafkaaccessconfigurationvpc";
/**
 * The parameters for using a self-managed Apache Kafka stream as a source.
 */
export declare class UpdatePipeSourceSelfManagedKafkaParameters extends SpeakeasyBase {
    batchSize?: number;
    credentials?: SelfManagedKafkaAccessConfigurationCredentials;
    maximumBatchingWindowInSeconds?: number;
    serverRootCaCertificate?: string;
    vpc?: SelfManagedKafkaAccessConfigurationVpc;
}
