import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class LabDocumentsReadSecurity extends SpeakeasyBase {
    drchronoOauth2: string;
}
export declare class LabDocumentsReadRequest extends SpeakeasyBase {
    doctor?: number;
    id: string;
    since?: string;
}
export declare class LabDocumentsReadResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * OK
     */
    labOrderDocument?: shared.LabOrderDocument;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
