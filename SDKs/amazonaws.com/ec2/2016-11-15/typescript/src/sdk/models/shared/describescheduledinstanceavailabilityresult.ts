import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// DescribeScheduledInstanceAvailabilityResult
/** 
 * Contains the output of DescribeScheduledInstanceAvailability.
**/
export class DescribeScheduledInstanceAvailabilityResult extends SpeakeasyBase {
  @SpeakeasyMetadata()
  nextToken?: Record<string, any>;

  @SpeakeasyMetadata()
  scheduledInstanceAvailabilitySet?: Record<string, any>;
}
