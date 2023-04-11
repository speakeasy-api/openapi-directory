import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class LabDocumentsCreateSecurity extends SpeakeasyBase {
    drchronoOauth2: string;
}
export declare class LabDocumentsCreateRequest extends SpeakeasyBase {
    doctor?: number;
    since?: string;
}
export declare class LabDocumentsCreateResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Created
     */
    labOrderDocument?: shared.LabOrderDocument;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
