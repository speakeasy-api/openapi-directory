import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// ScoreViewsCounts
/** 
 * A computed version of the total, weekly, and monthly number of views of
 * the score
 * 
**/
export class ScoreViewsCounts extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=monthly" })
  monthly?: number;

  @SpeakeasyMetadata({ data: "json, name=total" })
  total?: number;

  @SpeakeasyMetadata({ data: "json, name=weekly" })
  weekly?: number;
}
