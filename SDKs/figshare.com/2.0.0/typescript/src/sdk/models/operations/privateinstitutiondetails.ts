import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class PrivateInstitutionDetailsSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oAuth2: shared.SchemeOAuth2;
}


export class PrivateInstitutionDetailsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  security: PrivateInstitutionDetailsSecurity;
}


export class PrivateInstitutionDetailsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  errorMessage?: shared.ErrorMessage;

  @SpeakeasyMetadata()
  institution?: shared.Institution;

  @SpeakeasyMetadata()
  statusCode: number;
}
