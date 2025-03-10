import { SpeakeasyBase } from "../../../internal/utils";
import { DestinyPerksDestinyPerkReference } from "./destinyperksdestinyperkreference";
/**
 * Instanced items can have perks: benefits that the item bestows.
 *
 * @remarks
 * These are related to DestinySandboxPerkDefinition, and sometimes - but not always - have human readable info. When they do, they are the icons and text that you see in an item's tooltip.
 * Talent Grids, Sockets, and the item itself can apply Perks, which are then summarized here for your convenience.
 */
export declare class DestinyEntitiesItemsDestinyItemPerksComponent extends SpeakeasyBase {
    /**
     * The list of perks to display in an item tooltip - and whether or not they have been activated.
     */
    perks?: DestinyPerksDestinyPerkReference[];
}
