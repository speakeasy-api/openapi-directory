import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class MessagesCreateQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=doctor" })
  doctor?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=owner" })
  owner?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=patient" })
  patient?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=received_since" })
  receivedSince?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=responsible_user" })
  responsibleUser?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=type" })
  type?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=updated_since" })
  updatedSince?: string;
}


export class MessagesCreateSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  drchronoOauth2: shared.SchemeDrchronoOauth2;
}


export class MessagesCreateRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: MessagesCreateQueryParams;

  @SpeakeasyMetadata()
  security: MessagesCreateSecurity;
}


export class MessagesCreateResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  doctorMessage?: shared.DoctorMessage;

  @SpeakeasyMetadata()
  statusCode: number;
}
