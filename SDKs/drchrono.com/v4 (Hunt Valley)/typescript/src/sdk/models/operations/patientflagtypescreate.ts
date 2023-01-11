import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class PatientFlagTypesCreateQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=doctor" })
  doctor?: number;
}


export class PatientFlagTypesCreateSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  drchronoOauth2: shared.SchemeDrchronoOauth2;
}


export class PatientFlagTypesCreateRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: PatientFlagTypesCreateQueryParams;

  @SpeakeasyMetadata()
  security: PatientFlagTypesCreateSecurity;
}


export class PatientFlagTypesCreateResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  patientFlagType?: shared.PatientFlagType;

  @SpeakeasyMetadata()
  statusCode: number;
}
