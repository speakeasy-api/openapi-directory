import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class EligibilityChecksReadPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;
}


export class EligibilityChecksReadQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=appointment" })
  appointment?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=appointment_date" })
  appointmentDate?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=appointment_date_range" })
  appointmentDateRange?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=doctor" })
  doctor?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=patient" })
  patient?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=query_date" })
  queryDate?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=query_date_range" })
  queryDateRange?: string;
}


export class EligibilityChecksReadSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  drchronoOauth2: shared.SchemeDrchronoOauth2;
}


export class EligibilityChecksReadRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: EligibilityChecksReadPathParams;

  @SpeakeasyMetadata()
  queryParams: EligibilityChecksReadQueryParams;

  @SpeakeasyMetadata()
  security: EligibilityChecksReadSecurity;
}


export class EligibilityChecksReadResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  coverage?: shared.Coverage;

  @SpeakeasyMetadata()
  statusCode: number;
}
