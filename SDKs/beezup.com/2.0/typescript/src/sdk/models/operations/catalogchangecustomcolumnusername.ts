import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class CatalogChangeCustomColumnUserNamePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=columnId" })
  columnId: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=storeId" })
  storeId: string;
}


export class CatalogChangeCustomColumnUserNameRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: CatalogChangeCustomColumnUserNamePathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: shared.ChangeUserColumnNameRequest;
}


export class CatalogChangeCustomColumnUserNameResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  beezUPCommonErrorResponseMessage?: shared.BeezUpCommonErrorResponseMessage;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  importAlreadyInProgressResponse?: shared.ImportAlreadyInProgressResponse;
}
