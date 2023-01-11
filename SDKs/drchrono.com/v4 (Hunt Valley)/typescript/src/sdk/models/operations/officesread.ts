import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class OfficesReadPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;
}


export class OfficesReadQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=doctor" })
  doctor?: number;
}


export class OfficesReadSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  drchronoOauth2: shared.SchemeDrchronoOauth2;
}


export class OfficesReadRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: OfficesReadPathParams;

  @SpeakeasyMetadata()
  queryParams: OfficesReadQueryParams;

  @SpeakeasyMetadata()
  security: OfficesReadSecurity;
}


export class OfficesReadResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  office?: shared.Office;

  @SpeakeasyMetadata()
  statusCode: number;
}
