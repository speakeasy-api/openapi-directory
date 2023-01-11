import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { TrackedExternalOrderProduct } from "./trackedexternalorderproduct";



export class TrackedExternalOrder extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=currencyCode" })
  currencyCode: string;

  @SpeakeasyMetadata({ data: "json, name=merchantOrderId" })
  merchantOrderId: string;

  @SpeakeasyMetadata({ data: "json, name=paymentValidated" })
  paymentValidated: boolean;

  @SpeakeasyMetadata({ data: "json, name=products", elemType: TrackedExternalOrderProduct })
  products?: TrackedExternalOrderProduct[];

  @SpeakeasyMetadata({ data: "json, name=totalAmount" })
  totalAmount: number;

  @SpeakeasyMetadata({ data: "json, name=utcDate" })
  utcDate: Date;

  @SpeakeasyMetadata({ data: "json, name=visitorId" })
  visitorId?: string;
}
