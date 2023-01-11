import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class CustomVitalsReadPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;
}


export class CustomVitalsReadQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=doctor" })
  doctor?: number;
}


export class CustomVitalsReadSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  drchronoOauth2: shared.SchemeDrchronoOauth2;
}


export class CustomVitalsReadRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: CustomVitalsReadPathParams;

  @SpeakeasyMetadata()
  queryParams: CustomVitalsReadQueryParams;

  @SpeakeasyMetadata()
  security: CustomVitalsReadSecurity;
}


export class CustomVitalsReadResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  customVitalType?: shared.CustomVitalType;

  @SpeakeasyMetadata()
  statusCode: number;
}
