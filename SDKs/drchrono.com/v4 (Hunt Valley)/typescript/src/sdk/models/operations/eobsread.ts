import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class EobsReadPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;
}


export class EobsReadQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=doctor" })
  doctor?: number;
}


export class EobsReadSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  drchronoOauth2: shared.SchemeDrchronoOauth2;
}


export class EobsReadRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: EobsReadPathParams;

  @SpeakeasyMetadata()
  queryParams: EobsReadQueryParams;

  @SpeakeasyMetadata()
  security: EobsReadSecurity;
}


export class EobsReadResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  eobObject?: shared.EobObject;

  @SpeakeasyMetadata()
  statusCode: number;
}
