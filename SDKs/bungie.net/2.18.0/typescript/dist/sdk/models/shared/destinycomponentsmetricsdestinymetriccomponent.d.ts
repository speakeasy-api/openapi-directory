import { SpeakeasyBase } from "../../../internal/utils";
import { DestinyQuestsDestinyObjectiveProgress } from "./destinyquestsdestinyobjectiveprogress";
export declare class DestinyComponentsMetricsDestinyMetricComponent extends SpeakeasyBase {
    invisible?: boolean;
    /**
     * Returns data about a character's status with a given Objective. Combine with DestinyObjectiveDefinition static data for display purposes.
     */
    objectiveProgress?: DestinyQuestsDestinyObjectiveProgress;
}
