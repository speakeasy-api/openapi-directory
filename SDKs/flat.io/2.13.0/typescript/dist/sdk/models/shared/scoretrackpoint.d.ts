import { SpeakeasyBase } from "../../../internal/utils";
/**
 * The type of the synchronization point. If the type is `measure`, the measure uuid must be present in `measureUuid`
 */
export declare enum ScoreTrackPointTypeEnum {
    Measure = "measure",
    End = "end"
}
/**
 * A track synchronization point
 */
export declare class ScoreTrackPoint extends SpeakeasyBase {
    /**
     * The measure unique identifier
     */
    measureUuid?: string;
    /**
     * The corresponding time in seconds
     */
    time: number;
    /**
     * The type of the synchronization point. If the type is `measure`, the measure uuid must be present in `measureUuid`
     */
    type: ScoreTrackPointTypeEnum;
}
