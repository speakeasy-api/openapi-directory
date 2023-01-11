import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// GoalMetricCurrentValueRequestInput
/** 
 * A generic Asana Resource, containing a globally unique identifier.
**/
export class GoalMetricCurrentValueRequestInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=current_number_value" })
  currentNumberValue?: number;
}
