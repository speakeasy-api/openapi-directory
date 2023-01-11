import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetMarketplaceAccountsSynchronizationQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=storeId" })
  storeId?: string;
}


export class GetMarketplaceAccountsSynchronizationHeaders extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=If-None-Match" })
  ifNoneMatch?: string;
}


export class GetMarketplaceAccountsSynchronizationRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: GetMarketplaceAccountsSynchronizationQueryParams;

  @SpeakeasyMetadata()
  headers: GetMarketplaceAccountsSynchronizationHeaders;
}


export class GetMarketplaceAccountsSynchronizationResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  beezUPCommonErrorResponseMessage?: shared.BeezUpCommonErrorResponseMessage;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  headers: Record<string, string[]>;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  accountSynchronizationList?: shared.AccountSynchronizationList;
}
