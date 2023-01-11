import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class ListOrganizationUsersQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=direction" })
  direction?: shared.SortDirectionEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=group" })
  group?: string[];

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=licenseExpirationDate" })
  licenseExpirationDate?: string[];

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=limit" })
  limit?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=next" })
  next?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=noActiveLicense" })
  noActiveLicense?: boolean;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=onlyIds" })
  onlyIds?: boolean;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=previous" })
  previous?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=q" })
  q?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=role" })
  role?: shared.RoleEnum[];

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=sort" })
  sort?: string;
}


export class ListOrganizationUsersSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oAuth2: shared.SchemeOAuth2;
}


export class ListOrganizationUsersRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: ListOrganizationUsersQueryParams;

  @SpeakeasyMetadata()
  security: ListOrganizationUsersSecurity;
}


export class ListOrganizationUsersResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  flatErrorResponse?: shared.FlatErrorResponse;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata({ elemType: shared.UserDetailsAdmin })
  userDetailsAdmins?: shared.UserDetailsAdmin[];
}
