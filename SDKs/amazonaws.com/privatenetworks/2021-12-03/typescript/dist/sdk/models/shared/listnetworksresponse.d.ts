import { SpeakeasyBase } from "../../../internal/utils";
import { Network } from "./network";
/**
 * Success
 */
export declare class ListNetworksResponse extends SpeakeasyBase {
    networks?: Network[];
    nextToken?: string;
}
