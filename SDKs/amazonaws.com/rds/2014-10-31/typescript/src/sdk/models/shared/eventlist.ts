import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { SourceTypeEnum } from "./sourcetypeenum";



// EventList
/** 
 *  This data type is used as a response element in the <code>DescribeEvents</code> action. 
**/
export class EventList extends SpeakeasyBase {
  @SpeakeasyMetadata()
  date?: Date;

  @SpeakeasyMetadata()
  eventCategories?: Record<string, any>[];

  @SpeakeasyMetadata()
  message?: string;

  @SpeakeasyMetadata()
  sourceArn?: string;

  @SpeakeasyMetadata()
  sourceIdentifier?: string;

  @SpeakeasyMetadata()
  sourceType?: SourceTypeEnum;
}
