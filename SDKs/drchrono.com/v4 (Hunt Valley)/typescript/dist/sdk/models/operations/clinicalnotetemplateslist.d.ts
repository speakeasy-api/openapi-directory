import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class ClinicalNoteTemplatesListSecurity extends SpeakeasyBase {
    drchronoOauth2: string;
}
export declare class ClinicalNoteTemplatesListRequest extends SpeakeasyBase {
    cursor?: string;
    doctor?: number;
    pageSize?: number;
}
/**
 * Paginated Result
 */
export declare class ClinicalNoteTemplatesList200ApplicationJSON extends SpeakeasyBase {
    /**
     * result data
     */
    data?: shared.SoapNoteCustomReport[];
    /**
     * Next Paginated page
     */
    next?: string;
    /**
     * Previous paginated page
     */
    previous?: string;
}
export declare class ClinicalNoteTemplatesListResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * OK
     */
    clinicalNoteTemplatesList200ApplicationJSONObject?: ClinicalNoteTemplatesList200ApplicationJSON;
}
