import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetScoreTrackPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=score" })
  score: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=track" })
  track: string;
}


export class GetScoreTrackQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=sharingKey" })
  sharingKey?: string;
}


export class GetScoreTrackSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oAuth2: shared.SchemeOAuth2;
}


export class GetScoreTrackRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetScoreTrackPathParams;

  @SpeakeasyMetadata()
  queryParams: GetScoreTrackQueryParams;

  @SpeakeasyMetadata()
  security: GetScoreTrackSecurity;
}


export class GetScoreTrackResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  flatErrorResponse?: shared.FlatErrorResponse;

  @SpeakeasyMetadata()
  scoreTrack?: shared.ScoreTrack;

  @SpeakeasyMetadata()
  statusCode: number;
}
