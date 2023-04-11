import { SpeakeasyBase } from "../../../internal/utils";
export declare class AppointmentTemplateOpenSlot extends SpeakeasyBase {
    end?: string;
    start?: string;
}
/**
 * Appointment templates are blocks of time during which a doctor usually sees appointments with the same profile. These may have a longer duration then the corresponding profile, in which case they may allow multiple appointments to be booked during that period.
 */
export declare class AppointmentTemplate extends SpeakeasyBase {
    /**
     * Indicats that the object has been soft-deleted and should not be used
     */
    archived?: boolean;
    dateEnd?: string;
    dateStart?: string;
    /**
     * Length of an appointment in minutes
     */
    duration?: number;
    /**
     * **1-based** index for the exam room
     */
    examRoom: number;
    id?: number;
    office: number;
    /**
     * Array of time intervals during which the template is available. Only computed if the available and verbose query parameters are passed. Note that only slots long enough to fit an appointment with the corresponding profile are included.
     */
    openSlots?: AppointmentTemplateOpenSlot[];
    /**
     * ID of the appointment profile to default to
     */
    profile: number;
    scheduledTime: string;
    /**
     * Array of integers that indicate week days (`0` = Monday, ..., `6` = Sunday)
     */
    weekDays: number[];
}
