import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetCharginglocationsCharginglocationidPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=chargingLocationId" })
  chargingLocationId: string;
}


export class GetCharginglocationsCharginglocationidSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  userAccessToken?: shared.SchemeUserAccessToken;

  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  userAccessToken1?: shared.SchemeUserAccessToken;
}


export class GetCharginglocationsCharginglocationidRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetCharginglocationsCharginglocationidPathParams;

  @SpeakeasyMetadata()
  security: GetCharginglocationsCharginglocationidSecurity;
}


export class GetCharginglocationsCharginglocationidResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  onechargingLocationsPostRequestBodyContentApplication1jsonSchema?: shared.OnechargingLocationsPostRequestBodyContentApplication1jsonSchema;
}
