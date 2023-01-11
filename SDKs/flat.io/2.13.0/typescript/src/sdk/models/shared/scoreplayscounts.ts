import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// ScorePlaysCounts
/** 
 * A computed version of the total, weekly, and monthly number of plays of
 * the score
 * 
**/
export class ScorePlaysCounts extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=monthly" })
  monthly?: number;

  @SpeakeasyMetadata({ data: "json, name=total" })
  total?: number;

  @SpeakeasyMetadata({ data: "json, name=weekly" })
  weekly?: number;
}
