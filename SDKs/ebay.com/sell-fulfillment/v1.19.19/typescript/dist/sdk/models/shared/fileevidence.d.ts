import { SpeakeasyBase } from "../../../internal/utils";
/**
 * This type is used to store the unique identifier of an evidence file. Evidence files are used by seller to contest a payment dispute.
 */
export declare class FileEvidence extends SpeakeasyBase {
    /**
     * If an <strong>uploadEvidenceFile</strong> call is successful, a unique identifier of this evidence file will be returned in the <strong>uploadEvidenceFile</strong> response payload.  This unique <strong>fileId</strong> value is then used to either add this evidence file to a new evidence set using the <strong>addEvidence</strong> method, or to add this file to an existing evidence set using the <strong>updateEvidence</strong> method.<br><br>Note that if an evidence set already exists for a payment dispute, the <strong>getPaymentDispute</strong> method will return both the <strong>evidenceId</strong> (unique identifier of evidence set) value, and the <strong>fileId</strong> (unique identifier of a file within that evidence set) value(s).
     */
    fileId?: string;
}
