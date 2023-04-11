import { SpeakeasyBase } from "../../../internal/utils";
import { SessionSummary } from "./sessionsummary";
/**
 * Success
 */
export declare class ListSessionsResponse extends SpeakeasyBase {
    nextToken?: string;
    sessions?: SessionSummary[];
}
