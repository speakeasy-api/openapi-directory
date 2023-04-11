import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetNhEventsRequest extends SpeakeasyBase {
    /**
     * The version of the API you are calling, written as `1.0.0`. This is specified as required as good practice, but it is not actually enforced by the API. If you do not specify a version, you will be served the latest version, which may eventually result in breaking changes.
     */
    acceptVersion: string;
    /**
     * Your UUID secret key, granted to you by the Nookipedia team. Required for accessing the API.
     */
    xApiKey: string;
    /**
     * Specify a specific date (in the current or next year) to retrieve events for. Accepts many date formats, such as `YYYY-MM-DD` or `Month Day, Year`, as well as `today` to retrieve the current day's events (UTC time).
     */
    date?: string;
    /**
     * Specify the day of the month to retrieve events for.
     */
    day?: number;
    /**
     * Specify the month to retrieve events for (accepts multiple formats, such as `Oct`, `October`, or `10`). Most likely want to use alongside `year`, otherwise events in both the current and next year are returned.
     */
    month?: string;
    /**
     * Specify the year to retrieve events for. Must be the current or next year.
     */
    year?: string;
}
export declare class GetNhEventsResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Failed to authenticate user from `X-API-KEY`.
     */
    error401?: shared.Error401;
    /**
     * There was an error fetching the requested data.
     */
    error500?: shared.Error500;
    /**
     * A JSON array of events.
     */
    nhEvents?: shared.NHEvent[];
    statusCode: number;
    rawResponse?: AxiosResponse;
}
