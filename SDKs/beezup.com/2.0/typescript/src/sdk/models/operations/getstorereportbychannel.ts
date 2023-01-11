import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetStoreReportByChannelPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=storeId" })
  storeId: string;
}


export class GetStoreReportByChannelRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetStoreReportByChannelPathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: shared.ReportByChannelRequest;
}


export class GetStoreReportByChannelResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  beezUPCommonErrorResponseMessage?: shared.BeezUpCommonErrorResponseMessage;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  reportByChannelResponse?: shared.ReportByChannelResponse;
}
