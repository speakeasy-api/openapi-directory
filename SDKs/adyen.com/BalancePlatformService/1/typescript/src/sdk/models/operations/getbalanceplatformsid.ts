import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetBalancePlatformsIdPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;
}


export class GetBalancePlatformsIdSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=basic" })
  basicAuth?: shared.SchemeBasicAuth;

  @SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  apiKeyAuth?: shared.SchemeApiKeyAuth;
}


export class GetBalancePlatformsIdRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetBalancePlatformsIdPathParams;

  @SpeakeasyMetadata()
  security: GetBalancePlatformsIdSecurity;
}


export class GetBalancePlatformsIdResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  balancePlatform?: any;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  restServiceError?: any;

  @SpeakeasyMetadata()
  statusCode: number;
}
