import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetStoreReportByCategoryPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=storeId" })
  storeId: string;
}


export class GetStoreReportByCategoryRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetStoreReportByCategoryPathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: shared.ReportByCategoryRequest;
}


export class GetStoreReportByCategoryResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  beezUPCommonErrorResponseMessage?: shared.BeezUpCommonErrorResponseMessage;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  reportByCategoryResponse?: shared.ReportByCategoryResponse;
}
