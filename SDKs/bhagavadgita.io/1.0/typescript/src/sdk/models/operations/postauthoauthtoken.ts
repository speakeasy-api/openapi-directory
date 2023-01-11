import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class PostAuthOauthTokenRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "form, name=client_id;" })
  clientId: string;

  @SpeakeasyMetadata({ data: "form, name=client_secret;" })
  clientSecret: string;

  @SpeakeasyMetadata({ data: "form, name=grant_type;" })
  grantType: string;

  @SpeakeasyMetadata({ data: "form, name=scope;" })
  scope: string;
}


export class PostAuthOauthTokenRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=application/x-www-form-urlencoded" })
  request: PostAuthOauthTokenRequestBody;
}


export class PostAuthOauthTokenResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
