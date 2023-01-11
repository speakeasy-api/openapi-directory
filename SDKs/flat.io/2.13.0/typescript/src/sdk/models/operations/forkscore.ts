import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class ForkScorePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=score" })
  score: string;
}


export class ForkScoreQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=sharingKey" })
  sharingKey?: string;
}


export class ForkScoreSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oAuth2: shared.SchemeOAuth2;
}


export class ForkScoreRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: ForkScorePathParams;

  @SpeakeasyMetadata()
  queryParams: ForkScoreQueryParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: shared.ScoreFork;

  @SpeakeasyMetadata()
  security: ForkScoreSecurity;
}


export class ForkScoreResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  flatErrorResponse?: shared.FlatErrorResponse;

  @SpeakeasyMetadata()
  scoreDetails?: shared.ScoreDetails;

  @SpeakeasyMetadata()
  statusCode: number;
}
