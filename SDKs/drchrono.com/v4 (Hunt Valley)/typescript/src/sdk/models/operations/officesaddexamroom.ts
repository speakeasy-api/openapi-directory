import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class OfficesAddExamRoomPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;
}


export class OfficesAddExamRoomQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=doctor" })
  doctor?: number;
}


export class OfficesAddExamRoomSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  drchronoOauth2: shared.SchemeDrchronoOauth2;
}


export class OfficesAddExamRoomRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: OfficesAddExamRoomPathParams;

  @SpeakeasyMetadata()
  queryParams: OfficesAddExamRoomQueryParams;

  @SpeakeasyMetadata()
  security: OfficesAddExamRoomSecurity;
}


export class OfficesAddExamRoomResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  office?: shared.Office;

  @SpeakeasyMetadata()
  statusCode: number;
}
