import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class SearchBoulderCampaignContributionsRequest extends SpeakeasyBase {
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
     * Amended Date
     */
    searchDbBoulderCampaignContributionsAmendedDate?: string;
    /**
     * Anonymous
     */
    searchDbBoulderCampaignContributionsAnonymous?: string;
    /**
     * Candidate
     */
    searchDbBoulderCampaignContributionsCandidate?: string;
    /**
     * City
     */
    searchDbBoulderCampaignContributionsCity?: string;
    /**
     * Committee
     */
    searchDbBoulderCampaignContributionsCommittee?: string;
    /**
     * Committee Num
     */
    searchDbBoulderCampaignContributionsCommitteeNum?: string;
    /**
     * Contribution
     */
    searchDbBoulderCampaignContributionsContribution?: number;
    /**
     * Contribution Type
     */
    searchDbBoulderCampaignContributionsContributionType?: string;
    /**
     * Filing Date
     */
    searchDbBoulderCampaignContributionsFilingDate?: string;
    /**
     * First Name
     */
    searchDbBoulderCampaignContributionsFirstName?: string;
    /**
     * From Candidate
     */
    searchDbBoulderCampaignContributionsFromCandidate?: string;
    /**
     * Last Name
     */
    searchDbBoulderCampaignContributionsLastName?: string;
    /**
     * Match
     */
    searchDbBoulderCampaignContributionsMatch?: number;
    /**
     * Official Filing
     */
    searchDbBoulderCampaignContributionsOfficialFiling?: string;
    /**
     * State
     */
    searchDbBoulderCampaignContributionsState?: string;
    /**
     * Street
     */
    searchDbBoulderCampaignContributionsStreet?: string;
    /**
     * Transaction Date
     */
    searchDbBoulderCampaignContributionsTransactionDate?: string;
    /**
     * Type
     */
    searchDbBoulderCampaignContributionsType?: string;
    /**
     * Zip
     */
    searchDbBoulderCampaignContributionsZip?: string;
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
export declare class SearchBoulderCampaignContributionsResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
