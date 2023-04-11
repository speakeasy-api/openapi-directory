import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Specs of predicted vehicle
 */
export declare class PredictedSpecs extends SpeakeasyBase {
    /**
     * Base exterior color of vehicle
     */
    baseExteriorColor?: string;
    /**
     * base interior color of vehicle
     */
    baseInteriorColor?: string;
    /**
     * Indicates whether car has had only one owner or not
     */
    carfax1Owner?: boolean;
    /**
     * Indicates whether car has clean ownership records
     */
    carfaxCleanTitle?: boolean;
    /**
     * City mileage
     */
    cityMpg?: number;
    /**
     * Number of cylinders
     */
    cylinders?: number;
    /**
     * Number of doors
     */
    doors?: number;
    /**
     * Drivetrain of the vehicle
     */
    drivetrain?: string;
    /**
     * Engine block of the vehicle
     */
    engineBlock?: string;
    /**
     * Engine size
     */
    engineSize?: number;
    /**
     * Highway mileage
     */
    highwayMpg?: number;
    /**
     * Certified vehicle
     */
    isCertified?: boolean;
    /**
     * Latutide for the vehicle location
     */
    latitude?: number;
    /**
     * Longitude for the vehicle location
     */
    longitude?: number;
    /**
     * make
     */
    make?: string;
    /**
     * Miles
     */
    miles?: number;
    /**
     * model
     */
    model?: string;
    /**
     * transmission
     */
    transmission?: string;
    /**
     * trim
     */
    trim?: string;
    /**
     * year
     */
    year?: number;
}
