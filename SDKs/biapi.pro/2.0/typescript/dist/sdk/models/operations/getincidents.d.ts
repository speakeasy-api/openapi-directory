import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class GetIncidentsRequest extends SpeakeasyBase {
    /**
     * filter last_update date <= start_date. YYYY-MM-DD format.
     */
    endDate?: string;
    /**
     * give only the current state of the particular incidents.
     */
    id?: number;
    /**
     * pagination option. Default to 1.
     */
    page?: number;
    /**
     * pagination option. Default to 30.
     */
    size?: number;
    /**
     * filter last_update date >= start_date. YYYY-MM-DD format.
     */
    startDate?: string;
    /**
     * comma separated list, filter incidents in the given states.
     */
    state?: string;
    /**
     * comma_separated list, filter the incidents of the given weboob_id
     */
    weboobId?: string;
}
export declare class GetIncidentsResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
