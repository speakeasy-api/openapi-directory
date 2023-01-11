import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum PrivateAuthorsSearchOrderEnum {
    PublishedDate = "published_date",
    ModifiedDate = "modified_date",
    Views = "views",
    Shares = "shares",
    Downloads = "downloads",
    Cites = "cites"
}

export enum PrivateAuthorsSearchOrderDirectionEnum {
    Asc = "asc",
    Desc = "desc"
}


export class PrivateAuthorsSearch extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=group_id" })
  groupId?: number;

  @SpeakeasyMetadata({ data: "json, name=institution_id" })
  institutionId?: number;

  @SpeakeasyMetadata({ data: "json, name=is_active" })
  isActive?: boolean;

  @SpeakeasyMetadata({ data: "json, name=is_public" })
  isPublic?: boolean;

  @SpeakeasyMetadata({ data: "json, name=limit" })
  limit?: number;

  @SpeakeasyMetadata({ data: "json, name=offset" })
  offset?: number;

  @SpeakeasyMetadata({ data: "json, name=orcid" })
  orcid?: string;

  @SpeakeasyMetadata({ data: "json, name=order" })
  order?: PrivateAuthorsSearchOrderEnum;

  @SpeakeasyMetadata({ data: "json, name=order_direction" })
  orderDirection?: PrivateAuthorsSearchOrderDirectionEnum;

  @SpeakeasyMetadata({ data: "json, name=page" })
  page?: number;

  @SpeakeasyMetadata({ data: "json, name=page_size" })
  pageSize?: number;

  @SpeakeasyMetadata({ data: "json, name=search_for" })
  searchFor?: string;
}
