import { SpeakeasyBase } from "../../../internal/utils";
export declare class CommitteeTotals extends SpeakeasyBase {
    allLoansReceived?: number;
    allOtherLoans?: number;
    allocatedFederalElectionLevinShare?: number;
    candidateContribution?: number;
    cashOnHandBeginningPeriod?: number;
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
    committeeDesignationFull?: string;
    /**
     *
     * @remarks
     * A unique identifier assigned to each committee or filer registered with the FEC. In general committee id's begin with the letter C which is followed by eight digits.
     *
     */
    committeeId?: string;
    /**
     * The name of the committee. If a committee changes its name,     the most recent name will be shown. Committee names are not unique. Use committee_id     for looking up records.
     */
    committeeName?: string;
    /**
     *
     * @remarks
     * State of the committee's address as filed on the Form 1
     *
     */
    committeeState?: string;
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
    committeeTypeFull?: string;
    contributionRefunds?: number;
    /**
     * Contribution
     */
    contributions?: number;
    contributionsIeAndPartyExpendituresMadePercent?: number;
    conventionExp?: number;
    coordinatedExpendituresByPartyCommittee?: number;
    coverageEndDate?: Date;
    coverageStartDate?: Date;
    /**
     *
     * @remarks
     * Filter records to only those that are applicable to a given two-year
     * period. This cycle follows the traditional House election cycle and
     * subdivides the presidential and Senate elections into comparable
     * two-year blocks. The cycle begins with an odd year and is named for its
     * ending, even year.
     *
     */
    cycle: number;
    /**
     * Disbursements
     */
    disbursements?: number;
    exemptLegalAccountingDisbursement?: number;
    expPriorYearsSubjectLimits?: number;
    expSubjectLimits?: number;
    fedCandidateCommitteeContributions?: number;
    fedCandidateContributionRefunds?: number;
    fedDisbursements?: number;
    fedElectionActivity?: number;
    fedOperatingExpenditures?: number;
    fedReceipts?: number;
    federalFunds?: number;
    /**
     * The one-letter
     *
     * @remarks
     *     code of the filing frequency:
     *          - A Administratively terminated
     *          - D Debt
     *          - M Monthly filer
     *          - Q Quarterly filer
     *          - T Terminated
     *          - W Waived
     *
     */
    filingFrequency?: string;
    /**
     * The one-letter
     *
     * @remarks
     *     code of the filing frequency:
     *          - A Administratively terminated
     *          - D Debt
     *          - M Monthly filer
     *          - Q Quarterly filer
     *          - T Terminated
     *          - W Waived
     *
     */
    filingFrequencyFull?: string;
    /**
     * The day the FEC received the committee's first Form 1
     */
    firstF1Date?: Date;
    /**
     * The day the FEC received the committee's first filing. This is usually a Form 1 committee registration.
     */
    firstFileDate?: Date;
    fundraisingDisbursements?: number;
    independentExpenditures?: number;
    individualContributions?: number;
    individualContributionsPercent?: number;
    /**
     * Individual itemized contributions are from individuals whose aggregate contributions total over $200 per individual per year. Be aware, some filers choose to itemize donations $200 or less.
     */
    individualItemizedContributions?: number;
    /**
     * Unitemized contributions are made individuals whose aggregate contributions total $200 or less per individual per year. Be aware, some filers choose to itemize donations $200 or less and in that case those donations will appear in the itemized total.
     */
    individualUnitemizedContributions?: number;
    itemizedConventionExp?: number;
    itemizedOtherDisb?: number;
    itemizedOtherIncome?: number;
    itemizedOtherRefunds?: number;
    itemizedRefundsRelatingConventionExp?: number;
    lastBeginningImageNumber?: string;
    lastCashOnHandEndPeriod?: number;
    lastDebtsOwedByCommittee?: number;
    lastDebtsOwedToCommittee?: number;
    lastReportTypeFull?: string;
    lastReportYear?: number;
    loanRepayments?: number;
    loanRepaymentsCandidateLoans?: number;
    loanRepaymentsMade?: number;
    loanRepaymentsOtherLoans?: number;
    loanRepaymentsReceived?: number;
    loans?: number;
    loansAndLoanRepaymentsMade?: number;
    loansAndLoanRepaymentsReceived?: number;
    loansMade?: number;
    loansMadeByCandidate?: number;
    loansReceived?: number;
    loansReceivedFromCandidate?: number;
    netContributions?: number;
    netOperatingExpenditures?: number;
    nonAllocatedFedElectionActivity?: number;
    offsetsToFundraisingExpenditures?: number;
    offsetsToLegalAccounting?: number;
    offsetsToOperatingExpenditures?: number;
    operatingExpenditures?: number;
    operatingExpendituresPercent?: number;
    /**
     * The one-letter code for the kind for organization:
     *
     * @remarks
     *         - C corporation
     *         - L labor organization
     *         - M membership organization
     *         - T trade association
     *         - V cooperative
     *         - W corporation without capital stock
     *
     */
    organizationType?: string;
    /**
     * The one-letter code for the kind for organization:
     *
     * @remarks
     *         - C corporation
     *         - L labor organization
     *         - M membership organization
     *         - T trade association
     *         - V cooperative
     *         - W corporation without capital stock
     *
     */
    organizationTypeFull?: string;
    otherDisbursements?: number;
    otherFedOperatingExpenditures?: number;
    otherFedReceipts?: number;
    otherLoansReceived?: number;
    otherPoliticalCommitteeContributions?: number;
    otherReceipts?: number;
    otherRefunds?: number;
    partyAndOtherCommitteeContributionsPercent?: number;
    /**
     * Party affiliated with a candidate or committee
     */
    partyFull?: string;
    pdfUrl?: string;
    politicalPartyCommitteeContributions?: number;
    receipts?: number;
    refundedIndividualContributions?: number;
    refundedOtherPoliticalCommitteeContributions?: number;
    refundedPoliticalPartyCommitteeContributions?: number;
    refundsRelatingConventionExp?: number;
    repaymentsLoansMadeByCandidate?: number;
    repaymentsOtherLoans?: number;
    reportForm?: string;
    sharedFedActivity?: number;
    sharedFedActivityNonfed?: number;
    sharedFedOperatingExpenditures?: number;
    sharedNonfedOperatingExpenditures?: number;
    totalExpSubjectLimits?: number;
    totalIndependentContributions?: number;
    totalIndependentExpenditures?: number;
    totalOffsetsToOperatingExpenditures?: number;
    totalTransfers?: number;
    transactionCoverageDate?: Date;
    transfersFromAffiliatedCommittee?: number;
    transfersFromAffiliatedParty?: number;
    transfersFromNonfedAccount?: number;
    transfersFromNonfedLevin?: number;
    transfersFromOtherAuthorizedCommittee?: number;
    transfersToAffiliatedCommittee?: number;
    transfersToOtherAuthorizedCommittee?: number;
    /**
     * Name of the Committee's treasurer. If multiple treasurers for the committee, the most recent treasurer will be shown.
     */
    treasurerName?: string;
    unitemizedConventionExp?: number;
    unitemizedOtherDisb?: number;
    unitemizedOtherIncome?: number;
    unitemizedOtherRefunds?: number;
    unitemizedRefundsRelatingConventionExp?: number;
}
