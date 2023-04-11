import { SpeakeasyBase } from "../../../internal/utils";
export declare class OperationsLog extends SpeakeasyBase {
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
     * Unique identifier for the electronic or paper report. This number is used to construct
     * PDF URLs to the original document.
     *
     */
    beginningImageNumber?: string;
    /**
     *
     * @remarks
     * A unique identifier of the registered filer.
     *
     */
    candidateCommitteeId?: string;
    /**
     * Ending date of the reporting period
     */
    coverageEndDate?: Date;
    /**
     * Beginning date of the reporting period
     */
    coverageStartDate?: Date;
    /**
     * Image number is an unique identifier for each page the electronic or paper report. The last image number corresponds to the image number for the last page of the document.
     */
    endingImageNumber?: string;
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
     *
     * @remarks
     * Status of the transactional report.
     *     -0- Transaction is entered
     *           into the system.
     *           But not verified.
     *     -1- Transaction is verified.
     *
     */
    statusNum?: number;
    /**
     *
     * @remarks
     * A unique identifier of the transactional report.
     *
     */
    subId?: number;
    /**
     *
     * @remarks
     * Date when the report is entered into the database
     *
     */
    summaryDataCompleteDate?: Date;
    /**
     *
     * @remarks
     * Same day or a day after the report is loaded in the database
     *
     */
    summaryDataVerificationDate?: Date;
    /**
     *
     * @remarks
     * Date when the report is processed completely
     *
     */
    transactionDataCompleteDate?: Date;
}
