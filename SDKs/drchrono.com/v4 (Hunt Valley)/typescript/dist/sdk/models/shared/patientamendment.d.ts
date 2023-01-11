import { SpeakeasyBase } from "../../../internal/utils";
export declare class PatientAmendment extends SpeakeasyBase {
    amendmentFile: string;
    amendmentName: string;
    appointment?: number;
    comments?: string;
    doctor: number;
    id?: number;
    patient: number;
}
