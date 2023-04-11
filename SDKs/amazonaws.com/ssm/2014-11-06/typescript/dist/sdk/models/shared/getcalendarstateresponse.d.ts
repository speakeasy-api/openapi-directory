import { SpeakeasyBase } from "../../../internal/utils";
import { CalendarStateEnum } from "./calendarstateenum";
/**
 * Success
 */
export declare class GetCalendarStateResponse extends SpeakeasyBase {
    atTime?: string;
    nextTransitionTime?: string;
    state?: CalendarStateEnum;
}
