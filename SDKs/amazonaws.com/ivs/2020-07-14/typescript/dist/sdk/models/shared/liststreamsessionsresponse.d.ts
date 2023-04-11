import { SpeakeasyBase } from "../../../internal/utils";
import { StreamSessionSummary } from "./streamsessionsummary";
/**
 * Success
 */
export declare class ListStreamSessionsResponse extends SpeakeasyBase {
    nextToken?: string;
    streamSessions: StreamSessionSummary[];
}
