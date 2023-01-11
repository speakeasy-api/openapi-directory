import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetScorePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=score" })
  score: string;
}


export class GetScoreQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=sharingKey" })
  sharingKey?: string;
}


export class GetScoreSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oAuth2: shared.SchemeOAuth2;
}


export class GetScoreRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetScorePathParams;

  @SpeakeasyMetadata()
  queryParams: GetScoreQueryParams;

  @SpeakeasyMetadata()
  security: GetScoreSecurity;
}


export class GetScoreResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  flatErrorResponse?: shared.FlatErrorResponse;

  @SpeakeasyMetadata()
  scoreDetails?: shared.ScoreDetails;

  @SpeakeasyMetadata()
  statusCode: number;
}
