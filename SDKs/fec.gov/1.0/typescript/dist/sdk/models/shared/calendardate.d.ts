import { SpeakeasyBase } from "../../../internal/utils";
export declare class CalendarDate extends SpeakeasyBase {
    allDay?: boolean;
    /**
     *
     * @remarks
     * Each type of event has a calendar category with an integer id. Options are: Open Meetings: 32, Executive Sessions: 39, Public Hearings: 40,
     * Conferences: 33, Roundtables: 34, Election Dates: 36, Federal Holidays: 37, FEA Periods: 38, Commission Meetings: 20,
     * Reporting Deadlines: 21, Conferences and Outreach: 22, AOs and Rules: 23, Other: 24, Quarterly: 25, Monthly: 26,
     * Pre and Post-Elections: 27, EC Periods:28, and IE Periods: 29
     *
     */
    calendarCategoryId?: number;
    /**
     *
     * @remarks
     * Each type of event has a calendar category with an integer id. Options are: Open Meetings: 32, Executive Sessions: 39, Public Hearings: 40,
     * Conferences: 33, Roundtables: 34, Election Dates: 36, Federal Holidays: 37, FEA Periods: 38, Commission Meetings: 20,
     * Reporting Deadlines: 21, Conferences and Outreach: 22, AOs and Rules: 23, Other: 24, Quarterly: 25, Monthly: 26,
     * Pre and Post-Elections: 27, EC Periods:28, and IE Periods: 29
     *
     */
    category?: string;
    description?: string;
    endDate?: string;
    /**
     * An unique ID for an event. Useful for downloading a single event to your calendar. This ID is not a permanent, persistent ID.
     */
    eventId?: number;
    /**
     *
     * @remarks
     * Can be state address or room.
     *
     */
    location?: string;
    startDate?: string;
    /**
     * The state field only applies to election dates and reporting deadlines, reporting periods and all other dates do not have the array of states to filter on
     */
    state?: string[];
    summary?: string;
    /**
     *
     * @remarks
     * A url for that event
     *
     */
    url?: string;
}
