import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class MedicationsAppendToPharmacyNotePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;
}


export class MedicationsAppendToPharmacyNoteQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=doctor" })
  doctor?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=patient" })
  patient?: number;
}


export class MedicationsAppendToPharmacyNoteSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  drchronoOauth2: shared.SchemeDrchronoOauth2;
}


export class MedicationsAppendToPharmacyNoteRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: MedicationsAppendToPharmacyNotePathParams;

  @SpeakeasyMetadata()
  queryParams: MedicationsAppendToPharmacyNoteQueryParams;

  @SpeakeasyMetadata()
  security: MedicationsAppendToPharmacyNoteSecurity;
}


export class MedicationsAppendToPharmacyNoteResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
