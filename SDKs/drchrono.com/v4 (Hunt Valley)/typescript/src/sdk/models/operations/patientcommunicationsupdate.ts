import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class PatientCommunicationsUpdatePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;
}


export class PatientCommunicationsUpdateQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=doctor" })
  doctor?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=patient" })
  patient?: number;
}


export class PatientCommunicationsUpdateSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  drchronoOauth2: shared.SchemeDrchronoOauth2;
}


export class PatientCommunicationsUpdateRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: PatientCommunicationsUpdatePathParams;

  @SpeakeasyMetadata()
  queryParams: PatientCommunicationsUpdateQueryParams;

  @SpeakeasyMetadata()
  security: PatientCommunicationsUpdateSecurity;
}


export class PatientCommunicationsUpdateResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
