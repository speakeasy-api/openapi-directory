import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class CreateScoreRevisionPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=score" })
  score: string;
}


export class CreateScoreRevisionSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oAuth2: shared.SchemeOAuth2;
}


export class CreateScoreRevisionRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: CreateScoreRevisionPathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: shared.ScoreRevisionCreation;

  @SpeakeasyMetadata()
  security: CreateScoreRevisionSecurity;
}


export class CreateScoreRevisionResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  flatErrorResponse?: shared.FlatErrorResponse;

  @SpeakeasyMetadata()
  scoreRevision?: shared.ScoreRevision;

  @SpeakeasyMetadata()
  statusCode: number;
}
