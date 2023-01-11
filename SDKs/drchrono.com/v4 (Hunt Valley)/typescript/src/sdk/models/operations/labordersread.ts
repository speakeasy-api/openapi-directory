import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class LabOrdersReadPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;
}


export class LabOrdersReadQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=doctor" })
  doctor?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=since" })
  since?: string;
}


export class LabOrdersReadSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  drchronoOauth2: shared.SchemeDrchronoOauth2;
}


export class LabOrdersReadRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: LabOrdersReadPathParams;

  @SpeakeasyMetadata()
  queryParams: LabOrdersReadQueryParams;

  @SpeakeasyMetadata()
  security: LabOrdersReadSecurity;
}


export class LabOrdersReadResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  labOrder?: shared.LabOrder;

  @SpeakeasyMetadata()
  statusCode: number;
}
