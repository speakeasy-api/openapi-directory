import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetOrderManagementReadyMarketplaceBusinessCodeQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=false;name=storeIds" })
  storeIds?: string[];
}


export class GetOrderManagementReadyMarketplaceBusinessCodeHeaders extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=Accept-Language" })
  acceptLanguage?: string[];
}


export class GetOrderManagementReadyMarketplaceBusinessCodeRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: GetOrderManagementReadyMarketplaceBusinessCodeQueryParams;

  @SpeakeasyMetadata()
  headers: GetOrderManagementReadyMarketplaceBusinessCodeHeaders;
}


export class GetOrderManagementReadyMarketplaceBusinessCodeResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  beezUPCommonErrorResponseMessage?: shared.BeezUpCommonErrorResponseMessage;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  headers: Record<string, string[]>;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  errorResponseMessage?: shared.ErrorResponseMessage;

  @SpeakeasyMetadata({ elemType: shared.ListOfValueItem })
  oMReadyMarketplaceBusinessCodeResponse?: shared.ListOfValueItem[];
}
