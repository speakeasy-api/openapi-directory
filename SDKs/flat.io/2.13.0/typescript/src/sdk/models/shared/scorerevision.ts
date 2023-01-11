import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ScoreRevisionStatistics } from "./scorerevisionstatistics";



// ScoreRevision
/** 
 * A score revision metadata
**/
export class ScoreRevision extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=autosave" })
  autosave?: boolean;

  @SpeakeasyMetadata({ data: "json, name=collaborators" })
  collaborators?: string[];

  @SpeakeasyMetadata({ data: "json, name=creationDate" })
  creationDate?: Date;

  @SpeakeasyMetadata({ data: "json, name=description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=event" })
  event?: string;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=statistics" })
  statistics?: ScoreRevisionStatistics;

  @SpeakeasyMetadata({ data: "json, name=user" })
  user?: string;
}
