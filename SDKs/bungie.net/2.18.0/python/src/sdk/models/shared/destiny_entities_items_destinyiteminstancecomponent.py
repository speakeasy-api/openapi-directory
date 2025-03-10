"""Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT."""

from __future__ import annotations
import dataclasses
from enum import Enum
from typing import Optional

class DestinyEntitiesItemsDestinyItemInstanceComponentBreakerTypeEnum(str, Enum):
    r"""If populated, this item has a breaker type corresponding to the given value. See DestinyBreakerTypeDefinition for more details."""
    ZERO = '0'
    ONE = '1'
    TWO = '2'
    THREE = '3'


@dataclasses.dataclass
class DestinyEntitiesItemsDestinyItemInstanceComponentEnergy:
    r"""IF populated, this item supports Energy mechanics (i.e. Armor 2.0), and these are the current details of its energy type and available capacity to spend energy points."""
    
    energy_capacity: Optional[int] = dataclasses.field(default=None)
    r"""The total capacity of Energy that the item currently has, regardless of if it is currently being used."""  
    energy_type: Optional[int] = dataclasses.field(default=None)
    r"""This is the enum version of the Energy Type value, for convenience."""  
    energy_type_hash: Optional[int] = dataclasses.field(default=None)
    r"""The type of energy for this item. Plugs that require Energy can only be inserted if they have the \\"Any\\" Energy Type or the matching energy type of this item. This is a reference to the DestinyEnergyTypeDefinition for the energy type, where you can find extended info about it."""  
    energy_unused: Optional[int] = dataclasses.field(default=None)
    r"""The amount of energy still available for inserting new plugs."""  
    energy_used: Optional[int] = dataclasses.field(default=None)
    r"""The amount of Energy currently in use by inserted plugs."""  
    

@dataclasses.dataclass
class DestinyEntitiesItemsDestinyItemInstanceComponentPrimaryStat:
    r"""Represents a stat on an item *or* Character (NOT a Historical Stat, but a physical attribute stat like Attack, Defense etc...)"""
    
    stat_hash: Optional[int] = dataclasses.field(default=None)
    r"""The hash identifier for the Stat. Use it to look up the DestinyStatDefinition for static data about the stat."""  
    value: Optional[int] = dataclasses.field(default=None)
    r"""The current value of the Stat."""  
    

@dataclasses.dataclass
class DestinyEntitiesItemsDestinyItemInstanceComponent:
    r"""If an item is \\"instanced\\", this will contain information about the item's instance that doesn't fit easily into other components. One might say this is the \\"essential\\" instance data for the item.
    Items are instanced if they require information or state that can vary. For instance, weapons are Instanced: they are given a unique identifier, uniquely generated stats, and can have their properties altered. Non-instanced items have none of these things: for instance, Glimmer has no unique properties aside from how much of it you own.
    You can tell from an item's definition whether it will be instanced or not by looking at the DestinyInventoryItemDefinition's definition.inventory.isInstanceItem property.
    """
    
    breaker_type: Optional[DestinyEntitiesItemsDestinyItemInstanceComponentBreakerTypeEnum] = dataclasses.field(default=None)
    r"""If populated, this item has a breaker type corresponding to the given value. See DestinyBreakerTypeDefinition for more details."""  
    breaker_type_hash: Optional[int] = dataclasses.field(default=None)
    r"""If populated, this is the hash identifier for the item's breaker type. See DestinyBreakerTypeDefinition for more details."""  
    can_equip: Optional[bool] = dataclasses.field(default=None)
    r"""If this is an equippable item, you can check it here. There are permanent as well as transitory reasons why an item might not be able to be equipped: check cannotEquipReason for details."""  
    cannot_equip_reason: Optional[int] = dataclasses.field(default=None)
    r"""If you cannot equip the item, this is a flags enum that enumerates all of the reasons why you couldn't equip the item. You may need to refine your UI further by using unlockHashesRequiredToEquip and equipRequiredLevel."""  
    damage_type: Optional[int] = dataclasses.field(default=None)
    r"""If the item has a damage type, this is the item's current damage type."""  
    damage_type_hash: Optional[int] = dataclasses.field(default=None)
    r"""The current damage type's hash, so you can look up localized info and icons for it."""  
    energy: Optional[DestinyEntitiesItemsDestinyItemInstanceComponentEnergy] = dataclasses.field(default=None)
    r"""IF populated, this item supports Energy mechanics (i.e. Armor 2.0), and these are the current details of its energy type and available capacity to spend energy points."""  
    equip_required_level: Optional[int] = dataclasses.field(default=None)
    r"""If the item cannot be equipped until you reach a certain level, that level will be reflected here."""  
    is_equipped: Optional[bool] = dataclasses.field(default=None)
    r"""Is the item currently equipped on the given character?"""  
    item_level: Optional[int] = dataclasses.field(default=None)
    r"""The Item's \\"Level\\" has the most significant bearing on its stats, such as Light and Power."""  
    primary_stat: Optional[DestinyEntitiesItemsDestinyItemInstanceComponentPrimaryStat] = dataclasses.field(default=None)
    r"""The item stat that we consider to be \\"primary\\" for the item. For instance, this would be \\"Attack\\" for Weapons or \\"Defense\\" for armor."""  
    quality: Optional[int] = dataclasses.field(default=None)
    r"""The \\"Quality\\" of the item has a lesser - but still impactful - bearing on stats like Light and Power."""  
    unlock_hashes_required_to_equip: Optional[list[int]] = dataclasses.field(default=None)
    r"""Sometimes, there are limitations to equipping that are represented by character-level flags called \\"unlocks\\".
    This is a list of flags that they need in order to equip the item that the character has not met. Use these to look up the descriptions to show in your UI by looking up the relevant DestinyUnlockDefinitions for the hashes.
    """  
    