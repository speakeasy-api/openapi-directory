import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetGroupScoresPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=group" })
  group: string;
}


export class GetGroupScoresQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=parent" })
  parent?: string;
}


export class GetGroupScoresSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oAuth2: shared.SchemeOAuth2;
}


export class GetGroupScoresRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetGroupScoresPathParams;

  @SpeakeasyMetadata()
  queryParams: GetGroupScoresQueryParams;

  @SpeakeasyMetadata()
  security: GetGroupScoresSecurity;
}


export class GetGroupScoresResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  flatErrorResponse?: shared.FlatErrorResponse;

  @SpeakeasyMetadata({ elemType: shared.ScoreDetails })
  scoreDetails?: shared.ScoreDetails[];

  @SpeakeasyMetadata()
  statusCode: number;
}
