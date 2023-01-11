import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class TrackedExternalOrderProduct extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=margin" })
  margin?: string;

  @SpeakeasyMetadata({ data: "json, name=productActive" })
  productActive?: boolean;

  @SpeakeasyMetadata({ data: "json, name=productId" })
  productId?: string;

  @SpeakeasyMetadata({ data: "json, name=productImageUrl" })
  productImageUrl?: string;

  @SpeakeasyMetadata({ data: "json, name=productSku" })
  productSku: string;

  @SpeakeasyMetadata({ data: "json, name=productTitle" })
  productTitle?: string;

  @SpeakeasyMetadata({ data: "json, name=quantity" })
  quantity?: string;

  @SpeakeasyMetadata({ data: "json, name=unitPrice" })
  unitPrice?: string;
}
