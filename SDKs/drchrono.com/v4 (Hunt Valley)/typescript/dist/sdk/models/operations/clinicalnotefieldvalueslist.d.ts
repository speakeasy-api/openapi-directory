import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class ClinicalNoteFieldValuesListSecurity extends SpeakeasyBase {
    drchronoOauth2: string;
}
export declare class ClinicalNoteFieldValuesListRequest extends SpeakeasyBase {
    appointment?: number;
    clinicalNoteField?: number;
    clinicalNoteTemplate?: number;
    cursor?: string;
    doctor?: number;
    pageSize?: number;
    since?: string;
}
/**
 * Paginated Result
 */
export declare class ClinicalNoteFieldValuesList200ApplicationJSON extends SpeakeasyBase {
    /**
     * result data
     */
    data?: shared.SoapNoteLineItemFieldValue[];
    /**
     * Next Paginated page
     */
    next?: string;
    /**
     * Previous paginated page
     */
    previous?: string;
}
export declare class ClinicalNoteFieldValuesListResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * OK
     */
    clinicalNoteFieldValuesList200ApplicationJSONObject?: ClinicalNoteFieldValuesList200ApplicationJSON;
}
