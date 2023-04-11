import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class SearchFecPacsRequest extends SpeakeasyBase {
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
     * Beginning Cash
     */
    searchDbFecPacsBeginningCash?: number;
    /**
     * Candidate Loan Repayments
     */
    searchDbFecPacsCandidateLoanRepayments?: number;
    /**
     * Committee
     */
    searchDbFecPacsCommittee?: string;
    /**
     * Contributions From Candidate
     */
    searchDbFecPacsContributionsFromCandidate?: number;
    /**
     * Contributions From Individuals
     */
    searchDbFecPacsContributionsFromIndividuals?: number;
    /**
     * Contributions From Other Committees
     */
    searchDbFecPacsContributionsFromOtherCommittees?: number;
    /**
     * Contributions To Other Committee
     */
    searchDbFecPacsContributionsToOtherCommittee?: number;
    /**
     * Ending Cash
     */
    searchDbFecPacsEndingCash?: number;
    /**
     * Loan Repayments
     */
    searchDbFecPacsLoanRepayments?: number;
    /**
     * Loans From Candidate
     */
    searchDbFecPacsLoansFromCandidate?: number;
    /**
     * Refends To Othercommittees
     */
    searchDbFecPacsRefendsToOthercommittees?: number;
    /**
     * Refunds To Individuals
     */
    searchDbFecPacsRefundsToIndividuals?: number;
    /**
     * Total Distributions
     */
    searchDbFecPacsTotalDistributions?: number;
    /**
     * Total Loans Received
     */
    searchDbFecPacsTotalLoansReceived?: number;
    /**
     * Total Receipts
     */
    searchDbFecPacsTotalReceipts?: number;
    /**
     * Trans From Affiliates
     */
    searchDbFecPacsTransFromAffiliates?: number;
    /**
     * Transfers To Affiliates
     */
    searchDbFecPacsTransfersToAffiliates?: number;
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
export declare class SearchFecPacsResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
