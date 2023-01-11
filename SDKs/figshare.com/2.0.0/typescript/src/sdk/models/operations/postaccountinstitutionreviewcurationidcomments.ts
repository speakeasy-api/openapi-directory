import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class PostAccountInstitutionReviewCurationIdCommentsPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=curation_id" })
  curationId: number;
}


export class PostAccountInstitutionReviewCurationIdCommentsSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oAuth2: shared.SchemeOAuth2;
}


export class PostAccountInstitutionReviewCurationIdCommentsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: PostAccountInstitutionReviewCurationIdCommentsPathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: shared.CurationCommentCreate;

  @SpeakeasyMetadata()
  security: PostAccountInstitutionReviewCurationIdCommentsSecurity;
}


export class PostAccountInstitutionReviewCurationIdCommentsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  errorMessage?: shared.ErrorMessage;

  @SpeakeasyMetadata()
  statusCode: number;
}
