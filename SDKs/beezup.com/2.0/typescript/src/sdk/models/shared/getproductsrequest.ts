import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// GetProductsRequest
/** 
 * The request message to get products based on these filters
**/
export class GetProductsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=categoryPath" })
  categoryPath?: string[];

  @SpeakeasyMetadata({ data: "json, name=columnIdList" })
  columnIdList?: string[];

  @SpeakeasyMetadata({ data: "json, name=ean" })
  ean?: string;

  @SpeakeasyMetadata({ data: "json, name=exists" })
  exists?: boolean;

  @SpeakeasyMetadata({ data: "json, name=mpn" })
  mpn?: string;

  @SpeakeasyMetadata({ data: "json, name=orderByCatalogColumnId" })
  orderByCatalogColumnId?: string;

  @SpeakeasyMetadata({ data: "json, name=pageNumber" })
  pageNumber: number;

  @SpeakeasyMetadata({ data: "json, name=pageSize" })
  pageSize: number;

  @SpeakeasyMetadata({ data: "json, name=productIdList" })
  productIdList?: string[];

  @SpeakeasyMetadata({ data: "json, name=sku" })
  sku?: string;

  @SpeakeasyMetadata({ data: "json, name=title" })
  title?: string;

  @SpeakeasyMetadata({ data: "json, name=withoutSubCategories" })
  withoutSubCategories?: boolean;
}
