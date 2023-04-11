import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class EobsListSecurity extends SpeakeasyBase {
    drchronoOauth2: string;
}
export declare class EobsListRequest extends SpeakeasyBase {
    cursor?: string;
    doctor?: number;
    pageSize?: number;
}
/**
 * Paginated Result
 */
export declare class EobsList200ApplicationJSON extends SpeakeasyBase {
    /**
     * result data
     */
    data?: shared.EOBObject[];
    /**
     * Next Paginated page
     */
    next?: string;
    /**
     * Previous paginated page
     */
    previous?: string;
}
export declare class EobsListResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * OK
     */
    eobsList200ApplicationJSONObject?: EobsList200ApplicationJSON;
}
