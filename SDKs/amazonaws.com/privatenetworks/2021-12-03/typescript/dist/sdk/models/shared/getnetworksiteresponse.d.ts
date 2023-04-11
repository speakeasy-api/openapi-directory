import { SpeakeasyBase } from "../../../internal/utils";
import { NetworkSite } from "./networksite";
/**
 * Success
 */
export declare class GetNetworkSiteResponse extends SpeakeasyBase {
    networkSite?: NetworkSite;
    tags?: Record<string, string>;
}
