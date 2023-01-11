import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class CatalogGetProductsPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=storeId" })
  storeId: string;
}


export class CatalogGetProductsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: CatalogGetProductsPathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: shared.GetProductsRequest;
}


export class CatalogGetProductsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  beezUPCommonErrorResponseMessage?: shared.BeezUpCommonErrorResponseMessage;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  productList?: shared.ProductList;
}
