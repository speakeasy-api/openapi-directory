import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetChargerPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=chargerId" })
  chargerId: string;
}


export class GetChargerQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=field[]" })
  field?: shared.OnechargersGetParameters0Enum[];
}


export class GetChargerSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  userAccessToken?: shared.SchemeUserAccessToken;

  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  userAccessToken1?: shared.SchemeUserAccessToken;

  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  userAccessToken2?: shared.SchemeUserAccessToken;
}


export class GetCharger200ApplicationJsonChargeState extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=chargeRate" })
  chargeRate?: number;

  @SpeakeasyMetadata({ data: "json, name=isCharging" })
  isCharging?: boolean;

  @SpeakeasyMetadata({ data: "json, name=isPluggedIn" })
  isPluggedIn?: boolean;
}


// GetCharger200ApplicationJsonInformation
/** 
 * Descriptive information about the Charger
**/
export class GetCharger200ApplicationJsonInformation extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=brand" })
  brand?: string;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=model" })
  model?: string;

  @SpeakeasyMetadata({ data: "json, name=year" })
  year?: number;
}


export class GetCharger200ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=chargeState" })
  chargeState?: GetCharger200ApplicationJsonChargeState;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=information" })
  information?: GetCharger200ApplicationJsonInformation;

  @SpeakeasyMetadata({ data: "json, name=isReachable" })
  isReachable?: boolean;

  @SpeakeasyMetadata({ data: "json, name=lastSeen" })
  lastSeen?: Date;
}


export class GetChargerRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetChargerPathParams;

  @SpeakeasyMetadata()
  queryParams: GetChargerQueryParams;

  @SpeakeasyMetadata()
  security: GetChargerSecurity;
}


export class GetChargerResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  getCharger200ApplicationJSONObject?: GetCharger200ApplicationJson;
}
