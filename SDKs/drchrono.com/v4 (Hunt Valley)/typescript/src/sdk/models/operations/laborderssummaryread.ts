import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class LabOrdersSummaryReadPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;
}


export class LabOrdersSummaryReadQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=doctor" })
  doctor?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=patient" })
  patient?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=since" })
  since?: string;
}


export class LabOrdersSummaryReadSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  drchronoOauth2: shared.SchemeDrchronoOauth2;
}


export class LabOrdersSummaryReadRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: LabOrdersSummaryReadPathParams;

  @SpeakeasyMetadata()
  queryParams: LabOrdersSummaryReadQueryParams;

  @SpeakeasyMetadata()
  security: LabOrdersSummaryReadSecurity;
}


export class LabOrdersSummaryReadResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  labOrder?: shared.LabOrder;

  @SpeakeasyMetadata()
  statusCode: number;
}
