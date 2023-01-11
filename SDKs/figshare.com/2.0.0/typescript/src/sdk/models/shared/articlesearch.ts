import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum ArticleSearchOrderEnum {
    PublishedDate = "published_date",
    ModifiedDate = "modified_date",
    Views = "views",
    Shares = "shares",
    Downloads = "downloads",
    Cites = "cites"
}

export enum ArticleSearchOrderDirectionEnum {
    Asc = "asc",
    Desc = "desc"
}


export class ArticleSearch extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=doi" })
  doi?: string;

  @SpeakeasyMetadata({ data: "json, name=group" })
  group?: number;

  @SpeakeasyMetadata({ data: "json, name=handle" })
  handle?: string;

  @SpeakeasyMetadata({ data: "json, name=institution" })
  institution?: number;

  @SpeakeasyMetadata({ data: "json, name=item_type" })
  itemType?: number;

  @SpeakeasyMetadata({ data: "json, name=limit" })
  limit?: number;

  @SpeakeasyMetadata({ data: "json, name=modified_since" })
  modifiedSince?: string;

  @SpeakeasyMetadata({ data: "json, name=offset" })
  offset?: number;

  @SpeakeasyMetadata({ data: "json, name=order" })
  order?: ArticleSearchOrderEnum;

  @SpeakeasyMetadata({ data: "json, name=order_direction" })
  orderDirection?: ArticleSearchOrderDirectionEnum;

  @SpeakeasyMetadata({ data: "json, name=page" })
  page?: number;

  @SpeakeasyMetadata({ data: "json, name=page_size" })
  pageSize?: number;

  @SpeakeasyMetadata({ data: "json, name=published_since" })
  publishedSince?: string;

  @SpeakeasyMetadata({ data: "json, name=resource_doi" })
  resourceDoi?: string;

  @SpeakeasyMetadata({ data: "json, name=search_for" })
  searchFor?: string;
}
