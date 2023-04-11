import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class LabDocumentsListSecurity extends SpeakeasyBase {
    drchronoOauth2: string;
}
export declare class LabDocumentsListRequest extends SpeakeasyBase {
    cursor?: string;
    doctor?: number;
    pageSize?: number;
    since?: string;
}
/**
 * Paginated Result
 */
export declare class LabDocumentsList200ApplicationJSON extends SpeakeasyBase {
    /**
     * result data
     */
    data?: shared.LabOrderDocument[];
    /**
     * Next Paginated page
     */
    next?: string;
    /**
     * Previous paginated page
     */
    previous?: string;
}
export declare class LabDocumentsListResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * OK
     */
    labDocumentsList200ApplicationJSONObject?: LabDocumentsList200ApplicationJSON;
}
