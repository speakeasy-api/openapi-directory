import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class ProceduresListSecurity extends SpeakeasyBase {
    drchronoOauth2: string;
}
export declare class ProceduresListRequest extends SpeakeasyBase {
    appointment?: number;
    cursor?: string;
    doctor?: number;
    muDate?: string;
    muDateRange?: string;
    pageSize?: number;
    patient?: number;
    serviceDate?: string;
}
/**
 * Paginated Result
 */
export declare class ProceduresList200ApplicationJSON extends SpeakeasyBase {
    /**
     * result data
     */
    data?: shared.BillingLineItem[];
    /**
     * Next Paginated page
     */
    next?: string;
    /**
     * Previous paginated page
     */
    previous?: string;
}
export declare class ProceduresListResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * OK
     */
    proceduresList200ApplicationJSONObject?: ProceduresList200ApplicationJSON;
}
