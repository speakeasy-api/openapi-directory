import { SpeakeasyBase } from "../../../internal/utils";
import { DestinyComponentsItemsDestinyItemPlugObjectivesComponent } from "./destinycomponentsitemsdestinyitemplugobjectivescomponent";
import { DestinyComponentsItemsDestinyItemReusablePlugsComponent } from "./destinycomponentsitemsdestinyitemreusableplugscomponent";
import { DestinyEntitiesItemsDestinyItemComponent } from "./destinyentitiesitemsdestinyitemcomponent";
import { DestinyEntitiesItemsDestinyItemInstanceComponent } from "./destinyentitiesitemsdestinyiteminstancecomponent";
import { DestinyEntitiesItemsDestinyItemObjectivesComponent } from "./destinyentitiesitemsdestinyitemobjectivescomponent";
import { DestinyEntitiesItemsDestinyItemPerksComponent } from "./destinyentitiesitemsdestinyitemperkscomponent";
import { DestinyEntitiesItemsDestinyItemRenderComponent } from "./destinyentitiesitemsdestinyitemrendercomponent";
import { DestinyEntitiesItemsDestinyItemSocketsComponent } from "./destinyentitiesitemsdestinyitemsocketscomponent";
import { DestinyEntitiesItemsDestinyItemStatsComponent } from "./destinyentitiesitemsdestinyitemstatscomponent";
import { DestinyEntitiesItemsDestinyItemTalentGridComponent } from "./destinyentitiesitemsdestinyitemtalentgridcomponent";
/**
 * Basic instance data for the item.
 *
 * @remarks
 * COMPONENT TYPE: ItemInstances
 */
export declare class DestinyResponsesDestinyItemResponseInstance extends SpeakeasyBase {
    /**
     * If an item is "instanced", this will contain information about the item's instance that doesn't fit easily into other components. One might say this is the "essential" instance data for the item.
     *
     * @remarks
     * Items are instanced if they require information or state that can vary. For instance, weapons are Instanced: they are given a unique identifier, uniquely generated stats, and can have their properties altered. Non-instanced items have none of these things: for instance, Glimmer has no unique properties aside from how much of it you own.
     * You can tell from an item's definition whether it will be instanced or not by looking at the DestinyInventoryItemDefinition's definition.inventory.isInstanceItem property.
     */
    data?: DestinyEntitiesItemsDestinyItemInstanceComponent;
    /**
     * If true, this component is disabled.
     */
    disabled?: boolean;
    privacy?: number;
}
/**
 * Common data for the item relevant to its non-instanced properties.
 *
 * @remarks
 * COMPONENT TYPE: ItemCommonData
 */
export declare class DestinyResponsesDestinyItemResponseItem extends SpeakeasyBase {
    /**
     * The base item component, filled with properties that are generally useful to know in any item request or that don't feel worthwhile to put in their own component.
     */
    data?: DestinyEntitiesItemsDestinyItemComponent;
    /**
     * If true, this component is disabled.
     */
    disabled?: boolean;
    privacy?: number;
}
/**
 * Information specifically about the item's objectives.
 *
 * @remarks
 * COMPONENT TYPE: ItemObjectives
 */
export declare class DestinyResponsesDestinyItemResponseObjectives extends SpeakeasyBase {
    /**
     * Items can have objectives and progression. When you request this block, you will obtain information about any Objectives and progression tied to this item.
     */
    data?: DestinyEntitiesItemsDestinyItemObjectivesComponent;
    /**
     * If true, this component is disabled.
     */
    disabled?: boolean;
    privacy?: number;
}
/**
 * Information specifically about the perks currently active on the item.
 *
 * @remarks
 * COMPONENT TYPE: ItemPerks
 */
