import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// ScoreCommentsCounts
/** 
 * A computed version of the total, unique, weekly and monthly number of
 * comments added on the documents (this doesn't include inline comments).
 * 
**/
export class ScoreCommentsCounts extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=monthly" })
  monthly?: number;

  @SpeakeasyMetadata({ data: "json, name=total" })
  total?: number;

  @SpeakeasyMetadata({ data: "json, name=unique" })
  unique?: number;

  @SpeakeasyMetadata({ data: "json, name=weekly" })
  weekly?: number;
}
