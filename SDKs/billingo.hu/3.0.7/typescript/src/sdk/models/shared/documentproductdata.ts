import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { UnitPriceTypeEnum } from "./unitpricetypeenum";
import { VatEnum } from "./vatenum";



export class DocumentProductData extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=comment" })
  comment?: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name: string;

  @SpeakeasyMetadata({ data: "json, name=quantity" })
  quantity: number;

  @SpeakeasyMetadata({ data: "json, name=unit" })
  unit: string;

  @SpeakeasyMetadata({ data: "json, name=unit_price" })
  unitPrice: number;

  @SpeakeasyMetadata({ data: "json, name=unit_price_type" })
  unitPriceType: UnitPriceTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=vat" })
  vat: VatEnum;
}
