import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class PostScoreCommentPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=score" })
  score: string;
}


export class PostScoreCommentQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=sharingKey" })
  sharingKey?: string;
}


export class PostScoreCommentSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oAuth2: shared.SchemeOAuth2;
}


export class PostScoreCommentRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: PostScoreCommentPathParams;

  @SpeakeasyMetadata()
  queryParams: PostScoreCommentQueryParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: shared.ScoreCommentCreation;

  @SpeakeasyMetadata()
  security: PostScoreCommentSecurity;
}


export class PostScoreCommentResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  flatErrorResponse?: shared.FlatErrorResponse;

  @SpeakeasyMetadata()
  scoreComment?: shared.ScoreComment;

  @SpeakeasyMetadata()
  statusCode: number;
}
