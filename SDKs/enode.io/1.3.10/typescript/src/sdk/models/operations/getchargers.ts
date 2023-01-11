import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";


export enum GetChargersFieldEnum {
    ChargeState = "chargeState",
    Location = "location"
}


export class GetChargersQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=field[]" })
  field?: GetChargersFieldEnum[];
}


export class GetChargersSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  userAccessToken?: shared.SchemeUserAccessToken;

  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  userAccessToken1?: shared.SchemeUserAccessToken;

  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  userAccessToken2?: shared.SchemeUserAccessToken;
}


export class GetChargersRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: GetChargersQueryParams;

  @SpeakeasyMetadata()
  security: GetChargersSecurity;
}


export class GetChargersResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata({ elemType: shared.Onechargers1Percent7BchargerIdPercent7DGetResponses200ContentApplication1jsonSchema })
  onechargers1Percent7BchargerIdPercent7DGetResponses200ContentApplication1jsonSchemas?: shared.Onechargers1Percent7BchargerIdPercent7DGetResponses200ContentApplication1jsonSchema[];
}
