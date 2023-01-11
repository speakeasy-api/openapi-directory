import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class EobsCreateQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=doctor" })
  doctor?: number;
}


export class EobsCreateSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  drchronoOauth2: shared.SchemeDrchronoOauth2;
}


export class EobsCreateRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: EobsCreateQueryParams;

  @SpeakeasyMetadata()
  security: EobsCreateSecurity;
}


export class EobsCreateResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  eobObject?: shared.EobObject;

  @SpeakeasyMetadata()
  statusCode: number;
}
