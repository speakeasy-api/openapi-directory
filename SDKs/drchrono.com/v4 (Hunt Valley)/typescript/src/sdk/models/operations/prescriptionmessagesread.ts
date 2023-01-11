import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class PrescriptionMessagesReadPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;
}


export class PrescriptionMessagesReadQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=doctor" })
  doctor?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=parent_message" })
  parentMessage?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=patient" })
  patient?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=since" })
  since?: string;
}


export class PrescriptionMessagesReadSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  drchronoOauth2: shared.SchemeDrchronoOauth2;
}


export class PrescriptionMessagesReadRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: PrescriptionMessagesReadPathParams;

  @SpeakeasyMetadata()
  queryParams: PrescriptionMessagesReadQueryParams;

  @SpeakeasyMetadata()
  security: PrescriptionMessagesReadSecurity;
}


export class PrescriptionMessagesReadResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  prescriptionMessage?: shared.PrescriptionMessage;

  @SpeakeasyMetadata()
  statusCode: number;
}
