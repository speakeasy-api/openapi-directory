import { SpeakeasyBase } from "../../../internal/utils";
/**
 * This represents a single "thing" being tracked by the player.
 *
 * @remarks
 * This can point to many types of entities, but only a subset of them will actually have a valid hash identifier for whatever it is being pointed to.
 * It's up to you to interpret what it means when various combinations of these entries have values being tracked.
 */
export declare class DestinyComponentsProfilesDestinyProfileTransitoryTrackingEntry extends SpeakeasyBase {
    /**
     * OPTIONAL - If this is tracking the status of a DestinyActivityDefinition, this is the identifier for that activity.
     */
    activityHash?: number;
    /**
     * OPTIONAL - If this is tracking the status of a DestinyInventoryItemDefinition, this is the identifier for that item.
     */
    itemHash?: number;
    /**
     * OPTIONAL - If this is tracking a DestinyLocationDefinition, this is the identifier for that location.
     */
    locationHash?: number;
    /**
     * OPTIONAL - If this is tracking the status of a DestinyObjectiveDefinition, this is the identifier for that objective.
     */
    objectiveHash?: number;
    /**
     * OPTIONAL - If this is tracking the status of a quest, this is the identifier for the DestinyInventoryItemDefinition that containst that questline data.
     */
    questlineItemHash?: number;
    /**
     * OPTIONAL - I've got to level with you, I don't really know what this is. Is it when you started tracking it? Is it only populated for tracked items that have time limits?
     *
     * @remarks
     * I don't know, but we can get at it - when I get time to actually test what it is, I'll update this. In the meantime, bask in the mysterious data.
     */
    trackedDate?: Date;
}
