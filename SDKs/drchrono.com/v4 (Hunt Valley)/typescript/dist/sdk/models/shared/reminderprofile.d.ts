import { SpeakeasyBase } from "../../../internal/utils";
/**
 * One of `"email"`, `"sms"` or `"auto_call"`
 */
export declare enum ReminderProfileReminderTemplateTypeEnum {
    Email = "email",
    Sms = "sms",
    Phone = "phone",
    AutoCall = "auto_call"
}
/**
 * One of `"email"`, `"sms"` or `"auto_call"`
 */
export declare enum ReminderProfileReminderTemplateUnitEnum {
    Minutes = "minutes",
    Hours = "hours",
    Days = "days",
    Weeks = "weeks"
}
/**
 * Array of reminders
 */
export declare class ReminderProfileReminderTemplate extends SpeakeasyBase {
    amount?: number;
    /**
     * One of `"email"`, `"sms"` or `"auto_call"`
     */
    type?: ReminderProfileReminderTemplateTypeEnum;
    /**
     * One of `"email"`, `"sms"` or `"auto_call"`
     */
    unit?: ReminderProfileReminderTemplateUnitEnum;
}
/**
 * Created
 */
export declare class ReminderProfile extends SpeakeasyBase {
    /**
     * Doctor who created the profile. Other doctors in the practice group may have access to their profiles
     */
    doctor: number;
    id?: number;
    name?: string;
    /**
     * Reminders set in the profile
     */
    reminders: ReminderProfileReminderTemplate[];
}
