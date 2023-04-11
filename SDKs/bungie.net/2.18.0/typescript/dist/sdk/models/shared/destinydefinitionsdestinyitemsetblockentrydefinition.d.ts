import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Defines a particular entry in an ItemSet (AKA a particular Quest Step in a Quest)
 */
export declare class DestinyDefinitionsDestinyItemSetBlockEntryDefinition extends SpeakeasyBase {
    /**
     * This is the hash identifier for a DestinyInventoryItemDefinition representing this quest step.
     */
    itemHash?: number;
    /**
     * Used for tracking which step a user reached. These values will be populated in the user's internal state, which we expose externally as a more usable DestinyQuestStatus object. If this item has been obtained, this value will be set in trackingUnlockValueHash.
     */
    trackingValue?: number;
}
