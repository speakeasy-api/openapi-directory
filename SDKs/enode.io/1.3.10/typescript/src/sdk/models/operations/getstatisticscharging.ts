import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";


export enum GetStatisticsChargingResolutionEnum {
    Hour = "HOUR",
    Day = "DAY",
    Week = "WEEK",
    Month = "MONTH",
    Year = "YEAR"
}


export class GetStatisticsChargingQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=chargingLocationId" })
  chargingLocationId?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=endDate" })
  endDate?: Date;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=resolution" })
  resolution?: GetStatisticsChargingResolutionEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=startDate" })
  startDate: Date;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=vehicleId" })
  vehicleId?: string;
}


export class GetStatisticsChargingSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  userAccessToken: shared.SchemeUserAccessToken;
}


// GetStatisticsCharging200ApplicationJsonKw
/** 
 * Aggregate statistics for charge rate in kW
**/
export class GetStatisticsCharging200ApplicationJsonKw extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=max" })
  max: number;

  @SpeakeasyMetadata({ data: "json, name=mean" })
  mean: number;

  @SpeakeasyMetadata({ data: "json, name=min" })
  min: number;
}


// GetStatisticsCharging200ApplicationJsonPrice
/** 
 * Aggregate statistics for power price (<CURRENCY> per kWh)
**/
export class GetStatisticsCharging200ApplicationJsonPrice extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=max" })
  max: number;

  @SpeakeasyMetadata({ data: "json, name=mean" })
  mean: number;

  @SpeakeasyMetadata({ data: "json, name=min" })
  min: number;
}


export class GetStatisticsCharging200ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=costSum" })
  costSum: number;

  @SpeakeasyMetadata({ data: "json, name=date" })
  date: Date;

  @SpeakeasyMetadata({ data: "json, name=kw" })
  kw: GetStatisticsCharging200ApplicationJsonKw;

  @SpeakeasyMetadata({ data: "json, name=kwhSum" })
  kwhSum: number;

  @SpeakeasyMetadata({ data: "json, name=price" })
  price: GetStatisticsCharging200ApplicationJsonPrice;
}


export class GetStatisticsChargingRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: GetStatisticsChargingQueryParams;

  @SpeakeasyMetadata()
  security: GetStatisticsChargingSecurity;
}


export class GetStatisticsChargingResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata({ elemType: GetStatisticsCharging200ApplicationJson })
  getStatisticsCharging200ApplicationJSONObjects?: GetStatisticsCharging200ApplicationJson[];
}
