import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";


export enum PrivateInstitutionArticlesOrderEnum {
    PublishedDate = "published_date",
    ModifiedDate = "modified_date",
    Views = "views",
    Shares = "shares",
    Downloads = "downloads",
    Cites = "cites"
}

export enum PrivateInstitutionArticlesOrderDirectionEnum {
    Asc = "asc",
    Desc = "desc"
}


export class PrivateInstitutionArticlesQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=item_type" })
  itemType?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=limit" })
  limit?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=modified_since" })
  modifiedSince?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=offset" })
  offset?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=order" })
  order?: PrivateInstitutionArticlesOrderEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=order_direction" })
  orderDirection?: PrivateInstitutionArticlesOrderDirectionEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=page" })
  page?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=page_size" })
  pageSize?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=published_since" })
  publishedSince?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=resource_doi" })
  resourceDoi?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=status" })
  status?: number;
}


export class PrivateInstitutionArticlesSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oAuth2: shared.SchemeOAuth2;
}


export class PrivateInstitutionArticlesRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: PrivateInstitutionArticlesQueryParams;

  @SpeakeasyMetadata()
  security: PrivateInstitutionArticlesSecurity;
}


export class PrivateInstitutionArticlesResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ elemType: shared.Article })
  articles?: shared.Article[];

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  errorMessage?: shared.ErrorMessage;

  @SpeakeasyMetadata()
  statusCode: number;
}
