import { SpeakeasyBase } from "../../../internal/utils";
import { ScoreTrackPoint } from "./scoretrackpoint";
import { ScoreTrackStateEnum } from "./scoretrackstateenum";
/**
 * Update an existing track.
 *
 * @remarks
 *
 */
export declare class ScoreTrackUpdate extends SpeakeasyBase {
    /**
     * True if the track should be used as default audio source
     */
    default?: boolean;
    /**
     * State of the track
     */
    state?: ScoreTrackStateEnum;
    synchronizationPoints?: ScoreTrackPoint[];
    /**
     * Title of the track
     */
    title?: string;
}
