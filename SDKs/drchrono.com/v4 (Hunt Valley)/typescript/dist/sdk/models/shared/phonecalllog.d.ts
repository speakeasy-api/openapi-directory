import { SpeakeasyBase } from "../../../internal/utils";
export declare class PhoneCallLog extends SpeakeasyBase {
    appointment?: number;
    archived?: boolean;
    author?: string;
    cashCharged?: number;
    createdAt?: string;
    doctor: number;
    duration?: number;
    id?: number;
    message?: string;
    patient: number;
    scheduledTime?: string;
    title?: string;
    type?: string;
    updatedAt?: string;
}
