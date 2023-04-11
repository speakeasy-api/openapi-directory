import { SpeakeasyBase } from "../../../internal/utils";
/**
 * MOT Status of the vehicle
 */
export declare enum VehicleMotStatusEnum {
    NoDetailsHeldByDVLA = "No details held by DVLA",
    NoResultsReturned = "No results returned",
    NotValid = "Not valid",
    Valid = "Valid"
}
/**
 * Tax status of the vehicle
 */
export declare enum VehicleTaxStatusEnum {
    NotTaxedForOnRoadUse = "Not Taxed for on Road Use",
    Sorn = "SORN",
    Taxed = "Taxed",
    Untaxed = "Untaxed"
}
/**
 * Successful response
 */
export declare class Vehicle extends SpeakeasyBase {
    /**
     * Additional Rate of Tax End Date, format: YYYY-MM-DD
     */
    artEndDate?: Date;
    /**
     * Carbon Dioxide emissions in grams per kilometre
     */
    co2Emissions?: number;
    /**
     * Vehicle colour
     */
    colour?: string;
    /**
     * Date of last V5C issued
     */
    dateOfLastV5CIssued?: Date;
    /**
     * Engine capacity in cubic centimetres
     */
    engineCapacity?: number;
    /**
     * Euro Status (Dealer / Customer Provided (new vehicles))
     */
    euroStatus?: string;
    /**
     * Fuel type (Method of Propulsion)
     */
    fuelType?: string;
    /**
     * Vehicle make
     */
    make?: string;
    /**
     * True only if vehicle has been export marked
     */
    markedForExport?: boolean;
    /**
     * Month of First DVLA Registration
     */
    monthOfFirstDvlaRegistration?: Date;
    /**
     * Month of First Registration
     */
    monthOfFirstRegistration?: Date;
    /**
     * Mot Expiry Date
     */
    motExpiryDate?: Date;
    /**
     * MOT Status of the vehicle
     */
    motStatus?: VehicleMotStatusEnum;
    /**
     * Real Driving Emissions value
     */
    realDrivingEmissions?: string;
    /**
     * Registration number of the vehicle
     */
    registrationNumber: string;
    /**
     * Revenue weight in kilograms
     */
    revenueWeight?: number;
    /**
     * Date of tax liablity, Used in calculating licence information presented to user
     */
    taxDueDate?: Date;
    /**
     * Tax status of the vehicle
     */
    taxStatus?: VehicleTaxStatusEnum;
    /**
     * Vehicle Type Approval Category
     */
    typeApproval?: string;
    /**
     * Vehicle wheel plan
     */
    wheelplan?: string;
    /**
     * Year of Manufacture
     */
    yearOfManufacture?: number;
}
