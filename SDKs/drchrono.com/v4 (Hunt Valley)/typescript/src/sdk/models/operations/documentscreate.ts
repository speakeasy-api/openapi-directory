import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class DocumentsCreateQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=doctor" })
  doctor?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=patient" })
  patient?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=since" })
  since?: string;
}


export class DocumentsCreateSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  drchronoOauth2: shared.SchemeDrchronoOauth2;
}


export class DocumentsCreateRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: DocumentsCreateQueryParams;

  @SpeakeasyMetadata()
  security: DocumentsCreateSecurity;
}


export class DocumentsCreateResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  scannedClinicalDocument?: shared.ScannedClinicalDocument;

  @SpeakeasyMetadata()
  statusCode: number;
}
