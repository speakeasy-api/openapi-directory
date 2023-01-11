import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetOrderInvoicePreviewPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=accountId" })
  accountId: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=beezUPOrderUUID" })
  beezUPOrderUUID: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=marketplaceTechnicalCode" })
  marketplaceTechnicalCode: string;
}


export class GetOrderInvoicePreviewHeaders extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=Accept-Encoding" })
  acceptEncoding: string;
}


export class GetOrderInvoicePreviewRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetOrderInvoicePreviewPathParams;

  @SpeakeasyMetadata()
  headers: GetOrderInvoicePreviewHeaders;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: shared.PreviewOrderInvoiceRequest;
}


export class GetOrderInvoicePreviewResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  beezUPCommonErrorResponseMessage?: shared.BeezUpCommonErrorResponseMessage;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  errorResponseMessage?: shared.ErrorResponseMessage;

  @SpeakeasyMetadata()
  previewOrderInvoiceResponse?: shared.PreviewOrderInvoiceResponse;
}
