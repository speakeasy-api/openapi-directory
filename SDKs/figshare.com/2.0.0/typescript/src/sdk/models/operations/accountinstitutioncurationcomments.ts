import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class AccountInstitutionCurationCommentsPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=curation_id" })
  curationId: number;
}


export class AccountInstitutionCurationCommentsQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=limit" })
  limit?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=offset" })
  offset?: number;
}


export class AccountInstitutionCurationCommentsSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oAuth2: shared.SchemeOAuth2;
}


export class AccountInstitutionCurationCommentsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: AccountInstitutionCurationCommentsPathParams;

  @SpeakeasyMetadata()
  queryParams: AccountInstitutionCurationCommentsQueryParams;

  @SpeakeasyMetadata()
  security: AccountInstitutionCurationCommentsSecurity;
}


export class AccountInstitutionCurationCommentsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  curationComment?: shared.CurationComment;

  @SpeakeasyMetadata()
  errorMessage?: shared.ErrorMessage;

  @SpeakeasyMetadata()
  statusCode: number;
}
