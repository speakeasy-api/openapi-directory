import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetBalancePlatformsIdAccountHoldersPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;
}


export class GetBalancePlatformsIdAccountHoldersQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=limit" })
  limit?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=offset" })
  offset?: number;
}


export class GetBalancePlatformsIdAccountHoldersSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=basic" })
  basicAuth?: shared.SchemeBasicAuth;

  @SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  apiKeyAuth?: shared.SchemeApiKeyAuth;
}


export class GetBalancePlatformsIdAccountHoldersRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetBalancePlatformsIdAccountHoldersPathParams;

  @SpeakeasyMetadata()
  queryParams: GetBalancePlatformsIdAccountHoldersQueryParams;

  @SpeakeasyMetadata()
  security: GetBalancePlatformsIdAccountHoldersSecurity;
}


export class GetBalancePlatformsIdAccountHoldersResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  paginatedAccountHoldersResponse?: any;

  @SpeakeasyMetadata()
  restServiceError?: any;

  @SpeakeasyMetadata()
  statusCode: number;
}
