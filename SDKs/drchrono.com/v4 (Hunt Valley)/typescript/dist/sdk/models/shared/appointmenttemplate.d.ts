import { SpeakeasyBase } from "../../../internal/utils";
export declare class AppointmentTemplateOpenSlot extends SpeakeasyBase {
    end?: string;
    start?: string;
}
/**
 * Appointment templates are blocks of time during which a doctor usually sees appointments with the same profile. These may have a longer duration then the corresponding profile, in which case they may allow multiple appointments to be booked during that period.
**/
export declare class AppointmentTemplate extends SpeakeasyBase {
    archived?: boolean;
    dateEnd?: string;
    dateStart?: string;
    duration?: number;
    examRoom: number;
    id?: number;
    office: number;
    openSlots?: AppointmentTemplateOpenSlot[];
    profile: number;
    scheduledTime: string;
    weekDays: number[];
}
