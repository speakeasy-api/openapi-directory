import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class ConsentFormsListSecurity extends SpeakeasyBase {
    drchronoOauth2: string;
}
export declare class ConsentFormsListRequest extends SpeakeasyBase {
    cursor?: string;
    doctor?: number;
    pageSize?: number;
}
/**
 * Paginated Result
 */
export declare class ConsentFormsList200ApplicationJSON extends SpeakeasyBase {
    /**
     * result data
     */
    data?: shared.ConsentForm[];
    /**
     * Next Paginated page
     */
    next?: string;
    /**
     * Previous paginated page
     */
    previous?: string;
}
export declare class ConsentFormsListResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * OK
     */
    consentFormsList200ApplicationJSONObject?: ConsentFormsList200ApplicationJSON;
}
