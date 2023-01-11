import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class ImportationSaveCustomColumnPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=columnId" })
  columnId: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=executionId" })
  executionId: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=storeId" })
  storeId: string;
}


export class ImportationSaveCustomColumnRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: ImportationSaveCustomColumnPathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: shared.ChangeCustomColumnRequest;
}


export class ImportationSaveCustomColumnResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  beezUPCommonErrorResponseMessage?: shared.BeezUpCommonErrorResponseMessage;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
