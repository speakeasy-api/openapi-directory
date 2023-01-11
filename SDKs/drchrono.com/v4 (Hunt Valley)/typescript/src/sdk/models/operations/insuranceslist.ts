import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class InsurancesListQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=cursor" })
  cursor?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=page_size" })
  pageSize?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=payer_type" })
  payerType: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=term" })
  term?: string;
}


export class InsurancesListSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  drchronoOauth2: shared.SchemeDrchronoOauth2;
}


// InsurancesList200ApplicationJson
/** 
 * Paginated Result
**/
export class InsurancesList200ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=data", elemType: shared.Insurance })
  data?: shared.Insurance[];

  @SpeakeasyMetadata({ data: "json, name=next" })
  next?: string;

  @SpeakeasyMetadata({ data: "json, name=previous" })
  previous?: string;
}


export class InsurancesListRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: InsurancesListQueryParams;

  @SpeakeasyMetadata()
  security: InsurancesListSecurity;
}


export class InsurancesListResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  insurancesList200ApplicationJSONObject?: InsurancesList200ApplicationJson;
}
