import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum ReminderProfileReminderTemplateTypeEnum {
    Email = "email",
    Sms = "sms",
    Phone = "phone",
    AutoCall = "auto_call"
}

export enum ReminderProfileReminderTemplateUnitEnum {
    Minutes = "minutes",
    Hours = "hours",
    Days = "days",
    Weeks = "weeks"
}


// ReminderProfileReminderTemplate
/** 
 * Array of reminders
**/
export class ReminderProfileReminderTemplate extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=amount" })
  amount?: number;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type?: ReminderProfileReminderTemplateTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=unit" })
  unit?: ReminderProfileReminderTemplateUnitEnum;
}


export class ReminderProfile extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=doctor" })
  doctor: number;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: number;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=reminders", elemType: ReminderProfileReminderTemplate })
  reminders: ReminderProfileReminderTemplate[];
}
