import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GerUserLikesPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=user" })
  user: string;
}


export class GerUserLikesQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=ids" })
  ids?: boolean;
}


export class GerUserLikesSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oAuth2: shared.SchemeOAuth2;
}


export class GerUserLikesRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GerUserLikesPathParams;

  @SpeakeasyMetadata()
  queryParams: GerUserLikesQueryParams;

  @SpeakeasyMetadata()
  security: GerUserLikesSecurity;
}


export class GerUserLikesResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  flatErrorResponse?: shared.FlatErrorResponse;

  @SpeakeasyMetadata({ elemType: shared.ScoreDetails })
  scoreDetails?: shared.ScoreDetails[];

  @SpeakeasyMetadata()
  statusCode: number;
}
