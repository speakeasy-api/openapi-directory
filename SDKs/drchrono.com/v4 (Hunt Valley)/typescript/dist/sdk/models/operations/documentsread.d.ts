import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class DocumentsReadSecurity extends SpeakeasyBase {
    drchronoOauth2: string;
}
export declare class DocumentsReadRequest extends SpeakeasyBase {
    doctor?: number;
    id: string;
    patient?: number;
    since?: string;
}
export declare class DocumentsReadResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * OK
     */
    scannedClinicalDocument?: shared.ScannedClinicalDocument;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
