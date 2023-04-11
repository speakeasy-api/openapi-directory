import { SpeakeasyBase } from "../../../internal/utils";
export declare class Filings extends SpeakeasyBase {
    /**
     *
     * @remarks
     * Additional banks or depositories in which the committee deposits funds, holds accounts, rents safety deposit boxes or maintains funds.
     *
     */
    additionalBankNames?: string[];
    /**
     *
     * @remarks
     * The first value in the chain is the original filing.  The ordering in the chain reflects the order the
     * amendments were filed up to the amendment being inspected.
     *
     */
    amendmentChain?: number[];
    /**
     *
     * @remarks
     * The first value in the chain is the original filing.  The ordering in the chain reflects the order the
     * amendments were filed up to the amendment being inspected.
     *
     */
    amendmentIndicator?: string;
    /**
     *
     * @remarks
     * Amendment version
     *
     */
    amendmentVersion?: number;
    /**
     *
     * @remarks
     * City of bank or depository as reported on the Form 1
     *
     */
    bankDepositoryCity?: string;
    /**
     *
     * @remarks
     * Primary bank or depository in which the committee deposits funds, holds accounts, rents safety deposit boxes or maintains funds.
     *
     */
    bankDepositoryName?: string;
    /**
     *
     * @remarks
     * State of bank or depository as reported on the Form 1
     *
     */
    bankDepositoryState?: string;
    /**
     *
     * @remarks
     * Street of bank or depository as reported on their Form 1.
     *
     */
    bankDepositoryStreet1?: string;
    /**
     *
     * @remarks
     * Second line of the street of bank or depository as reported on the Form 1
     *
     */
    bankDepositoryStreet2?: string;
    /**
     *
     * @remarks
     * Zip code of bank or depository as reported on the Form 1
     *
     */
    bankDepositoryZip?: string;
    beginningImageNumber?: string;
    /**
     *
     * @remarks
     * A unique identifier assigned to each candidate registered with the FEC.
     * If a person runs for several offices, that person will have separate candidate IDs for each office.
     *
     */
    candidateId?: string;
    /**
     * Name of candidate running for office
     */
    candidateName?: string;
    /**
     * Balance for the committee at the start of the two-year period
     */
    cashOnHandBeginningPeriod?: number;
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
     * Filter records to only those that were applicable to a given
     * two-year period.The cycle begins with an odd year and is named
     * for its ending, even year.
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
    documentType?: string;
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
    documentTypeFull?: string;
    /**
     * Year of election
     */
    electionYear?: number;
    endingImageNumber?: string;
    fecFileId?: string;
    fecUrl?: string;
    /**
     * Filing ID number
     */
    fileNumber?: number;
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
    formCategory?: string;
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
    formType?: string;
    /**
     * House personal funds
     */
    housePersonalFunds?: number;
    /**
     *
     * @remarks
     * HTML link to the filing.
     *
     */
    htmlUrl?: string;
    /**
     *
     * @remarks
     * False indicates that a report is the most recent. True indicates that the report has been superseded by an amendment.
     *
     */
    isAmended?: boolean;
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
    /**
     * Net donations
     */
    netDonations?: number;
    /**
     * Federal office candidate runs for: H, S or P
     */
    office?: string;
    /**
     * Opposition personal funds
     */
    oppositionPersonalFunds?: number;
    /**
     *
     * @remarks
     * Number of pages in the document
     *
     */
    pages?: number;
    /**
     * Three-letter code for the party affiliated with a candidate or committee. For example, DEM for Democratic Party and REP for Republican Party.
     */
    party?: string;
    /**
     *
     * @remarks
     * pdf link to the filing
     *
     */
    pdfUrl?: string;
    /**
     *
     * @remarks
     * Previous filing ID number
     *
     */
    previousFileNumber?: number;
    /**
     *
     * @remarks
     * Primary general indicator
     *
     */
    primaryGeneralIndicator?: string;
    /**
     * Date the FEC received the electronic or paper record
     */
    receiptDate?: Date;
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
    requestType?: string;
    /**
     * Senate personal funds
     */
    senatePersonalFunds?: number;
    /**
     * US state or territory where a candidate runs for office
     */
    state?: string;
    subId?: string;
    /**
     * Total communications cost
     */
    totalCommunicationCost?: number;
    /**
     * Total disbursements
     */
    totalDisbursements?: number;
    /**
     * Total independent expenditures
     */
    totalIndependentExpenditures?: number;
    /**
     * Total individual contributions
     */
    totalIndividualContributions?: number;
    /**
     * Total receipts
     */
    totalReceipts?: number;
    /**
     * Name of the Committee's treasurer. If multiple treasurers for the committee, the most recent treasurer will be shown.
     */
    treasurerName?: string;
    /**
     * Date the record was updated
     */
    updateDate?: Date;
}
