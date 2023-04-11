import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
/**
 * Car condition
 */
export declare enum PredictCarPriceCarTypeEnum {
    Used = "used",
    New = "new"
}
/**
 * Country for which car price will be predicted
 */
export declare enum PredictCarPriceCountryEnum {
    Us = "us",
    Ca = "ca"
}
/**
 * Drivetrain on the car
 */
export declare enum PredictCarPriceDrivetrainEnum {
    FourWD = "4WD",
    Awd = "AWD",
    Fwd = "FWD",
    Rwd = "RWD"
}
/**
 * Engine Block of the car
 */
export declare enum PredictCarPriceEngineBlockEnum {
    I = "I",
    V = "V",
    H = "H"
}
/**
 * Transmission on the car
 */
export declare enum PredictCarPriceTransmissionEnum {
    Manual = "Manual",
    Automatic = "Automatic"
}
export declare class PredictCarPriceRequest extends SpeakeasyBase {
    /**
     * The API Authentication Key. Mandatory with all API calls.
     */
    apiKey?: string;
    /**
     * Base exterior color of the car
     */
    baseExteriorColor?: string;
    /**
     * Base interior color of the car
     */
    baseInteriorColor?: string;
    /**
     * Car condition
     */
    carType: PredictCarPriceCarTypeEnum;
    /**
     * Boolean to indicate car is carfax one owner or not
     */
    carfax1Owner?: boolean;
    /**
     * Boolean to indicate car has clean title or not
     */
    carfaxCleanTitle?: boolean;
    /**
     * City mileage of the car
     */
    cityMpg?: number;
    /**
     * Country for which car price will be predicted
     */
    country?: PredictCarPriceCountryEnum;
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
    drivetrain?: PredictCarPriceDrivetrainEnum;
    /**
     * Engine Block of the car
     */
    engineBlock?: PredictCarPriceEngineBlockEnum;
    /**
     * Engine Size of the car
     */
    engineSize?: number;
    /**
     * Highway mileage
     */
    highwayMpg?: number;
    /**
     * Boolean to indicate car is certified or not
     */
    isCertified?: boolean;
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
    transmission?: PredictCarPriceTransmissionEnum;
    /**
     * Car's trim
     */
    trim?: string;
    /**
     * Predict price for a VIN
     */
    vin?: string;
    /**
     * Car manufacturing year
     */
    year?: number;
    /**
     * Location zip
     */
    zip?: string;
}
export declare class PredictCarPriceResponse extends SpeakeasyBase {
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
