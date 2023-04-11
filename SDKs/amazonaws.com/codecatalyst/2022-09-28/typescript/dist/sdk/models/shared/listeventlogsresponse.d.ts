import { SpeakeasyBase } from "../../../internal/utils";
import { EventLogEntry } from "./eventlogentry";
/**
 * Success
 */
export declare class ListEventLogsResponse extends SpeakeasyBase {
    items: EventLogEntry[];
    nextToken?: string;
}
