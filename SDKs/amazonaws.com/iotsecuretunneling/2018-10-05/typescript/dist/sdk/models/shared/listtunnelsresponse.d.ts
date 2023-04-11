import { SpeakeasyBase } from "../../../internal/utils";
import { TunnelSummary } from "./tunnelsummary";
/**
 * Success
 */
export declare class ListTunnelsResponse extends SpeakeasyBase {
    nextToken?: string;
    tunnelSummaries?: TunnelSummary[];
}
