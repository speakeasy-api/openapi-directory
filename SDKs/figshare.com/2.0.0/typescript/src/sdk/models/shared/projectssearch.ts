import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum ProjectsSearchOrderEnum {
    PublishedDate = "published_date",
    ModifiedDate = "modified_date",
    Views = "views"
}

export enum ProjectsSearchOrderDirectionEnum {
    Asc = "asc",
    Desc = "desc"
}


export class ProjectsSearch extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=group" })
  group?: number;

  @SpeakeasyMetadata({ data: "json, name=institution" })
  institution?: number;

  @SpeakeasyMetadata({ data: "json, name=limit" })
  limit?: number;

  @SpeakeasyMetadata({ data: "json, name=modified_since" })
  modifiedSince?: string;

  @SpeakeasyMetadata({ data: "json, name=offset" })
  offset?: number;

  @SpeakeasyMetadata({ data: "json, name=order" })
  order?: ProjectsSearchOrderEnum;

  @SpeakeasyMetadata({ data: "json, name=order_direction" })
  orderDirection?: ProjectsSearchOrderDirectionEnum;

  @SpeakeasyMetadata({ data: "json, name=page" })
  page?: number;

  @SpeakeasyMetadata({ data: "json, name=page_size" })
  pageSize?: number;

  @SpeakeasyMetadata({ data: "json, name=published_since" })
  publishedSince?: string;

  @SpeakeasyMetadata({ data: "json, name=search_for" })
  searchFor?: string;
}
