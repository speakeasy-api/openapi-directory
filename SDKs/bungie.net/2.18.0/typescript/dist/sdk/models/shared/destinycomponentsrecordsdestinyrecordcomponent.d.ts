import { SpeakeasyBase } from "../../../internal/utils";
import { DestinyQuestsDestinyObjectiveProgress } from "./destinyquestsdestinyobjectiveprogress";
export declare class DestinyComponentsRecordsDestinyRecordComponent extends SpeakeasyBase {
    /**
     * If available, this is the number of times this record has been completed. For example, the number of times a seal title has been gilded.
     */
    completedCount?: number;
    intervalObjectives?: DestinyQuestsDestinyObjectiveProgress[];
    intervalsRedeemedCount?: number;
    objectives?: DestinyQuestsDestinyObjectiveProgress[];
    /**
     * If available, a list that describes which reward rewards should be shown (true) or hidden (false). This property is for regular record rewards, and not for interval objective rewards.
     */
    rewardVisibilty?: boolean[];
    state?: number;
}
