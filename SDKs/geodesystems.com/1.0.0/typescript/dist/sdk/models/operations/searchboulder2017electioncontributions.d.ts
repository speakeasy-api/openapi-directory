import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class SearchBoulder2017ElectionContributionsRequest extends SpeakeasyBase {
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
     * Amount
     */
    searchDbBoulder2017ElectionContributionsAmount?: number;
    /**
     * City
     */
    searchDbBoulder2017ElectionContributionsCity?: string;
    /**
     * Committee
     */
    searchDbBoulder2017ElectionContributionsCommittee?: string;
    /**
     * Contribution Type
     */
    searchDbBoulder2017ElectionContributionsContributionType?: string;
    /**
     * Date
     */
    searchDbBoulder2017ElectionContributionsDate?: string;
    /**
     * First Name
     */
    searchDbBoulder2017ElectionContributionsFirstName?: string;
    /**
     * From Candidate
     */
    searchDbBoulder2017ElectionContributionsFromCandidate?: string;
    /**
     * Last Name
     */
    searchDbBoulder2017ElectionContributionsLastName?: string;
    /**
     * Location
     */
    searchDbBoulder2017ElectionContributionsLocation?: string;
    /**
     * Match Amount
     */
    searchDbBoulder2017ElectionContributionsMatchAmount?: number;
    /**
     * State
     */
    searchDbBoulder2017ElectionContributionsState?: string;
    /**
     * Street
     */
    searchDbBoulder2017ElectionContributionsStreet?: string;
    /**
     * Ytd Amount
     */
    searchDbBoulder2017ElectionContributionsYtdAmount?: number;
    /**
     * Zip
     */
    searchDbBoulder2017ElectionContributionsZip?: string;
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
export declare class SearchBoulder2017ElectionContributionsResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
