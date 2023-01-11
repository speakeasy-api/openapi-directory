import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class CustomAppointmentFieldsUpdatePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;
}


export class CustomAppointmentFieldsUpdateQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=doctor" })
  doctor?: number;
}


export class CustomAppointmentFieldsUpdateSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  drchronoOauth2: shared.SchemeDrchronoOauth2;
}


export class CustomAppointmentFieldsUpdateRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: CustomAppointmentFieldsUpdatePathParams;

  @SpeakeasyMetadata()
  queryParams: CustomAppointmentFieldsUpdateQueryParams;

  @SpeakeasyMetadata()
  security: CustomAppointmentFieldsUpdateSecurity;
}


export class CustomAppointmentFieldsUpdateResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