export declare class DestinyResponsesDestinyItemResponsePerks extends SpeakeasyBase {
    /**
     * Instanced items can have perks: benefits that the item bestows.
     *
     * @remarks
     * These are related to DestinySandboxPerkDefinition, and sometimes - but not always - have human readable info. When they do, they are the icons and text that you see in an item's tooltip.
     * Talent Grids, Sockets, and the item itself can apply Perks, which are then summarized here for your convenience.
     */
    data?: DestinyEntitiesItemsDestinyItemPerksComponent;
    /**
     * If true, this component is disabled.
     */
    disabled?: boolean;
    privacy?: number;
}
/**
 * Information about objectives on Plugs for a given item. See the component's documentation for more info.
 *
 * @remarks
 * COMPONENT TYPE: ItemPlugObjectives
 */
export declare class DestinyResponsesDestinyItemResponsePlugObjectives extends SpeakeasyBase {
    data?: DestinyComponentsItemsDestinyItemPlugObjectivesComponent;
    /**
     * If true, this component is disabled.
     */
    disabled?: boolean;
    privacy?: number;
}
/**
 * Information about how to render the item in 3D.
 *
 * @remarks
 * COMPONENT TYPE: ItemRenderData
 */
export declare class DestinyResponsesDestinyItemResponseRenderData extends SpeakeasyBase {
    /**
     * Many items can be rendered in 3D. When you request this block, you will obtain the custom data needed to render this specific instance of the item.
     */
    data?: DestinyEntitiesItemsDestinyItemRenderComponent;
    /**
     * If true, this component is disabled.
     */
    disabled?: boolean;
    privacy?: number;
}
/**
 * Information about the Reusable Plugs for sockets on an item. These are plugs that you can insert into the given socket regardless of if you actually own an instance of that plug: they are logic-driven plugs rather than inventory-driven.
 *
 * @remarks
 *  These may need to be combined with Plug Set component data to get a full picture of available plugs on a given socket.
 *  COMPONENT TYPE: ItemReusablePlugs
 */
export declare class DestinyResponsesDestinyItemResponseReusablePlugs extends SpeakeasyBase {
    data?: DestinyComponentsItemsDestinyItemReusablePlugsComponent;
    /**
     * If true, this component is disabled.
     */
    disabled?: boolean;
    privacy?: number;
}
/**
 * Information about the sockets of the item: which are currently active, what potential sockets you could have and the stats/abilities/perks you can gain from them.
 *
 * @remarks
 * COMPONENT TYPE: ItemSockets
 */
export declare class DestinyResponsesDestinyItemResponseSockets extends SpeakeasyBase {
    /**
     * Instanced items can have sockets, which are slots on the item where plugs can be inserted.
     *
     * @remarks
     * Sockets are a bit complex: be sure to examine the documentation on the DestinyInventoryItemDefinition's "socket" block and elsewhere on these objects for more details.
     */
    data?: DestinyEntitiesItemsDestinyItemSocketsComponent;
    /**
     * If true, this component is disabled.
     */
    disabled?: boolean;
    privacy?: number;
}
/**
 * Information about the computed stats of the item: power, defense, etc...
 *
 * @remarks
 * COMPONENT TYPE: ItemStats
 */
export declare class DestinyResponsesDestinyItemResponseStats extends SpeakeasyBase {
    /**
     * If you want the stats on an item's instanced data, get this component.
     *
     * @remarks
     * These are stats like Attack, Defense etc... and *not* historical stats.
     * Note that some stats have additional computation in-game at runtime - for instance, Magazine Size - and thus these stats might not be 100% accurate compared to what you see in-game for some stats. I know, it sucks. I hate it too.
     */
    data?: DestinyEntitiesItemsDestinyItemStatsComponent;
    /**
     * If true, this component is disabled.
     */
    disabled?: boolean;
    privacy?: number;
}
/**
 * Information about the talent grid attached to the item. Talent nodes can provide a variety of benefits and abilities, and in Destiny 2 are used almost exclusively for the character's "Builds".
 *
 * @remarks
 * COMPONENT TYPE: ItemTalentGrids
 */
