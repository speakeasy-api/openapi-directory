import { SpeakeasyBase } from "../../../internal/utils";
import { ScoreTrackPoint } from "./scoretrackpoint";
import { ScoreTrackStateEnum } from "./scoretrackstateenum";
/**
 * Creation of a new track. This one must contain the URL of the track or the corresponding file
 *
 * @remarks
 *
 */
export declare class ScoreTrackCreation extends SpeakeasyBase {
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
    /**
     * The URL of the track
     */
    url?: string;
}
