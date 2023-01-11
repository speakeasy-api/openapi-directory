import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class RemoveOrganizationUserPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=user" })
  user: string;
}


export class RemoveOrganizationUserQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=convertToIndividual" })
  convertToIndividual?: boolean;
}


export class RemoveOrganizationUserSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oAuth2: shared.SchemeOAuth2;
}


export class RemoveOrganizationUserRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: RemoveOrganizationUserPathParams;

  @SpeakeasyMetadata()
  queryParams: RemoveOrganizationUserQueryParams;

  @SpeakeasyMetadata()
  security: RemoveOrganizationUserSecurity;
}


export class RemoveOrganizationUserResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  flatErrorResponse?: shared.FlatErrorResponse;

  @SpeakeasyMetadata()
  statusCode: number;
}