export declare class DestinyResponsesDestinyItemResponseTalentGrid extends SpeakeasyBase {
    /**
     * Well, we're here in Destiny 2, and Talent Grids are unfortunately still around.
     *
     * @remarks
     * The good news is that they're pretty much only being used for certain base information on items and for Builds/Subclasses. The bad news is that they still suck. If you really want this information, grab this component.
     * An important note is that talent grids are defined as such:
     * A Grid has 1:M Nodes, which has 1:M Steps.
     * Any given node can only have a single step active at one time, which represents the actual visual contents and effects of the Node (for instance, if you see a "Super Cool Bonus" node, the actual icon and text for the node is coming from the current Step of that node).
     * Nodes can be grouped into exclusivity sets *and* as of D2, exclusivity groups (which are collections of exclusivity sets that affect each other).
     * See DestinyTalentGridDefinition for more information. Brace yourself, the water's cold out there in the deep end.
     */
    data?: DestinyEntitiesItemsDestinyItemTalentGridComponent;
    /**
     * If true, this component is disabled.
     */
    disabled?: boolean;
    privacy?: number;
}
/**
 * The response object for retrieving an individual instanced item. None of these components are relevant for an item that doesn't have an "itemInstanceId": for those, get your information from the DestinyInventoryDefinition.
 */
export declare class DestinyResponsesDestinyItemResponse extends SpeakeasyBase {
    /**
     * If the item is on a character, this will return the ID of the character that is holding the item.
     */
    characterId?: number;
    /**
     * Basic instance data for the item.
     *
     * @remarks
     * COMPONENT TYPE: ItemInstances
     */
    instance?: DestinyResponsesDestinyItemResponseInstance;
    /**
     * Common data for the item relevant to its non-instanced properties.
     *
     * @remarks
     * COMPONENT TYPE: ItemCommonData
     */
    item?: DestinyResponsesDestinyItemResponseItem;
    /**
     * Information specifically about the item's objectives.
     *
     * @remarks
     * COMPONENT TYPE: ItemObjectives
     */
    objectives?: DestinyResponsesDestinyItemResponseObjectives;
    /**
     * Information specifically about the perks currently active on the item.
     *
     * @remarks
     * COMPONENT TYPE: ItemPerks
     */
    perks?: DestinyResponsesDestinyItemResponsePerks;
    /**
     * Information about objectives on Plugs for a given item. See the component's documentation for more info.
     *
     * @remarks
     * COMPONENT TYPE: ItemPlugObjectives
     */
    plugObjectives?: DestinyResponsesDestinyItemResponsePlugObjectives;
    /**
     * Information about how to render the item in 3D.
     *
     * @remarks
     * COMPONENT TYPE: ItemRenderData
     */
    renderData?: DestinyResponsesDestinyItemResponseRenderData;
    /**
     * Information about the Reusable Plugs for sockets on an item. These are plugs that you can insert into the given socket regardless of if you actually own an instance of that plug: they are logic-driven plugs rather than inventory-driven.
     *
     * @remarks
     *  These may need to be combined with Plug Set component data to get a full picture of available plugs on a given socket.
     *  COMPONENT TYPE: ItemReusablePlugs
     */
    reusablePlugs?: DestinyResponsesDestinyItemResponseReusablePlugs;
    /**
     * Information about the sockets of the item: which are currently active, what potential sockets you could have and the stats/abilities/perks you can gain from them.
     *
     * @remarks
     * COMPONENT TYPE: ItemSockets
     */
    sockets?: DestinyResponsesDestinyItemResponseSockets;
    /**
     * Information about the computed stats of the item: power, defense, etc...
     *
     * @remarks
     * COMPONENT TYPE: ItemStats
     */
    stats?: DestinyResponsesDestinyItemResponseStats;
    /**
     * Information about the talent grid attached to the item. Talent nodes can provide a variety of benefits and abilities, and in Destiny 2 are used almost exclusively for the character's "Builds".
     *
     * @remarks
     * COMPONENT TYPE: ItemTalentGrids
     */
    talentGrid?: DestinyResponsesDestinyItemResponseTalentGrid;
}
