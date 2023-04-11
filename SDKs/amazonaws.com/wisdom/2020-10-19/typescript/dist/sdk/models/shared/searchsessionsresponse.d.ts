import { SpeakeasyBase } from "../../../internal/utils";
import { SessionSummary } from "./sessionsummary";
/**
 * Success
 */
export declare class SearchSessionsResponse extends SpeakeasyBase {
    nextToken?: string;
    sessionSummaries: SessionSummary[];
}
