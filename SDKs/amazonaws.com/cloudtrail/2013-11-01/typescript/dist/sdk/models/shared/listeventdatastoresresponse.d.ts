import { SpeakeasyBase } from "../../../internal/utils";
import { EventDataStore } from "./eventdatastore";
/**
 * Success
 */
export declare class ListEventDataStoresResponse extends SpeakeasyBase {
    eventDataStores?: EventDataStore[];
    nextToken?: string;
}
