import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// ScoreCommentContext
/** 
 * The context of the comment (for inline/contextualized comments). A context will include all the information related to the location of the comment (i.e. score parts, range of measure, time position).
 * 
**/
export class ScoreCommentContext extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=measureUuids" })
  measureUuids: string[];

  @SpeakeasyMetadata({ data: "json, name=partUuid" })
  partUuid: string;

  @SpeakeasyMetadata({ data: "json, name=staffIdx" })
  staffIdx?: number;

  @SpeakeasyMetadata({ data: "json, name=staffUuid" })
  staffUuid?: string;

  @SpeakeasyMetadata({ data: "json, name=startDpq" })
  startDpq: number;

  @SpeakeasyMetadata({ data: "json, name=startTimePos" })
  startTimePos: number;

  @SpeakeasyMetadata({ data: "json, name=stopDpq" })
  stopDpq: number;

  @SpeakeasyMetadata({ data: "json, name=stopTimePos" })
  stopTimePos: number;
}
