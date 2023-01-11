import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetPublicationsPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=accountId" })
  accountId: number;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=marketplaceTechnicalCode" })
  marketplaceTechnicalCode: string;
}

export enum GetPublicationsPublicationTypesEnum {
    PublishProducts = "PublishProducts",
    PublishOffers = "PublishOffers",
    Unpublish = "Unpublish"
}


export class GetPublicationsQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=channelCatalogId" })
  channelCatalogId?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=count" })
  count?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=false;name=publicationTypes" })
  publicationTypes: GetPublicationsPublicationTypesEnum[];
}


export class GetPublicationsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetPublicationsPathParams;

  @SpeakeasyMetadata()
  queryParams: GetPublicationsQueryParams;
}


export class GetPublicationsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  beezUPCommonErrorResponseMessage?: shared.BeezUpCommonErrorResponseMessage;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  headers: Record<string, string[]>;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  accountPublications?: shared.AccountPublications;
}
