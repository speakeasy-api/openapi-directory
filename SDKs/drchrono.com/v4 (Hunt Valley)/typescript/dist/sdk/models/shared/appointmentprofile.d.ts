import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Appointment profiles are for common kinds of appointments a doctor might have, such as "physical exam", which have a standard duration and should show up as the same color on the calendar.
 */
export declare class AppointmentProfile extends SpeakeasyBase {
    /**
     * Indicates that the object has been soft-deleted and should not be used
     */
    archived?: boolean;
    color: string;
    doctor?: number;
    /**
     * Length of an appointment in minutes
     */
    duration?: number;
    id?: number;
    name: string;
    /**
     * Whether this profile should be available for online scheduling
     */
    onlineScheduling: boolean;
    reason?: string;
    /**
     * Override the usual ordering ordering of appointments in the patient's appointments page. Lower values are shown at the top
     */
    sortOrder?: number;
}
