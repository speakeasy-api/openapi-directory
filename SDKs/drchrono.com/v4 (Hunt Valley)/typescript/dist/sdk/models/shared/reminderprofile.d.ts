import { SpeakeasyBase } from "../../../internal/utils";
export declare enum ReminderProfileReminderTemplateTypeEnum {
    Email = "email",
    Sms = "sms",
    Phone = "phone",
    AutoCall = "auto_call"
}
export declare enum ReminderProfileReminderTemplateUnitEnum {
    Minutes = "minutes",
    Hours = "hours",
    Days = "days",
    Weeks = "weeks"
}
/**
 * Array of reminders
**/
export declare class ReminderProfileReminderTemplate extends SpeakeasyBase {
    amount?: number;
    type?: ReminderProfileReminderTemplateTypeEnum;
    unit?: ReminderProfileReminderTemplateUnitEnum;
}
export declare class ReminderProfile extends SpeakeasyBase {
    doctor: number;
    id?: number;
    name?: string;
    reminders: ReminderProfileReminderTemplate[];
}
