import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class CountOrgaUsersQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=group" })
  group?: string[];

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=noActiveLicense" })
  noActiveLicense?: boolean;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=q" })
  q?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=role" })
  role?: shared.RoleEnum[];
}


export class CountOrgaUsersSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oAuth2: shared.SchemeOAuth2;
}


export class CountOrgaUsersRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: CountOrgaUsersQueryParams;

  @SpeakeasyMetadata()
  security: CountOrgaUsersSecurity;
}


export class CountOrgaUsersResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  flatErrorResponse?: shared.FlatErrorResponse;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  countOrgaUsers200ApplicationJSONInteger?: number;
}
