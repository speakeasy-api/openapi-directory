import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class CatalogChangeCustomColumnExpressionPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=columnId" })
  columnId: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=storeId" })
  storeId: string;
}


export class CatalogChangeCustomColumnExpressionRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: CatalogChangeCustomColumnExpressionPathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: shared.ChangeCustomColumnExpressionRequest;
}


export class CatalogChangeCustomColumnExpressionResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  beezUPCommonErrorResponseMessage?: shared.BeezUpCommonErrorResponseMessage;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  importAlreadyInProgressResponse?: shared.ImportAlreadyInProgressResponse;
}
