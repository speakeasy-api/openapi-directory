import { SpeakeasyBase } from "../../../internal/utils";
import { DestinyComponentsCollectiblesDestinyCollectiblesComponent } from "./destinycomponentscollectiblesdestinycollectiblescomponent";
import { DestinyComponentsInventoryDestinyCurrenciesComponent } from "./destinycomponentsinventorydestinycurrenciescomponent";
import { DestinyComponentsKiosksDestinyKiosksComponent } from "./destinycomponentskiosksdestinykioskscomponent";
import { DestinyComponentsLoadoutsDestinyLoadoutsComponent } from "./destinycomponentsloadoutsdestinyloadoutscomponent";
import { DestinyComponentsPlugSetsDestinyPlugSetsComponent } from "./destinycomponentsplugsetsdestinyplugsetscomponent";
import { DestinyComponentsPresentationDestinyPresentationNodesComponent } from "./destinycomponentspresentationdestinypresentationnodescomponent";
import { DestinyComponentsRecordsDestinyCharacterRecordsComponent } from "./destinycomponentsrecordsdestinycharacterrecordscomponent";
import { DestinyEntitiesCharactersDestinyCharacterActivitiesComponent } from "./destinyentitiescharactersdestinycharacteractivitiescomponent";
import { DestinyEntitiesCharactersDestinyCharacterComponent } from "./destinyentitiescharactersdestinycharactercomponent";
import { DestinyEntitiesCharactersDestinyCharacterProgressionComponent } from "./destinyentitiescharactersdestinycharacterprogressioncomponent";
import { DestinyEntitiesCharactersDestinyCharacterRenderComponent } from "./destinyentitiescharactersdestinycharacterrendercomponent";
import { DestinyEntitiesInventoryDestinyInventoryComponent } from "./destinyentitiesinventorydestinyinventorycomponent";
import { DictionaryComponentResponseOfint64AndDestinyItemInstanceComponent } from "./dictionarycomponentresponseofint64anddestinyiteminstancecomponent";
import { DictionaryComponentResponseOfint64AndDestinyItemObjectivesComponent } from "./dictionarycomponentresponseofint64anddestinyitemobjectivescomponent";
import { DictionaryComponentResponseOfint64AndDestinyItemPerksComponent } from "./dictionarycomponentresponseofint64anddestinyitemperkscomponent";
import { DictionaryComponentResponseOfint64AndDestinyItemPlugObjectivesComponent } from "./dictionarycomponentresponseofint64anddestinyitemplugobjectivescomponent";
import { DictionaryComponentResponseOfint64AndDestinyItemRenderComponent } from "./dictionarycomponentresponseofint64anddestinyitemrendercomponent";
import { DictionaryComponentResponseOfint64AndDestinyItemReusablePlugsComponent } from "./dictionarycomponentresponseofint64anddestinyitemreusableplugscomponent";
import { DictionaryComponentResponseOfint64AndDestinyItemSocketsComponent } from "./dictionarycomponentresponseofint64anddestinyitemsocketscomponent";
import { DictionaryComponentResponseOfint64AndDestinyItemStatsComponent } from "./dictionarycomponentresponseofint64anddestinyitemstatscomponent";
import { DictionaryComponentResponseOfint64AndDestinyItemTalentGridComponent } from "./dictionarycomponentresponseofint64anddestinyitemtalentgridcomponent";
import { DictionaryComponentResponseOfuint32AndDestinyItemObjectivesComponent } from "./dictionarycomponentresponseofuint32anddestinyitemobjectivescomponent";
import { DictionaryComponentResponseOfuint32AndDestinyItemPerksComponent } from "./dictionarycomponentresponseofuint32anddestinyitemperkscomponent";
import { DictionaryComponentResponseOfuint32AndDestinyItemPlugComponent } from "./dictionarycomponentresponseofuint32anddestinyitemplugcomponent";
/**
 * Activity data - info about current activities available to the player.
 *
 * @remarks
 * COMPONENT TYPE: CharacterActivities
 */
export declare class DestinyResponsesDestinyCharacterResponseActivities extends SpeakeasyBase {
    /**
     * This component holds activity data for a character. It will tell you about the character's current activity status, as well as activities that are available to the user.
     */
    data?: DestinyEntitiesCharactersDestinyCharacterActivitiesComponent;
    /**
     * If true, this component is disabled.
     */
    disabled?: boolean;
    privacy?: number;
}
/**
 * Base information about the character in question.
 *
 * @remarks
 * COMPONENT TYPE: Characters
 */
