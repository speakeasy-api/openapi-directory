import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class HarvestAccountPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=accountId" })
  accountId: number;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=marketplaceTechnicalCode" })
  marketplaceTechnicalCode: string;
}


export class HarvestAccountQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=beezUPOrderId" })
  beezUPOrderId?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=marketplaceOrderId" })
  marketplaceOrderId?: string;
}


export class HarvestAccountRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: HarvestAccountPathParams;

  @SpeakeasyMetadata()
  queryParams: HarvestAccountQueryParams;
}


export class HarvestAccountResponse extends SpeakeasyBase {
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
}
