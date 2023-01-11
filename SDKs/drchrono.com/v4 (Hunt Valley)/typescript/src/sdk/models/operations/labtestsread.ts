import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class LabTestsReadPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;
}


export class LabTestsReadQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=doctor" })
  doctor?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=order" })
  order?: number;
}


export class LabTestsReadSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  drchronoOauth2: shared.SchemeDrchronoOauth2;
}


export class LabTestsReadRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: LabTestsReadPathParams;

  @SpeakeasyMetadata()
  queryParams: LabTestsReadQueryParams;

  @SpeakeasyMetadata()
  security: LabTestsReadSecurity;
}


export class LabTestsReadResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  labTest?: shared.LabTest;

  @SpeakeasyMetadata()
  statusCode: number;
}
