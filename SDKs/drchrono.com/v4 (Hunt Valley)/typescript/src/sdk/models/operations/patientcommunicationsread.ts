import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class PatientCommunicationsReadPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;
}


export class PatientCommunicationsReadQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=doctor" })
  doctor?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=patient" })
  patient?: number;
}


export class PatientCommunicationsReadSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  drchronoOauth2: shared.SchemeDrchronoOauth2;
}


export class PatientCommunicationsReadRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: PatientCommunicationsReadPathParams;

  @SpeakeasyMetadata()
  queryParams: PatientCommunicationsReadQueryParams;

  @SpeakeasyMetadata()
  security: PatientCommunicationsReadSecurity;
}


export class PatientCommunicationsReadResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  patientCommunication?: shared.PatientCommunication;

  @SpeakeasyMetadata()
  statusCode: number;
}
