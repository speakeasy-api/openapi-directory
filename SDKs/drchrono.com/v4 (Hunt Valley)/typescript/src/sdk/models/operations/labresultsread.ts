import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class LabResultsReadPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;
}


export class LabResultsReadQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=doctor" })
  doctor?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=order" })
  order?: number;
}


export class LabResultsReadSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  drchronoOauth2: shared.SchemeDrchronoOauth2;
}


export class LabResultsReadRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: LabResultsReadPathParams;

  @SpeakeasyMetadata()
  queryParams: LabResultsReadQueryParams;

  @SpeakeasyMetadata()
  security: LabResultsReadSecurity;
}


export class LabResultsReadResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  labResult?: shared.LabResult;

  @SpeakeasyMetadata()
  statusCode: number;
}
