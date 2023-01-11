import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class DoctorsReadPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;
}


export class DoctorsReadQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=doctor" })
  doctor?: number;
}


export class DoctorsReadSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  drchronoOauth2: shared.SchemeDrchronoOauth2;
}


export class DoctorsReadRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: DoctorsReadPathParams;

  @SpeakeasyMetadata()
  queryParams: DoctorsReadQueryParams;

  @SpeakeasyMetadata()
  security: DoctorsReadSecurity;
}


export class DoctorsReadResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  doctor?: shared.Doctor;

  @SpeakeasyMetadata()
  statusCode: number;
}
