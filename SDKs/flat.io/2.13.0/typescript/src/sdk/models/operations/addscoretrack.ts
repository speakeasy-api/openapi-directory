import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class AddScoreTrackPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=score" })
  score: string;
}


export class AddScoreTrackSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oAuth2: shared.SchemeOAuth2;
}


export class AddScoreTrackRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: AddScoreTrackPathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: shared.ScoreTrackCreation;

  @SpeakeasyMetadata()
  security: AddScoreTrackSecurity;
}


export class AddScoreTrackResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  flatErrorResponse?: shared.FlatErrorResponse;

  @SpeakeasyMetadata()
  scoreTrack?: shared.ScoreTrack;

  @SpeakeasyMetadata()
  statusCode: number;
}
