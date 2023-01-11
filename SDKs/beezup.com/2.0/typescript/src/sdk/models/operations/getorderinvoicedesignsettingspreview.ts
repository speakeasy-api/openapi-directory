import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetOrderInvoiceDesignSettingsPreviewHeaders extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=Accept-Encoding" })
  acceptEncoding: string;
}


export class GetOrderInvoiceDesignSettingsPreviewRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  headers: GetOrderInvoiceDesignSettingsPreviewHeaders;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: shared.OrderInvoiceDesignSettings;
}


export class GetOrderInvoiceDesignSettingsPreviewResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  beezUPCommonErrorResponseMessage?: shared.BeezUpCommonErrorResponseMessage;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  errorResponseMessage?: shared.ErrorResponseMessage;

  @SpeakeasyMetadata()
  getOrderInvoiceDesignPreviewResponse?: shared.GetOrderInvoiceDesignPreviewResponse;
}
