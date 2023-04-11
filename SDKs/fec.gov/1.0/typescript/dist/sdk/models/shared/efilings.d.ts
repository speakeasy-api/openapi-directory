import { SpeakeasyBase } from "../../../internal/utils";
export declare class EFilings extends SpeakeasyBase {
    amendedBy?: number;
    amendmentChain?: number[];
    /**
     *
     * @remarks
     * Number of times the report has been amended.
     *
     */
    amendmentNumber?: number;
    /**
     *
     * @remarks
     * For amendments, this file_number is the file_number of the previous report that is being amended. Refer to the amended_by for the most recent version of the report.
     *
     */
    amendsFile?: number;
    beginningImageNumber?: string;
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
     * Ending date of the reporting period
     */
    coverageEndDate?: Date;
    /**
     * Beginning date of the reporting period
     */
    coverageStartDate?: Date;
    csvUrl?: string;
    documentDescription?: string;
    endingImageNumber?: string;
    fecFileId?: string;
    fecUrl?: string;
    /**
     * Filing ID number
     */
    fileNumber?: number;
    /**
     * Timestamp of electronic or paper record that FEC received
     */
    filedDate?: Date;
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
    htmlUrl?: string;
    isAmended?: boolean;
    /**
     * Date the information was loaded into the FEC systems. This can be affected by reseting systems and other factors, refer to receipt_date for the day that the FEC received the paper or electronic document. Keep in mind that paper filings take more time to process and there can be a lag between load_date and receipt_date. This field can be helpful to identify paper records that have been processed recently.
     */
    loadTimestamp?: Date;
    mostRecent?: boolean;
    mostRecentFiling?: number;
    pdfUrl?: string;
    /**
     * Date the FEC received the electronic or paper record
     */
    receiptDate?: Date;
}
