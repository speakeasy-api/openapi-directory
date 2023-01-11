import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetMarketplaceAccountsSynchronizationV3QueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=false;name=storeIds" })
  storeIds?: string[];
}


export class GetMarketplaceAccountsSynchronizationV3Headers extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=If-None-Match" })
  ifNoneMatch?: string;
}


export class GetMarketplaceAccountsSynchronizationV3Request extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: GetMarketplaceAccountsSynchronizationV3QueryParams;

  @SpeakeasyMetadata()
  headers: GetMarketplaceAccountsSynchronizationV3Headers;
}


export class GetMarketplaceAccountsSynchronizationV3Response extends SpeakeasyBase {
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

  @SpeakeasyMetadata()
  errorResponseMessage?: shared.ErrorResponseMessage;
}
