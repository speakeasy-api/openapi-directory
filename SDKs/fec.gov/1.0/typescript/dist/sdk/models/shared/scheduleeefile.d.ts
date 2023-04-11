import { SpeakeasyBase } from "../../../internal/utils";
import { CommitteeHistory } from "./committeehistory";
import { EFilings } from "./efilings";
export declare class ScheduleEEfile extends SpeakeasyBase {
    amendmentIndicator?: string;
    backReferenceScheduleName?: string;
    backReferenceTransactionId?: string;
    beginningImageNumber?: string;
    candidateFirstName?: string;
    candidateId?: string;
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
    committee?: CommitteeHistory;
    /**
     *
     * @remarks
     * A unique identifier assigned to each committee or filer registered with the FEC. In general committee id's begin with the letter C which is followed by eight digits.
     *
     */
    committeeId?: string;
    csvUrl?: string;
    /**
     *
     * @remarks
     * Date when a PAC distrubutes or disseminates an independent expenditure
     * and pays for it in the same reporting period
     *
     */
    disseminationDate?: Date;
    entityType?: string;
    expenditureAmount?: number;
    expenditureDate?: Date;
    expenditureDescription?: string;
    fecUrl?: string;
    fileNumber: number;
    filerFirstName?: string;
    filerLastName?: string;
    filerMiddleName?: string;
    filerPrefix?: string;
    filerSuffix?: string;
    filing?: EFilings;
    filingForm?: string;
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
    /**
     *
     * @remarks
     * Report is either new or is the most-recently filed amendment
     *
     */
    mostRecent?: boolean;
    notarySignDate?: Date;
    officeTotalYtd?: number;
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
    relatedLineNumber: number;
    reportType?: string;
    /**
     * Explains if the money was spent in order to support or oppose a candidate or candidates. (Coded S or O for support or oppose.) This indicator applies to independent expenditures and communication costs.
     */
    supportOpposeIndicator?: string;
    transactionId?: string;
}
