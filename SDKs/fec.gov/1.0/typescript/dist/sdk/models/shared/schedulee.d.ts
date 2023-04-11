import { SpeakeasyBase } from "../../../internal/utils";
import { CommitteeHistory } from "./committeehistory";
export declare class ScheduleE extends SpeakeasyBase {
    actionCode?: string;
    actionCodeFull?: string;
    /**
     * Amendent types:
     *
     * @remarks
     *     -N   new
     *     -A   amendment
     *     -T   terminated
     *     -C   consolidated
     *     -M   multi-candidate
     *     -S   secondary
     *
     * NULL might be new or amendment. If amendment indicator is null and the filings is the first or first in a chain treat it as if it was a new. If it is not the first or first in a chain then treat the filing as an amendment.
     *
     */
    amendmentIndicator?: string;
    /**
     *
     * @remarks
     * Number of times the report has been amended.
     *
     */
    amendmentNumber?: number;
    backReferenceScheduleName?: string;
    backReferenceTransactionId?: string;
    candidate?: string;
    candidateFirstName?: string;
    candidateId?: string;
    candidateLastName?: string;
    candidateMiddleName?: string;
    /**
     * Name of candidate running for office
     */
    candidateName?: string;
    /**
     * Federal office candidate runs for: H, S or P
     */
    candidateOffice?: string;
    /**
     * Two-digit US House distirict of the office the candidate is running for. Presidential, Senate and House at-large candidates will have District 00.
     */
    candidateOfficeDistrict?: string;
    /**
     * US state or territory
     */
    candidateOfficeState?: string;
    /**
     * Three-letter code for the party affiliated with a candidate or committee. For example, DEM for Democratic Party and REP for Republican Party.
     */
    candidateParty?: string;
    candidatePrefix?: string;
    candidateSuffix?: string;
    categoryCode?: string;
    categoryCodeFull?: string;
    committee?: CommitteeHistory;
    /**
     *
     * @remarks
     * A unique identifier assigned to each committee or filer registered with the FEC. In general committee id's begin with the letter C which is followed by eight digits.
     *
     */
    committeeId?: string;
    conduitCommitteeCity?: string;
    conduitCommitteeId?: string;
    conduitCommitteeName?: string;
    conduitCommitteeState?: string;
    conduitCommitteeStreet1?: string;
    conduitCommitteeStreet2?: string;
    conduitCommitteeZip?: number;
    disseminationDate?: Date;
    /**
     * Election type
     *
     * @remarks
     * Convention, Primary,
     * General, Special,
     * Runoff etc.
     *
     */
    electionType?: string;
    /**
     * Election type
     *
     * @remarks
     * Convention, Primary,
     * General, Special,
     * Runoff etc.
     *
     */
    electionTypeFull?: string;
    expenditureAmount?: number;
    expenditureDate?: Date;
    expenditureDescription?: string;
    fileNumber?: number;
    filerFirstName?: string;
    filerLastName?: string;
    filerMiddleName?: string;
    filerPrefix?: string;
    filerSuffix?: string;
    filingDate?: Date;
    filingForm?: string;
    imageNumber?: string;
    independentSignDate?: Date;
    independentSignName?: string;
    isNotice?: boolean;
    lineNumber?: string;
    linkId?: number;
    memoCode?: string;
    memoCodeFull?: string;
    memoText?: string;
    memoedSubtotal?: boolean;
    /**
     *
     * @remarks
     * Report is either new or is the most-recently filed amendment
     *
     */
    mostRecent?: boolean;
    notaryCommissionExpirationDate?: Date;
    notarySignDate?: Date;
    notarySignName?: string;
    officeTotalYtd?: number;
    originalSubId?: string;
    payeeCity?: string;
    payeeFirstName?: string;
    payeeLastName?: string;
    payeeMiddleName?: string;
    payeeName?: string;
    payeePrefix?: string;
    payeeState?: string;
    payeeStreet1?: string;
    payeeStreet2?: string;
    payeeSuffix?: string;
    payeeZip?: string;
    pdfUrl?: string;
    previousFileNumber?: number;
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
    subId?: string;
    supportOpposeIndicator?: string;
    transactionId?: string;
}
