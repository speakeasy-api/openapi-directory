import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetScoreRevisionsPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=score" })
  score: string;
}


export class GetScoreRevisionsQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=sharingKey" })
  sharingKey?: string;
}


export class GetScoreRevisionsSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oAuth2: shared.SchemeOAuth2;
}


export class GetScoreRevisionsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetScoreRevisionsPathParams;

  @SpeakeasyMetadata()
  queryParams: GetScoreRevisionsQueryParams;

  @SpeakeasyMetadata()
  security: GetScoreRevisionsSecurity;
}


export class GetScoreRevisionsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  flatErrorResponse?: shared.FlatErrorResponse;

  @SpeakeasyMetadata({ elemType: shared.ScoreRevision })
  scoreRevisions?: shared.ScoreRevision[];

  @SpeakeasyMetadata()
  statusCode: number;
}
