import { SpeakeasyBase } from "../../../internal/utils";
import { Network } from "./network";
/**
 * Success
 */
export declare class CreateNetworkResponse extends SpeakeasyBase {
    network: Network;
    tags?: Record<string, string>;
}
