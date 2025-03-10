/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.shared;



/**
 * DestinyDefinitionsDestinyInventoryItemDefinitionEquippingBlock - Items that can be equipped define this block. It contains information we need to understand how and when the item can be equipped.
 */
public class DestinyDefinitionsDestinyInventoryItemDefinitionEquippingBlock {
    /**
     * Ammo type used by a weapon is no longer determined by the bucket in which it is contained. If the item has an ammo type - i.e. if it is a weapon - this will be the type of ammunition expected.
     */
    
    public Integer ammoType;

    public DestinyDefinitionsDestinyInventoryItemDefinitionEquippingBlock withAmmoType(Integer ammoType) {
        this.ammoType = ammoType;
        return this;
    }
    
    /**
     * These are custom attributes on the equippability of the item.
     * For now, this can only be "equip on acquire", which would mean that the item will be automatically equipped as soon as you pick it up.
     */
    
    public Integer attributes;

    public DestinyDefinitionsDestinyInventoryItemDefinitionEquippingBlock withAttributes(Integer attributes) {
        this.attributes = attributes;
        return this;
    }
    
    /**
     * These are strings that represent the possible Game/Account/Character state failure conditions that can occur when trying to equip the item. They match up one-to-one with requiredUnlockExpressions.
     */
    
    public String[] displayStrings;

    public DestinyDefinitionsDestinyInventoryItemDefinitionEquippingBlock withDisplayStrings(String[] displayStrings) {
        this.displayStrings = displayStrings;
        return this;
    }
    
    /**
     * An equipped item *must* be equipped in an Equipment Slot. This is the hash identifier of the DestinyEquipmentSlotDefinition into which it must be equipped.
     */
    
    public Long equipmentSlotTypeHash;

    public DestinyDefinitionsDestinyInventoryItemDefinitionEquippingBlock withEquipmentSlotTypeHash(Long equipmentSlotTypeHash) {
        this.equipmentSlotTypeHash = equipmentSlotTypeHash;
        return this;
    }
    
    /**
     * If the item is part of a gearset, this is a reference to that gearset item.
     */
    
    public Long gearsetItemHash;

    public DestinyDefinitionsDestinyInventoryItemDefinitionEquippingBlock withGearsetItemHash(Long gearsetItemHash) {
        this.gearsetItemHash = gearsetItemHash;
        return this;
    }
    
    /**
     * If defined, this is the label used to check if the item has other items of matching types already equipped. 
     * For instance, when you aren't allowed to equip more than one Exotic Weapon, that's because all exotic weapons have identical uniqueLabels and the game checks the to-be-equipped item's uniqueLabel vs. all other already equipped items (other than the item in the slot that's about to be occupied).
     */
    
    public String uniqueLabel;

    public DestinyDefinitionsDestinyInventoryItemDefinitionEquippingBlock withUniqueLabel(String uniqueLabel) {
        this.uniqueLabel = uniqueLabel;
        return this;
    }
    
    /**
     * The hash of that unique label. Does not point to a specific definition.
     */
    
    public Long uniqueLabelHash;

    public DestinyDefinitionsDestinyInventoryItemDefinitionEquippingBlock withUniqueLabelHash(Long uniqueLabelHash) {
        this.uniqueLabelHash = uniqueLabelHash;
        return this;
    }
    
    public DestinyDefinitionsDestinyInventoryItemDefinitionEquippingBlock(){}
}
