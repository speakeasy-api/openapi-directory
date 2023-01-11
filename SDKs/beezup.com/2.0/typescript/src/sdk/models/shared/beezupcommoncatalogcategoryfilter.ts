import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class BeezUpCommonCatalogCategoryFilter extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=categoryPath" })
  categoryPath?: string[];
}
