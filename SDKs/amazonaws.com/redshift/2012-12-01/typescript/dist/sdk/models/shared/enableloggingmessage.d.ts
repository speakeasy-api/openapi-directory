import { SpeakeasyBase } from "../../../internal/utils";
import { LogDestinationTypeEnum } from "./logdestinationtypeenum";
/**
 * <p/>
 */
export declare class EnableLoggingMessage extends SpeakeasyBase {
    bucketName?: string;
    clusterIdentifier: string;
    logDestinationType?: LogDestinationTypeEnum;
    logExports?: string[];
    s3KeyPrefix?: string;
}
