import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// UnprocessedUpdateActionList
/** 
 * Update action that has failed to be processed for the corresponding apply/stop request
**/
export class UnprocessedUpdateActionList extends SpeakeasyBase {
  @SpeakeasyMetadata()
  cacheClusterId?: string;

  @SpeakeasyMetadata()
  errorMessage?: string;

  @SpeakeasyMetadata()
  errorType?: string;

  @SpeakeasyMetadata()
  replicationGroupId?: string;

  @SpeakeasyMetadata()
  serviceUpdateName?: string;
}
