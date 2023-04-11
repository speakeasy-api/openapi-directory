import { SpeakeasyBase } from "../../../internal/utils";
export declare class CommitteeReports extends SpeakeasyBase {
    aggregateAmountPersonalContributionsGeneral?: number;
    aggregateContributionsPersonalFundsPrimary?: number;
    allLoansReceivedPeriod?: number;
    allLoansReceivedYtd?: number;
    allOtherLoansPeriod?: number;
    allOtherLoansYtd?: number;
    allocatedFederalElectionLevinSharePeriod?: number;
    /**
     *
     * @remarks
     * The first value in the chain is the original filing.  The ordering in the chain reflects the order the
     * amendments were filed up to the amendment being inspected.
     *
     */
    amendmentChain?: number[];
    amendmentIndicator?: string;
    amendmentIndicatorFull?: string;
    beginningImageNumber?: string;
    calendarYtd?: number;
    candidateContributionPeriod?: number;
    candidateContributionYtd?: number;
    cashOnHandBeginningCalendarYtd?: number;
    /**
     * Balance for the committee at the start of the two-year period
     */
    cashOnHandBeginningPeriod?: number;
    cashOnHandCloseYtd?: number;
    /**
     * Ending cash balance on the most recent filing
     */
    cashOnHandEndPeriod?: number;
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
    committeeType?: string;
    coordinatedExpendituresByPartyCommitteePeriod?: number;
    coordinatedExpendituresByPartyCommitteeYtd?: number;
    /**
     * Ending date of the reporting period
     */
    coverageEndDate?: Date;
    /**
     * Beginning date of the reporting period
     */
    coverageStartDate?: Date;
    csvUrl?: string;
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
    cycle?: number;
    /**
     * Debts owed by the committee
     */
    debtsOwedByCommittee?: number;
    /**
     * Debts owed to the committee
     */
    debtsOwedToCommittee?: number;
    documentDescription?: string;
    endImageNumber?: string;
    exemptLegalAccountingDisbursementPeriod?: number;
    exemptLegalAccountingDisbursementYtd?: number;
    expenditureSubjectToLimits?: number;
    fecFileId?: string;
    fecUrl?: string;
    fedCandidateCommitteeContributionRefundsYtd?: number;
    fedCandidateCommitteeContributionsPeriod?: number;
    fedCandidateCommitteeContributionsYtd?: number;
    fedCandidateContributionRefundsPeriod?: number;
    federalFundsPeriod?: number;
    federalFundsYtd?: number;
    fileNumber?: number;
    fundraisingDisbursementsPeriod?: number;
    fundraisingDisbursementsYtd?: number;
    grossReceiptAuthorizedCommitteeGeneral?: number;
    grossReceiptAuthorizedCommitteePrimary?: number;
    grossReceiptMinusPersonalContributionGeneral?: number;
    grossReceiptMinusPersonalContributionsPrimary?: number;
    /**
     *
     * @remarks
     * HTML link to the filing.
     *
     */
    htmlUrl?: string;
    independentContributionsPeriod?: number;
    independentExpendituresPeriod?: number;
    independentExpendituresYtd?: number;
    /**
     * Individual itemized contributions are from individuals whose aggregate contributions total over $200 per individual per year. Be aware, some filers choose to itemize donations $200 or less. total for the reporting period
     */
    individualItemizedContributionsPeriod?: number;
    /**
     * Individual itemized contributions are from individuals whose aggregate contributions total over $200 per individual per year. Be aware, some filers choose to itemize donations $200 or less. total for the year to date
     */
    individualItemizedContributionsYtd?: number;
    /**
     * Unitemized contributions are made individuals whose aggregate contributions total $200 or less per individual per year. Be aware, some filers choose to itemize donations $200 or less and in that case those donations will appear in the itemized total. total for the reporting period
     */
    individualUnitemizedContributionsPeriod?: number;
    /**
     * Unitemized contributions are made individuals whose aggregate contributions total $200 or less per individual per year. Be aware, some filers choose to itemize donations $200 or less and in that case those donations will appear in the itemized total. total for the year to date
     */
    individualUnitemizedContributionsYtd?: number;
    /**
     *
     * @remarks
     * False indicates that a report is the most recent. True indicates that the report has been superseded by an amendment.
     *
     */
    isAmended?: boolean;
    itemsOnHandLiquidated?: number;
    loanRepaymentsCandidateLoansPeriod?: number;
    loanRepaymentsCandidateLoansYtd?: number;
    loanRepaymentsMadePeriod?: number;
    loanRepaymentsMadeYtd?: number;
    loanRepaymentsOtherLoansPeriod?: number;
    loanRepaymentsOtherLoansYtd?: number;
    loanRepaymentsReceivedPeriod?: number;
    loanRepaymentsReceivedYtd?: number;
    loansMadeByCandidatePeriod?: number;
    loansMadeByCandidateYtd?: number;
    loansMadePeriod?: number;
    loansMadeYtd?: number;
    loansReceivedFromCandidatePeriod?: number;
    loansReceivedFromCandidateYtd?: number;
    /**
     * The method used to file with the FEC, either electronic or on paper.
     */
    meansFiled?: string;
    /**
     *
     * @remarks
     * Report is either new or is the most-recently filed amendment
     *
     */
    mostRecent?: boolean;
    mostRecentFileNumber?: number;
    netContributionsCycleToDate?: number;
    netContributionsPeriod?: number;
    netContributionsYtd?: number;
    netOperatingExpendituresCycleToDate?: number;
    netOperatingExpendituresPeriod?: number;
    netOperatingExpendituresYtd?: number;
    nonAllocatedFedElectionActivityPeriod?: number;
    nonAllocatedFedElectionActivityYtd?: number;
    nonfedShareAllocatedDisbursementsPeriod?: number;
    offsetsToFundraisingExpendituresPeriod?: number;
    offsetsToFundraisingExpendituresYtd?: number;
    offsetsToLegalAccountingPeriod?: number;
    offsetsToLegalAccountingYtd?: number;
    /**
     * Offsets to operating expenditures total for the reporting period
     */
    offsetsToOperatingExpendituresPeriod?: number;
    /**
     * Offsets to operating expenditures total for the year to date
     */
    offsetsToOperatingExpendituresYtd?: number;
    operatingExpendituresPeriod?: number;
    operatingExpendituresYtd?: number;
    /**
     * Other disbursements total for the reporting period
     */
    otherDisbursementsPeriod?: number;
    /**
     * Other disbursements total for the year to date
     */
    otherDisbursementsYtd?: number;
    otherFedOperatingExpendituresPeriod?: number;
    otherFedOperatingExpendituresYtd?: number;
    otherFedReceiptsPeriod?: number;
    otherFedReceiptsYtd?: number;
    otherLoansReceivedPeriod?: number;
    otherLoansReceivedYtd?: number;
    /**
     * Other committees contributions total for the reporting period
     */
    otherPoliticalCommitteeContributionsPeriod?: number;
    /**
     * Other committees contributions total for the year to date
     */
    otherPoliticalCommitteeContributionsYtd?: number;
    otherReceiptsPeriod?: number;
    otherReceiptsYtd?: number;
    pdfUrl?: string;
    /**
     * Party committees contributions total for the reporting period
     */
    politicalPartyCommitteeContributionsPeriod?: number;
    /**
     * Party committees contributions total for the year to date
     */
    politicalPartyCommitteeContributionsYtd?: number;
    previousFileNumber?: number;
    /**
     * Date the FEC received the electronic or paper record
     */
    receiptDate?: Date;
    /**
     * Individual refunds total for the reporting period
     */
    refundedIndividualContributionsPeriod?: number;
    /**
     * Individual refunds total for the year to date
     */
    refundedIndividualContributionsYtd?: number;
    /**
     * Other committee refunds total for the reporting period
     */
    refundedOtherPoliticalCommitteeContributionsPeriod?: number;
    /**
     * Other committee refunds total for the year to date
     */
    refundedOtherPoliticalCommitteeContributionsYtd?: number;
    /**
     * Political party refunds total for the reporting period
     */
    refundedPoliticalPartyCommitteeContributionsPeriod?: number;
    /**
     * Political party refunds total for the year to date
     */
    refundedPoliticalPartyCommitteeContributionsYtd?: number;
    refundsTotalContributionsColTotalYtd?: number;
    repaymentsLoansMadeByCandidatePeriod?: number;
    repaymentsLoansMadeCandidateYtd?: number;
    repaymentsOtherLoansPeriod?: number;
    repaymentsOtherLoansYtd?: number;
    reportForm?: string;
    /**
     * Name of report where the underlying data comes from:
     *
     * @remarks
     *     - 10D Pre-Election
     *     - 10G Pre-General
     *     - 10P Pre-Primary
     *     - 10R Pre-Run-Off
     *     - 10S Pre-Special
     *     - 12C Pre-Convention
     *     - 12G Pre-General
     *     - 12P Pre-Primary
     *     - 12R Pre-Run-Off
     *     - 12S Pre-Special
     *     - 30D Post-Election
     *     - 30G Post-General
     *     - 30P Post-Primary
     *     - 30R Post-Run-Off
     *     - 30S Post-Special
     *     - 60D Post-Convention
     *     - M1  January Monthly
     *     - M10 October Monthly
     *     - M11 November Monthly
     *     - M12 December Monthly
     *     - M2  February Monthly
     *     - M3  March Monthly
     *     - M4  April Monthly
     *     - M5  May Monthly
     *     - M6  June Monthly
     *     - M7  July Monthly
     *     - M8  August Monthly
     *     - M9  September Monthly
     *     - MY  Mid-Year Report
     *     - Q1  April Quarterly
     *     - Q2  July Quarterly
     *     - Q3  October Quarterly
     *     - TER Termination Report
     *     - YE  Year-End
     *     - ADJ COMP ADJUST AMEND
     *     - CA  COMPREHENSIVE AMEND
     *     - 90S Post Inaugural Supplement
     *     - 90D Post Inaugural
     *     - 48  48 Hour Notification
     *     - 24  24 Hour Notification
     *     - M7S July Monthly/Semi-Annual
     *     - MSA Monthly Semi-Annual (MY)
     *     - MYS Monthly Year End/Semi-Annual
     *     - Q2S July Quarterly/Semi-Annual
     *     - QSA Quarterly Semi-Annual (MY)
     *     - QYS Quarterly Year End/Semi-Annual
     *     - QYE Quarterly Semi-Annual (YE)
     *     - QMS Quarterly Mid-Year/ Semi-Annual
     *     - MSY Monthly Semi-Annual (YE)
     *
     */
    reportType?: string;
    /**
     * Name of report where the underlying data comes from:
     *
     * @remarks
     *     - 10D Pre-Election
     *     - 10G Pre-General
     *     - 10P Pre-Primary
     *     - 10R Pre-Run-Off
     *     - 10S Pre-Special
     *     - 12C Pre-Convention
     *     - 12G Pre-General
     *     - 12P Pre-Primary
     *     - 12R Pre-Run-Off
     *     - 12S Pre-Special
     *     - 30D Post-Election
     *     - 30G Post-General
     *     - 30P Post-Primary
     *     - 30R Post-Run-Off
     *     - 30S Post-Special
     *     - 60D Post-Convention
     *     - M1  January Monthly
     *     - M10 October Monthly
     *     - M11 November Monthly
     *     - M12 December Monthly
     *     - M2  February Monthly
     *     - M3  March Monthly
     *     - M4  April Monthly
     *     - M5  May Monthly
     *     - M6  June Monthly
     *     - M7  July Monthly
     *     - M8  August Monthly
     *     - M9  September Monthly
     *     - MY  Mid-Year Report
     *     - Q1  April Quarterly
     *     - Q2  July Quarterly
     *     - Q3  October Quarterly
     *     - TER Termination Report
     *     - YE  Year-End
     *     - ADJ COMP ADJUST AMEND
     *     - CA  COMPREHENSIVE AMEND
     *     - 90S Post Inaugural Supplement
     *     - 90D Post Inaugural
     *     - 48  48 Hour Notification
     *     - 24  24 Hour Notification
     *     - M7S July Monthly/Semi-Annual
     *     - MSA Monthly Semi-Annual (MY)
     *     - MYS Monthly Year End/Semi-Annual
     *     - Q2S July Quarterly/Semi-Annual
     *     - QSA Quarterly Semi-Annual (MY)
     *     - QYS Quarterly Year End/Semi-Annual
     *     - QYE Quarterly Semi-Annual (YE)
     *     - QMS Quarterly Mid-Year/ Semi-Annual
     *     - MSY Monthly Semi-Annual (YE)
     *
     */
    reportTypeFull?: string;
    /**
     *
     * @remarks
     * Forms with coverage date -
     *     year from the coverage ending date.
     * Forms without coverage date -
     *     year from the receipt date.
     *
     */
    reportYear?: number;
    sharedFedActivityNonfedYtd?: number;
    sharedFedActivityPeriod?: number;
    sharedFedActivityYtd?: number;
    sharedFedOperatingExpendituresPeriod?: number;
    sharedFedOperatingExpendituresYtd?: number;
    sharedNonfedOperatingExpendituresPeriod?: number;
    sharedNonfedOperatingExpendituresYtd?: number;
    subtotalPeriod?: number;
    subtotalSummaryPagePeriod?: number;
    subtotalSummaryPeriod?: number;
    subtotalSummaryYtd?: number;
    totalContributionRefundsColTotalPeriod?: number;
    /**
     * Total contribution refunds total for the reporting period
     */
    totalContributionRefundsPeriod?: number;
    /**
     * Total contribution refunds total for the year to date
     */
    totalContributionRefundsYtd?: number;
    totalContributionsColumnTotalPeriod?: number;
    /**
     * Contribution total for the reporting period
     */
    totalContributionsPeriod?: number;
    /**
     * Contribution total for the year to date
     */
    totalContributionsYtd?: number;
    /**
     * Disbursements total for the reporting period
     */
    totalDisbursementsPeriod?: number;
    /**
     * Disbursements total for the year to date
     */
    totalDisbursementsYtd?: number;
    totalFedDisbursementsPeriod?: number;
    totalFedDisbursementsYtd?: number;
    totalFedElectionActivityPeriod?: number;
    totalFedElectionActivityYtd?: number;
    totalFedOperatingExpendituresPeriod?: number;
    totalFedOperatingExpendituresYtd?: number;
    totalFedReceiptsPeriod?: number;
    totalFedReceiptsYtd?: number;
    /**
     * Individual contributions total for the reporting period
     */
    totalIndividualContributionsPeriod?: number;
    /**
     * Individual contributions total for the year to date
     */
    totalIndividualContributionsYtd?: number;
    totalLoanRepaymentsMadePeriod?: number;
    totalLoanRepaymentsMadeYtd?: number;
    totalLoansReceivedPeriod?: number;
    totalLoansReceivedYtd?: number;
    totalNonfedTransfersPeriod?: number;
    totalNonfedTransfersYtd?: number;
    totalOffsetsToOperatingExpendituresPeriod?: number;
    totalOffsetsToOperatingExpendituresYtd?: number;
    totalOperatingExpendituresPeriod?: number;
    totalOperatingExpendituresYtd?: number;
    totalPeriod?: number;
    /**
     * Anything of value (money, goods, services or property) received by a political committee total for the reporting period
     */
    totalReceiptsPeriod?: number;
    /**
     * Anything of value (money, goods, services or property) received by a political committee total for the year to date
     */
    totalReceiptsYtd?: number;
    totalYtd?: number;
    transfersFromAffiliatedCommitteePeriod?: number;
    transfersFromAffiliatedCommitteeYtd?: number;
    transfersFromAffiliatedPartyPeriod?: number;
    transfersFromAffiliatedPartyYtd?: number;
    transfersFromNonfedAccountPeriod?: number;
    transfersFromNonfedAccountYtd?: number;
    transfersFromNonfedLevinPeriod?: number;
    transfersFromNonfedLevinYtd?: number;
    transfersFromOtherAuthorizedCommitteePeriod?: number;
    transfersFromOtherAuthorizedCommitteeYtd?: number;
    transfersToAffiliatedCommitteePeriod?: number;
    transfersToAffilitatedCommitteesYtd?: number;
    transfersToOtherAuthorizedCommitteePeriod?: number;
    transfersToOtherAuthorizedCommitteeYtd?: number;
}
