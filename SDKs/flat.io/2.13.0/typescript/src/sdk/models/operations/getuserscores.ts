import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetUserScoresPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=user" })
  user: string;
}


export class GetUserScoresQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=parent" })
  parent?: string;
}


export class GetUserScoresSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oAuth2: shared.SchemeOAuth2;
}


export class GetUserScoresRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetUserScoresPathParams;

  @SpeakeasyMetadata()
  queryParams: GetUserScoresQueryParams;

  @SpeakeasyMetadata()
  security: GetUserScoresSecurity;
}


export class GetUserScoresResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  flatErrorResponse?: shared.FlatErrorResponse;

  @SpeakeasyMetadata({ elemType: shared.ScoreDetails })
  scoreDetails?: shared.ScoreDetails[];

  @SpeakeasyMetadata()
  statusCode: number;
}
