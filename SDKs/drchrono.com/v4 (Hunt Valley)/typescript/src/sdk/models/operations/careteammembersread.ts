import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class CareTeamMembersReadPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;
}


export class CareTeamMembersReadQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=appointment" })
  appointment?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=doctor" })
  doctor?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=patient" })
  patient?: number;
}


export class CareTeamMembersReadSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  drchronoOauth2: shared.SchemeDrchronoOauth2;
}


export class CareTeamMembersReadRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: CareTeamMembersReadPathParams;

  @SpeakeasyMetadata()
  queryParams: CareTeamMembersReadQueryParams;

  @SpeakeasyMetadata()
  security: CareTeamMembersReadSecurity;
}


export class CareTeamMembersReadResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  careTeamMember?: shared.CareTeamMember;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
