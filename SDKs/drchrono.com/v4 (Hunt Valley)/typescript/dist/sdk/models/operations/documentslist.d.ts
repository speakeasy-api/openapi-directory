import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class DocumentsListSecurity extends SpeakeasyBase {
    drchronoOauth2: string;
}
export declare class DocumentsListRequest extends SpeakeasyBase {
    cursor?: string;
    doctor?: number;
    pageSize?: number;
    patient?: number;
    since?: string;
}
/**
 * Paginated Result
 */
export declare class DocumentsList200ApplicationJSON extends SpeakeasyBase {
    /**
     * result data
     */
    data?: shared.ScannedClinicalDocument[];
    /**
     * Next Paginated page
     */
    next?: string;
    /**
     * Previous paginated page
     */
    previous?: string;
}
export declare class DocumentsListResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * OK
     */
    documentsList200ApplicationJSONObject?: DocumentsList200ApplicationJSON;
}
