import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// RecurringChargeList
/** 
 * Describes a recurring charge.
**/
export class RecurringChargeList extends SpeakeasyBase {
  @SpeakeasyMetadata()
  recurringChargeAmount?: number;

  @SpeakeasyMetadata()
  recurringChargeFrequency?: string;
}
