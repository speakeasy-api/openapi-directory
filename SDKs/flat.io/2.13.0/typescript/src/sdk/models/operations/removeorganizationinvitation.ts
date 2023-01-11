import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class RemoveOrganizationInvitationPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=invitation" })
  invitation: string;
}


export class RemoveOrganizationInvitationSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oAuth2: shared.SchemeOAuth2;
}


export class RemoveOrganizationInvitationRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: RemoveOrganizationInvitationPathParams;

  @SpeakeasyMetadata()
  security: RemoveOrganizationInvitationSecurity;
}


export class RemoveOrganizationInvitationResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  flatErrorResponse?: shared.FlatErrorResponse;

  @SpeakeasyMetadata()
  statusCode: number;
}
