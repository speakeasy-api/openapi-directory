import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetSchedulesScheduleAEfileRequest extends SpeakeasyBase {
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
     * A unique identifier assigned to each committee or filer registered with the FEC. In general committee id's begin with the letter C which is followed by eight digits.
     *
     */
    committeeId?: string[];
    /**
     * City of contributor
     */
    contributorCity?: string[];
    /**
     * Employer of contributor, filers need to make an effort to gather this information
     */
    contributorEmployer?: string[];
    /**
     * Name of contributor
     */
    contributorName?: string[];
    /**
     * Occupation of contributor, filers need to make an effort to gather this information
     */
    contributorOccupation?: string[];
    /**
     * State of contributor
     */
    contributorState?: string[];
    /**
     *
     * @remarks
     * An unique identifier for each page where the electronic or paper filing is reported.
     *
     */
    imageNumber?: string[];
    /**
     * Filter for form and line number using the following format: `FORM-LINENUMBER`.  For example an argument such as `F3X-16` would filter down to all entries from form `F3X` line number `16`.
     */
    lineNumber?: string;
    /**
     * Filter for all amounts less than a value.
     */
    maxAmount?: string;
    /**
     * Maximum date
     */
    maxDate?: Date;
    /**
     * Maxium image number of the page where the schedule item is reported
     */
    maxImageNumber?: string;
    /**
     * Filter for all amounts greater than a value.
     */
    minAmount?: string;
    /**
     * Minimum date
     */
    minDate?: Date;
    /**
     * Minium image number of the page where the schedule item is reported
     */
    minImageNumber?: string;
    /**
     * For paginating through results, starting at page 1
     */
    page?: number;
    /**
     * The number of results returned per page. Defaults to 20.
     */
    perPage?: number;
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
}
export declare class GetSchedulesScheduleAEfileResponse extends SpeakeasyBase {
    contentType: string;
    scheduleAEfilePage?: shared.ScheduleAEfilePage;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
