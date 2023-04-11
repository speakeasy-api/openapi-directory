import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class SearchFeccandidatesRequest extends SpeakeasyBase {
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
    searchDbFeccandidatesBeginningCash?: number;
    /**
     * Candidate Loan Repayments
     */
    searchDbFeccandidatesCandidateLoanRepayments?: number;
    /**
     * Committee Refunds
     */
    searchDbFeccandidatesCommitteeRefunds?: number;
    /**
     * Contributions From Candidate
     */
    searchDbFeccandidatesContributionsFromCandidate?: number;
    /**
     * Contributions From Other Committees
     */
    searchDbFeccandidatesContributionsFromOtherCommittees?: number;
    /**
     * Contributions From Party Committees
     */
    searchDbFeccandidatesContributionsFromPartyCommittees?: number;
    /**
     * Coverage End Date
     */
    searchDbFeccandidatesCoverageEndDate?: string;
    /**
     * Debts Owed By
     */
    searchDbFeccandidatesDebtsOwedBy?: number;
    /**
     * District
     */
    searchDbFeccandidatesDistrict?: string;
    /**
     * Ending Cash
     */
    searchDbFeccandidatesEndingCash?: number;
    /**
     * Gender
     */
    searchDbFeccandidatesGender?: string;
    /**
     * Individual Refunds
     */
    searchDbFeccandidatesIndividualRefunds?: number;
    /**
     * Loans From Candidates
     */
    searchDbFeccandidatesLoansFromCandidates?: number;
    /**
     * Name
     */
    searchDbFeccandidatesName?: string;
    /**
     * Other Loan Repayments
     */
    searchDbFeccandidatesOtherLoanRepayments?: number;
    /**
     * Other Loans
     */
    searchDbFeccandidatesOtherLoans?: number;
    /**
     * Party
     */
    searchDbFeccandidatesParty?: string;
    /**
     * State
     */
    searchDbFeccandidatesState?: string;
    /**
     * Total Disbursements
     */
    searchDbFeccandidatesTotalDisbursements?: number;
    /**
     * Total Indivual Contributions
     */
    searchDbFeccandidatesTotalIndivualContributions?: number;
    /**
     * Total Receipts
     */
    searchDbFeccandidatesTotalReceipts?: number;
    /**
     * Transfers From Committees
     */
    searchDbFeccandidatesTransfersFromCommittees?: number;
    /**
     * Transfers To Committees
     */
    searchDbFeccandidatesTransfersToCommittees?: number;
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
export declare class SearchFeccandidatesResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
