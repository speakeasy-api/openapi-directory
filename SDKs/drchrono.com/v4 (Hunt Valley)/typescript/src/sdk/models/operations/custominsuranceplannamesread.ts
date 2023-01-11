import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class CustomInsurancePlanNamesReadPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;
}


export class CustomInsurancePlanNamesReadQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=doctor" })
  doctor?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=since" })
  since?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=user" })
  user?: number;
}


export class CustomInsurancePlanNamesReadSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  drchronoOauth2: shared.SchemeDrchronoOauth2;
}


export class CustomInsurancePlanNamesReadRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: CustomInsurancePlanNamesReadPathParams;

  @SpeakeasyMetadata()
  queryParams: CustomInsurancePlanNamesReadQueryParams;

  @SpeakeasyMetadata()
  security: CustomInsurancePlanNamesReadSecurity;
}


export class CustomInsurancePlanNamesReadResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  customInsurancePlanName?: shared.CustomInsurancePlanName;

  @SpeakeasyMetadata()
  statusCode: number;
}
