import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ScoreTrackStateEnum } from "./scoretrackstateenum";
import { ScoreTrackPoint } from "./scoretrackpoint";



// ScoreTrackCreation
/** 
 * Creation of a new track. This one must contain the URL of the track or the corresponding file
 * 
**/
export class ScoreTrackCreation extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=default" })
  default?: boolean;

  @SpeakeasyMetadata({ data: "json, name=state" })
  state?: ScoreTrackStateEnum;

  @SpeakeasyMetadata({ data: "json, name=synchronizationPoints", elemType: ScoreTrackPoint })
  synchronizationPoints?: ScoreTrackPoint[];

  @SpeakeasyMetadata({ data: "json, name=title" })
  title?: string;

  @SpeakeasyMetadata({ data: "json, name=url" })
  url?: string;
}
