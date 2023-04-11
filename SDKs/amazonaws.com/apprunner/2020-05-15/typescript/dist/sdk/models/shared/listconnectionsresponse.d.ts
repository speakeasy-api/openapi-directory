import { SpeakeasyBase } from "../../../internal/utils";
import { ConnectionSummary } from "./connectionsummary";
/**
 * Success
 */
export declare class ListConnectionsResponse extends SpeakeasyBase {
    connectionSummaryList: ConnectionSummary[];
    nextToken?: string;
}
