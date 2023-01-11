import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class PrivateAuthorsSearchSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oAuth2: shared.SchemeOAuth2;
}


export class PrivateAuthorsSearchRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request?: shared.PrivateAuthorsSearch;

  @SpeakeasyMetadata()
  security: PrivateAuthorsSearchSecurity;
}


export class PrivateAuthorsSearchResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ elemType: shared.Author })
  authors?: shared.Author[];

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  errorMessage?: shared.ErrorMessage;

  @SpeakeasyMetadata()
  statusCode: number;
}
