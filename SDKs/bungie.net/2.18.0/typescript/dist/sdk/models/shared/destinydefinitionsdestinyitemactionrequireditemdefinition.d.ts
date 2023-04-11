import { SpeakeasyBase } from "../../../internal/utils";
/**
 * The definition of an item and quantity required in a character's inventory in order to perform an action.
 */
export declare class DestinyDefinitionsDestinyItemActionRequiredItemDefinition extends SpeakeasyBase {
    /**
     * The minimum quantity of the item you have to have.
     */
    count?: number;
    /**
     * If true, the item/quantity will be deleted from your inventory when the action is performed. Otherwise, you'll retain these required items after the action is complete.
     */
    deleteOnAction?: boolean;
    /**
     * The hash identifier of the item you need to have. Use it to look up the DestinyInventoryItemDefinition for more info.
     */
    itemHash?: number;
}
