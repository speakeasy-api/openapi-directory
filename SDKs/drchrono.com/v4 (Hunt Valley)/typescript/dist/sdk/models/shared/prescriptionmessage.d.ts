import { SpeakeasyBase } from "../../../internal/utils";
export declare enum PrescriptionMessageMessageDirectionEnum {
    I = "I",
    O = "O"
}
export declare class PrescriptionMessage extends SpeakeasyBase {
    createdAt?: string;
    doctor?: number;
    id?: number;
    jsonData?: string;
    messageDirection?: PrescriptionMessageMessageDirectionEnum;
    messageStatus?: string;
    messageType?: string;
    parentMessage?: string;
    patient?: number;
    pharmacy?: string;
}