export declare class DestinyResponsesDestinyCharacterResponseCharacter extends SpeakeasyBase {
    /**
     * This component contains base properties of the character. You'll probably want to always request this component, but hey you do you.
     */
    data?: DestinyEntitiesCharactersDestinyCharacterComponent;
    /**
     * If true, this component is disabled.
     */
    disabled?: boolean;
    privacy?: number;
}
/**
 * COMPONENT TYPE: Collectibles
 */
export declare class DestinyResponsesDestinyCharacterResponseCollectibles extends SpeakeasyBase {
    data?: DestinyComponentsCollectiblesDestinyCollectiblesComponent;
    /**
     * If true, this component is disabled.
     */
    disabled?: boolean;
    privacy?: number;
}
/**
 * A "lookup" convenience component that can be used to quickly check if the character has access to items that can be used for purchasing.
 *
 * @remarks
 * COMPONENT TYPE: CurrencyLookups
 */
export declare class DestinyResponsesDestinyCharacterResponseCurrencyLookups extends SpeakeasyBase {
    /**
     * This component provides a quick lookup of every item the requested character has and how much of that item they have.
     *
     * @remarks
     * Requesting this component will allow you to circumvent manually putting together the list of which currencies you have for the purpose of testing currency requirements on an item being purchased, or operations that have costs.
     * You *could* figure this out yourself by doing a GetCharacter or GetProfile request and forming your own lookup table, but that is inconvenient enough that this feels like a worthwhile (and optional) redundency. Don't bother requesting it if you have already created your own lookup from prior GetCharacter/GetProfile calls.
     */
    data?: DestinyComponentsInventoryDestinyCurrenciesComponent;
    /**
     * If true, this component is disabled.
     */
    disabled?: boolean;
    privacy?: number;
}
/**
 * Equipped items on the character.
 *
 * @remarks
 * COMPONENT TYPE: CharacterEquipment
 */
export declare class DestinyResponsesDestinyCharacterResponseEquipment extends SpeakeasyBase {
    /**
     * A list of minimal information for items in an inventory: be it a character's inventory, or a Profile's inventory. (Note that the Vault is a collection of inventory buckets in the Profile's inventory)
     *
     * @remarks
     * Inventory Items returned here are in a flat list, but importantly they have a bucketHash property that indicates the specific inventory bucket that is holding them. These buckets constitute things like the separate sections of the Vault, the user's inventory slots, etc. See DestinyInventoryBucketDefinition for more info.
     */
    data?: DestinyEntitiesInventoryDestinyInventoryComponent;
    /**
     * If true, this component is disabled.
     */
    disabled?: boolean;
    privacy?: number;
}
/**
 * The character-level non-equipped inventory items.
 *
 * @remarks
 * COMPONENT TYPE: CharacterInventories
 */
export declare class DestinyResponsesDestinyCharacterResponseInventory extends SpeakeasyBase {
    /**
     * A list of minimal information for items in an inventory: be it a character's inventory, or a Profile's inventory. (Note that the Vault is a collection of inventory buckets in the Profile's inventory)
     *
     * @remarks
     * Inventory Items returned here are in a flat list, but importantly they have a bucketHash property that indicates the specific inventory bucket that is holding them. These buckets constitute things like the separate sections of the Vault, the user's inventory slots, etc. See DestinyInventoryBucketDefinition for more info.
     */
    data?: DestinyEntitiesInventoryDestinyInventoryComponent;
    /**
     * If true, this component is disabled.
     */
    disabled?: boolean;
    privacy?: number;
}
/**
 * The set of components belonging to the player's instanced items.
 *
 * @remarks
 * COMPONENT TYPE: [See inside the DestinyItemComponentSet contract for component types.]
 */
export declare class DestinyResponsesDestinyCharacterResponseItemComponents extends SpeakeasyBase {
    instances?: DictionaryComponentResponseOfint64AndDestinyItemInstanceComponent;
    objectives?: DictionaryComponentResponseOfint64AndDestinyItemObjectivesComponent;
    perks?: DictionaryComponentResponseOfint64AndDestinyItemPerksComponent;
    plugObjectives?: DictionaryComponentResponseOfint64AndDestinyItemPlugObjectivesComponent;
    plugStates?: DictionaryComponentResponseOfuint32AndDestinyItemPlugComponent;
    renderData?: DictionaryComponentResponseOfint64AndDestinyItemRenderComponent;
    reusablePlugs?: DictionaryComponentResponseOfint64AndDestinyItemReusablePlugsComponent;
    sockets?: DictionaryComponentResponseOfint64AndDestinyItemSocketsComponent;
    stats?: DictionaryComponentResponseOfint64AndDestinyItemStatsComponent;
    talentGrids?: DictionaryComponentResponseOfint64AndDestinyItemTalentGridComponent;
}
/**
 * Items available from Kiosks that are available to this specific character.
 *
 * @remarks
 * COMPONENT TYPE: Kiosks
 */
