import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetStoreReportByProductPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=storeId" })
  storeId: string;
}


export class GetStoreReportByProductRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetStoreReportByProductPathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: shared.ReportByProductRequest;
}


export class GetStoreReportByProductResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  beezUPCommonErrorResponseMessage?: shared.BeezUpCommonErrorResponseMessage;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  reportByProductResponse?: shared.ReportByProductResponse;
}
