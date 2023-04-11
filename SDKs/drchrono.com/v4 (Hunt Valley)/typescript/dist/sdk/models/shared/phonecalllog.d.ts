import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Created
 */
export declare class PhoneCallLog extends SpeakeasyBase {
    /**
     * Appointment related with the phone call log
     */
    appointment?: number;
    /**
     * If this phone call log is archived or not
     */
    archived?: boolean;
    /**
     * Author of post.
     */
    author?: string;
    /**
     * Amount of cash needs to be charged
     */
    cashCharged?: number;
    createdAt?: string;
    doctor: number;
    /**
     * Duration of the phone call
     */
    duration?: number;
    id?: number;
    /**
     * Additional message for the phone call
     */
    message?: string;
    patient: number;
    /**
     * Date of phone call, if `appointment` is set, this field will be set as the `scheduled_time` of that appointment
     */
    scheduledTime?: string;
    /**
     * Title of this log
     */
    title?: string;
    /**
     * Type of phone call log
     */
    type?: string;
    updatedAt?: string;
}
