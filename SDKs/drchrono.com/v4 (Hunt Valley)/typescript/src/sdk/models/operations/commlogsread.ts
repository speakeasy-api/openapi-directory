import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class CommLogsReadPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;
}


export class CommLogsReadQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=doctor" })
  doctor?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=patient" })
  patient?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=since" })
  since?: string;
}


export class CommLogsReadSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  drchronoOauth2: shared.SchemeDrchronoOauth2;
}


export class CommLogsReadRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: CommLogsReadPathParams;

  @SpeakeasyMetadata()
  queryParams: CommLogsReadQueryParams;

  @SpeakeasyMetadata()
  security: CommLogsReadSecurity;
}


export class CommLogsReadResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  phoneCallLog?: shared.PhoneCallLog;

  @SpeakeasyMetadata()
  statusCode: number;
}
