import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class PatientPhysicalExamsUpdatePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;
}


export class PatientPhysicalExamsUpdateQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=doctor" })
  doctor?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=patient" })
  patient?: number;
}


export class PatientPhysicalExamsUpdateSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  drchronoOauth2: shared.SchemeDrchronoOauth2;
}


export class PatientPhysicalExamsUpdateRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: PatientPhysicalExamsUpdatePathParams;

  @SpeakeasyMetadata()
  queryParams: PatientPhysicalExamsUpdateQueryParams;

  @SpeakeasyMetadata()
  security: PatientPhysicalExamsUpdateSecurity;
}


export class PatientPhysicalExamsUpdateResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
