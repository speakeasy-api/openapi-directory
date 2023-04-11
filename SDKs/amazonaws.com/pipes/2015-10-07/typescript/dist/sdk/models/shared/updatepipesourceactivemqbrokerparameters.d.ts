import { SpeakeasyBase } from "../../../internal/utils";
import { MQBrokerAccessCredentials } from "./mqbrokeraccesscredentials";
/**
 * The parameters for using an Active MQ broker as a source.
 */
export declare class UpdatePipeSourceActiveMQBrokerParameters extends SpeakeasyBase {
    batchSize?: number;
    credentials: MQBrokerAccessCredentials;
    maximumBatchingWindowInSeconds?: number;
}
