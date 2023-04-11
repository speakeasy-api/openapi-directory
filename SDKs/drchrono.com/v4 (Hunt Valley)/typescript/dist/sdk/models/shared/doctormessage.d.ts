import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Additional note
 */
export declare class DoctorMessageMessageNote extends SpeakeasyBase {
    createdAt?: string;
    /**
     * ID of `/api/users` who created the note
     */
    createdBy?: string;
    /**
     * Content of the note
     */
    text?: string;
}
/**
 *
 * @remarks
 * Value | Description
 * ----- | -----------
 * `"GP"` | Generated PDF
 * `"GC"` | Generated CSV
 * `"GZ"` | Generated ZIP
 * `"IF"` | Incoming Fax
 * `"OF"` | Outgoing Fax
 * `"IL"` | Incoming Labs
 * `"IR"` | Inbound Referrals
 * `"OR"` | Outbound Referrals
 * `"IE"` | Incoming eRx
 * `"OA"` | Online Appointments
 * `"PO"` | Patient Onboarding
 * `"PI"` | Patient Incoming Message
 * `"PM"` | Patient Outgoing Message
 * `"OO"` | Demo Meeting Message
 * `"OD"` | Outbound Direct Message
 * `"ID"` | Inbound Direct Message
 *
 */
export declare enum DoctorMessageTypeEnum {
    Gp = "GP",
    Gc = "GC",
    Gt = "GT",
    Gz = "GZ",
    If = "IF",
    Of = "OF",
    Il = "IL",
    Ir = "IR",
    Or = "OR",
    Ie = "IE",
    Oa = "OA",
    Po = "PO",
    Pi = "PI",
    Pm = "PM",
    Oo = "OO",
    Od = "OD",
    Id = "ID",
    Dl = "DL",
    Cn = "CN"
}
/**
 * Created
 */
export declare class DoctorMessage extends SpeakeasyBase {
    /**
     * If true, indicates that the message has been soft-deleted
     */
    archived?: boolean;
    /**
     * Files are passed using `multipart/form-data` encoding, but returned as URLs.
     */
    attachment?: string;
    doctor: number;
    id?: number;
    /**
     * Array of notes attached to the message
     */
    messageNotes?: DoctorMessageMessageNote[];
    /**
     * ID of `/api/users` who owns the message, who may be the doctor themselves or one of their staff members
     */
    owner?: string;
    /**
     * ID of patient that the message concerns, if applicable
     */
    patient?: number;
    read?: boolean;
    receivedAt?: string;
    /**
     * ID of `/api/users` who has been assigned to process the message, who may be the doctor themselves or one of their staff members
     */
    responsibleUser?: string;
    starred?: boolean;
    title: string;
    /**
     *
     * @remarks
     * Value | Description
     * ----- | -----------
     * `"GP"` | Generated PDF
     * `"GC"` | Generated CSV
     * `"GZ"` | Generated ZIP
     * `"IF"` | Incoming Fax
     * `"OF"` | Outgoing Fax
     * `"IL"` | Incoming Labs
     * `"IR"` | Inbound Referrals
     * `"OR"` | Outbound Referrals
     * `"IE"` | Incoming eRx
     * `"OA"` | Online Appointments
     * `"PO"` | Patient Onboarding
     * `"PI"` | Patient Incoming Message
     * `"PM"` | Patient Outgoing Message
     * `"OO"` | Demo Meeting Message
     * `"OD"` | Outbound Direct Message
     * `"ID"` | Inbound Direct Message
     *
     */
    type?: DoctorMessageTypeEnum;
    updatedAt?: string;
    /**
     * Used by doctors and their staff to keep track of what step of processing the message is in
     */
    workflowStep?: string;
}
