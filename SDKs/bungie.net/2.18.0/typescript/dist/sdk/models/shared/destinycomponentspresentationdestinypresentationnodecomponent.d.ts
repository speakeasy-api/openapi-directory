import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Returns data about a character's status with a given Objective. Combine with DestinyObjectiveDefinition static data for display purposes.
 */
export declare class DestinyComponentsPresentationDestinyPresentationNodeComponentObjective extends SpeakeasyBase {
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
export declare class DestinyComponentsPresentationDestinyPresentationNodeComponent extends SpeakeasyBase {
    /**
     * The value at which the presentation node is considered to be completed.
     */
    completionValue?: number;
    /**
     * An optional property: presentation nodes MAY have objectives, which can be used to infer more human readable data about the progress. However, progressValue and completionValue ought to be considered the canonical values for progress on Progression Nodes.
     */
    objective?: DestinyComponentsPresentationDestinyPresentationNodeComponentObjective;
    /**
     * How much of the presentation node is considered to be completed so far by the given character/profile.
     */
    progressValue?: number;
    /**
     * If available, this is the current score for the record category that this node represents.
     */
    recordCategoryScore?: number;
    state?: number;
}
