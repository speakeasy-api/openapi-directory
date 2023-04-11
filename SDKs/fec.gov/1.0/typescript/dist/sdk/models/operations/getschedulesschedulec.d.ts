import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetSchedulesScheduleCRequest extends SpeakeasyBase {
    /**
     *
     * @remarks
     * API key for https://api.data.gov. Get one at https://api.data.gov/signup.
     *
     */
    apiKey: string;
    /**
     * Name of candidate running for office
     */
    candidateName?: string[];
    /**
     *
     * @remarks
     * A unique identifier assigned to each committee or filer registered with the FEC. In general committee id's begin with the letter C which is followed by eight digits.
     *
     */
    committeeId?: string[];
    /**
     *
     * @remarks
     * An unique identifier for each page where the electronic or paper filing is reported.
     *
     */
    imageNumber?: string[];
    /**
     * Index of last result from previous page
     */
    lastIndex?: number;
    /**
     *
     * @remarks
     * Filter for form and line number using the following format:
     * `FORM-LINENUMBER`.  For example an argument such as `F3X-16` would filter
     * down to all entries from form `F3X` line number `16`.
     *
     */
    lineNumber?: string;
    /**
     * Source of the loan (i.e., bank loan, brokerage account, credit card, home equity line of credit,               other line of credit, or personal funds of the candidate
     */
    loanSourceName?: string[];
    /**
     *
     * @remarks
     * Filter for all amounts less than a value.
     *
     */
    maxAmount?: string;
    /**
     * Maxium image number of the page where the schedule item is reported
     */
    maxImageNumber?: string;
    /**
     *
     * @remarks
     * Maximum incurred date
     *
     */
    maxIncurredDate?: Date;
    /**
     *
     * @remarks
     * Maximum payment to date
     *
     */
    maxPaymentToDate?: number;
    /**
     *
     * @remarks
     * Filter for all amounts greater than a value.
     *
     */
    minAmount?: string;
    /**
     * Minium image number of the page where the schedule item is reported
     */
    minImageNumber?: string;
    /**
     *
     * @remarks
     * Minimum incurred date
     *
     */
    minIncurredDate?: Date;
    /**
     *
     * @remarks
     * Minimum payment to date
     *
     */
    minPaymentToDate?: number;
    /**
     * For paginating through results, starting at page 1
     */
    page?: number;
    /**
     * The number of results returned per page. Defaults to 20.
     */
    perPage?: number;
    /**
     * Provide a field to sort by. Use `-` for descending order.
     *
     * @remarks
     *
     */
    sort?: string;
    /**
     * Hide null values on sorted column(s).
     */
    sortHideNull?: boolean;
    /**
     * Toggle that filters out all rows having sort column that is non-null
     */
    sortNullOnly?: boolean;
    /**
     * Toggle that sorts null values last
     */
    sortNullsLast?: boolean;
}
export declare class GetSchedulesScheduleCDefaultApplicationJSONResults extends SpeakeasyBase {
    actionCode?: string;
    actionCodeFull?: string;
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
    /**
     * Two-digit US House distirict of the office the candidate is running for. Presidential, Senate and House at-large candidates will have District 00.
     */
    candidateOfficeDistrict?: string;
    candidateOfficeFull?: string;
    candidateOfficeState?: string;
    candidateOfficeStateFull?: string;
    candidatePrefix?: string;
    candidateSuffix?: string;
    committee?: shared.CommitteeHistory;
    /**
     *
     * @remarks
     * A unique identifier assigned to each committee or filer registered with the FEC. In general committee id's begin with the letter C which is followed by eight digits.
     *
     */
    committeeId?: string;
    cycle?: number;
    dueDateTerms?: string;
    electionType?: string;
    electionTypeFull?: string;
    entityType?: string;
    entityTypeFull?: string;
    fecCommitteeId?: string;
    fecElectionTypeFull?: string;
    fecElectionTypeYear?: string;
    fileNumber?: number;
    filingForm?: string;
    /**
     *
     * @remarks
     * An unique identifier for each page where the electronic or paper filing is reported.
     *
     */
    imageNumber?: string;
    incurredDate?: Date;
    interestRateTerms?: string;
    lineNumber?: string;
    linkId?: number;
    loadDate?: Date;
    loanBalance?: number;
    loanSourceCity?: string;
    loanSourceFirstName?: string;
    loanSourceLastName?: string;
    loanSourceMiddleName?: string;
    /**
     * Source of the loan (i.e., bank loan, brokerage account, credit card, home equity line of credit,               other line of credit, or personal funds of the candidate
     */
    loanSourceName?: string;
    loanSourcePrefix?: string;
    loanSourceState?: string;
    loanSourceStreet1?: string;
    loanSourceStreet2?: string;
    loanSourceSuffix?: string;
    loanSourceZip?: number;
    memoCode?: string;
    memoText?: string;
    originalLoanAmount?: number;
    originalSubId?: number;
    paymentToDate?: number;
    pdfUrl?: string;
    personallyFunded?: string;
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
    scheduleALineNumber?: number;
    scheduleType?: string;
    scheduleTypeFull?: string;
    securedInd?: string;
    subId?: string;
    transactionId?: string;
}
export declare class GetSchedulesScheduleCDefaultApplicationJSON extends SpeakeasyBase {
    pagination?: shared.OffsetInfo;
    results?: GetSchedulesScheduleCDefaultApplicationJSONResults[];
}
export declare class GetSchedulesScheduleCResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    getSchedulesScheduleCDefaultApplicationJSONObject?: GetSchedulesScheduleCDefaultApplicationJSON;
}
