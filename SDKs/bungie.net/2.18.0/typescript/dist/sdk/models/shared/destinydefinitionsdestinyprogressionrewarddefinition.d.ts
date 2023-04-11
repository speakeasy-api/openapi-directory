import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Inventory Items can reward progression when actions are performed on them. A common example of this in Destiny 1 was Bounties, which would reward Experience on your Character and the like when you completed the bounty.
 *
 * @remarks
 * Note that this maps to a DestinyProgressionMappingDefinition, and *not* a DestinyProgressionDefinition directly. This is apparently so that multiple progressions can be granted progression points/experience at the same time.
 */
export declare class DestinyDefinitionsDestinyProgressionRewardDefinition extends SpeakeasyBase {
    /**
     * The amount of experience to give to each of the mapped progressions.
     */
    amount?: number;
    /**
     * If true, the game's internal mechanisms to throttle progression should be applied.
     */
    applyThrottles?: boolean;
    /**
     * The hash identifier of the DestinyProgressionMappingDefinition that contains the progressions for which experience should be applied.
     */
    progressionMappingHash?: number;
}
