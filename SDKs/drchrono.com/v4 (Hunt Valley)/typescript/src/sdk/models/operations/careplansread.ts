import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class CarePlansReadPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;
}


export class CarePlansReadQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=doctor" })
  doctor?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=patient" })
  patient?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=plan_type" })
  planType?: number;
}


export class CarePlansReadSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  drchronoOauth2: shared.SchemeDrchronoOauth2;
}


export class CarePlansReadRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: CarePlansReadPathParams;

  @SpeakeasyMetadata()
  queryParams: CarePlansReadQueryParams;

  @SpeakeasyMetadata()
  security: CarePlansReadSecurity;
}


export class CarePlansReadResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  carePlan?: shared.CarePlan;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
