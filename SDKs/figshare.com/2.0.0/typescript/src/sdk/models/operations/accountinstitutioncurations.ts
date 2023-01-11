import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";


export enum AccountInstitutionCurationsStatusEnum {
    Pending = "pending",
    Approved = "approved",
    Rejected = "rejected",
    Closed = "closed"
}


export class AccountInstitutionCurationsQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=article_id" })
  articleId?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=group_id" })
  groupId?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=limit" })
  limit?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=offset" })
  offset?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=status" })
  status?: AccountInstitutionCurationsStatusEnum;
}


export class AccountInstitutionCurationsSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oAuth2: shared.SchemeOAuth2;
}


export class AccountInstitutionCurationsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: AccountInstitutionCurationsQueryParams;

  @SpeakeasyMetadata()
  security: AccountInstitutionCurationsSecurity;
}


export class AccountInstitutionCurationsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  curation?: shared.Curation;

  @SpeakeasyMetadata()
  errorMessage?: shared.ErrorMessage;

  @SpeakeasyMetadata()
  statusCode: number;
}
