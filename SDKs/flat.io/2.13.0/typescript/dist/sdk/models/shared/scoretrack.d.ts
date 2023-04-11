import { SpeakeasyBase } from "../../../internal/utils";
import { ScoreTrackPoint } from "./scoretrackpoint";
import { ScoreTrackStateEnum } from "./scoretrackstateenum";
import { ScoreTrackTypeEnum } from "./scoretracktypeenum";
/**
 * An audio track for a score
 */
export declare class ScoreTrack extends SpeakeasyBase {
    /**
     * The creation date of the track
     */
    creationDate?: Date;
    /**
     * The unique identifier of the track creator
     */
    creator?: string;
    /**
     * True if the track should be used as default audio source
     */
    default?: boolean;
    /**
     * The unique identifier of the score track
     */
    id?: string;
    /**
     * The unique identifier of the track when hosted on an external service.
     *
     * @remarks
     * For example, if the url is `https://www.youtube.com/watch?v=dQw4w9WgXcQ`, `mediaId` will be `dQw4w9WgXcQ`
     *
     */
    mediaId?: string;
    /**
     * The modification date of the track
     */
    modificationDate?: Date;
    /**
     * The unique identifier of the score
     */
    score?: string;
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
     * The type of an audio track
     */
    type?: ScoreTrackTypeEnum;
    /**
     * The URL of the track
     */
    url?: string;
}
