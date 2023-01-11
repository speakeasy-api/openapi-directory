import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class LabTestsCreateQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=doctor" })
  doctor?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=order" })
  order?: number;
}


export class LabTestsCreateSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  drchronoOauth2: shared.SchemeDrchronoOauth2;
}


export class LabTestsCreateRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: LabTestsCreateQueryParams;

  @SpeakeasyMetadata()
  security: LabTestsCreateSecurity;
}


export class LabTestsCreateResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  labTest?: shared.LabTest;

  @SpeakeasyMetadata()
  statusCode: number;
}
