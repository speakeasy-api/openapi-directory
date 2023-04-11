import { SpeakeasyBase } from "../../../internal/utils";
import { MSKAccessCredentials } from "./mskaccesscredentials";
import { MSKStartPositionEnum } from "./mskstartpositionenum";
/**
 * The parameters for using an MSK stream as a source.
 */
export declare class PipeSourceManagedStreamingKafkaParameters extends SpeakeasyBase {
    batchSize?: number;
    consumerGroupID?: string;
    credentials?: MSKAccessCredentials;
    maximumBatchingWindowInSeconds?: number;
    startingPosition?: MSKStartPositionEnum;
    topicName: string;
}
