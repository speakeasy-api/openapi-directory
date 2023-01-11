import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";


export enum CollectionsListOrderEnum {
    PublishedDate = "published_date",
    ModifiedDate = "modified_date",
    Views = "views",
    Shares = "shares",
    Cites = "cites"
}

export enum CollectionsListOrderDirectionEnum {
    Asc = "asc",
    Desc = "desc"
}


export class CollectionsListQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=doi" })
  doi?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=group" })
  group?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=handle" })
  handle?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=institution" })
  institution?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=limit" })
  limit?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=modified_since" })
  modifiedSince?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=offset" })
  offset?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=order" })
  order?: CollectionsListOrderEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=order_direction" })
  orderDirection?: CollectionsListOrderDirectionEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=page" })
  page?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=page_size" })
  pageSize?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=published_since" })
  publishedSince?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=resource_doi" })
  resourceDoi?: string;
}


export class CollectionsListRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: CollectionsListQueryParams;
}


export class CollectionsListResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ elemType: shared.Collection })
  collections?: shared.Collection[];

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
