import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class EligibilityChecksListQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=appointment" })
  appointment?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=appointment_date" })
  appointmentDate?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=appointment_date_range" })
  appointmentDateRange?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=cursor" })
  cursor?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=doctor" })
  doctor?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=page_size" })
  pageSize?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=patient" })
  patient?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=query_date" })
  queryDate?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=query_date_range" })
  queryDateRange?: string;
}


export class EligibilityChecksListSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  drchronoOauth2: shared.SchemeDrchronoOauth2;
}


// EligibilityChecksList200ApplicationJson
/** 
 * Paginated Result
**/
export class EligibilityChecksList200ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=data", elemType: shared.Coverage })
  data?: shared.Coverage[];

  @SpeakeasyMetadata({ data: "json, name=next" })
  next?: string;

  @SpeakeasyMetadata({ data: "json, name=previous" })
  previous?: string;
}


export class EligibilityChecksListRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: EligibilityChecksListQueryParams;

  @SpeakeasyMetadata()
  security: EligibilityChecksListSecurity;
}


export class EligibilityChecksListResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  eligibilityChecksList200ApplicationJSONObject?: EligibilityChecksList200ApplicationJson;
}
