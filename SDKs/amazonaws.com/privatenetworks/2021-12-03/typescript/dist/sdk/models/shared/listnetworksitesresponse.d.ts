import { SpeakeasyBase } from "../../../internal/utils";
import { NetworkSite } from "./networksite";
/**
 * Success
 */
export declare class ListNetworkSitesResponse extends SpeakeasyBase {
    networkSites?: NetworkSite[];
    nextToken?: string;
}
