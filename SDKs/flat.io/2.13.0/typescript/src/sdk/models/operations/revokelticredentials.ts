import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class RevokeLtiCredentialsPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=credentials" })
  credentials: string;
}


export class RevokeLtiCredentialsSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oAuth2: shared.SchemeOAuth2;
}


export class RevokeLtiCredentialsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: RevokeLtiCredentialsPathParams;

  @SpeakeasyMetadata()
  security: RevokeLtiCredentialsSecurity;
}


export class RevokeLtiCredentialsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  flatErrorResponse?: shared.FlatErrorResponse;

  @SpeakeasyMetadata()
  statusCode: number;
}
