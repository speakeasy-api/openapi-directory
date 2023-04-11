import { SpeakeasyBase } from "../../../internal/utils";
import { DestinyEntitiesItemsDestinyItemComponent } from "./destinyentitiesitemsdestinyitemcomponent";
import { DestinyResponsesDestinyItemResponse } from "./destinyresponsesdestinyitemresponse";
export declare class DestinyResponsesDestinyItemChangeResponse extends SpeakeasyBase {
    /**
     * Items that appeared in the inventory possibly as a result of an action.
     */
    addedInventoryItems?: DestinyEntitiesItemsDestinyItemComponent[];
    /**
     * The response object for retrieving an individual instanced item. None of these components are relevant for an item that doesn't have an "itemInstanceId": for those, get your information from the DestinyInventoryDefinition.
     */
    item?: DestinyResponsesDestinyItemResponse;
    /**
     * Items that disappeared from the inventory possibly as a result of an action.
     */
    removedInventoryItems?: DestinyEntitiesItemsDestinyItemComponent[];
}
