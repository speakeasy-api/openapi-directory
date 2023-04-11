import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetMDSRequest extends SpeakeasyBase {
    /**
     * The API Authentication Key. Mandatory with all API calls.
     */
    apiKey?: string;
    /**
     * Base exterior color to match. Valid filter values are those that our Search facets API returns for unique base exterior colors. You can pass in multiple base interior color values comma separated
     */
    baseExteriorColor?: string;
    /**
     * Base interior color to match. Valid filter values are those that our Search facets API returns for unique base interior colors. You can pass in multiple base interior color values comma separated
     */
    baseInteriorColor?: string;
    /**
     * Body subtype to filter the listings on. Valid filter values are those that our Search facets API returns for unique body subtypes. You can pass in multiple body subtype values comma separated
     */
    bodySubtype?: string;
    /**
     * To filter listing on their body type
     */
    bodyType?: string;
    /**
     * Car type. Allowed values are - new / used / certified
     */
    carType?: shared.CarCarTypeEnum;
    /**
     * Indicates whether car has had only one owner or not
     */
    carfax1Owner?: shared.Carfax1OwnerEnum;
    /**
     * Indicates whether car has clean ownership records
     */
    carfaxCleanTitle?: shared.CarfaxCleanTitleEnum;
    /**
     * To filter listing on City in which they are listed
     */
    city?: string;
    /**
     * City mileage range to filter listings with the mileage in the range given. Range to be given in the format - min-max e.g. 1000-5000
     */
    cityMpgRange?: string;
    /**
     * To filter listing on Country in which they are listed
     */
    country?: shared.CountryEnum;
    /**
     * To filter listing on their cylinders
     */
    cylinders?: string;
    /**
     * Dealer id to filter the listings.
     */
    dealerId?: string;
    /**
     * Filter based on dealer type independant or franchise
     */
    dealerType?: shared.DealerTypeEnum;
    /**
     * Name of the dealership group to search for
     */
    dealershipGroupName?: string;
    /**
     * Debug parameter
     */
    debug?: boolean;
    /**
     * Last 180 Days on Market range to filter cars with the DOM within the given range. Range to be given in the format - min-max e.g. 10-50
     */
    dom180Range?: string;
    /**
     * Active Days on Market range to filter cars with the DOM within the given range. Range to be given in the format - min-max e.g. 10-50
     */
    domActiveRange?: string;
    /**
     * Days on Market range to filter cars with the DOM within the given range. Range to be given in the format - min-max e.g. 10-50
     */
    domRange?: string;
    /**
     * Doors to filter the cars on. Valid filter values are those that our Search facets API returns for unique doors. You can pass in multiple doors values comma separated
     */
    doors?: string;
    /**
     * To filter listing on their drivetrain
     */
    drivetrain?: string;
    /**
     * To filter listing on their engine
     */
    engine?: string;
    /**
     * Engine Aspiration to match. Valid filter values are those that our Search facets API returns for unique Engine Aspirations. You can pass in multiple Engine aspirations values comma separated
     */
    engineAspiration?: string;
    /**
     * Engine Block to match. Valid filter values are those that our Search facets API returns for unique Engine Block. You can pass in multiple Engine Block values comma separated
     */
    engineBlock?: string;
    /**
     * Engine Size to match. Valid filter values are those that our Search facets API returns for unique engine size. You can pass in multiple engine size values comma separated
     */
    engineSize?: string;
    /**
     * Engine size range to filter listings with engine size in the given range. Range to be given in the format - min-max e.g. 1.0-2
     */
    engineSizeRange?: string;
    /**
     * Exact parameter
     */
    exact?: boolean;
    /**
     * Exterior color to match. Valid filter values are those that our Search facets API returns for unique exterior colors. You can pass in multiple exterior color values comma separated
     */
    exteriorColor?: string;
    /**
     * Search listings with exact down payment in finance offers, or inside a range with min and max seperated by a dash like finance_down_payment=30-60
     */
    financeDownPayment?: string;
    /**
     * Search listings with exact down payment percentage in finance offers, or inside a range with min and max seperated by a dash like finance_down_payment_per=30-60
     */
    financeDownPaymentPer?: string;
    /**
     * Search listings with finance offers exactly matching Estimated Monthly Payment(EMI), or inside a range with min and max seperated by a dash like finance_emp=30-60
     */
    financeEmp?: string;
    /**
     * Search listings with finance offers exactly matching loans Annual Percentage Rate, or inside a range with min and max seperated by a dash like finance_loan_apr=30-60
     */
    financeLoanApr?: string;
    /**
     * Search listings with exact finance loan term, or inside a range with min and max seperated by a dash like finance_loan_term=30-60
     */
    financeLoanTerm?: string;
    /**
     * To filter listing on their fuel type
     */
    fuelType?: string;
    /**
     * Highway mileage range to filter listings with the mileage in the range given. Range to be given in the format - min-max e.g. 1000-5000
     */
    highwayMpgRange?: string;
    /**
     * To fetch sold vins
     */
    includeSold?: boolean;
    /**
     * Interior color to match. Valid filter values are those that our Search facets API returns for unique interior colors. You can pass in multiple interior color values comma separated
     */
    interiorColor?: string;
    /**
     * Latitude component of location
     */
    latitude?: number;
    /**
     * Search listings with exact down payment in lease offers, or inside a range with min and max seperated by a dash like lease_down_payment=30-60
     */
    leaseDownPayment?: string;
    /**
     * Search listings with lease offers exactly matching Estimated Monthly Payment(EMI), or inside a range with min and max seperated by a dash like lease_emp=30-60
     */
    leaseEmp?: string;
    /**
     * Search listings with exact lease term, or inside a range with min and max seperated by a dash like lease_term=30-60
     */
    leaseTerm?: string;
    /**
     * Longitude component of location
     */
    longitude?: number;
    /**
     * To filter listings on their make
     */
    make?: string;
    /**
     * Miles range to filter listings with miles in the given range. Range to be given in the format - min-max e.g. 1000-5000
     */
    milesRange?: string;
    /**
     * To filter listings on their model
     */
    model?: string;
    /**
     * To filter listing on msa code in which they are listed
     */
    msaCode?: string;
    /**
     * MSRP range to filter listings with the msrp in the range given. Range to be given in the format - min-max e.g. 1000-5000
     */
    msrpRange?: string;
    /**
     * Price range to filter listings with the price in the range given. Range to be given in the format - min-max e.g. 1000-5000
     */
    priceRange?: string;
    /**
     * Radius around the search location (Unit - Miles)
     */
    radius?: number;
    /**
     * To filter listing on their source
     */
    source?: string;
    /**
     * To filter listing on State in which they are listed
     */
    state?: string;
    /**
     * To filter listing on their transmission
     */
    transmission?: string;
    /**
     * To filter listing on their trim
     */
    trim?: string;
    /**
     * To filter listing on their vehicle type
     */
    vehicleType?: string;
    /**
     * VIN to decode
     */
    vin?: string;
    /**
     * To filter listing on their year
     */
    year?: string;
    /**
     * Comma separated list of Year, Make, Model, Trim combinations. Each combination needs to have the year,make,model, trim values separated by a pipe '|' character in the form year|make|model|trim. e.g. 2010|Audi|A5,2014|Nissan|Sentra|S 6MT,|Honda|City|   You could just provide strings of the form - 'year|make||' or 'year|make|model' or '|make|model|' combinations. Individual year / make / model filters provied with the API calls will take precedence over the Year, Make, Model, Trim combinations. The Make, Model, Trim values must be valid values as per the Marketcheck Vin Decoder. If you are using a separate vin decoder then look at using the 'vins' or 'taxonomy_vins' parameter to the search api instead the year|make|model|trim combinations.
     */
    ymmt?: string;
    /**
     * To filter listing on ZIP around which they are listed
     */
    zip?: string;
}
export declare class GetMDSResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Error
     */
    error?: shared.ErrorT;
    /**
     * Provides Market Days supply for year make model or trim combination
     */
    mds?: shared.Mds;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
