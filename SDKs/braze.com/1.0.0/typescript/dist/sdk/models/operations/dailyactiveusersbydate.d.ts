import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class DailyActiveUsersByDateRequest extends SpeakeasyBase {
    /**
     * (Optional) String
     *
     * @remarks
     *
     * App API identifier; if excluded, results for all apps in app group will be returned
     */
    appId?: string;
    /**
     * (Optional) DateTime (ISO 8601 string)
     *
     * @remarks
     *
     * Point in time when the data series should end - defaults to time of the request
     */
    endingAt?: string;
    /**
     * (Required) Integer
     *
     * @remarks
     *
     * Max number of days before ending_at to include in the returned series - must be between 1 and 100 inclusive
     */
    length?: string;
}
export declare class DailyActiveUsersByDateResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
