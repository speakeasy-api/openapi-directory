import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// CategoryList
/** 
 * The object which contains the category list
**/
export class CategoryList extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=categories" })
  categories: any[];
}
