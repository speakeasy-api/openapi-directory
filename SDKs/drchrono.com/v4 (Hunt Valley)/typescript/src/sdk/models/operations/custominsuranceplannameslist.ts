import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class CustomInsurancePlanNamesListQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=cursor" })
  cursor?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=doctor" })
  doctor?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=page_size" })
  pageSize?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=since" })
  since?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=user" })
  user?: number;
}


export class CustomInsurancePlanNamesListSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  drchronoOauth2: shared.SchemeDrchronoOauth2;
}


// CustomInsurancePlanNamesList200ApplicationJson
/** 
 * Paginated Result
**/
export class CustomInsurancePlanNamesList200ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=data", elemType: shared.CustomInsurancePlanName })
  data?: shared.CustomInsurancePlanName[];

  @SpeakeasyMetadata({ data: "json, name=next" })
  next?: string;

  @SpeakeasyMetadata({ data: "json, name=previous" })
  previous?: string;
}


export class CustomInsurancePlanNamesListRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: CustomInsurancePlanNamesListQueryParams;

  @SpeakeasyMetadata()
  security: CustomInsurancePlanNamesListSecurity;
}


export class CustomInsurancePlanNamesListResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  customInsurancePlanNamesList200ApplicationJSONObject?: CustomInsurancePlanNamesList200ApplicationJson;
}
