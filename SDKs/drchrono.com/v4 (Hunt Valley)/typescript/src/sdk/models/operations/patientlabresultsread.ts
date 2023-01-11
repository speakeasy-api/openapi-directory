import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class PatientLabResultsReadPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;
}


export class PatientLabResultsReadQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=doctor" })
  doctor?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=ordering_doctor" })
  orderingDoctor?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=patient" })
  patient?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=since" })
  since?: string;
}


export class PatientLabResultsReadSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  drchronoOauth2: shared.SchemeDrchronoOauth2;
}


export class PatientLabResultsReadRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: PatientLabResultsReadPathParams;

  @SpeakeasyMetadata()
  queryParams: PatientLabResultsReadQueryParams;

  @SpeakeasyMetadata()
  security: PatientLabResultsReadSecurity;
}


export class PatientLabResultsReadResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  patientLabResultSet?: shared.PatientLabResultSet;

  @SpeakeasyMetadata()
  statusCode: number;
}
