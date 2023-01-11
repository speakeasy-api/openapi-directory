import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetScoreCommentsPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=score" })
  score: string;
}

export enum GetScoreCommentsDirectionEnum {
    Asc = "asc",
    Desc = "desc"
}

export enum GetScoreCommentsSortEnum {
    Date = "date"
}

export enum GetScoreCommentsTypeEnum {
    Document = "document",
    Inline = "inline"
}


export class GetScoreCommentsQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=direction" })
  direction?: GetScoreCommentsDirectionEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=sharingKey" })
  sharingKey?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=sort" })
  sort?: GetScoreCommentsSortEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=type" })
  type?: GetScoreCommentsTypeEnum;
}


export class GetScoreCommentsSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oAuth2: shared.SchemeOAuth2;
}


export class GetScoreCommentsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetScoreCommentsPathParams;

  @SpeakeasyMetadata()
  queryParams: GetScoreCommentsQueryParams;

  @SpeakeasyMetadata()
  security: GetScoreCommentsSecurity;
}


export class GetScoreCommentsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  flatErrorResponse?: shared.FlatErrorResponse;

  @SpeakeasyMetadata({ elemType: shared.ScoreComment })
  scoreComments?: shared.ScoreComment[];

  @SpeakeasyMetadata()
  statusCode: number;
}
