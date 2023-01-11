import { SpeakeasyBase } from "../../../internal/utils";
import { ScoreTrackStateEnum } from "./scoretrackstateenum";
import { ScoreTrackPoint } from "./scoretrackpoint";
/**
 * Creation of a new track. This one must contain the URL of the track or the corresponding file
 *
**/
export declare class ScoreTrackCreation extends SpeakeasyBase {
    default?: boolean;
    state?: ScoreTrackStateEnum;
    synchronizationPoints?: ScoreTrackPoint[];
    title?: string;
    url?: string;
}
