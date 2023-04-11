import { SpeakeasyBase } from "../../../internal/utils";
export declare class BaseF3XFiling extends SpeakeasyBase {
    amendAddress?: string;
    amendedBy?: number;
    amendment?: string;
    amendmentChain?: number[];
    beginningImageNumber?: string;
    city?: string;
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
    coverageEndDate?: Date;
    coverageStartDate?: Date;
    csvUrl?: string;
    documentDescription?: string;
    electionDate?: Date;
    electionState?: string;
    fecFileId?: string;
    fecUrl?: string;
    fileNumber?: number;
    isAmended?: boolean;
    mostRecent?: boolean;
    mostRecentFiling?: number;
    pdfUrl?: string;
    qualifiedMulticandidateCommittee?: string;
    receiptDate?: Date;
    report?: string;
    reportType?: string;
    reportYear?: number;
    /**
     * Election type
     *
     * @remarks
     * Convention, Primary,
     * General, Special,
     * Runoff etc.
     *
     */
    rptPgi?: string;
    signDate?: Date;
    state?: string;
    street1?: string;
    street2?: string;
    summaryLines?: string;
    zip?: string;
}
