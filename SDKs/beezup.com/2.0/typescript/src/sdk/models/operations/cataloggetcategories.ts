import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class CatalogGetCategoriesPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=storeId" })
  storeId: string;
}


export class CatalogGetCategoriesHeaders extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=Accept-Encoding" })
  acceptEncoding: string[];
}


export class CatalogGetCategoriesRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: CatalogGetCategoriesPathParams;

  @SpeakeasyMetadata()
  headers: CatalogGetCategoriesHeaders;
}


export class CatalogGetCategoriesResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  beezUPCommonErrorResponseMessage?: shared.BeezUpCommonErrorResponseMessage;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  headers: Record<string, string[]>;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  categoryList?: shared.CategoryList;
}
