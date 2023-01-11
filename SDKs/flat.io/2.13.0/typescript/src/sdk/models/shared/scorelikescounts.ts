import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// ScoreLikesCounts
/** 
 * A computed version of the weekly, monthly and total of number of likes
 * for a score
 * 
**/
export class ScoreLikesCounts extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=monthly" })
  monthly?: number;

  @SpeakeasyMetadata({ data: "json, name=total" })
  total?: number;

  @SpeakeasyMetadata({ data: "json, name=weekly" })
  weekly?: number;
}
