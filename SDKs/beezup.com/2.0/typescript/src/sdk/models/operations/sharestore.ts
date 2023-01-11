import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class ShareStorePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=storeId" })
  storeId: string;
}


export class ShareStoreRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: ShareStorePathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: string;
}


export class ShareStoreResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  beezUPCommonErrorResponseMessage?: shared.BeezUpCommonErrorResponseMessage;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  errorResponseMessagePaymentRequired?: shared.ErrorResponseMessagePaymentRequired;
}
