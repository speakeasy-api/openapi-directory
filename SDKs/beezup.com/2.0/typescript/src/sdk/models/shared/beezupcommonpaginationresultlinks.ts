import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { BeezUpCommonLink3 } from "./beezupcommonlink3";



// BeezUpCommonPaginationResultLinks
/** 
 * The navigation links 'first', 'last', 'next', 'previous'
**/
export class BeezUpCommonPaginationResultLinks extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=first" })
  first: BeezUpCommonLink3;

  @SpeakeasyMetadata({ data: "json, name=last" })
  last: BeezUpCommonLink3;

  @SpeakeasyMetadata({ data: "json, name=next" })
  next?: BeezUpCommonLink3;

  @SpeakeasyMetadata({ data: "json, name=previous" })
  previous?: BeezUpCommonLink3;
}
