import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class MarkScoreCommentUnresolvedPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=comment" })
  comment: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=score" })
  score: string;
}


export class MarkScoreCommentUnresolvedQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=sharingKey" })
  sharingKey?: string;
}


export class MarkScoreCommentUnresolvedSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oAuth2: shared.SchemeOAuth2;
}


export class MarkScoreCommentUnresolvedRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: MarkScoreCommentUnresolvedPathParams;

  @SpeakeasyMetadata()
  queryParams: MarkScoreCommentUnresolvedQueryParams;

  @SpeakeasyMetadata()
  security: MarkScoreCommentUnresolvedSecurity;
}


export class MarkScoreCommentUnresolvedResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  flatErrorResponse?: shared.FlatErrorResponse;

  @SpeakeasyMetadata()
  statusCode: number;
}
