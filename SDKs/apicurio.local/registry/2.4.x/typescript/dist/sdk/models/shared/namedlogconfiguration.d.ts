import { SpeakeasyBase } from "../../../internal/utils";
import { LogLevelEnum } from "./loglevelenum";
/**
 * The default logger configuration (now that the configuration for this logger has been removed, the
 *
 * @remarks
 * default configuration is applied).
 */
export declare class NamedLogConfiguration extends SpeakeasyBase {
    level: LogLevelEnum;
    name: string;
}
