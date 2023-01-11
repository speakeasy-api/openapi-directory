import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class CatalogChangeCatalogColumnUserNamePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=columnId" })
  columnId: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=storeId" })
  storeId: string;
}


export class CatalogChangeCatalogColumnUserNameRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: CatalogChangeCatalogColumnUserNamePathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: shared.ChangeUserColumnNameRequest;
}


export class CatalogChangeCatalogColumnUserNameResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  beezUPCommonErrorResponseMessage?: shared.BeezUpCommonErrorResponseMessage;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  importAlreadyInProgressResponse?: shared.ImportAlreadyInProgressResponse;
}
