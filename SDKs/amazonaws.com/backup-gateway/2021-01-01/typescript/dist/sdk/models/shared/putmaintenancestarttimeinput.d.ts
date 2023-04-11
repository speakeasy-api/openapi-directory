import { SpeakeasyBase } from "../../../internal/utils";
export declare class PutMaintenanceStartTimeInput extends SpeakeasyBase {
    dayOfMonth?: number;
    dayOfWeek?: number;
    gatewayArn: string;
    hourOfDay: number;
    minuteOfHour: number;
}
