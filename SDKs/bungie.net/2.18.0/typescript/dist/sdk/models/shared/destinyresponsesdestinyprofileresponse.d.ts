import { SpeakeasyBase } from "../../../internal/utils";
import { DestinyBaseItemComponentSetOfuint32 } from "./destinybaseitemcomponentsetofuint32";
import { DestinyComponentsCollectiblesDestinyCollectiblesComponent } from "./destinycomponentscollectiblesdestinycollectiblescomponent";
import { DestinyComponentsCollectiblesDestinyProfileCollectiblesComponent } from "./destinycomponentscollectiblesdestinyprofilecollectiblescomponent";
import { DestinyComponentsCraftablesDestinyCraftablesComponent } from "./destinycomponentscraftablesdestinycraftablescomponent";
import { DestinyComponentsInventoryDestinyCurrenciesComponent } from "./destinycomponentsinventorydestinycurrenciescomponent";
import { DestinyComponentsInventoryDestinyPlatformSilverComponent } from "./destinycomponentsinventorydestinyplatformsilvercomponent";
import { DestinyComponentsKiosksDestinyKiosksComponent } from "./destinycomponentskiosksdestinykioskscomponent";
import { DestinyComponentsLoadoutsDestinyLoadoutsComponent } from "./destinycomponentsloadoutsdestinyloadoutscomponent";
import { DestinyComponentsMetricsDestinyMetricsComponent } from "./destinycomponentsmetricsdestinymetricscomponent";
import { DestinyComponentsPlugSetsDestinyPlugSetsComponent } from "./destinycomponentsplugsetsdestinyplugsetscomponent";
import { DestinyComponentsPresentationDestinyPresentationNodesComponent } from "./destinycomponentspresentationdestinypresentationnodescomponent";
import { DestinyComponentsProfilesDestinyProfileProgressionComponent } from "./destinycomponentsprofilesdestinyprofileprogressioncomponent";
import { DestinyComponentsProfilesDestinyProfileTransitoryComponent } from "./destinycomponentsprofilesdestinyprofiletransitorycomponent";
import { DestinyComponentsRecordsDestinyCharacterRecordsComponent } from "./destinycomponentsrecordsdestinycharacterrecordscomponent";
import { DestinyComponentsRecordsDestinyProfileRecordsComponent } from "./destinycomponentsrecordsdestinyprofilerecordscomponent";
import { DestinyComponentsSocialDestinySocialCommendationsComponent } from "./destinycomponentssocialdestinysocialcommendationscomponent";
import { DestinyComponentsStringVariablesDestinyStringVariablesComponent } from "./destinycomponentsstringvariablesdestinystringvariablescomponent";
import { DestinyEntitiesCharactersDestinyCharacterActivitiesComponent } from "./destinyentitiescharactersdestinycharacteractivitiescomponent";
import { DestinyEntitiesCharactersDestinyCharacterComponent } from "./destinyentitiescharactersdestinycharactercomponent";
import { DestinyEntitiesCharactersDestinyCharacterProgressionComponent } from "./destinyentitiescharactersdestinycharacterprogressioncomponent";
import { DestinyEntitiesCharactersDestinyCharacterRenderComponent } from "./destinyentitiescharactersdestinycharacterrendercomponent";
import { DestinyEntitiesInventoryDestinyInventoryComponent } from "./destinyentitiesinventorydestinyinventorycomponent";
import { DestinyEntitiesProfilesDestinyProfileComponent } from "./destinyentitiesprofilesdestinyprofilecomponent";
import { DestinyEntitiesProfilesDestinyVendorReceiptsComponent } from "./destinyentitiesprofilesdestinyvendorreceiptscomponent";
import { DictionaryComponentResponseOfint64AndDestinyItemInstanceComponent } from "./dictionarycomponentresponseofint64anddestinyiteminstancecomponent";
import { DictionaryComponentResponseOfint64AndDestinyItemObjectivesComponent } from "./dictionarycomponentresponseofint64anddestinyitemobjectivescomponent";
import { DictionaryComponentResponseOfint64AndDestinyItemPerksComponent } from "./dictionarycomponentresponseofint64anddestinyitemperkscomponent";
import { DictionaryComponentResponseOfint64AndDestinyItemPlugObjectivesComponent } from "./dictionarycomponentresponseofint64anddestinyitemplugobjectivescomponent";
import { DictionaryComponentResponseOfint64AndDestinyItemRenderComponent } from "./dictionarycomponentresponseofint64anddestinyitemrendercomponent";
import { DictionaryComponentResponseOfint64AndDestinyItemReusablePlugsComponent } from "./dictionarycomponentresponseofint64anddestinyitemreusableplugscomponent";
import { DictionaryComponentResponseOfint64AndDestinyItemSocketsComponent } from "./dictionarycomponentresponseofint64anddestinyitemsocketscomponent";
import { DictionaryComponentResponseOfint64AndDestinyItemStatsComponent } from "./dictionarycomponentresponseofint64anddestinyitemstatscomponent";
import { DictionaryComponentResponseOfint64AndDestinyItemTalentGridComponent } from "./dictionarycomponentresponseofint64anddestinyitemtalentgridcomponent";
import { DictionaryComponentResponseOfuint32AndDestinyItemPlugComponent } from "./dictionarycomponentresponseofuint32anddestinyitemplugcomponent";
/**
 * Character activity data - the activities available to this character and its status, keyed by the Character's Id.
 *
 * @remarks
 * COMPONENT TYPE: CharacterActivities
 */
