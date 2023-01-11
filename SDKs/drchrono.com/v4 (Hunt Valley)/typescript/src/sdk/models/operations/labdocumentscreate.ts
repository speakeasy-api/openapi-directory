import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class LabDocumentsCreateQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=doctor" })
  doctor?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=since" })
  since?: string;
}


export class LabDocumentsCreateSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  drchronoOauth2: shared.SchemeDrchronoOauth2;
}


export class LabDocumentsCreateRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: LabDocumentsCreateQueryParams;

  @SpeakeasyMetadata()
  security: LabDocumentsCreateSecurity;
}


export class LabDocumentsCreateResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  labOrderDocument?: shared.LabOrderDocument;

  @SpeakeasyMetadata()
  statusCode: number;
}
