import { SpeakeasyBase } from "../../../internal/utils";
import { ScoreTrackStateEnum } from "./scoretrackstateenum";
import { ScoreTrackPoint } from "./scoretrackpoint";
import { ScoreTrackTypeEnum } from "./scoretracktypeenum";
/**
 * An audio track for a score
**/
export declare class ScoreTrack extends SpeakeasyBase {
    creationDate?: Date;
    creator?: string;
    default?: boolean;
    id?: string;
    mediaId?: string;
    modificationDate?: Date;
    score?: string;
    state?: ScoreTrackStateEnum;
    synchronizationPoints?: ScoreTrackPoint[];
    title?: string;
    type?: ScoreTrackTypeEnum;
    url?: string;
}
