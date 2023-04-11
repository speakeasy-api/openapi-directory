import { SpeakeasyBase } from "../../../internal/utils";
import { ListRouteCalculatorsResponseEntry } from "./listroutecalculatorsresponseentry";
/**
 * Success
 */
export declare class ListRouteCalculatorsResponse extends SpeakeasyBase {
    entries: ListRouteCalculatorsResponseEntry[];
    nextToken?: string;
}
