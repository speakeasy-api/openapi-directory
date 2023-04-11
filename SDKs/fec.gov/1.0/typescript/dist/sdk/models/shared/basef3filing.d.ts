import { SpeakeasyBase } from "../../../internal/utils";
export declare class BaseF3Filing extends SpeakeasyBase {
    amendedAddress?: string;
    amendedBy?: number;
    amendment?: string;
    amendmentChain?: number[];
    beginningImageNumber?: string;
    candidateFirstName?: string;
    candidateId?: string;
    candidateLastName?: string;
    candidateMiddleName?: string;
    candidateName?: string;
    candidatePrefix?: string;
    candidateSuffix?: string;
    cashOnHandBeginningPeriod?: number;
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
    district?: number;
    documentDescription?: string;
    electionDate?: Date;
    electionState?: string;
    f3z1?: number;
    fecFileId?: string;
    fecUrl?: string;
    fileNumber?: number;
    generalElection?: string;
    isAmended?: boolean;
    mostRecent?: boolean;
    mostRecentFiling?: number;
    pdfUrl?: string;
    prefix?: string;
    primaryElection?: string;
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
    runoffElection?: string;
    signDate?: Date;
    specialElection?: string;
    state?: string;
    street1?: string;
    street2?: string;
    suffix?: string;
    summaryLines?: string;
    treasurerFirstName?: string;
    treasurerLastName?: string;
    treasurerMiddleName?: string;
    treasurerName?: string;
    zip?: string;
}
