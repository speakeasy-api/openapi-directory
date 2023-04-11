import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class PatientMessagesListSecurity extends SpeakeasyBase {
    drchronoOauth2: string;
}
export declare class PatientMessagesListRequest extends SpeakeasyBase {
    cursor?: string;
    doctor?: number;
    pageSize?: number;
    patient?: number;
    since?: string;
}
/**
 * Paginated Result
 */
export declare class PatientMessagesList200ApplicationJSON extends SpeakeasyBase {
    /**
     * result data
     */
    data?: shared.PatientMessage[];
    /**
     * Next Paginated page
     */
    next?: string;
    /**
     * Previous paginated page
     */
    previous?: string;
}
export declare class PatientMessagesListResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * OK
     */
    patientMessagesList200ApplicationJSONObject?: PatientMessagesList200ApplicationJSON;
}
