import { SpeakeasyBase } from "../../../internal/utils";
import { LogEvent } from "./logevent";
import { Range } from "./range";
/**
 * List of log events
 */
export declare class LogEventList extends SpeakeasyBase {
    /**
     * List of log events
     */
    items: LogEvent[];
    /**
     * Range information
     */
    range: Range;
}
