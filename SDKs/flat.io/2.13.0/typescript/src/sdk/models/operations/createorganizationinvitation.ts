import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class CreateOrganizationInvitationSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oAuth2: shared.SchemeOAuth2;
}


export class CreateOrganizationInvitationRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request?: shared.OrganizationInvitationCreation;

  @SpeakeasyMetadata()
  security: CreateOrganizationInvitationSecurity;
}


export class CreateOrganizationInvitationResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  flatErrorResponse?: shared.FlatErrorResponse;

  @SpeakeasyMetadata()
  organizationInvitation?: shared.OrganizationInvitation;

  @SpeakeasyMetadata()
  statusCode: number;
}
