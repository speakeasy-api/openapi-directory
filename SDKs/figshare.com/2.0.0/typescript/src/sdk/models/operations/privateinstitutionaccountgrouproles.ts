import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class PrivateInstitutionAccountGroupRolesPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=account_id" })
  accountId: number;
}


export class PrivateInstitutionAccountGroupRolesSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oAuth2: shared.SchemeOAuth2;
}


export class PrivateInstitutionAccountGroupRolesRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: PrivateInstitutionAccountGroupRolesPathParams;

  @SpeakeasyMetadata()
  security: PrivateInstitutionAccountGroupRolesSecurity;
}


export class PrivateInstitutionAccountGroupRolesResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  accountGroupRoles?: Record<string, any>;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  errorMessage?: shared.ErrorMessage;

  @SpeakeasyMetadata()
  statusCode: number;
}
