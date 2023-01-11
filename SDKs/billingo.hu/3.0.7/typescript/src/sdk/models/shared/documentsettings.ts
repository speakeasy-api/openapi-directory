import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { OnlinePaymentEnum } from "./onlinepaymentenum";
import { RoundEnum } from "./roundenum";



export class DocumentSettings extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=mediated_service" })
  mediatedService?: boolean;

  @SpeakeasyMetadata({ data: "json, name=online_payment" })
  onlinePayment?: OnlinePaymentEnum;

  @SpeakeasyMetadata({ data: "json, name=place_id" })
  placeId?: number;

  @SpeakeasyMetadata({ data: "json, name=round" })
  round?: RoundEnum;

  @SpeakeasyMetadata({ data: "json, name=without_financial_fulfillment" })
  withoutFinancialFulfillment?: boolean;
}
