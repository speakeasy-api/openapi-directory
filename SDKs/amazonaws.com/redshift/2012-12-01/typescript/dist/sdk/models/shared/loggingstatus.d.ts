import { SpeakeasyBase } from "../../../internal/utils";
import { LogDestinationTypeEnum } from "./logdestinationtypeenum";
/**
 * Describes the status of logging for a cluster.
 */
export declare class LoggingStatus extends SpeakeasyBase {
    bucketName?: string;
    lastFailureMessage?: string;
    lastFailureTime?: Date;
    lastSuccessfulDeliveryTime?: Date;
    logDestinationType?: LogDestinationTypeEnum;
    logExports?: string[];
    loggingEnabled?: boolean;
    s3KeyPrefix?: string;
}
