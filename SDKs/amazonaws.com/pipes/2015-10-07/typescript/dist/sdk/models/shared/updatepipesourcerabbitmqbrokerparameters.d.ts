import { SpeakeasyBase } from "../../../internal/utils";
import { MQBrokerAccessCredentials } from "./mqbrokeraccesscredentials";
/**
 * The parameters for using a Rabbit MQ broker as a source.
 */
export declare class UpdatePipeSourceRabbitMQBrokerParameters extends SpeakeasyBase {
    batchSize?: number;
    credentials: MQBrokerAccessCredentials;
    maximumBatchingWindowInSeconds?: number;
}
