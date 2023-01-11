import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { LinksGetBillingPeriodsLink } from "./linksgetbillingperiodslink";



export class BillingPeriodListLinks extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=self" })
  self?: LinksGetBillingPeriodsLink;
}
