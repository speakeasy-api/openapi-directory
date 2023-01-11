import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class DocumentsReadPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;
}


export class DocumentsReadQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=doctor" })
  doctor?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=patient" })
  patient?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=since" })
  since?: string;
}


export class DocumentsReadSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  drchronoOauth2: shared.SchemeDrchronoOauth2;
}


export class DocumentsReadRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: DocumentsReadPathParams;

  @SpeakeasyMetadata()
  queryParams: DocumentsReadQueryParams;

  @SpeakeasyMetadata()
  security: DocumentsReadSecurity;
}


export class DocumentsReadResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  scannedClinicalDocument?: shared.ScannedClinicalDocument;

  @SpeakeasyMetadata()
  statusCode: number;
}
