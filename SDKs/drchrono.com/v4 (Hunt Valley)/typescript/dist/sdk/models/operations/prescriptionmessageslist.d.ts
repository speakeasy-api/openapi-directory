import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class PrescriptionMessagesListSecurity extends SpeakeasyBase {
    drchronoOauth2: string;
}
export declare class PrescriptionMessagesListRequest extends SpeakeasyBase {
    cursor?: string;
    doctor?: number;
    pageSize?: number;
    parentMessage?: number;
    patient?: number;
    since?: string;
}
/**
 * Paginated Result
 */
export declare class PrescriptionMessagesList200ApplicationJSON extends SpeakeasyBase {
    /**
     * result data
     */
    data?: shared.PrescriptionMessage[];
    /**
     * Next Paginated page
     */
    next?: string;
    /**
     * Previous paginated page
     */
    previous?: string;
}
export declare class PrescriptionMessagesListResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * OK
     */
    prescriptionMessagesList200ApplicationJSONObject?: PrescriptionMessagesList200ApplicationJSON;
}
