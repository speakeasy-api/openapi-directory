import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { VatEnum } from "./vatenum";



export class DocumentItem extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=gross_amount" })
  grossAmount?: number;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=net_amount" })
  netAmount?: number;

  @SpeakeasyMetadata({ data: "json, name=net_unit_amount" })
  netUnitAmount?: number;

  @SpeakeasyMetadata({ data: "json, name=product_id" })
  productId?: number;

  @SpeakeasyMetadata({ data: "json, name=quantity" })
  quantity?: number;

  @SpeakeasyMetadata({ data: "json, name=vat" })
  vat?: VatEnum;

  @SpeakeasyMetadata({ data: "json, name=vat_amount" })
  vatAmount?: number;
}
