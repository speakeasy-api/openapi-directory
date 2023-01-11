import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class NetworkQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" })
  alt: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=lat" })
  lat: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=lon" })
  lon: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=nam" })
  nam: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=net" })
  net: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=rxg" })
  rxg?: number;
}


export class NetworkSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  apiKeyAuth: shared.SchemeApiKeyAuth;
}


export class NetworkRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: NetworkQueryParams;

  @SpeakeasyMetadata()
  security: NetworkSecurity;
}


export class NetworkResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
