import { SpeakeasyBase } from "../../../internal/utils";
export declare class ItemScheduleList extends SpeakeasyBase {
    /**
     * The id of the channel the schedules belong to.
     */
    channelId: string;
    /**
     * The date and time this list of schedules ends.
     */
    endDate: Date;
    /**
     * The list of item schedules.
     */
    schedules: Record<string, any>[];
    /**
     * The date and time this list of schedules starts.
     */
    startDate: Date;
}
