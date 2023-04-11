import { SpeakeasyBase } from "../../../internal/utils";
import { CommitteeHistory } from "./committeehistory";
export declare class ScheduleB extends SpeakeasyBase {
    amendmentIndicator?: string;
    amendmentIndicatorDesc?: string;
    backReferenceScheduleId?: string;
    backReferenceTransactionId?: string;
    beneficiaryCommitteeName?: string;
    candidateFirstName?: string;
    /**
     *
     * @remarks
     * A unique identifier assigned to each candidate registered with the FEC.
     * If a person runs for several offices, that person will have separate candidate IDs for each office.
     *
     */
    candidateId?: string;
    candidateLastName?: string;
    candidateMiddleName?: string;
    /**
     * Name of candidate running for office
     */
    candidateName?: string;
    candidateOffice?: string;
    candidateOfficeDescription?: string;
    candidateOfficeDistrict?: string;
    candidateOfficeState?: string;
    candidateOfficeStateFull?: string;
    candidatePrefix?: string;
    candidateSuffix?: string;
    categoryCode?: string;
    categoryCodeFull?: string;
    commDt?: Date;
    committee?: CommitteeHistory;
    /**
     *
     * @remarks
     * A unique identifier assigned to each committee or filer registered with the FEC. In general committee id's begin with the letter C which is followed by eight digits.
     *
     */
    committeeId?: string;
    conduitCommitteeCity?: string;
    conduitCommitteeName?: string;
    conduitCommitteeState?: string;
    conduitCommitteeStreet1?: string;
    conduitCommitteeStreet2?: string;
    conduitCommitteeZip?: number;
    disbursementAmount?: number;
    disbursementDate?: Date;
    disbursementDescription?: string;
    disbursementPurposeCategory?: string;
    disbursementType?: string;
    disbursementTypeDescription?: string;
    electionType?: string;
    electionTypeFull?: string;
    entityType?: string;
    entityTypeDesc?: string;
    fecElectionTypeDesc?: string;
    fecElectionYear?: string;
    fileNumber?: number;
    filingForm?: string;
    imageNumber?: string;
    lineNumber?: string;
    lineNumberLabel?: string;
    linkId?: number;
    loadDate?: Date;
    memoCode?: string;
    memoCodeFull?: string;
    memoText?: string;
    memoedSubtotal?: boolean;
    nationalCommitteeNonfederalAccount?: string;
    originalSubId?: string;
    payeeEmployer?: string;
    payeeFirstName?: string;
    payeeLastName?: string;
    payeeMiddleName?: string;
    payeeOccupation?: string;
    payeePrefix?: string;
    payeeSuffix?: string;
    pdfUrl?: string;
    recipientCity?: string;
    recipientCommittee?: CommitteeHistory;
    recipientCommitteeId?: string;
    recipientName?: string;
    recipientState?: string;
    recipientZip?: string;
    refDispExcessFlg?: string;
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
     *
     * @remarks
     * Forms with coverage date -
     *     year from the coverage ending date.
     * Forms without coverage date -
     *     year from the receipt date.
     *
     */
    reportYear?: number;
    scheduleType?: string;
    scheduleTypeFull?: string;
    semiAnnualBundledRefund?: number;
    spenderCommitteeDesignation?: string;
    spenderCommitteeOrgType?: string;
    spenderCommitteeType?: string;
    subId?: string;
    transactionId?: string;
    /**
     *
     * @remarks
     * This is a two-year period that is derived from the year a transaction took place in the
     * Itemized Schedule A and Schedule B tables. In cases where we have the date of the transaction
     * (contribution_receipt_date in schedules/schedule_a, disbursement_date in schedules/schedule_b)
     * the two_year_transaction_period is named after the ending, even-numbered year. If we do not
     * have the date  of the transaction, we fall back to using the report year (report_year in both
     * tables) instead,  making the same cycle adjustment as necessary. If no transaction year is
     * specified, the results default to the most current cycle.
     *
     */
    twoYearTransactionPeriod?: number;
    unusedRecipientCommitteeId?: string;
}
