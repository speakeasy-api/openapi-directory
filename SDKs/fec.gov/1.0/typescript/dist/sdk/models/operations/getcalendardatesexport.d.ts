import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum GetCalendarDatesExportRendererEnum {
    Ics = "ics",
    Csv = "csv"
}
export declare class GetCalendarDatesExportRequest extends SpeakeasyBase {
    /**
     *
     * @remarks
     * API key for https://api.data.gov. Get one at https://api.data.gov/signup.
     *
     */
    apiKey: string;
    /**
     *
     * @remarks
     * Each type of event has a calendar category with an integer id. Options are: Open Meetings: 32, Executive Sessions: 39, Public Hearings: 40,
     * Conferences: 33, Roundtables: 34, Election Dates: 36, Federal Holidays: 37, FEA Periods: 38, Commission Meetings: 20,
     * Reporting Deadlines: 21, Conferences and Outreach: 22, AOs and Rules: 23, Other: 24, Quarterly: 25, Monthly: 26,
     * Pre and Post-Elections: 27, EC Periods:28, and IE Periods: 29
     *
     */
    calendarCategoryId?: number[];
    /**
     * Brief description of event
     */
    description?: string[];
    /**
     * An unique ID for an event. Useful for downloading a single event to your calendar. This ID is not a permanent, persistent ID.
     */
    eventId?: number;
    /**
     *
     * @remarks
     * The maximum end date.(MM/DD/YYYY or YYYY-MM-DD)
     *
     */
    maxEndDate?: Date;
    /**
     *
     * @remarks
     * The maximum start date.(MM/DD/YYYY or YYYY-MM-DD)
     *
     */
    maxStartDate?: Date;
    /**
     *
     * @remarks
     * The minimum end date.(MM/DD/YYYY or YYYY-MM-DD)
     *
     */
    minEndDate?: Date;
    /**
     *
     * @remarks
     * The minimum start date.(MM/DD/YYYY or YYYY-MM-DD)
     *
     */
    minStartDate?: Date;
    /**
     * For paginating through results, starting at page 1
     */
    page?: number;
    /**
     * The number of results returned per page. Defaults to 20.
     */
    perPage?: number;
    renderer?: GetCalendarDatesExportRendererEnum;
    /**
     * Provide a field to sort by. Use `-` for descending order.
     *
     * @remarks
     *
     */
    sort?: string;
    /**
     * Hide null values on sorted column(s).
     */
    sortHideNull?: boolean;
    /**
     * Toggle that filters out all rows having sort column that is non-null
     */
    sortNullOnly?: boolean;
    /**
     * Toggle that sorts null values last
     */
    sortNullsLast?: boolean;
    /**
     * Longer description of event
     */
    summary?: string[];
}
export declare class GetCalendarDatesExportResponse extends SpeakeasyBase {
    calendarDatePage?: shared.CalendarDatePage;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
