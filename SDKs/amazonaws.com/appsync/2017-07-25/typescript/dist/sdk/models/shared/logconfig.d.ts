import { SpeakeasyBase } from "../../../internal/utils";
import { FieldLogLevelEnum } from "./fieldloglevelenum";
/**
 * The Amazon CloudWatch Logs configuration.
 */
export declare class LogConfig extends SpeakeasyBase {
    cloudWatchLogsRoleArn: string;
    excludeVerboseContent?: boolean;
    fieldLogLevel: FieldLogLevelEnum;
}
