import { SpeakeasyBase } from "../../../internal/utils";
import { CustomRoutingListener } from "./customroutinglistener";
/**
 * Success
 */
export declare class ListCustomRoutingListenersResponse extends SpeakeasyBase {
    listeners?: CustomRoutingListener[];
    nextToken?: string;
}
