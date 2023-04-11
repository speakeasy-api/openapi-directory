import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetEfileReportsHouseSenateRequest extends SpeakeasyBase {
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
     * Filing ID number
     */
    fileNumber?: number[];
    /**
     *
     * @remarks
     * Selects all filings received before this date(MM/DD/YYYY or YYYY-MM-DD)
     *
     */
    maxReceiptDate?: Date;
    /**
     *
     * @remarks
     * Selects all filings received after this date(MM/DD/YYYY or YYYY-MM-DD)
     *
     */
    minReceiptDate?: Date;
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
     * Keyword search for filer name or ID
     *
     */
    qFiler?: string[];
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
export declare class GetEfileReportsHouseSenateResponse extends SpeakeasyBase {
    baseF3FilingPage?: shared.BaseF3FilingPage;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
