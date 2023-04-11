import { SpeakeasyBase } from "../../../internal/utils";
import { LogLevelEnum } from "./loglevelenum";
/**
 * Success
 */
export declare class GetV2LoggingOptionsResponse extends SpeakeasyBase {
    defaultLogLevel?: LogLevelEnum;
    disableAllLogs?: boolean;
    roleArn?: string;
}
