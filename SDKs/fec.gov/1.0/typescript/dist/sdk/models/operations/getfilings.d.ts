import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum GetFilingsAmendmentIndicatorEnum {
    Unknown = "",
    N = "N",
    A = "A",
    T = "T",
    C = "C",
    M = "M",
    S = "S"
}
/**
 * The method used to file with the FEC, either electronic or on paper.
 */
export declare enum GetFilingsFilerTypeEnum {
    EFile = "e-file",
    Paper = "paper"
}
export declare enum GetFilingsOfficeEnum {
    Unknown = "",
    H = "H",
    S = "S",
    P = "P"
}
export declare class GetFilingsRequest extends SpeakeasyBase {
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
    amendmentIndicator?: GetFilingsAmendmentIndicatorEnum[];
    /**
     *
     * @remarks
     * API key for https://api.data.gov. Get one at https://api.data.gov/signup.
     *
     */
    apiKey: string;
    /**
     *
     * @remarks
     * Unique identifier for the electronic or paper report. This number is used to construct
     * PDF URLs to the original document.
     *
     */
    beginningImageNumber?: string[];
    /**
     *
     * @remarks
     * A unique identifier assigned to each candidate registered with the FEC.
     * If a person runs for several offices, that person will have separate candidate IDs for each office.
     *
     */
    candidateId?: string[];
    /**
     *
     * @remarks
     * A unique identifier assigned to each committee or filer registered with the FEC. In general committee id's begin with the letter C which is followed by eight digits.
     *
     */
    committeeId?: string[];
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
     *
     * @remarks
     * Filter records to only those that were applicable to a given
     * two-year period.The cycle begins with an odd year and is named
     * for its ending, even year.
     *
     */
    cycle?: number[];
    /**
     * Two-digit US House distirict of the office the candidate is running for. Presidential, Senate and House at-large candidates will have District 00.
     */
    district?: string[];
    /**
     *
     * @remarks
     * The type of document for documents other than reports:
     *     - 2 24 Hour Contribution Notice
     *     - 4 48 Hour Contribution Notice
     *     - A Debt Settlement Statement
     *     - B Acknowledgment of Receipt of Debt Settlement Statement
     *     - C RFAI: Debt Settlement First Notice
     *     - D Commission Debt Settlement Review
     *     - E Commission Response TO Debt Settlement Request
     *     - F Administrative Termination
     *     - G Debt Settlement Plan Amendment
     *     - H Disavowal Notice
     *     - I Disavowal Response
     *     - J Conduit Report
     *     - K Termination Approval
     *     - L Repeat Non-Filer Notice
     *     - M Filing Frequency Change Notice
     *     - N Paper Amendment to Electronic Report
     *     - O Acknowledgment of Filing Frequency Change
     *     - S RFAI: Debt Settlement Second
     *     - T Miscellaneous Report TO FEC
     *     - V Repeat Violation Notice (441A OR 441B)
     *     - P Notice of Paper Filing
     *     - R F3L Filing Frequency Change Notice
     *     - Q Acknowledgment of F3L Filing Frequency Change
     *     - U Unregistered Committee Notice
     *
     */
    documentType?: string[];
    /**
     * Filing ID number
     */
    fileNumber?: number[];
    /**
     * The method used to file with the FEC, either electronic or on paper.
     */
    filerType?: GetFilingsFilerTypeEnum;
    /**
     *
     * @remarks
     * The forms filed are categorized based on the nature of the filing:
     *     - REPORT F3, F3X, F3P, F3L, F4, F5, F7, F13
     *     - NOTICE F5, F24, F6, F9, F10, F11
     *     - STATEMENT F1, F2
     *     - OTHER F1M, F8, F99, F12, FRQ
     *
     */
    formCategory?: string[];
    /**
     * The form where the underlying data comes from, for example, Form 1 would appear as F1:
     *
     * @remarks
     *     - F1   Statement of Organization
     *     - F1M  Notification of Multicandidate Status
     *     - F2   Statement of Candidacy
     *     - F3   Report of Receipts and Disbursements for an Authorized Committee
     *     - F3P  Report of Receipts and Disbursements by an Authorized Committee of a Candidate for     The Office of President or Vice President
     *     - F3L  Report of Contributions Bundled by Lobbyists/Registrants and Lobbyist/Registrant PACs
     *     - F3X  Report of Receipts and Disbursements for other than an Authorized Committee
     *     - F4   Report of Receipts and Disbursements for a Committee or Organization Supporting a Nomination Convention
     *     - F5   Report of Independent Expenditures Made and Contributions Received
     *     - F6   48 Hour Notice of Contributions/Loans Received
     *     - F7   Report of Communication Costs by Corporations and Membership Organizations
     *     - F8   Debt Settlement Plan
     *     - F9   24 Hour Notice of Disbursements for Electioneering Communications
     *     - F13  Report of Donations Accepted for Inaugural Committee
     *     - F99  Miscellaneous Text
     *     - FRQ  Request for Additional Information
     *
     */
    formType?: string[];
    /**
     *
     * @remarks
     * False indicates that a report is the most recent. True indicates that the report has been superseded by an amendment.
     *
     */
    isAmended?: boolean;
    /**
     *
     * @remarks
     * Selects all filings received before this date(MM/DD/YYYY or YYYY-MM-DD)
     *
     */
    maxReceiptDate?: Date;
    /**
     *
     * @remarks
     * Selects all filings received after this date(MM/DD/YYYY or YYYY-MM-DD)
     *
     */
    minReceiptDate?: Date;
    /**
     *
     * @remarks
     * Report is either new or is the most-recently filed amendment
     *
     */
    mostRecent?: boolean;
    /**
     * Federal office candidate runs for: H, S or P
     */
    office?: GetFilingsOfficeEnum[];
    /**
     * For paginating through results, starting at page 1
     */
    page?: number;
    /**
     * Three-letter code for the party affiliated with a candidate or committee. For example, DEM for Democratic Party and REP for Republican Party.
     */
    party?: string[];
    /**
     * The number of results returned per page. Defaults to 20.
     */
    perPage?: number;
    /**
     *
     * @remarks
     * Primary, general or special election indicator.
     *
     */
    primaryGeneralIndicator?: string[];
    /**
     *
     * @remarks
     * Keyword search for filer name or ID
     *
     */
    qFiler?: string[];
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
    reportType?: string[];
    /**
     *
     * @remarks
     * Forms with coverage date -
     *     year from the coverage ending date.
     * Forms without coverage date -
     *     year from the receipt date.
     *
     */
    reportYear?: number[];
    /**
     * Requests for additional information (RFAIs) sent to filers. The request type is based on the type of document filed:
     *
     * @remarks
     *     - 1 Statement of Organization
     *     - 2 Report of Receipts and Expenditures (Form 3 and 3X)
     *     - 3 Second Notice - Reports
     *     - 4 Request for Additional Information
     *     - 5 Informational - Reports
     *     - 6 Second Notice - Statement of Organization
     *     - 7 Failure to File
     *     - 8 From Public Disclosure
     *     - 9 From Multi Candidate Status
     *
     */
    requestType?: string[];
    /**
     *
     * @remarks
     * Provide a field to sort by. Use `-` for descending order. ex: `-case_no`
     *
     */
    sort?: string[];
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
    /**
     * US state or territory where a candidate runs for office
     */
    state?: string[];
}
export declare class GetFilingsResponse extends SpeakeasyBase {
    contentType: string;
    filingsPage?: shared.FilingsPage;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
