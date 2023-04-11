import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class ClinicalNotesReadSecurity extends SpeakeasyBase {
    drchronoOauth2: string;
}
export declare class ClinicalNotesReadRequest extends SpeakeasyBase {
    date?: string;
    dateRange?: string;
    doctor?: number;
    id: string;
    office?: number;
    patient?: number;
    since?: string;
}
export declare class ClinicalNotesReadResponse extends SpeakeasyBase {
    /**
     * OK
     */
    clinicalNote?: shared.ClinicalNote;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
