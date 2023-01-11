import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class AllergiesReadPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;
}


export class AllergiesReadQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=doctor" })
  doctor?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=patient" })
  patient?: number;
}


export class AllergiesReadSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  drchronoOauth2: shared.SchemeDrchronoOauth2;
}


export class AllergiesReadRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: AllergiesReadPathParams;

  @SpeakeasyMetadata()
  queryParams: AllergiesReadQueryParams;

  @SpeakeasyMetadata()
  security: AllergiesReadSecurity;
}


export class AllergiesReadResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  patientAllergy?: shared.PatientAllergy;

  @SpeakeasyMetadata()
  statusCode: number;
}
