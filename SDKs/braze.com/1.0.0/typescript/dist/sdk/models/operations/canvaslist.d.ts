import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class CanvasListRequest extends SpeakeasyBase {
    /**
     * (Optional) Boolean
     *
     * @remarks
     *
     * Whether or not to include archived Canvases, defaults to `false`.
     */
    includeArchived?: string;
    /**
     * (Optional) DateTime (ISO 8601 string)
     *
     * @remarks
     *
     * Filters the results and only returns Canvases that were edited greater than the time provided till now.
     */
    lastEditTimeGt?: string;
    /**
     * (Optional) Integer
     *
     * @remarks
     *
     * The page of Canvases to return, defaults to `0` (returns the first set of up to 100)
     */
    page?: string;
    /**
     * (Optional) String
     *
     * @remarks
     *
     * Pass in the value `desc` to sort by creation time from newest to oldest. Pass in `asc` to sort from oldest to newest. If sort_direction is not included, the default order is oldest to newest.
     */
    sortDirection?: string;
}
export declare class CanvasListResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
