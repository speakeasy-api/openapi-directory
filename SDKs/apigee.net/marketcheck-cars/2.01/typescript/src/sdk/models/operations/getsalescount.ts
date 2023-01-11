import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetSalesCountQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=api_key" })
  apiKey?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=car_type" })
  carType?: shared.ApiKeyEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=city_state" })
  cityState?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=country" })
  country?: shared.ApiKeyEnum1;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=make" })
  make?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=mm" })
  mm?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=state" })
  state?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=taxonomy_vin" })
  taxonomyVin?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=vin" })
  vin?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=ymm" })
  ymm?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=ymmt" })
  ymmt?: string;
}


export class GetSalesCountRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: GetSalesCountQueryParams;
}


export class GetSalesCountResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  error?: shared.ErrorT;

  @SpeakeasyMetadata()
  sales?: shared.Sales;

  @SpeakeasyMetadata()
  statusCode: number;
}
