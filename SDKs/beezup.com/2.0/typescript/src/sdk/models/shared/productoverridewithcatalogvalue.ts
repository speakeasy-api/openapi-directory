import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class ProductOverrideWithCatalogValue extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=catalogValue" })
  catalogValue?: string;

  @SpeakeasyMetadata({ data: "json, name=override" })
  override?: string;
}
