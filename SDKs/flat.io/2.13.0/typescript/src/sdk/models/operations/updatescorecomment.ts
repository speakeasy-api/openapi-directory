import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class UpdateScoreCommentPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=comment" })
  comment: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=score" })
  score: string;
}


export class UpdateScoreCommentQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=sharingKey" })
  sharingKey?: string;
}


export class UpdateScoreCommentSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oAuth2: shared.SchemeOAuth2;
}


export class UpdateScoreCommentRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: UpdateScoreCommentPathParams;

  @SpeakeasyMetadata()
  queryParams: UpdateScoreCommentQueryParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: shared.ScoreCommentUpdate;

  @SpeakeasyMetadata()
  security: UpdateScoreCommentSecurity;
}


export class UpdateScoreCommentResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  flatErrorResponse?: shared.FlatErrorResponse;

  @SpeakeasyMetadata()
  scoreComment?: shared.ScoreComment;

  @SpeakeasyMetadata()
  statusCode: number;
}
