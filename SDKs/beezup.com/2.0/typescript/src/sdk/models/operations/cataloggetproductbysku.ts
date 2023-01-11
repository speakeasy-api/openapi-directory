import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class CatalogGetProductBySkuPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=storeId" })
  storeId: string;
}


export class CatalogGetProductBySkuQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=sku" })
  sku: string;
}


export class CatalogGetProductBySkuRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: CatalogGetProductBySkuPathParams;

  @SpeakeasyMetadata()
  queryParams: CatalogGetProductBySkuQueryParams;
}


export class CatalogGetProductBySkuResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  beezUPCommonErrorResponseMessage?: shared.BeezUpCommonErrorResponseMessage;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  product?: any;
}
