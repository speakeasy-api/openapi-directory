import { SpeakeasyBase } from "../../../internal/utils";
/**
 * If populated, this item has a breaker type corresponding to the given value. See DestinyBreakerTypeDefinition for more details.
 */
export declare enum DestinyEntitiesItemsDestinyItemInstanceComponentBreakerTypeEnum {
    Zero = "0",
    One = "1",
    Two = "2",
    Three = "3"
}
/**
 * IF populated, this item supports Energy mechanics (i.e. Armor 2.0), and these are the current details of its energy type and available capacity to spend energy points.
 */
export declare class DestinyEntitiesItemsDestinyItemInstanceComponentEnergy extends SpeakeasyBase {
    /**
     * The total capacity of Energy that the item currently has, regardless of if it is currently being used.
     */
    energyCapacity?: number;
    /**
     * This is the enum version of the Energy Type value, for convenience.
     */
    energyType?: number;
    /**
     * The type of energy for this item. Plugs that require Energy can only be inserted if they have the "Any" Energy Type or the matching energy type of this item. This is a reference to the DestinyEnergyTypeDefinition for the energy type, where you can find extended info about it.
     */
    energyTypeHash?: number;
    /**
     * The amount of energy still available for inserting new plugs.
     */
    energyUnused?: number;
    /**
     * The amount of Energy currently in use by inserted plugs.
     */
    energyUsed?: number;
}
/**
 * Represents a stat on an item *or* Character (NOT a Historical Stat, but a physical attribute stat like Attack, Defense etc...)
 */
export declare class DestinyEntitiesItemsDestinyItemInstanceComponentPrimaryStat extends SpeakeasyBase {
    /**
     * The hash identifier for the Stat. Use it to look up the DestinyStatDefinition for static data about the stat.
     */
    statHash?: number;
    /**
     * The current value of the Stat.
     */
    value?: number;
}
/**
 * If an item is "instanced", this will contain information about the item's instance that doesn't fit easily into other components. One might say this is the "essential" instance data for the item.
 *
 * @remarks
 * Items are instanced if they require information or state that can vary. For instance, weapons are Instanced: they are given a unique identifier, uniquely generated stats, and can have their properties altered. Non-instanced items have none of these things: for instance, Glimmer has no unique properties aside from how much of it you own.
 * You can tell from an item's definition whether it will be instanced or not by looking at the DestinyInventoryItemDefinition's definition.inventory.isInstanceItem property.
 */
export declare class DestinyEntitiesItemsDestinyItemInstanceComponent extends SpeakeasyBase {
    /**
     * If populated, this item has a breaker type corresponding to the given value. See DestinyBreakerTypeDefinition for more details.
     */
    breakerType?: DestinyEntitiesItemsDestinyItemInstanceComponentBreakerTypeEnum;
    /**
     * If populated, this is the hash identifier for the item's breaker type. See DestinyBreakerTypeDefinition for more details.
     */
    breakerTypeHash?: number;
    /**
     * If this is an equippable item, you can check it here. There are permanent as well as transitory reasons why an item might not be able to be equipped: check cannotEquipReason for details.
     */
    canEquip?: boolean;
    /**
     * If you cannot equip the item, this is a flags enum that enumerates all of the reasons why you couldn't equip the item. You may need to refine your UI further by using unlockHashesRequiredToEquip and equipRequiredLevel.
     */
    cannotEquipReason?: number;
    /**
     * If the item has a damage type, this is the item's current damage type.
     */
    damageType?: number;
    /**
     * The current damage type's hash, so you can look up localized info and icons for it.
     */
    damageTypeHash?: number;
    /**
     * IF populated, this item supports Energy mechanics (i.e. Armor 2.0), and these are the current details of its energy type and available capacity to spend energy points.
     */
    energy?: DestinyEntitiesItemsDestinyItemInstanceComponentEnergy;
    /**
     * If the item cannot be equipped until you reach a certain level, that level will be reflected here.
     */
    equipRequiredLevel?: number;
    /**
     * Is the item currently equipped on the given character?
     */
    isEquipped?: boolean;
    /**
     * The Item's "Level" has the most significant bearing on its stats, such as Light and Power.
     */
    itemLevel?: number;
    /**
     * The item stat that we consider to be "primary" for the item. For instance, this would be "Attack" for Weapons or "Defense" for armor.
     */
    primaryStat?: DestinyEntitiesItemsDestinyItemInstanceComponentPrimaryStat;
    /**
     * The "Quality" of the item has a lesser - but still impactful - bearing on stats like Light and Power.
     */
    quality?: number;
    /**
     * Sometimes, there are limitations to equipping that are represented by character-level flags called "unlocks".
     *
     * @remarks
     * This is a list of flags that they need in order to equip the item that the character has not met. Use these to look up the descriptions to show in your UI by looking up the relevant DestinyUnlockDefinitions for the hashes.
     */
    unlockHashesRequiredToEquip?: number[];
}
