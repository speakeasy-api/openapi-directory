import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class LabDocumentsReadPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;
}


export class LabDocumentsReadQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=doctor" })
  doctor?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=since" })
  since?: string;
}


export class LabDocumentsReadSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  drchronoOauth2: shared.SchemeDrchronoOauth2;
}


export class LabDocumentsReadRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: LabDocumentsReadPathParams;

  @SpeakeasyMetadata()
  queryParams: LabDocumentsReadQueryParams;

  @SpeakeasyMetadata()
  security: LabDocumentsReadSecurity;
}


export class LabDocumentsReadResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  labOrderDocument?: shared.LabOrderDocument;

  @SpeakeasyMetadata()
  statusCode: number;
}
