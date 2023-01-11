import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class MarkScoreCommentResolvedPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=comment" })
  comment: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=score" })
  score: string;
}


export class MarkScoreCommentResolvedQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=sharingKey" })
  sharingKey?: string;
}


export class MarkScoreCommentResolvedSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oAuth2: shared.SchemeOAuth2;
}


export class MarkScoreCommentResolvedRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: MarkScoreCommentResolvedPathParams;

  @SpeakeasyMetadata()
  queryParams: MarkScoreCommentResolvedQueryParams;

  @SpeakeasyMetadata()
  security: MarkScoreCommentResolvedSecurity;
}


export class MarkScoreCommentResolvedResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  flatErrorResponse?: shared.FlatErrorResponse;

  @SpeakeasyMetadata()
  statusCode: number;
}
