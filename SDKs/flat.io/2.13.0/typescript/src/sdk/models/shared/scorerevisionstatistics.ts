import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// ScoreRevisionStatistics
/** 
 * The statistics related to the score revision (additions and deletions)
 * 
**/
export class ScoreRevisionStatistics extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=additions" })
  additions?: number;

  @SpeakeasyMetadata({ data: "json, name=deletions" })
  deletions?: number;
}
