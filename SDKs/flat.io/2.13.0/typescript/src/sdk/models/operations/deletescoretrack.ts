import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class DeleteScoreTrackPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=score" })
  score: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=track" })
  track: string;
}


export class DeleteScoreTrackSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oAuth2: shared.SchemeOAuth2;
}


export class DeleteScoreTrackRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: DeleteScoreTrackPathParams;

  @SpeakeasyMetadata()
  security: DeleteScoreTrackSecurity;
}


export class DeleteScoreTrackResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  flatErrorResponse?: shared.FlatErrorResponse;

  @SpeakeasyMetadata()
  statusCode: number;
}
