import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetStoreReportByDayPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=storeId" })
  storeId: string;
}


export class GetStoreReportByDayRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetStoreReportByDayPathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: shared.ReportByDayRequest;
}


export class GetStoreReportByDayResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  beezUPCommonErrorResponseMessage?: shared.BeezUpCommonErrorResponseMessage;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  reportByDayResponse?: shared.ReportByDayResponse;
}
