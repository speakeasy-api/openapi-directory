import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum GetStatisticsChargingResolutionEnum {
    Hour = "HOUR",
    Day = "DAY",
    Week = "WEEK",
    Month = "MONTH",
    Year = "YEAR"
}
export declare class GetStatisticsChargingQueryParams extends SpeakeasyBase {
    chargingLocationId?: string;
    endDate?: Date;
    resolution?: GetStatisticsChargingResolutionEnum;
    startDate: Date;
    vehicleId?: string;
}
export declare class GetStatisticsChargingSecurity extends SpeakeasyBase {
    userAccessToken: shared.SchemeUserAccessToken;
}
/**
 * Aggregate statistics for charge rate in kW
**/
export declare class GetStatisticsCharging200ApplicationJsonKw extends SpeakeasyBase {
    max: number;
    mean: number;
    min: number;
}
/**
 * Aggregate statistics for power price (<CURRENCY> per kWh)
**/
export declare class GetStatisticsCharging200ApplicationJsonPrice extends SpeakeasyBase {
    max: number;
    mean: number;
    min: number;
}
export declare class GetStatisticsCharging200ApplicationJson extends SpeakeasyBase {
    costSum: number;
    date: Date;
    kw: GetStatisticsCharging200ApplicationJsonKw;
    kwhSum: number;
    price: GetStatisticsCharging200ApplicationJsonPrice;
}
export declare class GetStatisticsChargingRequest extends SpeakeasyBase {
    queryParams: GetStatisticsChargingQueryParams;
    security: GetStatisticsChargingSecurity;
}
export declare class GetStatisticsChargingResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    getStatisticsCharging200ApplicationJSONObjects?: GetStatisticsCharging200ApplicationJson[];
}
