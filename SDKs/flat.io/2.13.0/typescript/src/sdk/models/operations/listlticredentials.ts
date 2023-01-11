import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class ListLtiCredentialsSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oAuth2: shared.SchemeOAuth2;
}


export class ListLtiCredentialsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  security: ListLtiCredentialsSecurity;
}


export class ListLtiCredentialsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  flatErrorResponse?: shared.FlatErrorResponse;

  @SpeakeasyMetadata({ elemType: shared.LtiCredentials })
  ltiCredentials?: shared.LtiCredentials[];

  @SpeakeasyMetadata()
  statusCode: number;
}
