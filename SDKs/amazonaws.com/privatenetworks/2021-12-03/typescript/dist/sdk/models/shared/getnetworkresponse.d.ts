import { SpeakeasyBase } from "../../../internal/utils";
import { Network } from "./network";
/**
 * Success
 */
export declare class GetNetworkResponse extends SpeakeasyBase {
    network: Network;
    tags?: Record<string, string>;
}
