import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class EditScorePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=score" })
  score: string;
}


export class EditScoreSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oAuth2: shared.SchemeOAuth2;
}


export class EditScoreRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: EditScorePathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request?: shared.ScoreModification;

  @SpeakeasyMetadata()
  security: EditScoreSecurity;
}


export class EditScoreResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  flatErrorResponse?: shared.FlatErrorResponse;

  @SpeakeasyMetadata()
  scoreDetails?: shared.ScoreDetails;

  @SpeakeasyMetadata()
  statusCode: number;
}
