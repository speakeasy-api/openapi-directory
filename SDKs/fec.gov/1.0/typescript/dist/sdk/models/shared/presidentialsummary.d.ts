import { SpeakeasyBase } from "../../../internal/utils";
export declare class PresidentialSummary extends SpeakeasyBase {
    /**
     *
     * @remarks
     * candidate contributions less repayments
     *
     */
    candidateContributionsLessRepayments?: number;
    /**
     *
     * @remarks
     * A unique identifier assigned to each candidate registered with the FEC.
     * If a person runs for several offices, that person will have separate candidate IDs for each office.
     *   -P00000001    All candidates
     *   -P00000002    Democrasts
     *   -P00000003    Republicans
     *
     */
    candidateId?: string;
    /**
     *
     * @remarks
     * Candidate last name
     *
     */
    candidateLastName?: string;
    /**
     * Name of candidate running for office
     */
    candidateName?: string;
    /**
     * Three-letter code for the party affiliated with a candidate or committee. For example, DEM for Democratic Party and REP for Republican Party.
     */
    candidatePartyAffiliation?: string;
    /**
     * Ending cash balance on the most recent filing
     */
    cashOnHandEnd?: number;
    /**
     * The one-letter designation code of the organization:
     *
     * @remarks
     *          - A authorized by a candidate
     *          - J joint fundraising committee
     *          - P principal campaign committee of a candidate
     *          - U unauthorized
     *          - B lobbyist/registrant PAC
     *          - D leadership PAC
     *
     */
    committeeDesignation?: string;
    /**
     *
     * @remarks
     * A unique identifier assigned to each candidate registered with the FEC.
     * If a person runs for several offices, that person will have separate candidate IDs for each office.
     *
     */
    committeeId?: string;
    /**
     * The name of the committee. If a committee changes its name,     the most recent name will be shown. Committee names are not unique. Use committee_id     for looking up records.
     */
    committeeName?: string;
    /**
     * The one-letter type code of the organization:
     *
     * @remarks
     *         - C communication cost
     *         - D delegate
     *         - E electioneering communication
     *         - H House
     *         - I independent expenditure filer (not a committee)
     *         - N PAC - nonqualified
     *         - O independent expenditure-only (super PACs)
     *         - P presidential
     *         - Q PAC - qualified
     *         - S Senate
     *         - U single candidate independent expenditure
     *         - V PAC with non-contribution account, nonqualified
     *         - W PAC with non-contribution account, qualified
     *         - X party, nonqualified
     *         - Y party, qualified
     *         - Z national party non-federal account
     *
     */
    committeeType?: string;
    /**
     * Debts owed by the committee
     */
    debtsOwedByCommittee?: number;
    /**
     *
     * @remarks
     * disbursements less offsets
     *
     */
    disbursementsLessOffsets?: number;
    /**
     * Year of election
     */
    electionYear?: number;
    /**
     *
     * @remarks
     * exempt legal accounting disbursement
     *
     */
    exemptLegalAccountingDisbursement?: number;
    /**
     * Federal funds: Public funding of presidential elections means that qualified presidential candidates                 receive federal government funds to pay for the valid expenses of their political campaigns                 in both the primary and general elections.
     */
    federalFunds?: number;
    /**
     *
     * @remarks
     * fundraising disbursements
     *
     */
    fundraisingDisbursements?: number;
    /**
     *
     * @remarks
     * individual contributions less refunds
     *
     */
    individualContributionsLessRefunds?: number;
    /**
     *
     * @remarks
     * Contributions received
     *
     */
    netReceipts?: number;
    /**
     * Offsets to operating expenditures
     */
    offsetsToOperatingExpenditures?: number;
    /**
     * Total operating expenditures
     */
    operatingExpenditures?: number;
    /**
     * Other disbursements
     */
    otherDisbursements?: number;
    /**
     *
     * @remarks
     * pac contributions less refunds
     *
     */
    pacContributionsLessRefunds?: number;
    /**
     *
     * @remarks
     * party contributions less refunds
     *
     */
    partyContributionsLessRefunds?: number;
    /**
     *
     * @remarks
     * repayments loans made by candidate
     *
     */
    repaymentsLoansMadeByCandidate?: number;
    /**
     *
     * @remarks
     * repayments other loans
     *
     */
    repaymentsOtherLoans?: number;
    /**
     *
     * @remarks
     * Net receipts, in millions
     *
     */
    roundedNetReceipts?: number;
    /**
     *
     * @remarks
     * total contribution refunds
     *
     */
    totalContributionRefunds?: number;
    /**
     *
     * @remarks
     * total loan repayments made
     *
     */
    totalLoanRepaymentsMade?: number;
    /**
     *
     * @remarks
     * transfers from affiliated committees
     *
     */
    transfersFromAffiliatedCommittees?: number;
    /**
     *
     * @remarks
     * transfers to other authorized committees
     *
     */
    transfersToOtherAuthorizedCommittees?: number;
}
