import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class PrivateAccountInstitutionUserPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=account_id" })
  accountId: number;
}


export class PrivateAccountInstitutionUserSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oAuth2: shared.SchemeOAuth2;
}


export class PrivateAccountInstitutionUserRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: PrivateAccountInstitutionUserPathParams;

  @SpeakeasyMetadata()
  security: PrivateAccountInstitutionUserSecurity;
}


export class PrivateAccountInstitutionUserResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  errorMessage?: shared.ErrorMessage;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  user?: shared.User;
}
