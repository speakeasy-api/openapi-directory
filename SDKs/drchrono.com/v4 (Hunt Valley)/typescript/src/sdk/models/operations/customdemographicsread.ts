import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class CustomDemographicsReadPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;
}


export class CustomDemographicsReadQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=doctor" })
  doctor?: number;
}


export class CustomDemographicsReadSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  drchronoOauth2: shared.SchemeDrchronoOauth2;
}


export class CustomDemographicsReadRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: CustomDemographicsReadPathParams;

  @SpeakeasyMetadata()
  queryParams: CustomDemographicsReadQueryParams;

  @SpeakeasyMetadata()
  security: CustomDemographicsReadSecurity;
}


export class CustomDemographicsReadResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  customPatientFieldType?: shared.CustomPatientFieldType;

  @SpeakeasyMetadata()
  statusCode: number;
}
