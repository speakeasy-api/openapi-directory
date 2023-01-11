import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";


export enum PrivateCollectionsListOrderEnum {
    PublishedDate = "published_date",
    ModifiedDate = "modified_date",
    Views = "views",
    Shares = "shares",
    Cites = "cites"
}

export enum PrivateCollectionsListOrderDirectionEnum {
    Asc = "asc",
    Desc = "desc"
}


export class PrivateCollectionsListQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=limit" })
  limit?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=offset" })
  offset?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=order" })
  order?: PrivateCollectionsListOrderEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=order_direction" })
  orderDirection?: PrivateCollectionsListOrderDirectionEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=page" })
  page?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=page_size" })
  pageSize?: number;
}


export class PrivateCollectionsListSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oAuth2: shared.SchemeOAuth2;
}


export class PrivateCollectionsListRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: PrivateCollectionsListQueryParams;

  @SpeakeasyMetadata()
  security: PrivateCollectionsListSecurity;
}


export class PrivateCollectionsListResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ elemType: shared.Collection })
  collections?: shared.Collection[];

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  errorMessage?: shared.ErrorMessage;

  @SpeakeasyMetadata()
  statusCode: number;
}
