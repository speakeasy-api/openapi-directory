import { SpeakeasyBase } from "../../../internal/utils";
import { DestinyEntitiesItemsDestinyItemSocketState } from "./destinyentitiesitemsdestinyitemsocketstate";
/**
 * Instanced items can have sockets, which are slots on the item where plugs can be inserted.
 *
 * @remarks
 * Sockets are a bit complex: be sure to examine the documentation on the DestinyInventoryItemDefinition's "socket" block and elsewhere on these objects for more details.
 */
export declare class DestinyEntitiesItemsDestinyItemSocketsComponent extends SpeakeasyBase {
    /**
     * The list of all sockets on the item, and their status information.
     */
    sockets?: DestinyEntitiesItemsDestinyItemSocketState[];
}
