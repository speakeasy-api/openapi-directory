import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class AppointmentTemplateOpenSlot extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=end" })
  end?: string;

  @SpeakeasyMetadata({ data: "json, name=start" })
  start?: string;
}


// AppointmentTemplate
/** 
 * Appointment templates are blocks of time during which a doctor usually sees appointments with the same profile. These may have a longer duration then the corresponding profile, in which case they may allow multiple appointments to be booked during that period.
**/
export class AppointmentTemplate extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=archived" })
  archived?: boolean;

  @SpeakeasyMetadata({ data: "json, name=date_end" })
  dateEnd?: string;

  @SpeakeasyMetadata({ data: "json, name=date_start" })
  dateStart?: string;

  @SpeakeasyMetadata({ data: "json, name=duration" })
  duration?: number;

  @SpeakeasyMetadata({ data: "json, name=exam_room" })
  examRoom: number;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: number;

  @SpeakeasyMetadata({ data: "json, name=office" })
  office: number;

  @SpeakeasyMetadata({ data: "json, name=open_slots", elemType: AppointmentTemplateOpenSlot })
  openSlots?: AppointmentTemplateOpenSlot[];

  @SpeakeasyMetadata({ data: "json, name=profile" })
  profile: number;

  @SpeakeasyMetadata({ data: "json, name=scheduled_time" })
  scheduledTime: string;

  @SpeakeasyMetadata({ data: "json, name=week_days" })
  weekDays: number[];
}
