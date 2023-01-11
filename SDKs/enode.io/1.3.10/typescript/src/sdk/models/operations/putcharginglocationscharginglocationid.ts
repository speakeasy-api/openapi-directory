import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class PutCharginglocationsCharginglocationidPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=chargingLocationId" })
  chargingLocationId: string;
}


export class PutCharginglocationsCharginglocationidSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  userAccessToken?: shared.SchemeUserAccessToken;

  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  userAccessToken1?: shared.SchemeUserAccessToken;
}


export class PutCharginglocationsCharginglocationidRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: PutCharginglocationsCharginglocationidPathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request?: shared.OnechargingLocationsPostRequestBodyContentApplication1jsonSchemaInput;

  @SpeakeasyMetadata()
  security: PutCharginglocationsCharginglocationidSecurity;
}


export class PutCharginglocationsCharginglocationidResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  onechargingLocationsPostRequestBodyContentApplication1jsonSchema?: shared.OnechargingLocationsPostRequestBodyContentApplication1jsonSchema;
}
