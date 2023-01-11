import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// DescribeScheduledInstancesResult
/** 
 * Contains the output of DescribeScheduledInstances.
**/
export class DescribeScheduledInstancesResult extends SpeakeasyBase {
  @SpeakeasyMetadata()
  nextToken?: Record<string, any>;

  @SpeakeasyMetadata()
  scheduledInstanceSet?: Record<string, any>;
}
