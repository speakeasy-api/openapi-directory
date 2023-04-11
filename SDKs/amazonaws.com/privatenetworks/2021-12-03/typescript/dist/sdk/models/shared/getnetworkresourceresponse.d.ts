import { SpeakeasyBase } from "../../../internal/utils";
import { NetworkResource } from "./networkresource";
/**
 * Success
 */
export declare class GetNetworkResourceResponse extends SpeakeasyBase {
    networkResource: NetworkResource;
    tags?: Record<string, string>;
}
