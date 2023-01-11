import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class DeleteCharginglocationsCharginglocationidPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=chargingLocationId" })
  chargingLocationId: string;
}


export class DeleteCharginglocationsCharginglocationidSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  userAccessToken?: shared.SchemeUserAccessToken;

  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  userAccessToken1?: shared.SchemeUserAccessToken;
}


export class DeleteCharginglocationsCharginglocationidRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: DeleteCharginglocationsCharginglocationidPathParams;

  @SpeakeasyMetadata()
  security: DeleteCharginglocationsCharginglocationidSecurity;
}


export class DeleteCharginglocationsCharginglocationidResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
