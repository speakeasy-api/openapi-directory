import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// InvalidationSummaryList
/** 
 * A summary of an invalidation request.
**/
export class InvalidationSummaryList extends SpeakeasyBase {
  @SpeakeasyMetadata()
  createTime: Date;

  @SpeakeasyMetadata()
  id: string;

  @SpeakeasyMetadata()
  status: string;
}
