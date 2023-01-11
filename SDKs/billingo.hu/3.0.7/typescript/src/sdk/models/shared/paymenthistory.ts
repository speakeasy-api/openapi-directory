import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { PaymentMethodEnum } from "./paymentmethodenum";



export class PaymentHistory extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=conversion_rate" })
  conversionRate?: number;

  @SpeakeasyMetadata({ data: "json, name=date" })
  date: Date;

  @SpeakeasyMetadata({ data: "json, name=payment_method" })
  paymentMethod: PaymentMethodEnum;

  @SpeakeasyMetadata({ data: "json, name=price" })
  price: number;

  @SpeakeasyMetadata({ data: "json, name=voucher_number" })
  voucherNumber?: string;
}
