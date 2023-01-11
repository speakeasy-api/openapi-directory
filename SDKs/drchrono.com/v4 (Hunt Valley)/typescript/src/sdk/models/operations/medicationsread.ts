import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class MedicationsReadPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;
}


export class MedicationsReadQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=doctor" })
  doctor?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=patient" })
  patient?: number;
}


export class MedicationsReadSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  drchronoOauth2: shared.SchemeDrchronoOauth2;
}


export class MedicationsReadRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: MedicationsReadPathParams;

  @SpeakeasyMetadata()
  queryParams: MedicationsReadQueryParams;

  @SpeakeasyMetadata()
  security: MedicationsReadSecurity;
}


export class MedicationsReadResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  patientDrug?: shared.PatientDrug;

  @SpeakeasyMetadata()
  statusCode: number;
}
