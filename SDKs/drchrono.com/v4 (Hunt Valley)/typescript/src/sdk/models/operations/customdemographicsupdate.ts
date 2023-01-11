import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class CustomDemographicsUpdatePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;
}


export class CustomDemographicsUpdateQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=doctor" })
  doctor?: number;
}


export class CustomDemographicsUpdateSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  drchronoOauth2: shared.SchemeDrchronoOauth2;
}


export class CustomDemographicsUpdateRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: CustomDemographicsUpdatePathParams;

  @SpeakeasyMetadata()
  queryParams: CustomDemographicsUpdateQueryParams;

  @SpeakeasyMetadata()
  security: CustomDemographicsUpdateSecurity;
}


export class CustomDemographicsUpdateResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
