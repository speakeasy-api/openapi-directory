import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class SaveReportFilterPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=reportFilterId" })
  reportFilterId: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=storeId" })
  storeId: string;
}


export class SaveReportFilterRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: SaveReportFilterPathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: shared.SaveReportFilterRequest;
}


export class SaveReportFilterResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  beezUPCommonErrorResponseMessage?: shared.BeezUpCommonErrorResponseMessage;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