export declare class DestinyResponsesDestinyCharacterResponseKiosks extends SpeakeasyBase {
    /**
     * A Kiosk is a Vendor (DestinyVendorDefinition) that sells items based on whether you have already acquired that item before.
     *
     * @remarks
     * This component returns information about what Kiosk items are available to you on a *Profile* level. It is theoretically possible for Kiosks to have items gated by specific Character as well. If you ever have those, you will find them on the individual character's DestinyCharacterKiosksComponent.
     * Note that, because this component returns vendorItemIndexes (that is to say, indexes into the Kiosk Vendor's itemList property), these results are necessarily content version dependent. Make sure that you have the latest version of the content manifest databases before using this data.
     */
    data?: DestinyComponentsKiosksDestinyKiosksComponent;
    /**
     * If true, this component is disabled.
     */
    disabled?: boolean;
    privacy?: number;
}
/**
 * The loadouts available to the character.
 *
 * @remarks
 * COMPONENT TYPE: CharacterLoadouts
 */
export declare class DestinyResponsesDestinyCharacterResponseLoadouts extends SpeakeasyBase {
    data?: DestinyComponentsLoadoutsDestinyLoadoutsComponent;
    /**
     * If true, this component is disabled.
     */
    disabled?: boolean;
    privacy?: number;
}
/**
 * When sockets refer to reusable Plug Sets (see DestinyPlugSetDefinition for more info), this is the set of plugs and their states that are scoped to this character.
 *
 * @remarks
 * This comes back with ItemSockets, as it is needed for a complete picture of the sockets on requested items.
 * COMPONENT TYPE: ItemSockets
 */
export declare class DestinyResponsesDestinyCharacterResponsePlugSets extends SpeakeasyBase {
    /**
     * Sockets may refer to a "Plug Set": a set of reusable plugs that may be shared across multiple sockets (or even, in theory, multiple sockets over multiple items).
     *
     * @remarks
     * This is the set of those plugs that we came across in the users' inventory, along with the values for plugs in the set. Any given set in this component may be represented in Character and Profile-level, as some plugs may be Profile-level restricted, and some character-level restricted. (note that the ones that are even more specific will remain on the actual socket component itself, as they cannot be reused)
     */
    data?: DestinyComponentsPlugSetsDestinyPlugSetsComponent;
    /**
     * If true, this component is disabled.
     */
    disabled?: boolean;
    privacy?: number;
}
/**
 * COMPONENT TYPE: PresentationNodes
 */
export declare class DestinyResponsesDestinyCharacterResponsePresentationNodes extends SpeakeasyBase {
    data?: DestinyComponentsPresentationDestinyPresentationNodesComponent;
    /**
     * If true, this component is disabled.
     */
    disabled?: boolean;
    privacy?: number;
}
/**
 * Character progression data, including Milestones.
 *
 * @remarks
 * COMPONENT TYPE: CharacterProgressions
 */
export declare class DestinyResponsesDestinyCharacterResponseProgressions extends SpeakeasyBase {
    /**
     * This component returns anything that could be considered "Progression" on a user: data where the user is gaining levels, reputation, completions, rewards, etc...
     */
    data?: DestinyEntitiesCharactersDestinyCharacterProgressionComponent;
    /**
     * If true, this component is disabled.
     */
    disabled?: boolean;
    privacy?: number;
}
/**
 * COMPONENT TYPE: Records
 */
export declare class DestinyResponsesDestinyCharacterResponseRecords extends SpeakeasyBase {
    data?: DestinyComponentsRecordsDestinyCharacterRecordsComponent;
    /**
     * If true, this component is disabled.
     */
    disabled?: boolean;
    privacy?: number;
}
/**
 * Character rendering data - a minimal set of information about equipment and dyes used for rendering.
 *
 * @remarks
 * COMPONENT TYPE: CharacterRenderData
 */
