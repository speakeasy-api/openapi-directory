import { SpeakeasyBase } from "../../../internal/utils";
import { MSKAccessCredentials } from "./mskaccesscredentials";
/**
 * The parameters for using an MSK stream as a source.
 */
export declare class UpdatePipeSourceManagedStreamingKafkaParameters extends SpeakeasyBase {
    batchSize?: number;
    credentials?: MSKAccessCredentials;
    maximumBatchingWindowInSeconds?: number;
}
