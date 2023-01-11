import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { BeezUpCommonPaginationResult } from "./beezupcommonpaginationresult";



export class ProductList extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=paginationResult" })
  paginationResult: BeezUpCommonPaginationResult;

  @SpeakeasyMetadata({ data: "json, name=products" })
  products: any[];
}
