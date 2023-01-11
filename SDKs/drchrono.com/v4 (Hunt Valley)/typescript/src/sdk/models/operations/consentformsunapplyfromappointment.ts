import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class ConsentFormsUnapplyFromAppointmentPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;
}


export class ConsentFormsUnapplyFromAppointmentQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=doctor" })
  doctor?: number;
}


export class ConsentFormsUnapplyFromAppointmentSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  drchronoOauth2: shared.SchemeDrchronoOauth2;
}


export class ConsentFormsUnapplyFromAppointmentRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: ConsentFormsUnapplyFromAppointmentPathParams;

  @SpeakeasyMetadata()
  queryParams: ConsentFormsUnapplyFromAppointmentQueryParams;

  @SpeakeasyMetadata()
  security: ConsentFormsUnapplyFromAppointmentSecurity;
}


export class ConsentFormsUnapplyFromAppointmentResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
