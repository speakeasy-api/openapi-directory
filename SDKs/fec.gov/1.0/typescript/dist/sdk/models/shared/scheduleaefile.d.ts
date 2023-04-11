import { SpeakeasyBase } from "../../../internal/utils";
import { CommitteeHistory } from "./committeehistory";
import { EFilings } from "./efilings";
export declare class ScheduleAEfile extends SpeakeasyBase {
    amendmentIndicator?: string;
    backReferenceScheduleName?: string;
    backReferenceTransactionId?: string;
    beginningImageNumber?: string;
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
    contributionReceiptAmount?: number;
    contributionReceiptDate?: Date;
    contributorAggregateYtd?: number;
    /**
     * City of contributor
     */
    contributorCity?: string;
    /**
     * Employer of contributor, filers need to make an effort to gather this information
     */
    contributorEmployer?: string;
    contributorFirstName?: string;
    contributorLastName?: string;
    contributorMiddleName?: string;
    contributorName?: string;
    /**
     * Occupation of contributor, filers need to make an effort to gather this information
     */
    contributorOccupation?: string;
    contributorPrefix?: string;
    /**
     * State of contributor
     */
    contributorState?: string;
    contributorSuffix?: string;
    /**
     * Zip code of contributor
     */
    contributorZip?: string;
    csvUrl?: string;
    cycle?: number;
    entityType?: string;
    fecElectionTypeDesc?: string;
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
    lineNumber?: string;
    loadTimestamp?: Date;
    memoCode?: string;
    memoText?: string;
    pdfUrl?: string;
    pgo?: string;
    relatedLineNumber: number;
    reportType?: string;
    transactionId?: string;
}
