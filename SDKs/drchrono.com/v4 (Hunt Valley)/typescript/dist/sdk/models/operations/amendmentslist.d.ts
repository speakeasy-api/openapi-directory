import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class AmendmentsListSecurity extends SpeakeasyBase {
    drchronoOauth2: string;
}
export declare class AmendmentsListRequest extends SpeakeasyBase {
    appointment?: number;
    cursor?: string;
    doctor?: number;
    pageSize?: number;
    patient?: number;
}
/**
 * Paginated Result
 */
export declare class AmendmentsList200ApplicationJSON extends SpeakeasyBase {
    /**
     * result data
     */
    data?: shared.PatientAmendment[];
    /**
     * Next Paginated page
     */
    next?: string;
    /**
     * Previous paginated page
     */
    previous?: string;
}
export declare class AmendmentsListResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * OK
     */
    amendmentsList200ApplicationJSONObject?: AmendmentsList200ApplicationJSON;
}
