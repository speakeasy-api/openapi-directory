import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class RecurringChargeList extends SpeakeasyBase {
  @SpeakeasyMetadata()
  recurringChargeAmount?: number;

  @SpeakeasyMetadata()
  recurringChargeFrequency?: string;
}
