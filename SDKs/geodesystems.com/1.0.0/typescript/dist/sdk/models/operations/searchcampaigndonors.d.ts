import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class SearchCampaignDonorsRequest extends SpeakeasyBase {
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
    searchDbCampaignDonorsAmount?: number;
    /**
     * City
     */
    searchDbCampaignDonorsCity?: string;
    /**
     * Committee
     */
    searchDbCampaignDonorsCommittee?: string;
    /**
     * Date
     */
    searchDbCampaignDonorsDate?: string;
    /**
     * Donor
     */
    searchDbCampaignDonorsDonor?: string;
    /**
     * Employer
     */
    searchDbCampaignDonorsEmployer?: string;
    /**
     * Gender
     */
    searchDbCampaignDonorsGender?: string;
    /**
     * Location
     */
    searchDbCampaignDonorsLocation?: string;
    /**
     * Occupation
     */
    searchDbCampaignDonorsOccupation?: string;
    /**
     * Party
     */
    searchDbCampaignDonorsParty?: string;
    /**
     * State
     */
    searchDbCampaignDonorsState?: string;
    /**
     * Zip Code
     */
    searchDbCampaignDonorsZipCode?: string;
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
export declare class SearchCampaignDonorsResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
