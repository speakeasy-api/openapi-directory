import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class AddScoreToCollectionPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=collection" })
  collection: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=score" })
  score: string;
}


export class AddScoreToCollectionQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=sharingKey" })
  sharingKey?: string;
}


export class AddScoreToCollectionSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oAuth2: shared.SchemeOAuth2;
}


export class AddScoreToCollectionRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: AddScoreToCollectionPathParams;

  @SpeakeasyMetadata()
  queryParams: AddScoreToCollectionQueryParams;

  @SpeakeasyMetadata()
  security: AddScoreToCollectionSecurity;
}


export class AddScoreToCollectionResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  flatErrorResponse?: shared.FlatErrorResponse;

  @SpeakeasyMetadata()
  scoreDetails?: shared.ScoreDetails;

  @SpeakeasyMetadata()
  statusCode: number;
}
