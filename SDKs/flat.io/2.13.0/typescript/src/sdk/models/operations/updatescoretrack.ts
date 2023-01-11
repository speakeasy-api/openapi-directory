import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class UpdateScoreTrackPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=score" })
  score: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=track" })
  track: string;
}


export class UpdateScoreTrackSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oAuth2: shared.SchemeOAuth2;
}


export class UpdateScoreTrackRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: UpdateScoreTrackPathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: shared.ScoreTrackUpdate;

  @SpeakeasyMetadata()
  security: UpdateScoreTrackSecurity;
}


export class UpdateScoreTrackResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  flatErrorResponse?: shared.FlatErrorResponse;

  @SpeakeasyMetadata()
  scoreTrack?: shared.ScoreTrack;

  @SpeakeasyMetadata()
  statusCode: number;
}
