import { SpeakeasyBase } from "../../../internal/utils";
export declare class Electioneering extends SpeakeasyBase {
    amendmentIndicator?: string;
    beginningImageNumber?: string;
    /**
     *
     * @remarks
     * "If an electioneering cost targets several candidates, the total cost is
     * divided by the number of candidates. If it only mentions one candidate
     * the full cost of the communication is listed."
     *
     */
    calculatedCandidateShare?: number;
    candidateDistrict?: string;
    candidateId?: string;
    candidateName?: string;
    candidateOffice?: string;
    candidateState?: string;
    committeeId?: string;
    committeeName?: string;
    /**
     *
     * @remarks
     * It is the airing, broadcast, cablecast or other dissemination of the communication.
     *
     */
    communicationDate?: Date;
    disbursementAmount?: number;
    /**
     *
     * @remarks
     * Disbursement date includes actual disbursements and execution of contracts creating
     * an obligation to make disbursements (SB date of disbursement).
     *
     */
    disbursementDate?: Date;
    electionType?: string;
    fileNumber?: number;
    linkId?: number;
    numberOfCandidates?: number;
    /**
     *
     * @remarks
     * Name of the entity that received the payment.
     *
     */
    payeeName?: string;
    payeeState?: string;
    pdfUrl?: string;
    /**
     *
     * @remarks
     * The pubic distribution date is the date that triggers disclosure of the
     * electioneering communication (date reported on page 1 of Form 9).
     *
     */
    publicDistributionDate?: Date;
    purposeDescription?: string;
    receiptDate?: Date;
    reportYear?: number;
    sbImageNum?: string;
    sbLinkId?: string;
    /**
     *
     * @remarks
     * The identifier for each electioneering record.
     *
     */
    subId?: number;
}
