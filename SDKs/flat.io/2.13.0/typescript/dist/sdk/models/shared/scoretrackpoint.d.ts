import { SpeakeasyBase } from "../../../internal/utils";
export declare enum ScoreTrackPointTypeEnum {
    Measure = "measure",
    End = "end"
}
/**
 * A track synchronization point
**/
export declare class ScoreTrackPoint extends SpeakeasyBase {
    measureUuid?: string;
    time: number;
    type: ScoreTrackPointTypeEnum;
}
