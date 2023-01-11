import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class PrivateInstitutionEmbargoOptionsDetailsSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oAuth2: shared.SchemeOAuth2;
}


export class PrivateInstitutionEmbargoOptionsDetailsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  security: PrivateInstitutionEmbargoOptionsDetailsSecurity;
}


export class PrivateInstitutionEmbargoOptionsDetailsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  errorMessage?: shared.ErrorMessage;

  @SpeakeasyMetadata({ elemType: shared.GroupEmbargoOptions })
  groupEmbargoOptions?: shared.GroupEmbargoOptions[];

  @SpeakeasyMetadata()
  statusCode: number;
}
