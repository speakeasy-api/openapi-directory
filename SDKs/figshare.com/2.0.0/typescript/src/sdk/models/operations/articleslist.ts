import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";


export enum ArticlesListOrderEnum {
    PublishedDate = "published_date",
    ModifiedDate = "modified_date",
    Views = "views",
    Shares = "shares",
    Downloads = "downloads",
    Cites = "cites"
}

export enum ArticlesListOrderDirectionEnum {
    Asc = "asc",
    Desc = "desc"
}


export class ArticlesListQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=doi" })
  doi?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=group" })
  group?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=handle" })
  handle?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=institution" })
  institution?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=item_type" })
  itemType?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=limit" })
  limit?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=modified_since" })
  modifiedSince?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=offset" })
  offset?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=order" })
  order?: ArticlesListOrderEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=order_direction" })
  orderDirection?: ArticlesListOrderDirectionEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=page" })
  page?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=page_size" })
  pageSize?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=published_since" })
  publishedSince?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=resource_doi" })
  resourceDoi?: string;
}


export class ArticlesListRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: ArticlesListQueryParams;
}


export class ArticlesListResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ elemType: shared.Article })
  articles?: shared.Article[];

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
