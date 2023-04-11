import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Describes the NeoVIN specification
 */
export declare class NeoVIN extends SpeakeasyBase {
    /**
     * Listing of all options and packages with detailed equipment identified that could have been installed on the vehicle
     */
    availableOptionsDetails?: Record<string, any>;
    /**
     * Body subtype (cab) of the vehicle
     */
    bodySubtype?: string;
    /**
     * Body type of the vehicle
     */
    bodyType?: string;
    /**
     * City miles per gallon
     */
    cityMpg?: number;
    /**
     * Calculated combination of base MSRP with the delivery charges and the installed options MSRP
     */
    combinedMsrp?: number;
    /**
     * vin first decoded at timestamp
     */
    createdAt?: number;
    /**
     * vin first decoded at date
     */
    createdAtDate?: string;
    /**
     * This will represent if previous vin decode values are updated
     */
    decodeVersion?: number;
    /**
     * Manufacturer defined delivery charges
     */
    deliveryCharges?: number;
    /**
     * Number of doors on the vehicle
     */
    doors?: number;
    /**
     * Identified drivetrain of the vehicle
     */
    drivetrain?: string;
    /**
     * Base identification of the number of cylinders and configuration of the installed engine on the vehicle
     */
    engine?: string;
    /**
     * The manufacturer defined option code and name for the exterior color of the vehicle
     */
    exteriorColor?: Record<string, any>;
    /**
     * Normalized feature set of equipment identified that have been identified as installed on the vehicle, including whether that item was standard to the version of the vehicle or was added as an installed option
     */
    features?: Record<string, any>;
    /**
     * Identified Fuel type of the vehicle
     */
    fuelType?: string;
    /**
     * Overall height of the vehicle (in)
     */
    height?: number;
    /**
     * Highway miles per gallon
     */
    highwayMpg?: number;
    /**
     * Detailed equipment identified as installed on the vehicle, including whether that item was standard to the version of the vehicle or was added as an installed option
     */
    installedEquipment?: Record<string, any>;
    /**
     * Listing of all options and packages with detailed equipment identified that have been identified as installed on the vehicle
     */
    installedOptionsDetails?: Record<string, any>;
    /**
     * Calculated combination of the MSRP for the installed options and packages
     */
    installedOptionsMsrp?: number;
    /**
     * The manufacturer defined option code and name for the interior color of the vehicle
     */
    interiorColor?: Record<string, any>;
    /**
     * Overall length of the vehicle (in)
     */
    length?: number;
    /**
     * Identification of primary source data used for trim and installed colors and options
     */
    listingConfidence?: string;
    /**
     * Make of the vehicle
     */
    make?: string;
    /**
     * Manufacturer code of the vehicle
     */
    manufacturerCode?: string;
    /**
     * Model of the vehicle
     */
    model?: string;
    /**
     * Base MSRP as defined for the defined version of that vehicle with no options installed
     */
    msrp?: number;
    /**
     * Option and package codes installed on the vehicle
     */
    optionsPackages?: string;
    /**
     * Extracted manufacturer package code related to selection of the vehicle version (where available / applicable)
     */
    packageCode?: string;
    /**
     * Extracted manufacturer package code description (where available / applicable)
     */
    packageDescription?: string;
    /**
     * Identified seating capacity of the vehicle
     */
    seatingCapacity?: number;
    /**
     * Vin prefix identification used in the decoding of the vehicle
     */
    squishVin?: string;
    /**
     * Identified installed Transmission of the vehicle
     */
    transmission?: string;
    /**
     * Identification of confidence related to the selection of the installed transmission
     */
    transmissionConfidence?: string;
    /**
     * The description of the installed transmission
     */
    transmissionDescription?: string;
    /**
     * Trim of the vehicle
     */
    trim?: string;
    /**
     * Identification of confidence related to the selection of the trim
     */
    trimConfidence?: string;
    /**
     * vin last decoded at timestamp
     */
    updatedAt?: number;
    /**
     * vin last decoded at date
     */
    updatedAtDate?: string;
    /**
     * Version Name of the vehicle
     */
    version?: string;
    /**
     * Identification of confidence related to the selection of the vehicle version
     */
    versionConfidence?: string;
    /**
     * 17 char long VIN of the vehicle
     */
    vin?: string;
    /**
     * Gross vehicle weight (lbs)
     */
    weight?: number;
    /**
     * Overall width of the vehicle (in)
     */
    width?: number;
    /**
     * Model Year of the vehicle
     */
    year?: number;
}
