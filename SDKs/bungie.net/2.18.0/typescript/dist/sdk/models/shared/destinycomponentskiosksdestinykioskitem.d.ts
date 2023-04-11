import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Returns data about a character's status with a given Objective. Combine with DestinyObjectiveDefinition static data for display purposes.
 */
export declare class DestinyComponentsKiosksDestinyKioskItemFlavorObjective extends SpeakeasyBase {
    /**
     * If the Objective has an Activity associated with it, this is the unique identifier of the Activity being referred to. Use to look up the DestinyActivityDefinition in static data. This will give localized data about *what* you should be playing for the objective to be achieved.
     */
    activityHash?: number;
    /**
     * Whether or not the Objective is completed.
     */
    complete?: boolean;
    /**
     * As of Forsaken, objectives' completion value is determined dynamically at runtime.
     *
     * @remarks
     * This value represents the threshold of progress you need to surpass in order for this objective to be considered "complete".
     * If you were using objective data, switch from using the DestinyObjectiveDefinition's "completionValue" to this value.
     */
    completionValue?: number;
    /**
     * If the Objective has a Destination associated with it, this is the unique identifier of the Destination being referred to. Use to look up the DestinyDestinationDefinition in static data. This will give localized data about *where* in the universe the objective should be achieved.
     */
    destinationHash?: number;
    /**
     * The unique identifier of the Objective being referred to. Use to look up the DestinyObjectiveDefinition in static data.
     */
    objectiveHash?: number;
    /**
     * If progress has been made, and the progress can be measured numerically, this will be the value of that progress. You can compare it to the DestinyObjectiveDefinition.completionValue property for current vs. upper bounds, and use DestinyObjectiveDefinition.inProgressValueStyle or completedValueStyle to determine how this should be rendered. Note that progress, in Destiny 2, need not be a literal numeric progression. It could be one of a number of possible values, even a Timestamp. Always examine DestinyObjectiveDefinition.inProgressValueStyle or completedValueStyle before rendering progress.
     */
    progress?: number;
    /**
     * If this is true, the objective is visible in-game. Otherwise, it's not yet visible to the player. Up to you if you want to honor this property.
     */
    visible?: boolean;
}
export declare class DestinyComponentsKiosksDestinyKioskItem extends SpeakeasyBase {
    /**
     * If true, the user can not only see the item, but they can acquire it. It is possible that a user can see a kiosk item and not be able to acquire it.
     */
    canAcquire?: boolean;
    /**
     * Indexes into failureStrings for the Vendor, indicating the reasons why it failed if any.
     */
    failureIndexes?: number[];
    /**
     * I may regret naming it this way - but this represents when an item has an objective that doesn't serve a beneficial purpose, but rather is used for "flavor" or additional information. For instance, when Emblems track specific stats, those stats are represented as Objectives on the item.
     */
    flavorObjective?: DestinyComponentsKiosksDestinyKioskItemFlavorObjective;
    /**
     * The index of the item in the related DestinyVendorDefintion's itemList property, representing the sale.
     */
    index?: number;
}
