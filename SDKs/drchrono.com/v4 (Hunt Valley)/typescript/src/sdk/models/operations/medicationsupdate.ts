import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class MedicationsUpdatePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;
}


export class MedicationsUpdateQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=doctor" })
  doctor?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=patient" })
  patient?: number;
}


export class MedicationsUpdateSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  drchronoOauth2: shared.SchemeDrchronoOauth2;
}


export class MedicationsUpdateRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: MedicationsUpdatePathParams;

  @SpeakeasyMetadata()
  queryParams: MedicationsUpdateQueryParams;

  @SpeakeasyMetadata()
  security: MedicationsUpdateSecurity;
}


export class MedicationsUpdateResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
