import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum ScoreTrackPointTypeEnum {
    Measure = "measure",
    End = "end"
}


// ScoreTrackPoint
/** 
 * A track synchronization point
**/
export class ScoreTrackPoint extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=measureUuid" })
  measureUuid?: string;

  @SpeakeasyMetadata({ data: "json, name=time" })
  time: number;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type: ScoreTrackPointTypeEnum;
}
