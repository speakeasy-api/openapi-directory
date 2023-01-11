import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Appointment profiles are for common kinds of appointments a doctor might have, such as "physical exam", which have a standard duration and should show up as the same color on the calendar.
**/
export declare class AppointmentProfile extends SpeakeasyBase {
    archived?: boolean;
    color: string;
    doctor?: number;
    duration?: number;
    id?: number;
    name: string;
    onlineScheduling: boolean;
    reason?: string;
    sortOrder?: number;
}
