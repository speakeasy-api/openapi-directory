import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class PrivateInstitutionRolesListSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oAuth2: shared.SchemeOAuth2;
}


export class PrivateInstitutionRolesListRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  security: PrivateInstitutionRolesListSecurity;
}


export class PrivateInstitutionRolesListResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  errorMessage?: shared.ErrorMessage;

  @SpeakeasyMetadata({ elemType: shared.Role })
  roles?: shared.Role[];

  @SpeakeasyMetadata()
  statusCode: number;
}
