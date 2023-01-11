import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class UserGroupsReadPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;
}


export class UserGroupsReadQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=doctor" })
  doctor?: number;
}


export class UserGroupsReadSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  drchronoOauth2: shared.SchemeDrchronoOauth2;
}


export class UserGroupsReadRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: UserGroupsReadPathParams;

  @SpeakeasyMetadata()
  queryParams: UserGroupsReadQueryParams;

  @SpeakeasyMetadata()
  security: UserGroupsReadSecurity;
}


export class UserGroupsReadResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  userProfilesGroup?: shared.UserProfilesGroup;
}