export declare class DestinyResponsesDestinyProfileResponseCharacterActivities extends SpeakeasyBase {
    data?: Record<string, DestinyEntitiesCharactersDestinyCharacterActivitiesComponent>;
    /**
     * If true, this component is disabled.
     */
    disabled?: boolean;
    privacy?: number;
}
/**
 * COMPONENT TYPE: Collectibles
 */
export declare class DestinyResponsesDestinyProfileResponseCharacterCollectibles extends SpeakeasyBase {
    data?: Record<string, DestinyComponentsCollectiblesDestinyCollectiblesComponent>;
    /**
     * If true, this component is disabled.
     */
    disabled?: boolean;
    privacy?: number;
}
/**
 * COMPONENT TYPE: Craftables
 */
export declare class DestinyResponsesDestinyProfileResponseCharacterCraftables extends SpeakeasyBase {
    data?: Record<string, DestinyComponentsCraftablesDestinyCraftablesComponent>;
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
export declare class DestinyResponsesDestinyProfileResponseCharacterCurrencyLookups extends SpeakeasyBase {
    data?: Record<string, DestinyComponentsInventoryDestinyCurrenciesComponent>;
    /**
     * If true, this component is disabled.
     */
    disabled?: boolean;
    privacy?: number;
}
/**
 * The character's equipped items, keyed by the Character's Id.
 *
 * @remarks
 * COMPONENT TYPE: CharacterEquipment
 */
export declare class DestinyResponsesDestinyProfileResponseCharacterEquipment extends SpeakeasyBase {
    data?: Record<string, DestinyEntitiesInventoryDestinyInventoryComponent>;
    /**
     * If true, this component is disabled.
     */
    disabled?: boolean;
    privacy?: number;
}
/**
 * The character-level non-equipped inventory items, keyed by the Character's Id.
 *
 * @remarks
 * COMPONENT TYPE: CharacterInventories
 */
export declare class DestinyResponsesDestinyProfileResponseCharacterInventories extends SpeakeasyBase {
    data?: Record<string, DestinyEntitiesInventoryDestinyInventoryComponent>;
    /**
     * If true, this component is disabled.
     */
    disabled?: boolean;
    privacy?: number;
}
/**
 * Items available from Kiosks that are available to a specific character as opposed to the account as a whole. It must be combined with data from the profileKiosks property to get a full picture of the character's available items to check out of a kiosk.
 *
 * @remarks
 * This component returns information about what Kiosk items are available to you on a *Character* level. Usually, kiosk items will be earned for the entire Profile (all characters) at once. To find those, look in the profileKiosks property.
 * COMPONENT TYPE: Kiosks
 */
export declare class DestinyResponsesDestinyProfileResponseCharacterKiosks extends SpeakeasyBase {
    data?: Record<string, DestinyComponentsKiosksDestinyKiosksComponent>;
    /**
     * If true, this component is disabled.
     */
    disabled?: boolean;
    privacy?: number;
}
/**
 * The character loadouts, keyed by the Character's Id.
 *
 * @remarks
 * COMPONENT TYPE: CharacterLoadouts
 */
export declare class DestinyResponsesDestinyProfileResponseCharacterLoadouts extends SpeakeasyBase {
    data?: Record<string, DestinyComponentsLoadoutsDestinyLoadoutsComponent>;
    /**
     * If true, this component is disabled.
     */
    disabled?: boolean;
    privacy?: number;
}
/**
 * When sockets refer to reusable Plug Sets (see DestinyPlugSetDefinition for more info), this is the set of plugs and their states, per character, that are character-scoped.
 *
 * @remarks
 * This comes back with ItemSockets, as it is needed for a complete picture of the sockets on requested items.
 * COMPONENT TYPE: ItemSockets
 */
export declare class DestinyResponsesDestinyProfileResponseCharacterPlugSets extends SpeakeasyBase {
    data?: Record<string, DestinyComponentsPlugSetsDestinyPlugSetsComponent>;
    /**
     * If true, this component is disabled.
     */
    disabled?: boolean;
    privacy?: number;
}
/**
 * COMPONENT TYPE: PresentationNodes
 */
export declare class DestinyResponsesDestinyProfileResponseCharacterPresentationNodes extends SpeakeasyBase {
    data?: Record<string, DestinyComponentsPresentationDestinyPresentationNodesComponent>;
    /**
     * If true, this component is disabled.
     */
    disabled?: boolean;
    privacy?: number;
}
/**
 * Character-level progression data, keyed by the Character's Id.
 *
 * @remarks
 * COMPONENT TYPE: CharacterProgressions
 */
export declare class DestinyResponsesDestinyProfileResponseCharacterProgressions extends SpeakeasyBase {
    data?: Record<string, DestinyEntitiesCharactersDestinyCharacterProgressionComponent>;
    /**
     * If true, this component is disabled.
     */
    disabled?: boolean;
    privacy?: number;
}
/**
 * COMPONENT TYPE: Records
 */
export declare class DestinyResponsesDestinyProfileResponseCharacterRecords extends SpeakeasyBase {
    data?: Record<string, DestinyComponentsRecordsDestinyCharacterRecordsComponent>;
    /**
     * If true, this component is disabled.
     */
    disabled?: boolean;
    privacy?: number;
}
/**
 * Character rendering data - a minimal set of info needed to render a character in 3D - keyed by the Character's Id.
 *
 * @remarks
 * COMPONENT TYPE: CharacterRenderData
 */
export declare class DestinyResponsesDestinyProfileResponseCharacterRenderData extends SpeakeasyBase {
    data?: Record<string, DestinyEntitiesCharactersDestinyCharacterRenderComponent>;
    /**
     * If true, this component is disabled.
     */
    disabled?: boolean;
    privacy?: number;
}
/**
 * COMPONENT TYPE: StringVariables
 */
export declare class DestinyResponsesDestinyProfileResponseCharacterStringVariables extends SpeakeasyBase {
    data?: Record<string, DestinyComponentsStringVariablesDestinyStringVariablesComponent>;
    /**
     * If true, this component is disabled.
     */
    disabled?: boolean;
    privacy?: number;
}
/**
 * Basic information about each character, keyed by the CharacterId.
 *
 * @remarks
 * COMPONENT TYPE: Characters
 */
export declare class DestinyResponsesDestinyProfileResponseCharacters extends SpeakeasyBase {
    data?: Record<string, DestinyEntitiesCharactersDestinyCharacterComponent>;
    /**
     * If true, this component is disabled.
     */
    disabled?: boolean;
    privacy?: number;
}
/**
 * Information about instanced items across all returned characters, keyed by the item's instance ID.
 *
 * @remarks
 * COMPONENT TYPE: [See inside the DestinyItemComponentSet contract for component types.]
 */
export declare class DestinyResponsesDestinyProfileResponseItemComponents extends SpeakeasyBase {
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
 * COMPONENT TYPE: Metrics
 */
export declare class DestinyResponsesDestinyProfileResponseMetrics extends SpeakeasyBase {
    data?: DestinyComponentsMetricsDestinyMetricsComponent;
    /**
     * If true, this component is disabled.
     */
    disabled?: boolean;
    privacy?: number;
}
/**
 * Silver quantities for any platform on which this Profile plays destiny.
 *
 * @remarks
 *  COMPONENT TYPE: PlatformSilver
 */
export declare class DestinyResponsesDestinyProfileResponsePlatformSilver extends SpeakeasyBase {
    data?: DestinyComponentsInventoryDestinyPlatformSilverComponent;
    /**
     * If true, this component is disabled.
     */
    disabled?: boolean;
    privacy?: number;
}
/**
 * The basic information about the Destiny Profile (formerly "Account").
 *
 * @remarks
 * COMPONENT TYPE: Profiles
 */
export declare class DestinyResponsesDestinyProfileResponseProfile extends SpeakeasyBase {
    /**
     * The most essential summary information about a Profile (in Destiny 1, we called these "Accounts").
     */
    data?: DestinyEntitiesProfilesDestinyProfileComponent;
    /**
     * If true, this component is disabled.
     */
    disabled?: boolean;
    privacy?: number;
}
/**
 * COMPONENT TYPE: Collectibles
 */
export declare class DestinyResponsesDestinyProfileResponseProfileCollectibles extends SpeakeasyBase {
    data?: DestinyComponentsCollectiblesDestinyProfileCollectiblesComponent;
    /**
     * If true, this component is disabled.
     */
    disabled?: boolean;
    privacy?: number;
}
/**
 * COMPONENT TYPE: SocialCommendations
 */
export declare class DestinyResponsesDestinyProfileResponseProfileCommendations extends SpeakeasyBase {
    data?: DestinyComponentsSocialDestinySocialCommendationsComponent;
    /**
     * If true, this component is disabled.
     */
    disabled?: boolean;
    privacy?: number;
}
/**
 * The profile-level currencies owned by the Destiny Profile.
 *
 * @remarks
 * COMPONENT TYPE: ProfileCurrencies
 */
export declare class DestinyResponsesDestinyProfileResponseProfileCurrencies extends SpeakeasyBase {
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
 * The profile-level inventory of the Destiny Profile.
 *
 * @remarks
 * COMPONENT TYPE: ProfileInventories
 */
export declare class DestinyResponsesDestinyProfileResponseProfileInventory extends SpeakeasyBase {
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
 * Items available from Kiosks that are available Profile-wide (i.e. across all characters)
 *
 * @remarks
 * This component returns information about what Kiosk items are available to you on a *Profile* level. It is theoretically possible for Kiosks to have items gated by specific Character as well. If you ever have those, you will find them on the characterKiosks property.
 * COMPONENT TYPE: Kiosks
 */
export declare class DestinyResponsesDestinyProfileResponseProfileKiosks extends SpeakeasyBase {
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
 * When sockets refer to reusable Plug Sets (see DestinyPlugSetDefinition for more info), this is the set of plugs and their states that are profile-scoped.
 *
 * @remarks
 * This comes back with ItemSockets, as it is needed for a complete picture of the sockets on requested items.
 * COMPONENT TYPE: ItemSockets
 */
export declare class DestinyResponsesDestinyProfileResponseProfilePlugSets extends SpeakeasyBase {
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
export declare class DestinyResponsesDestinyProfileResponseProfilePresentationNodes extends SpeakeasyBase {
    data?: DestinyComponentsPresentationDestinyPresentationNodesComponent;
    /**
     * If true, this component is disabled.
     */
    disabled?: boolean;
    privacy?: number;
}
/**
 * When we have progression information - such as Checklists - that may apply profile-wide, it will be returned here rather than in the per-character progression data.
 *
 * @remarks
 * COMPONENT TYPE: ProfileProgression
 */
export declare class DestinyResponsesDestinyProfileResponseProfileProgression extends SpeakeasyBase {
    /**
     * The set of progression-related information that applies at a Profile-wide level for your Destiny experience. This differs from the Jimi Hendrix Experience because there's less guitars on fire. Yet. #spoileralert?
     *
     * @remarks
     * This will include information such as Checklist info.
     */
    data?: DestinyComponentsProfilesDestinyProfileProgressionComponent;
    /**
     * If true, this component is disabled.
     */
    disabled?: boolean;
    privacy?: number;
}
/**
 * COMPONENT TYPE: Records
 */
export declare class DestinyResponsesDestinyProfileResponseProfileRecords extends SpeakeasyBase {
    data?: DestinyComponentsRecordsDestinyProfileRecordsComponent;
    /**
     * If true, this component is disabled.
     */
    disabled?: boolean;
    privacy?: number;
}
/**
 * COMPONENT TYPE: StringVariables
 */
export declare class DestinyResponsesDestinyProfileResponseProfileStringVariables extends SpeakeasyBase {
    data?: DestinyComponentsStringVariablesDestinyStringVariablesComponent;
    /**
     * If true, this component is disabled.
     */
    disabled?: boolean;
    privacy?: number;
}
/**
 * COMPONENT TYPE: Transitory
 */
export declare class DestinyResponsesDestinyProfileResponseProfileTransitoryData extends SpeakeasyBase {
    /**
     * This is an experimental set of data that Bungie considers to be "transitory" - information that may be useful for API users, but that is coming from a non-authoritative data source about information that could potentially change at a more frequent pace than Bungie.net will receive updates about it.
     *
     * @remarks
     * This information is provided exclusively for convenience should any of it be useful to users: we provide no guarantees to the accuracy or timeliness of data that comes from this source. Know that this data can potentially be out-of-date or even wrong entirely if the user disconnected from the game or suddenly changed their status before we can receive refreshed data.
     */
    data?: DestinyComponentsProfilesDestinyProfileTransitoryComponent;
    /**
     * If true, this component is disabled.
     */
    disabled?: boolean;
    privacy?: number;
}
/**
 * Recent, refundable purchases you have made from vendors. When will you use it? Couldn't say...
 *
 * @remarks
 * COMPONENT TYPE: VendorReceipts
 */
export declare class DestinyResponsesDestinyProfileResponseVendorReceipts extends SpeakeasyBase {
    /**
     * For now, this isn't used for much: it's a record of the recent refundable purchases that the user has made. In the future, it could be used for providing refunds/buyback via the API. Wouldn't that be fun?
     */
    data?: DestinyEntitiesProfilesDestinyVendorReceiptsComponent;
    /**
     * If true, this component is disabled.
     */
    disabled?: boolean;
    privacy?: number;
}
/**
 * The response for GetDestinyProfile, with components for character and item-level data.
 */
export declare class DestinyResponsesDestinyProfileResponse extends SpeakeasyBase {
    /**
     * Character activity data - the activities available to this character and its status, keyed by the Character's Id.
     *
     * @remarks
     * COMPONENT TYPE: CharacterActivities
     */
    characterActivities?: DestinyResponsesDestinyProfileResponseCharacterActivities;
    /**
     * COMPONENT TYPE: Collectibles
     */
    characterCollectibles?: DestinyResponsesDestinyProfileResponseCharacterCollectibles;
    /**
     * COMPONENT TYPE: Craftables
     */
    characterCraftables?: DestinyResponsesDestinyProfileResponseCharacterCraftables;
    /**
     * A "lookup" convenience component that can be used to quickly check if the character has access to items that can be used for purchasing.
     *
     * @remarks
     * COMPONENT TYPE: CurrencyLookups
     */
    characterCurrencyLookups?: DestinyResponsesDestinyProfileResponseCharacterCurrencyLookups;
    /**
     * The character's equipped items, keyed by the Character's Id.
     *
     * @remarks
     * COMPONENT TYPE: CharacterEquipment
     */
    characterEquipment?: DestinyResponsesDestinyProfileResponseCharacterEquipment;
    /**
     * The character-level non-equipped inventory items, keyed by the Character's Id.
     *
     * @remarks
     * COMPONENT TYPE: CharacterInventories
     */
    characterInventories?: DestinyResponsesDestinyProfileResponseCharacterInventories;
    /**
     * Items available from Kiosks that are available to a specific character as opposed to the account as a whole. It must be combined with data from the profileKiosks property to get a full picture of the character's available items to check out of a kiosk.
     *
     * @remarks
     * This component returns information about what Kiosk items are available to you on a *Character* level. Usually, kiosk items will be earned for the entire Profile (all characters) at once. To find those, look in the profileKiosks property.
     * COMPONENT TYPE: Kiosks
     */
    characterKiosks?: DestinyResponsesDestinyProfileResponseCharacterKiosks;
    /**
     * The character loadouts, keyed by the Character's Id.
     *
     * @remarks
     * COMPONENT TYPE: CharacterLoadouts
     */
    characterLoadouts?: DestinyResponsesDestinyProfileResponseCharacterLoadouts;
    /**
     * When sockets refer to reusable Plug Sets (see DestinyPlugSetDefinition for more info), this is the set of plugs and their states, per character, that are character-scoped.
     *
     * @remarks
     * This comes back with ItemSockets, as it is needed for a complete picture of the sockets on requested items.
     * COMPONENT TYPE: ItemSockets
     */
    characterPlugSets?: DestinyResponsesDestinyProfileResponseCharacterPlugSets;
    /**
     * COMPONENT TYPE: PresentationNodes
     */
    characterPresentationNodes?: DestinyResponsesDestinyProfileResponseCharacterPresentationNodes;
    /**
     * Character-level progression data, keyed by the Character's Id.
     *
     * @remarks
     * COMPONENT TYPE: CharacterProgressions
     */
    characterProgressions?: DestinyResponsesDestinyProfileResponseCharacterProgressions;
    /**
     * COMPONENT TYPE: Records
     */
    characterRecords?: DestinyResponsesDestinyProfileResponseCharacterRecords;
    /**
     * Character rendering data - a minimal set of info needed to render a character in 3D - keyed by the Character's Id.
     *
     * @remarks
     * COMPONENT TYPE: CharacterRenderData
     */
    characterRenderData?: DestinyResponsesDestinyProfileResponseCharacterRenderData;
    /**
     * COMPONENT TYPE: StringVariables
     */
    characterStringVariables?: DestinyResponsesDestinyProfileResponseCharacterStringVariables;
    /**
     * Do you ever get the feeling that a system was designed *too* flexibly? That it can be used in so many different ways that you end up being unable to provide an easy to use abstraction for the mess that's happening under the surface?
     *
     * @remarks
     * Let's talk about character-specific data that might be related to items without instances. These two statements are totally unrelated, I promise.
     * At some point during D2, it was decided that items - such as Bounties - could be given to characters and *not* have instance data, but that *could* display and even use relevant state information on your account and character.
     * Up to now, any item that had meaningful dependencies on character or account state had to be instanced, and thus "itemComponents" was all that you needed: it was keyed by item's instance IDs and provided the stateful information you needed inside.
     * Unfortunately, we don't live in such a magical world anymore. This is information held on a per-character basis about non-instanced items that the characters have in their inventory - or that reference character-specific state information even if it's in Account-level inventory - and the values related to that item's state in relation to the given character.
     * To give a concrete example, look at a Moments of Triumph bounty. They exist in a character's inventory, and show/care about a character's progression toward completing the bounty. But the bounty itself is a non-instanced item, like a mod or a currency. This returns that data for the characters who have the bounty in their inventory.
     * I'm not crying, you're crying Okay we're both crying but it's going to be okay I promise Actually I shouldn't promise that, I don't know if it's going to be okay
     */
    characterUninstancedItemComponents?: Record<string, DestinyBaseItemComponentSetOfuint32>;
    /**
     * Basic information about each character, keyed by the CharacterId.
     *
     * @remarks
     * COMPONENT TYPE: Characters
     */
    characters?: DestinyResponsesDestinyProfileResponseCharacters;
    /**
     * Information about instanced items across all returned characters, keyed by the item's instance ID.
     *
     * @remarks
     * COMPONENT TYPE: [See inside the DestinyItemComponentSet contract for component types.]
     */
    itemComponents?: DestinyResponsesDestinyProfileResponseItemComponents;
    /**
     * COMPONENT TYPE: Metrics
     */
    metrics?: DestinyResponsesDestinyProfileResponseMetrics;
    /**
     * Silver quantities for any platform on which this Profile plays destiny.
     *
     * @remarks
     *  COMPONENT TYPE: PlatformSilver
     */
    platformSilver?: DestinyResponsesDestinyProfileResponsePlatformSilver;
    /**
     * The basic information about the Destiny Profile (formerly "Account").
     *
     * @remarks
     * COMPONENT TYPE: Profiles
     */
    profile?: DestinyResponsesDestinyProfileResponseProfile;
    /**
     * COMPONENT TYPE: Collectibles
     */
    profileCollectibles?: DestinyResponsesDestinyProfileResponseProfileCollectibles;
    /**
     * COMPONENT TYPE: SocialCommendations
     */
    profileCommendations?: DestinyResponsesDestinyProfileResponseProfileCommendations;
    /**
     * The profile-level currencies owned by the Destiny Profile.
     *
     * @remarks
     * COMPONENT TYPE: ProfileCurrencies
     */
    profileCurrencies?: DestinyResponsesDestinyProfileResponseProfileCurrencies;
    /**
     * The profile-level inventory of the Destiny Profile.
     *
     * @remarks
     * COMPONENT TYPE: ProfileInventories
     */
    profileInventory?: DestinyResponsesDestinyProfileResponseProfileInventory;
    /**
     * Items available from Kiosks that are available Profile-wide (i.e. across all characters)
     *
     * @remarks
     * This component returns information about what Kiosk items are available to you on a *Profile* level. It is theoretically possible for Kiosks to have items gated by specific Character as well. If you ever have those, you will find them on the characterKiosks property.
     * COMPONENT TYPE: Kiosks
     */
    profileKiosks?: DestinyResponsesDestinyProfileResponseProfileKiosks;
    /**
     * When sockets refer to reusable Plug Sets (see DestinyPlugSetDefinition for more info), this is the set of plugs and their states that are profile-scoped.
     *
     * @remarks
     * This comes back with ItemSockets, as it is needed for a complete picture of the sockets on requested items.
     * COMPONENT TYPE: ItemSockets
     */
    profilePlugSets?: DestinyResponsesDestinyProfileResponseProfilePlugSets;
    /**
     * COMPONENT TYPE: PresentationNodes
     */
    profilePresentationNodes?: DestinyResponsesDestinyProfileResponseProfilePresentationNodes;
    /**
     * When we have progression information - such as Checklists - that may apply profile-wide, it will be returned here rather than in the per-character progression data.
     *
     * @remarks
     * COMPONENT TYPE: ProfileProgression
     */
    profileProgression?: DestinyResponsesDestinyProfileResponseProfileProgression;
    /**
     * COMPONENT TYPE: Records
     */
    profileRecords?: DestinyResponsesDestinyProfileResponseProfileRecords;
    /**
     * COMPONENT TYPE: StringVariables
     */
    profileStringVariables?: DestinyResponsesDestinyProfileResponseProfileStringVariables;
    /**
     * COMPONENT TYPE: Transitory
     */
    profileTransitoryData?: DestinyResponsesDestinyProfileResponseProfileTransitoryData;
    /**
     * Records the timestamp of when most components were last generated from the world server source. Unless the component type is specified in the documentation for secondaryComponentsMintedTimestamp, this value is sufficient to do data freshness.
     */
    responseMintedTimestamp?: Date;
    /**
     * Some secondary components are not tracked in the primary response timestamp and have their timestamp tracked here. If your component is any of the following, this field is where you will find your timestamp value:
     *
     * @remarks
     *  PresentationNodes, Records, Collectibles, Metrics, StringVariables, Craftables, Transitory
     *  All other component types may use the primary timestamp property.
     */
    secondaryComponentsMintedTimestamp?: Date;
    /**
     * Recent, refundable purchases you have made from vendors. When will you use it? Couldn't say...
     *
     * @remarks
     * COMPONENT TYPE: VendorReceipts
     */
    vendorReceipts?: DestinyResponsesDestinyProfileResponseVendorReceipts;
}
