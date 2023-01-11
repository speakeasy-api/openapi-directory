import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";


export enum PrivateProjectsListOrderEnum {
    PublishedDate = "published_date",
    ModifiedDate = "modified_date",
    Views = "views"
}

export enum PrivateProjectsListOrderDirectionEnum {
    Asc = "asc",
    Desc = "desc"
}

export enum PrivateProjectsListStorageEnum {
    Group = "group",
    Individual = "individual"
}


export class PrivateProjectsListQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=limit" })
  limit?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=offset" })
  offset?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=order" })
  order?: PrivateProjectsListOrderEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=order_direction" })
  orderDirection?: PrivateProjectsListOrderDirectionEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=page" })
  page?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=page_size" })
  pageSize?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=roles" })
  roles?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=storage" })
  storage?: PrivateProjectsListStorageEnum;
}


export class PrivateProjectsListSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oAuth2: shared.SchemeOAuth2;
}


export class PrivateProjectsListRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: PrivateProjectsListQueryParams;

  @SpeakeasyMetadata()
  security: PrivateProjectsListSecurity;
}


export class PrivateProjectsListResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  errorMessage?: shared.ErrorMessage;

  @SpeakeasyMetadata({ elemType: shared.ProjectPrivate })
  projectPrivates?: shared.ProjectPrivate[];

  @SpeakeasyMetadata()
  statusCode: number;
}
