import { SpeakeasyBase } from "../../../internal/utils";
/**
 * An intrinsic perk on an item, and the requirements for it to be activated.
 */
export declare class DestinyDefinitionsDestinyItemPerkEntryDefinition extends SpeakeasyBase {
    /**
     * A hash identifier for the DestinySandboxPerkDefinition being provided on the item.
     */
    perkHash?: number;
    /**
     * Indicates whether this perk should be shown, or if it should be shown disabled.
     */
    perkVisibility?: number;
    /**
     * If this perk is not active, this is the string to show for why it's not providing its benefits.
     */
    requirementDisplayString?: string;
}
