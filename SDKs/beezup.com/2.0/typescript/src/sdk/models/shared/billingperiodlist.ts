import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { BillingPeriod } from "./billingperiod";
import { BillingPeriodListLinks } from "./billingperiodlistlinks";



export class BillingPeriodList extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=billingPeriods", elemType: BillingPeriod })
  billingPeriods: BillingPeriod[];

  @SpeakeasyMetadata({ data: "json, name=links" })
  links: BillingPeriodListLinks;
}
