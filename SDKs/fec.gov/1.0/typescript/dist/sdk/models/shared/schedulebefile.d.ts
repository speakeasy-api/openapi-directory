import { SpeakeasyBase } from "../../../internal/utils";
import { CommitteeHistory } from "./committeehistory";
import { EFilings } from "./efilings";
export declare class ScheduleBEfile extends SpeakeasyBase {
    amendmentIndicator?: string;
    backReferenceScheduleName?: string;
    backReferenceTransactionId?: string;
    beginningImageNumber?: string;
    beneficiaryCommitteeName?: string;
    candidateOffice?: string;
    candidateOfficeDistrict?: string;
    committee?: CommitteeHistory;
    /**
     *
     * @remarks
     * A unique identifier assigned to each committee or filer registered with the FEC. In general committee id's begin with the letter C which is followed by eight digits.
     *
     */
    committeeId?: string;
    csvUrl?: string;
    disbursementAmount?: number;
    disbursementDate?: Date;
    disbursementDescription?: string;
    disbursementType?: string;
    entityType?: string;
    fecUrl?: string;
    fileNumber: number;
    filing?: EFilings;
    /**
     *
     * @remarks
     * An unique identifier for each page where the electronic or paper filing is reported.
     *
     */
    imageNumber?: string;
    isNotice?: boolean;
    lineNumber?: string;
    loadTimestamp?: Date;
    memoCode?: string;
    memoText?: string;
    payeeName?: string;
    pdfUrl?: string;
    recipientCity?: string;
    recipientName?: string;
    recipientPrefix?: string;
    recipientState?: string;
    recipientSuffix?: string;
    recipientZip?: string;
    relatedLineNumber: number;
    reportType?: string;
    semiAnnualBundledRefund?: number;
    transactionId?: string;
}
