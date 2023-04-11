import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class GetStatisticsChargingSecurity extends SpeakeasyBase {
    userAccessToken: string;
}
/**
 * The unit of time the data will be cut into before aggregate statistics are applied. For instance if you choose DAY, then each item in the returned array will cover 1 day.
 */
export declare enum GetStatisticsChargingResolutionEnum {
    Hour = "HOUR",
    Day = "DAY",
    Week = "WEEK",
    Month = "MONTH",
    Year = "YEAR"
}
export declare class GetStatisticsChargingRequest extends SpeakeasyBase {
    /**
     * Filter statistics to only include this charging location
     */
    chargingLocationId?: string;
    /**
     * Latest date to include in the response (defaults to current date/time)
     */
    endDate?: Date;
    /**
     * The unit of time the data will be cut into before aggregate statistics are applied. For instance if you choose DAY, then each item in the returned array will cover 1 day.
     */
    resolution?: GetStatisticsChargingResolutionEnum;
    /**
     * Earliest date to include in the response
     */
    startDate: Date;
    /**
     * Filter statistics to only include this vehicle
     */
    vehicleId?: string;
}
/**
 * Aggregate statistics for charge rate in kW
 */
export declare class GetStatisticsCharging200ApplicationJSONKw extends SpeakeasyBase {
    max: number;
    mean: number;
    min: number;
}
/**
 * Aggregate statistics for power price (<CURRENCY> per kWh)
 */
export declare class GetStatisticsCharging200ApplicationJSONPrice extends SpeakeasyBase {
    max: number;
    mean: number;
    min: number;
}
export declare class GetStatisticsCharging200ApplicationJSON extends SpeakeasyBase {
    /**
     * Total cost in <CURRENCY>
     */
    costSum: number;
    /**
     * The start date of this sample within the timeseries
     */
    date: Date;
    /**
     * Aggregate statistics for charge rate in kW
     */
    kw: GetStatisticsCharging200ApplicationJSONKw;
    /**
     * Total power consumption in kWh
     */
    kwhSum: number;
    /**
     * Aggregate statistics for power price (<CURRENCY> per kWh)
     */
    price: GetStatisticsCharging200ApplicationJSONPrice;
}
export declare class GetStatisticsChargingResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Successful
     */
    getStatisticsCharging200ApplicationJSONObjects?: GetStatisticsCharging200ApplicationJSON[];
}
