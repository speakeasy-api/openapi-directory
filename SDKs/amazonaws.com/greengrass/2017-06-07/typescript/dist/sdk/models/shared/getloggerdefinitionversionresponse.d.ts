import { SpeakeasyBase } from "../../../internal/utils";
import { LoggerDefinitionVersion } from "./loggerdefinitionversion";
/**
 * Success
 */
export declare class GetLoggerDefinitionVersionResponse extends SpeakeasyBase {
    arn?: string;
    creationTimestamp?: string;
    definition?: LoggerDefinitionVersion;
    id?: string;
    version?: string;
}
