import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class PatientFlagTypesUpdatePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;
}


export class PatientFlagTypesUpdateQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=doctor" })
  doctor?: number;
}


export class PatientFlagTypesUpdateSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  drchronoOauth2: shared.SchemeDrchronoOauth2;
}


export class PatientFlagTypesUpdateRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: PatientFlagTypesUpdatePathParams;

  @SpeakeasyMetadata()
  queryParams: PatientFlagTypesUpdateQueryParams;

  @SpeakeasyMetadata()
  security: PatientFlagTypesUpdateSecurity;
}


export class PatientFlagTypesUpdateResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
