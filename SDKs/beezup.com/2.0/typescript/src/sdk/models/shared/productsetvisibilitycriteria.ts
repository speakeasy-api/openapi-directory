import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ProductSetVisibilityCriteriaLogicTypeEnum } from "./productsetvisibilitycriterialogictypeenum";



export class ProductSetVisibilityCriteria extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=disabled" })
  disabled?: boolean;

  @SpeakeasyMetadata({ data: "json, name=excluded" })
  excluded?: boolean;

  @SpeakeasyMetadata({ data: "json, name=exist" })
  exist?: boolean;

  @SpeakeasyMetadata({ data: "json, name=logic" })
  logic: ProductSetVisibilityCriteriaLogicTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=uncategorized" })
  uncategorized?: boolean;
}
