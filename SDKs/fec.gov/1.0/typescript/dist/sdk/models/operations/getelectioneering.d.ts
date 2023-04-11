import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetElectioneeringRequest extends SpeakeasyBase {
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
     * A unique identifier assigned to each candidate registered with the FEC.
     * If a person runs for several offices, that person will have separate candidate IDs for each office.
     *
     */
    candidateId?: string[];
    /**
     *
     * @remarks
     * A unique identifier assigned to each committee or filer registered with the FEC. In general committee id's begin with the letter C which is followed by eight digits.
     *
     */
    committeeId?: string[];
    description?: string;
    /**
     * Index of last result from previous page
     */
    lastIndex?: number;
    /**
     * Filter for all amounts less than a value.
     */
    maxAmount?: string;
    /**
     * Maximum disbursement date
     */
    maxDate?: Date;
    /**
     * Filter for all amounts greater than a value.
     */
    minAmount?: string;
    /**
     * Minimum disbursement date
     */
    minDate?: Date;
    /**
     * For paginating through results, starting at page 1
     */
    page?: number;
    /**
     * The number of results returned per page. Defaults to 20.
     */
    perPage?: number;
    /**
     *
     * @remarks
     * Forms with coverage date -
     *     year from the coverage ending date.
     * Forms without coverage date -
     *     year from the receipt date.
     *
     */
    reportYear?: number[];
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
export declare class GetElectioneeringResponse extends SpeakeasyBase {
    contentType: string;
    electioneeringPage?: shared.ElectioneeringPage;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
