import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
/**
 * Data supporting fec.gov's presidential map.
 *
 * @remarks
 *
 *  For more information about the presidential map data available to download from fec.gov, please visit: https://www.fec.gov/campaign-finance-data/presidential-map-data/
 */
export declare class Presidential {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     *
     * Net receipts per candidate.
     *
     * Filter with `contributor_state='US'` for national totals
     *
     */
    getPresidentialContributionsByCandidate(req: operations.GetPresidentialContributionsByCandidateRequest, config?: AxiosRequestConfig): Promise<operations.GetPresidentialContributionsByCandidateResponse>;
    /**
     *
     * Contribution receipts by size per candidate.
     *
     * Filter by candidate_id, election_year and/or size
     *
     */
    getPresidentialContributionsBySize(req: operations.GetPresidentialContributionsBySizeRequest, config?: AxiosRequestConfig): Promise<operations.GetPresidentialContributionsBySizeResponse>;
    /**
     *
     * Contribution receipts by state per candidate.
     *
     * Filter by candidate_id and/or election_year
     *
     */
    getPresidentialContributionsByState(req: operations.GetPresidentialContributionsByStateRequest, config?: AxiosRequestConfig): Promise<operations.GetPresidentialContributionsByStateResponse>;
    /**
     *
     * Coverage end date per candidate.
     *
     * Filter by candidate_id and/or election_year
     *
     */
    getPresidentialCoverageEndDate(req: operations.GetPresidentialCoverageEndDateRequest, config?: AxiosRequestConfig): Promise<operations.GetPresidentialCoverageEndDateResponse>;
    /**
     *
     * Financial summary per candidate.
     *
     * Filter by candidate_id and/or election_year
     *
     */
    getPresidentialFinancialSummary(req: operations.GetPresidentialFinancialSummaryRequest, config?: AxiosRequestConfig): Promise<operations.GetPresidentialFinancialSummaryResponse>;
}
