import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";


export enum ListOrganizationInvitationsRoleEnum {
    User = "user",
    Teacher = "teacher",
    Admin = "admin"
}


export class ListOrganizationInvitationsQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=limit" })
  limit?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=next" })
  next?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=previous" })
  previous?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=role" })
  role?: ListOrganizationInvitationsRoleEnum;
}


export class ListOrganizationInvitationsSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oAuth2: shared.SchemeOAuth2;
}


export class ListOrganizationInvitationsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: ListOrganizationInvitationsQueryParams;

  @SpeakeasyMetadata()
  security: ListOrganizationInvitationsSecurity;
}


export class ListOrganizationInvitationsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  flatErrorResponse?: shared.FlatErrorResponse;

  @SpeakeasyMetadata({ elemType: shared.OrganizationInvitation })
  organizationInvitations?: shared.OrganizationInvitation[];

  @SpeakeasyMetadata()
  statusCode: number;
}
