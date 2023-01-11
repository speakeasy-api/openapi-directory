import { SpeakeasyBase } from "../../../internal/utils";
import { ScoreTrackStateEnum } from "./scoretrackstateenum";
import { ScoreTrackPoint } from "./scoretrackpoint";
/**
 * Update an existing track.
 *
**/
export declare class ScoreTrackUpdate extends SpeakeasyBase {
    default?: boolean;
    state?: ScoreTrackStateEnum;
    synchronizationPoints?: ScoreTrackPoint[];
    title?: string;
}
