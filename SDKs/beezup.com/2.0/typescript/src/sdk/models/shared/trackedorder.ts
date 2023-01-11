import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { BeezUpCommonChannelBasicInfo } from "./beezupcommonchannelbasicinfo";
import { TrackedOrderProduct } from "./trackedorderproduct";



export class TrackedOrder extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=channel" })
  channel: BeezUpCommonChannelBasicInfo;

  @SpeakeasyMetadata({ data: "json, name=currencyCode" })
  currencyCode: string;

  @SpeakeasyMetadata({ data: "json, name=merchantOrderId" })
  merchantOrderId: string;

  @SpeakeasyMetadata({ data: "json, name=paymentValidated" })
  paymentValidated: boolean;

  @SpeakeasyMetadata({ data: "json, name=products", elemType: TrackedOrderProduct })
  products: TrackedOrderProduct[];

  @SpeakeasyMetadata({ data: "json, name=totalAmount" })
  totalAmount: number;

  @SpeakeasyMetadata({ data: "json, name=utcDate" })
  utcDate: Date;
}
