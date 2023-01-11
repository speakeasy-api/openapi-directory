import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Additional note
**/
export declare class DoctorMessageMessageNote extends SpeakeasyBase {
    createdAt?: string;
    createdBy?: string;
    text?: string;
}
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
export declare class DoctorMessage extends SpeakeasyBase {
    archived?: boolean;
    attachment?: string;
    doctor: number;
    id?: number;
    messageNotes?: DoctorMessageMessageNote[];
    owner?: string;
    patient?: number;
    read?: boolean;
    receivedAt?: string;
    responsibleUser?: string;
    starred?: boolean;
    title: string;
    type?: DoctorMessageTypeEnum;
    updatedAt?: string;
    workflowStep?: string;
}
