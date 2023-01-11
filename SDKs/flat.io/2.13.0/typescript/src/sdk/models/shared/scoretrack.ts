import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ScoreTrackStateEnum } from "./scoretrackstateenum";
import { ScoreTrackPoint } from "./scoretrackpoint";
import { ScoreTrackTypeEnum } from "./scoretracktypeenum";



// ScoreTrack
/** 
 * An audio track for a score
**/
export class ScoreTrack extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=creationDate" })
  creationDate?: Date;

  @SpeakeasyMetadata({ data: "json, name=creator" })
  creator?: string;

  @SpeakeasyMetadata({ data: "json, name=default" })
  default?: boolean;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=mediaId" })
  mediaId?: string;

  @SpeakeasyMetadata({ data: "json, name=modificationDate" })
  modificationDate?: Date;

  @SpeakeasyMetadata({ data: "json, name=score" })
  score?: string;

  @SpeakeasyMetadata({ data: "json, name=state" })
  state?: ScoreTrackStateEnum;

  @SpeakeasyMetadata({ data: "json, name=synchronizationPoints", elemType: ScoreTrackPoint })
  synchronizationPoints?: ScoreTrackPoint[];

  @SpeakeasyMetadata({ data: "json, name=title" })
  title?: string;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type?: ScoreTrackTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=url" })
  url?: string;
}
