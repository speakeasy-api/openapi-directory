import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetRadAnalystRequest extends SpeakeasyBase {
    /**
     * ID of RAD analyst
     */
    analystId?: number[];
    /**
     * Short ID of RAD analyst
     */
    analystShortId?: number[];
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
     * Email of RAD analyst
     */
    email?: string[];
    /**
     * Filter results for assignment updates made before this date
     */
    maxAssignmentUpdateDate?: Date;
    /**
     * Filter results for assignment updates made after this date
     */
    minAssignmentUpdateDate?: Date;
    /**
     * Name of RAD analyst
     */
    name?: string[];
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
    /**
     * Telephone extension of RAD analyst
     */
    telephoneExt?: number[];
    /**
     * Title of RAD analyst
     */
    title?: string[];
}
export declare class GetRadAnalystResponse extends SpeakeasyBase {
    contentType: string;
    radAnalystPage?: shared.RadAnalystPage;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
