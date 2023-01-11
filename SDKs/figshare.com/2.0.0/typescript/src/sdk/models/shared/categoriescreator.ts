import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class CategoriesCreator extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=categories" })
  categories: number[];
}
