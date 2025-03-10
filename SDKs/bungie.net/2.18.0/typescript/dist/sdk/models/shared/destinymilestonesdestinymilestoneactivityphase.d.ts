import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Represents whatever information we can return about an explicit phase in an activity. In the future, I hope we'll have more than just "guh, you done gone and did something," but for the forseeable future that's all we've got. I'm making it more than just a list of booleans out of that overly-optimistic hope.
 */
export declare class DestinyMilestonesDestinyMilestoneActivityPhase extends SpeakeasyBase {
    /**
     * Indicates if the phase has been completed.
     */
    complete?: boolean;
    /**
     * In DestinyActivityDefinition, if the activity has phases, there will be a set of phases defined in the "insertionPoints" property. This is the hash that maps to that phase.
     */
    phaseHash?: number;
}
