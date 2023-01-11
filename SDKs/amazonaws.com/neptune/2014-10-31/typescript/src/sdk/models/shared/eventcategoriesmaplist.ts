import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// EventCategoriesMapList
/** 
 * Contains the results of a successful invocation of the <a>DescribeEventCategories</a> action.
**/
export class EventCategoriesMapList extends SpeakeasyBase {
  @SpeakeasyMetadata()
  eventCategories?: Record<string, any>[];

  @SpeakeasyMetadata()
  sourceType?: string;
}
