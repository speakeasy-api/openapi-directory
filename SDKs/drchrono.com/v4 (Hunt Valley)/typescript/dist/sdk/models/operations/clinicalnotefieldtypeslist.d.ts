import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class ClinicalNoteFieldTypesListSecurity extends SpeakeasyBase {
    drchronoOauth2: string;
}
export declare class ClinicalNoteFieldTypesListRequest extends SpeakeasyBase {
    clinicalNoteTemplate?: number;
    cursor?: string;
    doctor?: number;
    pageSize?: number;
}
/**
 * Paginated Result
 */
export declare class ClinicalNoteFieldTypesList200ApplicationJSON extends SpeakeasyBase {
    /**
     * result data
     */
    data?: shared.SoapNoteLineItemFieldType[];
    /**
     * Next Paginated page
     */
    next?: string;
    /**
     * Previous paginated page
     */
    previous?: string;
}
export declare class ClinicalNoteFieldTypesListResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * OK
     */
    clinicalNoteFieldTypesList200ApplicationJSONObject?: ClinicalNoteFieldTypesList200ApplicationJSON;
}
