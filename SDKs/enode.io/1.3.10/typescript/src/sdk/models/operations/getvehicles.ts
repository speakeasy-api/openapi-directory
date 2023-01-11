import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetVehiclesQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=field[]" })
  field?: any[];
}


export class GetVehiclesSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  userAccessToken?: shared.SchemeUserAccessToken;

  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  userAccessToken1?: shared.SchemeUserAccessToken;

  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  userAccessToken2?: shared.SchemeUserAccessToken;

  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  userAccessToken3?: shared.SchemeUserAccessToken;

  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  userAccessToken4?: shared.SchemeUserAccessToken;

  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  userAccessToken5?: shared.SchemeUserAccessToken;
}


export class GetVehiclesRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: GetVehiclesQueryParams;

  @SpeakeasyMetadata()
  security: GetVehiclesSecurity;
}


export class GetVehiclesResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata({ elemType: shared.Onevehicles1Percent7BvehicleIdPercent7DGetResponses200ContentApplication1jsonSchema })
  onevehicles1Percent7BvehicleIdPercent7DGetResponses200ContentApplication1jsonSchemas?: shared.Onevehicles1Percent7BvehicleIdPercent7DGetResponses200ContentApplication1jsonSchema[];
}
