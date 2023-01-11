import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class ListScoreTracksPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=score" })
  score: string;
}


export class ListScoreTracksQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=assignment" })
  assignment?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=listAutoTrack" })
  listAutoTrack?: boolean;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=sharingKey" })
  sharingKey?: string;
}


export class ListScoreTracksSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oAuth2: shared.SchemeOAuth2;
}


export class ListScoreTracksRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: ListScoreTracksPathParams;

  @SpeakeasyMetadata()
  queryParams: ListScoreTracksQueryParams;

  @SpeakeasyMetadata()
  security: ListScoreTracksSecurity;
}


export class ListScoreTracksResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  flatErrorResponse?: shared.FlatErrorResponse;

  @SpeakeasyMetadata({ elemType: shared.ScoreTrack })
  scoreTracks?: shared.ScoreTrack[];

  @SpeakeasyMetadata()
  statusCode: number;
}
