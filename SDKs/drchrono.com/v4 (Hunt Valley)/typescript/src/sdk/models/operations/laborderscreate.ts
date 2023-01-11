import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class LabOrdersCreateQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=doctor" })
  doctor?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=since" })
  since?: string;
}


export class LabOrdersCreateSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  drchronoOauth2: shared.SchemeDrchronoOauth2;
}


export class LabOrdersCreateRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: LabOrdersCreateQueryParams;

  @SpeakeasyMetadata()
  security: LabOrdersCreateSecurity;
}


export class LabOrdersCreateResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  labOrder?: shared.LabOrder;

  @SpeakeasyMetadata()
  statusCode: number;
}
