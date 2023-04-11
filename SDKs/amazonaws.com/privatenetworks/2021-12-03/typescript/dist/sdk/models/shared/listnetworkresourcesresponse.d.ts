import { SpeakeasyBase } from "../../../internal/utils";
import { NetworkResource } from "./networkresource";
/**
 * Success
 */
export declare class ListNetworkResourcesResponse extends SpeakeasyBase {
    networkResources?: NetworkResource[];
    nextToken?: string;
}
