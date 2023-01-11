import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class ListCollectionScoresPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=collection" })
  collection: string;
}

export enum ListCollectionScoresDirectionEnum {
    Asc = "asc",
    Desc = "desc"
}

export enum ListCollectionScoresSortEnum {
    CreationDate = "creationDate",
    ModificationDate = "modificationDate",
    Title = "title"
}


export class ListCollectionScoresQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=direction" })
  direction?: ListCollectionScoresDirectionEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=limit" })
  limit?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=next" })
  next?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=previous" })
  previous?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=sharingKey" })
  sharingKey?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=sort" })
  sort?: ListCollectionScoresSortEnum;
}


export class ListCollectionScoresSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oAuth2: shared.SchemeOAuth2;
}


export class ListCollectionScoresRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: ListCollectionScoresPathParams;

  @SpeakeasyMetadata()
  queryParams: ListCollectionScoresQueryParams;

  @SpeakeasyMetadata()
  security: ListCollectionScoresSecurity;
}


export class ListCollectionScoresResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  flatErrorResponse?: shared.FlatErrorResponse;

  @SpeakeasyMetadata({ elemType: shared.ScoreDetails })
  scoreDetails?: shared.ScoreDetails[];

  @SpeakeasyMetadata()
  statusCode: number;
}
