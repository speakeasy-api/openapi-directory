import { SpeakeasyBase } from "../../../internal/utils";
import { GatewaySummary } from "./gatewaysummary";
/**
 * Success
 */
export declare class ListGatewaysResponse extends SpeakeasyBase {
    gatewaySummaries: GatewaySummary[];
    nextToken?: string;
}
