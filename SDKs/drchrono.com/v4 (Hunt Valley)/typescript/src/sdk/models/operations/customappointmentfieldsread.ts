import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class CustomAppointmentFieldsReadPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;
}


export class CustomAppointmentFieldsReadQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=doctor" })
  doctor?: number;
}


export class CustomAppointmentFieldsReadSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  drchronoOauth2: shared.SchemeDrchronoOauth2;
}


export class CustomAppointmentFieldsReadRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: CustomAppointmentFieldsReadPathParams;

  @SpeakeasyMetadata()
  queryParams: CustomAppointmentFieldsReadQueryParams;

  @SpeakeasyMetadata()
  security: CustomAppointmentFieldsReadSecurity;
}


export class CustomAppointmentFieldsReadResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  customAppointmentFieldType?: shared.CustomAppointmentFieldType;

  @SpeakeasyMetadata()
  statusCode: number;
}
