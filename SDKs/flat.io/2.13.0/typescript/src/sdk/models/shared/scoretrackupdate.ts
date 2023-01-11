import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ScoreTrackStateEnum } from "./scoretrackstateenum";
import { ScoreTrackPoint } from "./scoretrackpoint";



// ScoreTrackUpdate
/** 
 * Update an existing track.
 * 
**/
export class ScoreTrackUpdate extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=default" })
  default?: boolean;

  @SpeakeasyMetadata({ data: "json, name=state" })
  state?: ScoreTrackStateEnum;

  @SpeakeasyMetadata({ data: "json, name=synchronizationPoints", elemType: ScoreTrackPoint })
  synchronizationPoints?: ScoreTrackPoint[];

  @SpeakeasyMetadata({ data: "json, name=title" })
  title?: string;
}
