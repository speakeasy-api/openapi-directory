import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Created
 */
export declare class PatientAmendment extends SpeakeasyBase {
    /**
     * A PDF file containing the amended information for the patient's record
     */
    amendmentFile: string;
    amendmentName: string;
    /**
     * ID of the appointment to which the amendment applies, if any. If present, the `amendment_file` will be appended to the clinical note for this appointment.
     */
    appointment?: number;
    comments?: string;
    /**
     * ID of the doctor who owns the amendment
     */
    doctor: number;
    id?: number;
    /**
     * ID of the patient to whom the amendment applies
     */
    patient: number;
}
