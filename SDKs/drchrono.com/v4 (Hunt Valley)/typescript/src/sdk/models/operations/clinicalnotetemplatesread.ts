import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class ClinicalNoteTemplatesReadPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;
}


export class ClinicalNoteTemplatesReadQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=doctor" })
  doctor?: number;
}


export class ClinicalNoteTemplatesReadSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  drchronoOauth2: shared.SchemeDrchronoOauth2;
}


export class ClinicalNoteTemplatesReadRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: ClinicalNoteTemplatesReadPathParams;

  @SpeakeasyMetadata()
  queryParams: ClinicalNoteTemplatesReadQueryParams;

  @SpeakeasyMetadata()
  security: ClinicalNoteTemplatesReadSecurity;
}


export class ClinicalNoteTemplatesReadResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  soapNoteCustomReport?: shared.SoapNoteCustomReport;

  @SpeakeasyMetadata()
  statusCode: number;
}
