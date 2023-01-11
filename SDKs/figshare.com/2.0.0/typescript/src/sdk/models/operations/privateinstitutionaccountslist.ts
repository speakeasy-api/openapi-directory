import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class PrivateInstitutionAccountsListQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=email" })
  email?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=institution_user_id" })
  institutionUserId?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=is_active" })
  isActive?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=limit" })
  limit?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=offset" })
  offset?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=page" })
  page?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=page_size" })
  pageSize?: number;
}


export class PrivateInstitutionAccountsListSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oAuth2: shared.SchemeOAuth2;
}


export class PrivateInstitutionAccountsListRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: PrivateInstitutionAccountsListQueryParams;

  @SpeakeasyMetadata()
  security: PrivateInstitutionAccountsListSecurity;
}


export class PrivateInstitutionAccountsListResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  errorMessage?: shared.ErrorMessage;

  @SpeakeasyMetadata({ elemType: shared.ShortAccount })
  shortAccounts?: shared.ShortAccount[];

  @SpeakeasyMetadata()
  statusCode: number;
}
