import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class SearchBoulderCountyVoterDetailsRequest extends SpeakeasyBase {
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
     * Birth Year
     */
    searchDbBoulderCountyVoterDetailsBirthYear?: number;
    /**
     * City Ward/district
     */
    searchDbBoulderCountyVoterDetailsCityWardDistrict?: string;
    /**
     * Congressional
     */
    searchDbBoulderCountyVoterDetailsCongressional?: string;
    /**
     * First Name
     */
    searchDbBoulderCountyVoterDetailsFirstName?: string;
    /**
     * Gender
     */
    searchDbBoulderCountyVoterDetailsGender?: string;
    /**
     * Last Name
     */
    searchDbBoulderCountyVoterDetailsLastName?: string;
    /**
     * Last Updated Date
     */
    searchDbBoulderCountyVoterDetailsLastUpdatedDate?: string;
    /**
     * Location
     */
    searchDbBoulderCountyVoterDetailsLocation?: string;
    /**
     * Mailing Zip Code
     */
    searchDbBoulderCountyVoterDetailsMailingZipCode?: string;
    /**
     * Municipality
     */
    searchDbBoulderCountyVoterDetailsMunicipality?: string;
    /**
     * Party
     */
    searchDbBoulderCountyVoterDetailsParty?: string;
    /**
     * Precinct Code
     */
    searchDbBoulderCountyVoterDetailsPrecinctCode?: string;
    /**
     * Registration Date
     */
    searchDbBoulderCountyVoterDetailsRegistrationDate?: string;
    /**
     * Residential Address
     */
    searchDbBoulderCountyVoterDetailsResidentialAddress?: string;
    /**
     * Residential City
     */
    searchDbBoulderCountyVoterDetailsResidentialCity?: string;
    /**
     * School District
     */
    searchDbBoulderCountyVoterDetailsSchoolDistrict?: string;
    /**
     * State House
     */
    searchDbBoulderCountyVoterDetailsStateHouse?: string;
    /**
     * State Senate
     */
    searchDbBoulderCountyVoterDetailsStateSenate?: string;
    /**
     * Voter Status
     */
    searchDbBoulderCountyVoterDetailsVoterStatus?: string;
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
export declare class SearchBoulderCountyVoterDetailsResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
