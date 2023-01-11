import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class PatientFlagTypesReadPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;
}


export class PatientFlagTypesReadQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=doctor" })
  doctor?: number;
}


export class PatientFlagTypesReadSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  drchronoOauth2: shared.SchemeDrchronoOauth2;
}


export class PatientFlagTypesReadRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: PatientFlagTypesReadPathParams;

  @SpeakeasyMetadata()
  queryParams: PatientFlagTypesReadQueryParams;

  @SpeakeasyMetadata()
  security: PatientFlagTypesReadSecurity;
}


export class PatientFlagTypesReadResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  patientFlagType?: shared.PatientFlagType;

  @SpeakeasyMetadata()
  statusCode: number;
}
