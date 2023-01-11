import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetPopularCarsQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=api_key" })
  apiKey?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=car_type" })
  carType: shared.ApiKeyEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=city_state" })
  cityState?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=country" })
  country?: shared.ApiKeyEnum1;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=state" })
  state?: string;
}


export class GetPopularCarsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: GetPopularCarsQueryParams;
}


export class GetPopularCarsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  error?: shared.ErrorT;

  @SpeakeasyMetadata()
  popularCars?: shared.PopularCars;

  @SpeakeasyMetadata()
  statusCode: number;
}
