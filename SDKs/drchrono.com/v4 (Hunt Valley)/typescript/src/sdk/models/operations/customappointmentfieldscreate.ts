import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class CustomAppointmentFieldsCreateQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=doctor" })
  doctor?: number;
}


export class CustomAppointmentFieldsCreateSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  drchronoOauth2: shared.SchemeDrchronoOauth2;
}


export class CustomAppointmentFieldsCreateRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: CustomAppointmentFieldsCreateQueryParams;

  @SpeakeasyMetadata()
  security: CustomAppointmentFieldsCreateSecurity;
}


export class CustomAppointmentFieldsCreateResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  customAppointmentFieldType?: shared.CustomAppointmentFieldType;

  @SpeakeasyMetadata()
  statusCode: number;
}
