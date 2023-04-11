import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class DocumentsCreateSecurity extends SpeakeasyBase {
    drchronoOauth2: string;
}
export declare class DocumentsCreateRequest extends SpeakeasyBase {
    doctor?: number;
    patient?: number;
    since?: string;
}
export declare class DocumentsCreateResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Created
     */
    scannedClinicalDocument?: shared.ScannedClinicalDocument;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
