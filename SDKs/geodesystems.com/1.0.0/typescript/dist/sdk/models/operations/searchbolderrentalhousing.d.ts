import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class SearchBolderRentalHousingRequest extends SpeakeasyBase {
    /**
     * Archive change date from
     */
    changedateFrom?: Date;
    /**
     * Archive change date to
     */
    changedateTo?: Date;
    /**
     * Archive create date from
     */
    createdateFrom?: Date;
    /**
     * Archive create date to
     */
    createdateTo?: Date;
    /**
     * Search description
     */
    description?: string;
    /**
     * File suffix
     */
    filesuffix?: string;
    /**
     * From date
     */
    fromdate?: Date;
    /**
     * Parent entry
     */
    group?: string;
    /**
     * Max number of results
     */
    max?: number;
    /**
     * Northern bounds of search
     */
    maxlatitude?: number;
    /**
     * Eastern bounds of search
     */
    maxlongitude?: number;
    /**
     * Southern bounds of search
     */
    minlatitude?: number;
    /**
     * Western bounds of search
     */
    minlongitude?: number;
    /**
     * Search name
     */
    name?: string;
    /**
     * Building Type
     */
    searchDbBolderRentalHousingBldgtype?: string;
    /**
     * Company
     */
    searchDbBolderRentalHousingCompany?: string;
    /**
     * Complex Name
     */
    searchDbBolderRentalHousingComplexnm?: string;
    /**
     * Dwelling Units
     */
    searchDbBolderRentalHousingDwellunits?: number;
    /**
     * Engcompl
     */
    searchDbBolderRentalHousingEngcompl?: string;
    /**
     * Expiration Date
     */
    searchDbBolderRentalHousingLicenseexp?: string;
    /**
     * Licensenum
     */
    searchDbBolderRentalHousingLicensenum?: string;
    /**
     * Location
     */
    searchDbBolderRentalHousingLocation?: string;
    /**
     * Name
     */
    searchDbBolderRentalHousingName?: string;
    /**
     * Neighborhood
     */
    searchDbBolderRentalHousingNeighbrhd?: string;
    /**
     * Person 1
     */
    searchDbBolderRentalHousingPerson1?: string;
    /**
     * Person 2
     */
    searchDbBolderRentalHousingPerson2?: string;
    /**
     * Person Type
     */
    searchDbBolderRentalHousingPersontype?: string;
    /**
     * Ppl1 Coname
     */
    searchDbBolderRentalHousingPpl1Coname?: string;
    /**
     * Ppl1 Role
     */
    searchDbBolderRentalHousingPpl1Role?: string;
    /**
     * Ppl2 Coname
     */
    searchDbBolderRentalHousingPpl2Coname?: string;
    /**
     * Ppl2 Role
     */
    searchDbBolderRentalHousingPpl2Role?: string;
    /**
     * Property Address
     */
    searchDbBolderRentalHousingPropaddr1?: string;
    /**
     * Rental Type
     */
    searchDbBolderRentalHousingRentaltype?: string;
    /**
     * Room Units
     */
    searchDbBolderRentalHousingRoomunits?: number;
    /**
     * Number to skip
     */
    skip?: number;
    /**
     * Search text
     */
    text?: string;
    /**
     * To date
     */
    todate?: Date;
}
export declare class SearchBolderRentalHousingResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
