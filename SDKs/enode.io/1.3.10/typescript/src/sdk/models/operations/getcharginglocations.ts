import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetCharginglocationsSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  userAccessToken?: shared.SchemeUserAccessToken;

  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  userAccessToken1?: shared.SchemeUserAccessToken;
}


export class GetCharginglocationsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  security: GetCharginglocationsSecurity;
}


export class GetCharginglocationsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata({ elemType: shared.OnechargingLocationsPostRequestBodyContentApplication1jsonSchema })
  onechargingLocationsPostRequestBodyContentApplication1jsonSchemas?: shared.OnechargingLocationsPostRequestBodyContentApplication1jsonSchema[];
}
