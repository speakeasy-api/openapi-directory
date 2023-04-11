import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
/**
 * Transmission on the car
 */
export declare enum PredictUkCarPriceTransmissionEnum {
    Manual = "Manual",
    Automatic = "Automatic"
}
export declare class PredictUkCarPriceRequest extends SpeakeasyBase {
    /**
     * The API Authentication Key. Mandatory with all API calls.
     */
    apiKey?: string;
    /**
     * Base exterior color of the car
     */
    baseExteriorColor?: string;
    /**
     * City mileage of the car
     */
    cityMpg?: number;
    /**
     * Combiined mileage of the car
     */
    combinedMpg?: number;
    /**
     * Number of cylinders in the vehicle
     */
    cylinders?: number;
    /**
     * Number of doors in the vehicle
     */
    doors?: number;
    /**
     * Drivetrain on the car
     */
    drivetrain?: string;
    /**
     * Engine Size of the car
     */
    engineSize?: number;
    /**
     * Fuel type of the car
     */
    fuelType?: string;
    /**
     * Highway mileage
     */
    highwayMpg?: number;
    /**
     * Latitude component of the location
     */
    latitude?: number;
    /**
     * Longitude component of the location
     */
    longitude?: number;
    /**
     * Car's make
     */
    make?: string;
    /**
     * miles vehicle has driven in total
     */
    miles?: number;
    /**
     * Car's model
     */
    model?: string;
    /**
     * Transmission on the car
     */
    transmission?: PredictUkCarPriceTransmissionEnum;
    /**
     * Car's trim
     */
    trim?: string;
    /**
     * Predict price for a VRM
     */
    vrm?: string;
    /**
     * Car manufacturing year
     */
    year?: number;
    /**
     * Location zip
     */
    zip?: string;
}
export declare class PredictUkCarPriceResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Error
     */
    error?: shared.ErrorT;
    /**
     * Predicted price of the car along with it's specifications
     */
    pricePrediction?: shared.PricePrediction;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
