import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class AllergiesCreateQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=doctor" })
  doctor?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=patient" })
  patient?: number;
}


export class AllergiesCreateSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  drchronoOauth2: shared.SchemeDrchronoOauth2;
}


export class AllergiesCreateRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: AllergiesCreateQueryParams;

  @SpeakeasyMetadata()
  security: AllergiesCreateSecurity;
}


export class AllergiesCreateResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  patientAllergy?: shared.PatientAllergy;

  @SpeakeasyMetadata()
  statusCode: number;
}
