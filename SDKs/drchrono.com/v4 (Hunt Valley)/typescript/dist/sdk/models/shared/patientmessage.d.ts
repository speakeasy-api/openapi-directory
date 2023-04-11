import { SpeakeasyBase } from "../../../internal/utils";
export declare class PatientMessagePatientMessageAttachment extends SpeakeasyBase {
    attachment?: string;
    createdAt?: string;
    doctor?: number;
    updatedAt?: string;
}
/**
 * Created
 */
export declare class PatientMessage extends SpeakeasyBase {
    attachments?: PatientMessagePatientMessageAttachment[];
    body?: string;
    createdAt?: string;
    doctor: number;
    id?: number;
    message?: string;
    patient: number;
    subject: string;
    updatedAt?: string;
}
