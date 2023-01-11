import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class RequestAccessTokenPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=keyName" })
  keyName: string;
}


export class RequestAccessTokenQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=format" })
  format?: shared.ResponseFormatEnum;
}


export class RequestAccessTokenHeaders extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Ably-Version" })
  xAblyVersion?: string;
}


export class RequestAccessTokenRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: RequestAccessTokenPathParams;

  @SpeakeasyMetadata()
  queryParams: RequestAccessTokenQueryParams;

  @SpeakeasyMetadata()
  headers: RequestAccessTokenHeaders;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request?: any;
}


export class RequestAccessTokenResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  error?: shared.ErrorT;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  tokenDetails?: shared.TokenDetails;
}