export declare class DestinyResponsesDestinyCharacterResponseRenderData extends SpeakeasyBase {
    /**
     * Only really useful if you're attempting to render the character's current appearance in 3D, this returns a bare minimum of information, pre-aggregated, that you'll need to perform that rendering. Note that you need to combine this with other 3D assets and data from our servers.
     *
     * @remarks
     * Examine the Javascript returned by https://bungie.net/sharedbundle/spasm to see how we use this data, but be warned: the rabbit hole goes pretty deep.
     */
    data?: DestinyEntitiesCharactersDestinyCharacterRenderComponent;
    /**
     * If true, this component is disabled.
     */
    disabled?: boolean;
    privacy?: number;
}
/**
 * The set of components belonging to the player's UNinstanced items. Because apparently now those too can have information relevant to the character's state.
 *
 * @remarks
 * COMPONENT TYPE: [See inside the DestinyItemComponentSet contract for component types.]
 */
export declare class DestinyResponsesDestinyCharacterResponseUninstancedItemComponents extends SpeakeasyBase {
    objectives?: DictionaryComponentResponseOfuint32AndDestinyItemObjectivesComponent;
    perks?: DictionaryComponentResponseOfuint32AndDestinyItemPerksComponent;
}
/**
 * The response contract for GetDestinyCharacter, with components that can be returned for character and item-level data.
 */
export declare class DestinyResponsesDestinyCharacterResponse extends SpeakeasyBase {
    /**
     * Activity data - info about current activities available to the player.
     *
     * @remarks
     * COMPONENT TYPE: CharacterActivities
     */
    activities?: DestinyResponsesDestinyCharacterResponseActivities;
    /**
     * Base information about the character in question.
     *
     * @remarks
     * COMPONENT TYPE: Characters
     */
    character?: DestinyResponsesDestinyCharacterResponseCharacter;
    /**
     * COMPONENT TYPE: Collectibles
     */
    collectibles?: DestinyResponsesDestinyCharacterResponseCollectibles;
    /**
     * A "lookup" convenience component that can be used to quickly check if the character has access to items that can be used for purchasing.
     *
     * @remarks
     * COMPONENT TYPE: CurrencyLookups
     */
    currencyLookups?: DestinyResponsesDestinyCharacterResponseCurrencyLookups;
    /**
     * Equipped items on the character.
     *
     * @remarks
     * COMPONENT TYPE: CharacterEquipment
     */
    equipment?: DestinyResponsesDestinyCharacterResponseEquipment;
    /**
     * The character-level non-equipped inventory items.
     *
     * @remarks
     * COMPONENT TYPE: CharacterInventories
     */
    inventory?: DestinyResponsesDestinyCharacterResponseInventory;
    /**
     * The set of components belonging to the player's instanced items.
     *
     * @remarks
     * COMPONENT TYPE: [See inside the DestinyItemComponentSet contract for component types.]
     */
    itemComponents?: DestinyResponsesDestinyCharacterResponseItemComponents;
    /**
     * Items available from Kiosks that are available to this specific character.
     *
     * @remarks
     * COMPONENT TYPE: Kiosks
     */
    kiosks?: DestinyResponsesDestinyCharacterResponseKiosks;
    /**
     * The loadouts available to the character.
     *
     * @remarks
     * COMPONENT TYPE: CharacterLoadouts
     */
    loadouts?: DestinyResponsesDestinyCharacterResponseLoadouts;
    /**
     * When sockets refer to reusable Plug Sets (see DestinyPlugSetDefinition for more info), this is the set of plugs and their states that are scoped to this character.
     *
     * @remarks
     * This comes back with ItemSockets, as it is needed for a complete picture of the sockets on requested items.
     * COMPONENT TYPE: ItemSockets
     */
    plugSets?: DestinyResponsesDestinyCharacterResponsePlugSets;
    /**
     * COMPONENT TYPE: PresentationNodes
     */
    presentationNodes?: DestinyResponsesDestinyCharacterResponsePresentationNodes;
    /**
     * Character progression data, including Milestones.
     *
     * @remarks
     * COMPONENT TYPE: CharacterProgressions
     */
    progressions?: DestinyResponsesDestinyCharacterResponseProgressions;
    /**
     * COMPONENT TYPE: Records
     */
    records?: DestinyResponsesDestinyCharacterResponseRecords;
    /**
     * Character rendering data - a minimal set of information about equipment and dyes used for rendering.
     *
     * @remarks
     * COMPONENT TYPE: CharacterRenderData
     */
    renderData?: DestinyResponsesDestinyCharacterResponseRenderData;
    /**
     * The set of components belonging to the player's UNinstanced items. Because apparently now those too can have information relevant to the character's state.
     *
     * @remarks
     * COMPONENT TYPE: [See inside the DestinyItemComponentSet contract for component types.]
     */
    uninstancedItemComponents?: DestinyResponsesDestinyCharacterResponseUninstancedItemComponents;
}
