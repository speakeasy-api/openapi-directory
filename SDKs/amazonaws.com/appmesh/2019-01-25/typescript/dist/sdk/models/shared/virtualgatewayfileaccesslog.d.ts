import { SpeakeasyBase } from "../../../internal/utils";
import { LoggingFormat } from "./loggingformat";
/**
 * An object that represents an access log file.
 */
export declare class VirtualGatewayFileAccessLog extends SpeakeasyBase {
    format?: LoggingFormat;
    path: string;
}
