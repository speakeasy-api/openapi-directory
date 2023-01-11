import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";


export enum ListCollectionsDirectionEnum {
    Asc = "asc",
    Desc = "desc"
}

export enum ListCollectionsSortEnum {
    CreationDate = "creationDate",
    Title = "title"
}


export class ListCollectionsQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=direction" })
  direction?: ListCollectionsDirectionEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=limit" })
  limit?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=next" })
  next?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=parent" })
  parent?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=previous" })
  previous?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=sort" })
  sort?: ListCollectionsSortEnum;
}


export class ListCollectionsSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oAuth2: shared.SchemeOAuth2;
}


export class ListCollectionsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: ListCollectionsQueryParams;

  @SpeakeasyMetadata()
  security: ListCollectionsSecurity;
}


export class ListCollectionsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ elemType: shared.Collection })
  collections?: shared.Collection[];

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  flatErrorResponse?: shared.FlatErrorResponse;

  @SpeakeasyMetadata()
  statusCode: number;
}
